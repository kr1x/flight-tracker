import './style.css';
import { loadState, addFlights, getFlights, clearFlights, subscribe } from './store.js';
import { parseCSV, generateCSV, downloadCSV } from './utils/csv-parser.js';
import { initMapToggle, updateCurrentMap } from './components/map-toggle.js';
import { updateStats } from './components/stats.js';
import { initCharts, updateCharts } from './components/charts.js';
import { initTable, renderTable } from './components/table.js';
import { initModals, openImportModal } from './components/modals.js';

// DOM Elements
let landingPage;
let appHeader;
let appMain;

// Initialize the application
function init() {
  // Get DOM elements
  landingPage = document.getElementById('landing-page');
  appHeader = document.getElementById('app-header');
  appMain = document.getElementById('app-main');

  // Load saved data from LocalStorage
  loadState();

  // Check if we have data and show appropriate view
  const flights = getFlights();
  if (flights.length > 0) {
    showDashboard();
  } else {
    showLanding();
  }

  // Setup CSV import/export
  setupCSVHandlers();

  // Setup logout
  setupLogout();

  // Subscribe to state changes
  subscribe(handleDataChange);

  console.log('Flight Tracker initialized');
}

// Show landing page
function showLanding() {
  landingPage.style.display = 'flex';
  appHeader.style.display = 'none';
  appMain.style.display = 'none';
}

// Show dashboard
function showDashboard() {
  landingPage.style.display = 'none';
  appHeader.style.display = 'block';
  appMain.style.display = 'flex';

  // Initialize components (only once)
  if (!window.componentsInitialized) {
    initMapToggle();
    initCharts();
    initTable();
    initModals(handleDataChange);
    window.componentsInitialized = true;
  }

  // Update all views
  handleDataChange();
}

// Handle data changes - update all views
function handleDataChange() {
  updateCurrentMap();
  updateStats();
  updateCharts();
  renderTable();
}

// Setup CSV import and export handlers
function setupCSVHandlers() {
  // CSV Import
  const csvImport = document.getElementById('csv-import');
  if (csvImport) {
    csvImport.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        const content = await readFile(file);
        const flights = parseCSV(content);

        if (flights.length === 0) {
          alert('Keine gültigen Flugdaten in der CSV-Datei gefunden.');
          return;
        }

        // Check if we have existing data
        const existingFlights = getFlights();

        if (existingFlights.length > 0) {
          // Show import choice modal
          openImportModal({
            callback: (replace) => {
              addFlights(flights, replace);
              handleDataChange();
            }
          });
        } else {
          // No existing data, just add and show dashboard
          addFlights(flights, true);
          showDashboard();
        }
      } catch (error) {
        console.error('Error importing CSV:', error);
        alert('Fehler beim Importieren der CSV-Datei.');
      }

      // Reset input
      e.target.value = '';
    });
  }

  // CSV Export
  const csvExport = document.getElementById('csv-export');
  if (csvExport) {
    csvExport.addEventListener('click', () => {
      const flights = getFlights();

      if (flights.length === 0) {
        alert('Keine Flüge zum Exportieren vorhanden.');
        return;
      }

      const csvContent = generateCSV(flights);
      const filename = `flights_${new Date().toISOString().split('T')[0]}.csv`;
      downloadCSV(csvContent, filename);
    });
  }
}

// Setup logout handler
function setupLogout() {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Möchtest du dich wirklich ausloggen? Alle lokalen Daten werden gelöscht.')) {
        clearFlights();
        showLanding();
      }
    });
  }
}

// Read file content as text
function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
