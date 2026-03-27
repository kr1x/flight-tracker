import { getFilteredFlights } from '../store.js';
import { calculateAirportAnalysis, calculateAircraftAnalysis } from '../utils/analysis.js';

const AIRPORT_ITEMS_PER_PAGE = 20;
let airportCurrentPage = 1;
let airportData = [];

// Initialize analysis section (collapsible toggles)
export function initAnalysis() {
  document.querySelectorAll('.collapsible-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;

      const isCollapsed = target.classList.toggle('collapsed');
      btn.classList.toggle('collapsed', isCollapsed);
    });
  });
}

// Update analysis tables
export function updateAnalysis() {
  const flights = getFilteredFlights();

  airportData = calculateAirportAnalysis(flights);
  airportCurrentPage = 1;
  renderAirportPage();

  renderAircraftAnalysis(flights);
}

function renderAirportPage() {
  const container = document.getElementById('airport-analysis-body');
  if (!container) return;

  if (airportData.length === 0) {
    container.innerHTML = '<tr><td colspan="5">Keine Daten</td></tr>';
    renderAirportPagination(0);
    return;
  }

  const totalPages = Math.ceil(airportData.length / AIRPORT_ITEMS_PER_PAGE) || 1;

  if (airportCurrentPage > totalPages) {
    airportCurrentPage = totalPages;
  }

  const start = (airportCurrentPage - 1) * AIRPORT_ITEMS_PER_PAGE;
  const page = airportData.slice(start, start + AIRPORT_ITEMS_PER_PAGE);

  container.innerHTML = page.map(a => `
    <tr>
      <td><strong>${a.code}</strong></td>
      <td>${a.name}</td>
      <td>${a.landings}</td>
      <td>${a.arrivals}</td>
      <td>${a.departures}</td>
    </tr>
  `).join('');

  renderAirportPagination(totalPages);
}

function renderAirportPagination(totalPages) {
  const pagination = document.getElementById('airport-analysis-pagination');
  if (!pagination) return;

  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';
  html += `<button ${airportCurrentPage === 1 ? 'disabled' : ''} data-page="prev">&laquo;</button>`;

  const maxVisible = 5;
  let startPage = Math.max(1, airportCurrentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  if (startPage > 1) {
    html += `<button data-page="1">1</button>`;
    if (startPage > 2) {
      html += `<span style="padding: 0 0.5rem;">...</span>`;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button data-page="${i}" ${i === airportCurrentPage ? 'class="active"' : ''}>${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      html += `<span style="padding: 0 0.5rem;">...</span>`;
    }
    html += `<button data-page="${totalPages}">${totalPages}</button>`;
  }

  html += `<button ${airportCurrentPage === totalPages ? 'disabled' : ''} data-page="next">&raquo;</button>`;

  pagination.innerHTML = html;

  pagination.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page === 'prev') {
        airportCurrentPage = Math.max(1, airportCurrentPage - 1);
      } else if (page === 'next') {
        airportCurrentPage = Math.min(totalPages, airportCurrentPage + 1);
      } else {
        airportCurrentPage = parseInt(page);
      }
      renderAirportPage();
    });
  });
}

function renderAircraftAnalysis(flights) {
  const container = document.getElementById('aircraft-analysis-body');
  if (!container) return;

  if (flights.length === 0) {
    container.innerHTML = '<tr><td colspan="6">Keine Daten</td></tr>';
    return;
  }

  const data = calculateAircraftAnalysis(flights);

  container.innerHTML = data.map(a => `
    <tr>
      <td><strong>${a.type}</strong></td>
      <td>${a.flights}</td>
      <td>${a.landings}</td>
      <td>${a.totalTime}</td>
      <td>${a.picTime}</td>
      <td>${a.nightTime}</td>
    </tr>
  `).join('');
}
