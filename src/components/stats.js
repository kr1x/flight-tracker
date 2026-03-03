import { calculateStats } from '../utils/calculations.js';
import { getFilteredFlights } from '../store.js';
import { getAirportName } from '../data/airports.js';

// Update all statistics displays
export function updateStats() {
  const flights = getFilteredFlights();
  const stats = calculateStats(flights);

  // Main stat cards
  updateElement('stat-total-flights', stats.totalFlights.toLocaleString('de-DE'));
  updateElement('stat-total-time', stats.totalTime);
  updateElement('stat-total-distance', `${stats.totalDistance.toLocaleString('de-DE')} km`);
  updateElement('stat-distance-miles', `${stats.totalDistanceMiles.toLocaleString('de-DE')} mi`);
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
      { label: 'PIC-Zeit', value: stats.totalPicTime },
      { label: 'SIC-Zeit', value: stats.totalSicTime },
      { label: 'Nachtflugzeit', value: stats.totalNightTime },
      { label: 'Starts Tag', value: stats.totalTakeoffDay.toLocaleString('de-DE') },
      { label: 'Starts Nacht', value: stats.totalTakeoffNight.toLocaleString('de-DE') },
      { label: 'Landungen Tag', value: stats.totalLandingDay.toLocaleString('de-DE') },
      { label: 'Landungen Nacht', value: stats.totalLandingNight.toLocaleString('de-DE') },
      { label: 'Landungen Gesamt', value: stats.totalLandings.toLocaleString('de-DE') }
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
