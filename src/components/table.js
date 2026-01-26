import { getFlights, deleteFlight } from '../store.js';
import { formatDate, getFlightDistance, parseTimeToMinutes } from '../utils/calculations.js';
import { openEditModal, openDeleteModal } from './modals.js';

const ITEMS_PER_PAGE = 20;
let currentPage = 1;
let sortBy = 'date';
let sortDirection = 'desc'; // 'asc' or 'desc'

// Column definitions for sorting
const columns = [
  { key: 'date', label: 'Datum', sortable: true },
  { key: 'departure', label: 'Von', sortable: true },
  { key: 'arrival', label: 'Nach', sortable: true },
  { key: 'departureTime', label: 'Abflug', sortable: true },
  { key: 'arrivalTime', label: 'Ankunft', sortable: true },
  { key: 'totalTime', label: 'Dauer', sortable: true },
  { key: 'distance', label: 'Distanz', sortable: true },
  { key: 'actions', label: 'Aktionen', sortable: false }
];

// Initialize the flight table
export function initTable() {
  renderTableHeader();
  renderTable();
}

// Render sortable table header
function renderTableHeader() {
  const thead = document.querySelector('.flight-table thead tr');
  if (!thead) return;

  thead.innerHTML = columns.map(col => {
    if (!col.sortable) {
      return `<th>${col.label}</th>`;
    }

    const isActive = sortBy === col.key;
    const arrow = isActive ? (sortDirection === 'asc' ? ' ↑' : ' ↓') : '';

    return `
      <th class="sortable ${isActive ? 'active' : ''}" data-sort="${col.key}">
        ${col.label}${arrow}
      </th>
    `;
  }).join('');

  // Add click listeners for sorting
  thead.querySelectorAll('.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (sortBy === key) {
        // Toggle direction
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        // New column, default to descending for date, ascending for others
        sortBy = key;
        sortDirection = key === 'date' ? 'desc' : 'asc';
      }
      currentPage = 1; // Reset to first page when sorting
      renderTableHeader();
      renderTable();
    });
  });
}

// Sort flights based on current sort settings
function sortFlights(flights) {
  return [...flights].sort((a, b) => {
    let valA, valB;

    switch (sortBy) {
      case 'date':
        valA = a.date;
        valB = b.date;
        break;
      case 'departure':
        valA = a.departure.toLowerCase();
        valB = b.departure.toLowerCase();
        break;
      case 'arrival':
        valA = a.arrival.toLowerCase();
        valB = b.arrival.toLowerCase();
        break;
      case 'departureTime':
        valA = a.departureTime;
        valB = b.departureTime;
        break;
      case 'arrivalTime':
        valA = a.arrivalTime;
        valB = b.arrivalTime;
        break;
      case 'totalTime':
        valA = parseTimeToMinutes(a.totalTime);
        valB = parseTimeToMinutes(b.totalTime);
        break;
      case 'distance':
        valA = getFlightDistance(a.departure, a.arrival) || 0;
        valB = getFlightDistance(b.departure, b.arrival) || 0;
        break;
      default:
        return 0;
    }

    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
}

// Render the flight table with pagination
export function renderTable() {
  const flights = getFlights();
  const sortedFlights = sortFlights(flights);
  const totalPages = Math.ceil(sortedFlights.length / ITEMS_PER_PAGE) || 1;

  // Ensure current page is valid
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // Get flights for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pageFlights = sortedFlights.slice(startIndex, endIndex);

  // Render table body
  const tbody = document.getElementById('flight-table-body');
  if (tbody) {
    if (pageFlights.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <p>Keine Flüge vorhanden. Importiere eine CSV-Datei oder füge einen neuen Flug hinzu.</p>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = pageFlights.map(flight => {
        const distance = getFlightDistance(flight.departure, flight.arrival);
        const distanceStr = distance !== null ? `${distance.toLocaleString('de-DE')} km` : '-';

        return `
          <tr data-id="${flight.id}">
            <td>${formatDate(flight.date)}</td>
            <td>${flight.departure}</td>
            <td>${flight.arrival}</td>
            <td>${flight.departureTime}</td>
            <td>${flight.arrivalTime}</td>
            <td>${flight.totalTime}</td>
            <td>${distanceStr}</td>
            <td class="actions">
              <button class="btn-icon edit-btn" title="Bearbeiten" data-id="${flight.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="btn-icon delete-btn" title="Löschen" data-id="${flight.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </td>
          </tr>
        `;
      }).join('');

      // Add event listeners to buttons
      tbody.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          openEditModal(btn.dataset.id);
        });
      });

      tbody.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          openDeleteModal(btn.dataset.id);
        });
      });
    }
  }

  // Render pagination
  renderPagination(totalPages);
}

// Render pagination controls
function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';

  // Previous button
  html += `<button ${currentPage === 1 ? 'disabled' : ''} data-page="prev">&laquo;</button>`;

  // Page numbers
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
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
    html += `<button data-page="${i}" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      html += `<span style="padding: 0 0.5rem;">...</span>`;
    }
    html += `<button data-page="${totalPages}">${totalPages}</button>`;
  }

  // Next button
  html += `<button ${currentPage === totalPages ? 'disabled' : ''} data-page="next">&raquo;</button>`;

  pagination.innerHTML = html;

  // Add event listeners
  pagination.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page === 'prev') {
        currentPage = Math.max(1, currentPage - 1);
      } else if (page === 'next') {
        currentPage = Math.min(totalPages, currentPage + 1);
      } else {
        currentPage = parseInt(page);
      }
      renderTable();
    });
  });
}

// Go to a specific page
export function goToPage(page) {
  currentPage = page;
  renderTable();
}

// Get current page
export function getCurrentPage() {
  return currentPage;
}
