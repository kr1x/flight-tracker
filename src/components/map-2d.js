import L from 'leaflet';
import 'leaflet.geodesic';
import { getCoordinates, getAirport } from '../data/airports.js';
import { getFrequencyColor, getYearColor, getYear, calculateBounds } from '../utils/calculations.js';

let map = null;
let markersLayer = null;
let routesLayer = null;

const defaultCenter = [33.45, -112.07]; // Phoenix, AZ
const defaultZoom = 8;

// Initialize the 2D map
export function initMap2D(containerId) {
  if (map) {
    map.remove();
  }

  map = L.map(containerId, {
    center: defaultCenter,
    zoom: defaultZoom,
    maxBounds: [[-90, -220], [90, 220]],
    maxBoundsViscosity: 1.0
  });

  // OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    noWrap: false
  }).addTo(map);

  // Create layer groups
  markersLayer = L.layerGroup().addTo(map);
  routesLayer = L.layerGroup().addTo(map);

  return map;
}

// Update map with flight data
export function updateMap2D(flights, options = {}) {
  if (!map) return;

  const {
    showRoutes = true,
    colorMode = 'frequency' // 'frequency' or 'year'
  } = options;

  // Clear existing layers
  markersLayer.clearLayers();
  routesLayer.clearLayers();

  if (!flights || flights.length === 0) {
    map.setView(defaultCenter, defaultZoom);
    return;
  }

  // Calculate airport visit counts
  const airportCounts = {};
  const departureCounts = {};
  flights.forEach(f => {
    airportCounts[f.departure] = (airportCounts[f.departure] || 0) + 1;
    airportCounts[f.arrival] = (airportCounts[f.arrival] || 0) + 1;
    departureCounts[f.departure] = (departureCounts[f.departure] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(airportCounts));

  // Calculate year range for coloring
  const years = flights.map(f => getYear(f.date));
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  // Calculate route frequencies
  const routeFrequencies = {};
  flights.forEach(f => {
    const routeKey = [f.departure, f.arrival].sort().join('-');
    routeFrequencies[routeKey] = (routeFrequencies[routeKey] || 0) + 1;
  });
  const maxRouteFreq = Math.max(...Object.values(routeFrequencies));

  // Add airport markers
  const addedMarkers = new Set();

  Object.entries(airportCounts).forEach(([code, count]) => {
    if (addedMarkers.has(code)) return;
    addedMarkers.add(code);

    const coords = getCoordinates(code);
    if (!coords) return;

    const airport = getAirport(code);

    // Calculate marker size based on visit count (8-24px)
    const size = Math.max(8, Math.min(24, 8 + (count / maxCount) * 16));

    const icon = L.divIcon({
      className: 'airport-marker',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      html: `<div style="
        width: ${size}px;
        height: ${size}px;
        background: var(--primary, #0ea5e9);
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      "></div>`
    });

    const marker = L.marker([coords.lat, coords.lon], { icon });

    const popupContent = `
      <div style="min-width: 150px;">
        <strong>${code}</strong><br>
        ${airport ? airport.name : 'Unbekannter Flughafen'}<br>
        ${airport ? `${airport.city}, ${airport.country}` : ''}<br>
        <span style="color: var(--primary, #0ea5e9); font-weight: 600;">${count} Besuche</span>
      </div>
    `;

    marker.bindPopup(popupContent);
    marker.addTo(markersLayer);
  });

  // Add routes (geodesic lines)
  if (showRoutes) {
    const addedRoutes = new Set();

    flights.forEach(f => {
      const routeKey = [f.departure, f.arrival].sort().join('-');

      // Skip if same airport or already added
      if (f.departure === f.arrival) return;
      if (addedRoutes.has(routeKey)) return;
      addedRoutes.add(routeKey);

      const depCoords = getCoordinates(f.departure);
      const arrCoords = getCoordinates(f.arrival);

      if (!depCoords || !arrCoords) return;

      const frequency = routeFrequencies[routeKey];

      // Determine color based on mode
      let color;
      if (colorMode === 'year') {
        // Find the most recent flight on this route
        const routeFlights = flights.filter(fl =>
          (fl.departure === f.departure && fl.arrival === f.arrival) ||
          (fl.departure === f.arrival && fl.arrival === f.departure)
        );
        const latestYear = Math.max(...routeFlights.map(fl => getYear(fl.date)));
        color = getYearColor(latestYear, minYear, maxYear);
      } else {
        color = getFrequencyColor(frequency, maxRouteFreq);
      }

      // Line weight based on frequency (2-6px)
      const weight = Math.max(2, Math.min(6, 2 + (frequency / maxRouteFreq) * 4));

      const geodesicLine = new L.Geodesic(
        [[depCoords.lat, depCoords.lon], [arrCoords.lat, arrCoords.lon]],
        {
          color: color,
          weight: weight,
          opacity: 0.7,
          steps: 50
        }
      );

      const depAirport = getAirport(f.departure);
      const arrAirport = getAirport(f.arrival);

      geodesicLine.bindPopup(`
        <div>
          <strong>${f.departure} - ${f.arrival}</strong><br>
          ${depAirport?.city || f.departure} → ${arrAirport?.city || f.arrival}<br>
          <span style="color: var(--primary, #0ea5e9); font-weight: 600;">${frequency}x geflogen</span>
        </div>
      `);

      geodesicLine.addTo(routesLayer);
    });
  }

  // Center on the airport with most departures
  const topDeparture = Object.entries(departureCounts)
    .sort((a, b) => b[1] - a[1])[0];

  if (topDeparture) {
    const coords = getCoordinates(topDeparture[0]);
    if (coords) {
      map.setView([coords.lat, coords.lon], 5);
      return;
    }
  }

  // Fallback: fit bounds to all data
  const bounds = calculateBounds(flights);
  if (bounds) {
    map.fitBounds([
      [bounds.minLat, bounds.minLon],
      [bounds.maxLat, bounds.maxLon]
    ], { padding: [20, 20] });
  }
}

// Toggle routes visibility
export function toggleRoutes2D(show) {
  if (!map || !routesLayer) return;

  if (show) {
    map.addLayer(routesLayer);
  } else {
    map.removeLayer(routesLayer);
  }
}

// Get map instance
export function getMap2D() {
  return map;
}

// Destroy map
export function destroyMap2D() {
  if (map) {
    map.remove();
    map = null;
    markersLayer = null;
    routesLayer = null;
  }
}
