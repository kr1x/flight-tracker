import Globe from 'globe.gl';
import { getCoordinates, getAirport } from '../data/airports.js';
import { getFrequencyColor, getYearColor, getYear, calculateBounds } from '../utils/calculations.js';

let globe = null;

// Initialize the 3D globe
export function initMap3D(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  if (globe) {
    // Clean up existing globe
    container.innerHTML = '';
  }

  globe = Globe()
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .showAtmosphere(true)
    .atmosphereColor('#0ea5e9')
    .atmosphereAltitude(0.15)
    .width(container.clientWidth)
    .height(container.clientHeight);

  globe(container);

  // Handle resize
  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      globe.width(entry.contentRect.width);
      globe.height(entry.contentRect.height);
    }
  });
  resizeObserver.observe(container);

  return globe;
}

// Update globe with flight data
export function updateMap3D(flights, options = {}) {
  if (!globe) return;

  const {
    showRoutes = true,
    colorMode = 'frequency'
  } = options;

  if (!flights || flights.length === 0) {
    globe.pointsData([]);
    globe.arcsData([]);
    return;
  }

  // Calculate airport visit counts
  const airportCounts = {};
  flights.forEach(f => {
    airportCounts[f.departure] = (airportCounts[f.departure] || 0) + 1;
    airportCounts[f.arrival] = (airportCounts[f.arrival] || 0) + 1;
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

  // Create points data for airports
  const pointsData = [];
  const addedAirports = new Set();

  Object.entries(airportCounts).forEach(([code, count]) => {
    if (addedAirports.has(code)) return;
    addedAirports.add(code);

    const coords = getCoordinates(code);
    if (!coords) return;

    const airport = getAirport(code);

    pointsData.push({
      lat: coords.lat,
      lng: coords.lon,
      code: code,
      name: airport?.name || 'Unknown Airport',
      city: airport?.city || '',
      country: airport?.country || '',
      count: count,
      size: 0.1 + (count / maxCount) * 0.4 // Scale 0.1-0.5
    });
  });

  // Configure points
  globe
    .pointsData(pointsData)
    .pointLat('lat')
    .pointLng('lng')
    .pointColor(() => '#0ea5e9')
    .pointAltitude(d => d.size * 0.1)
    .pointRadius(d => d.size)
    .pointLabel(d => `
      <div style="
        background: white;
        color: #1e293b;
        padding: 8px 12px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        font-size: 13px;
        line-height: 1.4;
      ">
        <strong>${d.code}</strong><br>
        ${d.name}<br>
        ${d.city}, ${d.country}<br>
        <span style="color: #ea580c; font-weight: 600;">${d.count} Besuche</span>
      </div>
    `);

  // Create arcs data for routes
  if (showRoutes) {
    const arcsData = [];
    const addedRoutes = new Set();

    flights.forEach(f => {
      const routeKey = [f.departure, f.arrival].sort().join('-');

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
        const routeFlights = flights.filter(fl =>
          (fl.departure === f.departure && fl.arrival === f.arrival) ||
          (fl.departure === f.arrival && fl.arrival === f.departure)
        );
        const latestYear = Math.max(...routeFlights.map(fl => getYear(fl.date)));
        color = getYearColor(latestYear, minYear, maxYear);
      } else {
        color = getFrequencyColor(frequency, maxRouteFreq);
      }

      arcsData.push({
        startLat: depCoords.lat,
        startLng: depCoords.lon,
        endLat: arrCoords.lat,
        endLng: arrCoords.lon,
        color: color,
        frequency: frequency,
        departure: f.departure,
        arrival: f.arrival,
        stroke: 0.15 + (frequency / maxRouteFreq) * 0.35 // Thin lines: 0.15 to 0.5
      });
    });

    globe
      .arcsData(arcsData)
      .arcColor('color')
      .arcStroke('stroke')
      .arcDashLength(0.5)
      .arcDashGap(0.2)
      .arcDashAnimateTime(2000)
      .arcLabel(d => `
        <div style="
          background: white;
          color: #1e293b;
          padding: 8px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          font-size: 13px;
          line-height: 1.4;
        ">
          <strong>${d.departure} - ${d.arrival}</strong><br>
          <span style="color: #ea580c; font-weight: 600;">${d.frequency}x geflogen</span>
        </div>
      `);
  } else {
    globe.arcsData([]);
  }

  // Auto-rotate
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.5;

  // Center on data
  const bounds = calculateBounds(flights);
  if (bounds) {
    const centerLat = (bounds.minLat + bounds.maxLat) / 2;
    const centerLon = (bounds.minLon + bounds.maxLon) / 2;

    // Point of view
    globe.pointOfView({
      lat: centerLat,
      lng: centerLon,
      altitude: 2.5
    }, 1000);
  }
}

// Toggle routes visibility
export function toggleRoutes3D(show) {
  // Re-render with or without routes
  // This is handled by updateMap3D options
}

// Toggle auto-rotation
export function setAutoRotate(enabled) {
  if (globe && globe.controls()) {
    globe.controls().autoRotate = enabled;
  }
}

// Get globe instance
export function getMap3D() {
  return globe;
}

// Destroy globe
export function destroyMap3D() {
  if (globe) {
    globe._destructor && globe._destructor();
    globe = null;
  }
}
