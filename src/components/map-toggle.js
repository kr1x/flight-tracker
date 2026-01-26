import { initMap2D, updateMap2D, destroyMap2D, toggleRoutes2D } from './map-2d.js';
import { initMap3D, updateMap3D, destroyMap3D, setAutoRotate } from './map-3d.js';
import { getFlights } from '../store.js';
import { closeAllModals } from './modals.js';

let currentMode = '2d';
let currentOptions = {
  showRoutes: true,
  colorMode: 'frequency',
  autoRotate: true
};

let currentFilter = {
  departure: '',
  arrival: ''
};

// Initialize map toggle controls
export function initMapToggle() {
  // Mode toggle buttons
  const toggleButtons = document.querySelectorAll('[data-map]');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.map;
      if (mode !== currentMode) {
        switchMapMode(mode);
        updateToggleButtons();
        updateAutoRotateVisibility();
      }
    });
  });

  // Routes checkbox
  const routesCheckbox = document.getElementById('show-routes');
  if (routesCheckbox) {
    routesCheckbox.addEventListener('change', (e) => {
      currentOptions.showRoutes = e.target.checked;
      updateCurrentMap();
    });
  }

  // Auto-rotate checkbox
  const autoRotateCheckbox = document.getElementById('auto-rotate');
  if (autoRotateCheckbox) {
    autoRotateCheckbox.addEventListener('change', (e) => {
      currentOptions.autoRotate = e.target.checked;
      setAutoRotate(e.target.checked);
    });
  }

  // Color mode select
  const colorSelect = document.getElementById('color-mode');
  if (colorSelect) {
    colorSelect.addEventListener('change', (e) => {
      currentOptions.colorMode = e.target.value;
      updateCurrentMap();
    });
  }

  // Filter button
  const filterBtn = document.getElementById('filter-btn');
  if (filterBtn) {
    filterBtn.addEventListener('click', openFilterModal);
  }

  // Filter modal handlers
  initFilterModal();

  // Initialize 2D map by default
  initMap2D('map-2d');
  updateCurrentMap();
  updateAutoRotateVisibility();
}

// Initialize filter modal
function initFilterModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const filterModal = document.getElementById('filter-modal');
  const applyBtn = document.getElementById('filter-apply');
  const resetBtn = document.getElementById('filter-reset');
  const departureInput = document.getElementById('filter-departure');
  const arrivalInput = document.getElementById('filter-arrival');

  // Auto-uppercase inputs
  [departureInput, arrivalInput].forEach(input => {
    if (input) {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase();
      });
    }
  });

  // Apply filter
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      currentFilter.departure = departureInput?.value.trim() || '';
      currentFilter.arrival = arrivalInput?.value.trim() || '';
      updateFilterButton();
      updateCurrentMap();
      closeAllModals();
    });
  }

  // Reset filter
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentFilter.departure = '';
      currentFilter.arrival = '';
      if (departureInput) departureInput.value = '';
      if (arrivalInput) arrivalInput.value = '';
      updateFilterButton();
      updateCurrentMap();
      closeAllModals();
    });
  }
}

// Open filter modal
function openFilterModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const filterModal = document.getElementById('filter-modal');
  const departureInput = document.getElementById('filter-departure');
  const arrivalInput = document.getElementById('filter-arrival');

  // Set current filter values
  if (departureInput) departureInput.value = currentFilter.departure;
  if (arrivalInput) arrivalInput.value = currentFilter.arrival;

  backdrop.classList.add('active');
  filterModal.classList.add('active');

  // Focus first input
  if (departureInput) {
    setTimeout(() => departureInput.focus(), 100);
  }
}

// Update filter button state
function updateFilterButton() {
  const filterBtn = document.getElementById('filter-btn');
  const filterBtnText = document.getElementById('filter-btn-text');

  if (!filterBtn || !filterBtnText) return;

  const isFiltered = currentFilter.departure || currentFilter.arrival;

  if (isFiltered) {
    filterBtn.classList.add('active');
    filterBtnText.textContent = 'Gefiltert';
  } else {
    filterBtn.classList.remove('active');
    filterBtnText.textContent = 'Flüge filtern';
  }
}

// Filter flights based on current filter
function filterFlights(flights) {
  if (!currentFilter.departure && !currentFilter.arrival) {
    return flights;
  }

  return flights.filter(flight => {
    const matchDeparture = !currentFilter.departure ||
      flight.departure.toUpperCase() === currentFilter.departure.toUpperCase();
    const matchArrival = !currentFilter.arrival ||
      flight.arrival.toUpperCase() === currentFilter.arrival.toUpperCase();
    return matchDeparture && matchArrival;
  });
}

// Show/hide auto-rotate option based on current mode
function updateAutoRotateVisibility() {
  const autoRotateLabel = document.getElementById('auto-rotate-label');
  if (autoRotateLabel) {
    autoRotateLabel.style.display = currentMode === '3d' ? 'flex' : 'none';
  }
}

// Switch between 2D and 3D modes
function switchMapMode(mode) {
  const map2dEl = document.getElementById('map-2d');
  const map3dEl = document.getElementById('map-3d');

  if (mode === '3d') {
    // Switch to 3D
    map2dEl.style.display = 'none';
    map3dEl.style.display = 'block';

    destroyMap2D();
    initMap3D('map-3d');

    // Apply auto-rotate setting after a short delay (globe needs to initialize)
    setTimeout(() => setAutoRotate(currentOptions.autoRotate), 100);
  } else {
    // Switch to 2D
    map3dEl.style.display = 'none';
    map2dEl.style.display = 'block';

    destroyMap3D();
    initMap2D('map-2d');
  }

  currentMode = mode;
  updateCurrentMap();
}

// Update toggle button states
function updateToggleButtons() {
  const toggleButtons = document.querySelectorAll('[data-map]');
  toggleButtons.forEach(btn => {
    if (btn.dataset.map === currentMode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Update the current map with flights data
export function updateCurrentMap() {
  const allFlights = getFlights();
  const flights = filterFlights(allFlights);

  if (currentMode === '3d') {
    updateMap3D(flights, currentOptions);
    // Reapply auto-rotate setting after update
    setAutoRotate(currentOptions.autoRotate);
  } else {
    updateMap2D(flights, currentOptions);
  }
}

// Get current mode
export function getCurrentMapMode() {
  return currentMode;
}

// Get current options
export function getMapOptions() {
  return { ...currentOptions };
}

// Get current filter
export function getMapFilter() {
  return { ...currentFilter };
}
