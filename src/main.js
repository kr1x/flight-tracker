import './style.css';
import { loadState, addFlights, getFlights, getFilteredFlights, clearFlights, subscribe, setAircraftFilter, setDepartureFilter, setArrivalFilter, getAvailableFilterOptions } from './store.js';
import { getAirportName } from './data/airports.js';
import { parseFile, generateCSV, downloadCSV } from './utils/csv-parser.js';
import { initMapToggle, updateCurrentMap } from './components/map-toggle.js';
import { updateStats } from './components/stats.js';
import { initCharts, updateCharts } from './components/charts.js';
import { initTable, renderTable } from './components/table.js';
import { initModals, openImportModal } from './components/modals.js';
import { initAnalysis, updateAnalysis } from './components/analysis.js';

// DOM Elements
let landingPage;
let appHeader;
let appMain;

// Check if there's data in localStorage
function hasStoredData() {
  try {
    const saved = localStorage.getItem('flight-tracker-data');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.flights && parsed.flights.length > 0;
    }
  } catch (e) {
    console.error('Error checking localStorage:', e);
  }
  return false;
}

// Initialize the application
function init() {
  landingPage = document.getElementById('landing-page');
  appHeader = document.getElementById('app-header');
  appMain = document.getElementById('app-main');

  loadState();

  const flights = getFlights();
  if (flights.length > 0 || hasStoredData()) {
    showDashboard();
  } else {
    showLanding();
  }

  setupCSVHandlers();
  setupLogout();

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

  if (!window.componentsInitialized) {
    initMapToggle();
    initCharts();
    initTable();
    initModals(handleDataChange);
    initAnalysis();
    initGlobalFilter();
    window.componentsInitialized = true;
  }

  handleDataChange();
}

// Handle data changes - update all views
function handleDataChange() {
  updateCurrentMap();
  updateStats();
  updateCharts();
  renderTable();
  updateAnalysis();
  updateFilterOptions();
}

// Initialize global filter dropdowns
function initGlobalFilter() {
  const aircraftSelect = document.getElementById('aircraft-filter');
  const departureSelect = document.getElementById('departure-filter');
  const arrivalSelect = document.getElementById('arrival-filter');

  if (aircraftSelect) {
    aircraftSelect.addEventListener('change', (e) => setAircraftFilter(e.target.value));
  }
  if (departureSelect) {
    departureSelect.addEventListener('change', (e) => setDepartureFilter(e.target.value));
  }
  if (arrivalSelect) {
    arrivalSelect.addEventListener('change', (e) => setArrivalFilter(e.target.value));
  }
}

// Rebuild a filter select's options, preserving current selection
function rebuildFilterSelect(selectEl, defaultLabel, codes, formatLabel) {
  if (!selectEl) return;

  const currentValue = selectEl.value;
  selectEl.innerHTML = `<option value="">${defaultLabel}</option>`;

  codes.forEach(code => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = formatLabel(code);
    selectEl.appendChild(option);
  });

  if (codes.includes(currentValue)) {
    selectEl.value = currentValue;
  }
}

// Update all filter dropdown options (interdependent)
function updateFilterOptions() {
  const airportLabel = (code) => `${code} - ${getAirportName(code)}`;
  const { departures, arrivals, aircraftTypes } = getAvailableFilterOptions();

  rebuildFilterSelect(
    document.getElementById('departure-filter'),
    'From',
    departures,
    airportLabel
  );

  rebuildFilterSelect(
    document.getElementById('arrival-filter'),
    'To',
    arrivals,
    airportLabel
  );

  rebuildFilterSelect(
    document.getElementById('aircraft-filter'),
    'Type',
    aircraftTypes,
    (type) => type
  );
}

// Show/hide upload spinner
function setUploadLoading(loading) {
  const uploadBtn = document.getElementById('upload-btn');
  const spinner = document.getElementById('upload-spinner');

  if (uploadBtn && spinner) {
    if (loading) {
      uploadBtn.classList.add('loading');
      spinner.classList.add('active');
    } else {
      uploadBtn.classList.remove('loading');
      spinner.classList.remove('active');
    }
  }
}

// Setup CSV import and export handlers
function setupCSVHandlers() {
  const csvImport = document.getElementById('csv-import');
  if (csvImport) {
    csvImport.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      setUploadLoading(true);

      try {
        const flights = await parseFile(file);

        if (flights.length === 0) {
          setUploadLoading(false);
          alert('Keine gültigen Flugdaten in der CSV-Datei gefunden.');
          return;
        }

        const existingFlights = getFlights();

        if (existingFlights.length > 0) {
          setUploadLoading(false);
          openImportModal({
            callback: (replace) => {
              addFlights(flights, replace);
              handleDataChange();
            }
          });
        } else {
          addFlights(flights, true);
          setUploadLoading(false);
          showDashboard();
        }
      } catch (error) {
        console.error('Error importing CSV:', error);
        setUploadLoading(false);
        alert('Fehler beim Importieren der CSV-Datei.');
      }

      e.target.value = '';
    });
  }

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

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
