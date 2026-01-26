import './style.css';
import { loadState, addFlights, getFlights, subscribe } from './store.js';
import { parseCSV, generateCSV, downloadCSV } from './utils/csv-parser.js';
import { initMapToggle, updateCurrentMap } from './components/map-toggle.js';
import { updateStats } from './components/stats.js';
import { initCharts, updateCharts } from './components/charts.js';
import { initTable, renderTable } from './components/table.js';
import { initModals, openImportModal } from './components/modals.js';

// Initialize the application
function init() {
  // Load saved data from LocalStorage
  loadState();

  // Initialize all components
  initMapToggle();
  initCharts();
  initTable();
  initModals(handleDataChange);

  // Setup CSV import/export
  setupCSVHandlers();

  // Subscribe to state changes
  subscribe(handleDataChange);

  // Initial update
  handleDataChange();

  console.log('Flight Tracker initialized');
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
          // No existing data, just add
          addFlights(flights, true);
          handleDataChange();
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
