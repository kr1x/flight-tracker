import { initMap2D, updateMap2D, destroyMap2D, toggleRoutes2D } from './map-2d.js';
import { initMap3D, updateMap3D, destroyMap3D, setAutoRotate } from './map-3d.js';
import { getFlights } from '../store.js';

let currentMode = '2d';
let currentOptions = {
  showRoutes: true,
  colorMode: 'frequency',
  autoRotate: true
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

  // Initialize 2D map by default
  initMap2D('map-2d');
  updateCurrentMap();
  updateAutoRotateVisibility();
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
  const flights = getFlights();

  if (currentMode === '3d') {
    updateMap3D(flights, currentOptions);
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
