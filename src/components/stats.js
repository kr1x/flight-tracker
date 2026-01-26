import { calculateStats, formatDate } from '../utils/calculations.js';
import { getFlights } from '../store.js';
import { getAirportName } from '../data/airports.js';

// Update all statistics displays
export function updateStats() {
  const flights = getFlights();
  const stats = calculateStats(flights);

  // Main stat cards
  updateElement('stat-total-flights', stats.totalFlights.toLocaleString('de-DE'));
  updateElement('stat-total-time', stats.totalTime);
  updateElement('stat-total-distance', `${stats.totalDistance.toLocaleString('de-DE')} km`);
  updateElement('stat-airports', stats.uniqueAirports.toLocaleString('de-DE'));

  // Top airports list
  const topAirportsEl = document.getElementById('top-airports');
  if (topAirportsEl) {
    topAirportsEl.innerHTML = stats.topAirports.map(item => `
      <li>
        <span>${getAirportName(item.code)}</span>
        <span class="count">${item.count}</span>
      </li>
    `).join('') || '<li>Keine Daten</li>';
  }

  // Top routes list
  const topRoutesEl = document.getElementById('top-routes');
  if (topRoutesEl) {
    topRoutesEl.innerHTML = stats.topRoutes.map(item => `
      <li>
        <span>${item.route}</span>
        <span class="count">${item.count}</span>
      </li>
    `).join('') || '<li>Keine Daten</li>';
  }

  // Detail statistics
  const detailStatsEl = document.getElementById('detail-stats');
  if (detailStatsEl) {
    const detailItems = [
      { label: 'Durchschnittliche Dauer', value: stats.averageDuration },
      {
        label: 'Längster Flug',
        value: stats.longestFlight
          ? `${stats.longestFlight.route} (${stats.longestFlight.duration})`
          : '-'
      },
      {
        label: 'Kürzester Flug',
        value: stats.shortestFlight
          ? `${stats.shortestFlight.route} (${stats.shortestFlight.duration})`
          : '-'
      },
      { label: 'Erster Flug', value: stats.firstFlight ? formatDate(stats.firstFlight) : '-' },
      { label: 'Letzter Flug', value: stats.lastFlight ? formatDate(stats.lastFlight) : '-' },
      { label: 'Aktivster Tag', value: stats.mostActiveDay },
      { label: 'Aktivster Monat', value: stats.mostActiveMonth },
      { label: 'Aktivstes Jahr', value: stats.mostActiveYear },
      { label: 'Längste Serie', value: `${stats.longestStreak} Tage` },
      { label: 'Rundflüge', value: stats.roundTrips.toLocaleString('de-DE') },
      { label: 'Einweg-Flüge', value: stats.oneWay.toLocaleString('de-DE') },
      { label: 'Distanz (Meilen)', value: `${stats.totalDistanceMiles.toLocaleString('de-DE')} mi` }
    ];

    detailStatsEl.innerHTML = detailItems.map(item => `
      <div class="stat-item">
        <span class="stat-item-label">${item.label}</span>
        <span class="stat-item-value">${item.value}</span>
      </div>
    `).join('');
  }

  return stats;
}

// Helper to update element text content
function updateElement(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}
