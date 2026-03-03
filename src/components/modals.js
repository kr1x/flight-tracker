import { addFlight, updateFlight, deleteFlight, getFlight } from '../store.js';

let currentDeleteId = null;
let pendingImportData = null;
let onDataChange = null;

// Initialize modals
export function initModals(dataChangeCallback) {
  onDataChange = dataChangeCallback;

  const backdrop = document.getElementById('modal-backdrop');

  // Close on backdrop click
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeAllModals();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Close buttons
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Flight form submission
  const flightForm = document.getElementById('flight-form');
  if (flightForm) {
    flightForm.addEventListener('submit', handleFlightFormSubmit);
  }

  // Delete confirmation
  const confirmDeleteBtn = document.getElementById('confirm-delete');
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', handleConfirmDelete);
  }

  // Import options
  const importReplaceBtn = document.getElementById('import-replace');
  const importAddBtn = document.getElementById('import-add');

  if (importReplaceBtn) {
    importReplaceBtn.addEventListener('click', () => handleImportChoice(true));
  }

  if (importAddBtn) {
    importAddBtn.addEventListener('click', () => handleImportChoice(false));
  }

  // Add flight button
  const addFlightBtn = document.getElementById('add-flight-btn');
  if (addFlightBtn) {
    addFlightBtn.addEventListener('click', openAddModal);
  }

  // Auto-uppercase code inputs
  const upperInputs = [
    document.getElementById('flight-departure'),
    document.getElementById('flight-arrival'),
    document.getElementById('flight-aircraft'),
    document.getElementById('flight-registration')
  ];

  upperInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase();
      });
    }
  });
}

// Open modal for adding new flight
export function openAddModal() {
  const modal = document.getElementById('flight-modal');
  const title = document.getElementById('modal-title');
  const form = document.getElementById('flight-form');

  title.textContent = 'Neuer Flug';
  form.reset();
  document.getElementById('flight-id').value = '';

  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('flight-date').value = today;

  openModal(modal);
}

// Open modal for editing existing flight
export function openEditModal(id) {
  const flight = getFlight(id);
  if (!flight) return;

  const modal = document.getElementById('flight-modal');
  const title = document.getElementById('modal-title');

  title.textContent = 'Flug bearbeiten';

  document.getElementById('flight-id').value = flight.id;
  document.getElementById('flight-date').value = flight.date;
  document.getElementById('flight-aircraft').value = flight.aircraftIcao || '';
  document.getElementById('flight-registration').value = flight.registration || '';
  document.getElementById('flight-departure').value = flight.departure;
  document.getElementById('flight-arrival').value = flight.arrival;
  document.getElementById('flight-departure-time').value = flight.departureTime;
  document.getElementById('flight-arrival-time').value = flight.arrivalTime;
  document.getElementById('flight-duration').value = flight.totalTime;
  document.getElementById('flight-night-time').value = flight.nightTime || '00:00';
  document.getElementById('flight-pic-time').value = flight.picTime || '00:00';

  openModal(modal);
}

// Open delete confirmation modal
export function openDeleteModal(id) {
  currentDeleteId = id;
  const modal = document.getElementById('delete-modal');
  openModal(modal);
}

// Open import choice modal
export function openImportModal(importData) {
  pendingImportData = importData;
  const modal = document.getElementById('import-modal');
  openModal(modal);
}

// Handle flight form submission
function handleFlightFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('flight-id').value;
  const flightData = {
    date: document.getElementById('flight-date').value,
    aircraftIcao: (document.getElementById('flight-aircraft').value || '').toUpperCase().trim(),
    registration: (document.getElementById('flight-registration').value || '').toUpperCase().trim(),
    departure: document.getElementById('flight-departure').value.toUpperCase(),
    arrival: document.getElementById('flight-arrival').value.toUpperCase(),
    departureTime: document.getElementById('flight-departure-time').value,
    arrivalTime: document.getElementById('flight-arrival-time').value,
    totalTime: document.getElementById('flight-duration').value,
    nightTime: document.getElementById('flight-night-time').value || '00:00',
    picTime: document.getElementById('flight-pic-time').value || '00:00'
  };

  if (id) {
    // Update existing
    updateFlight(id, flightData);
  } else {
    // Add new
    addFlight(flightData);
  }

  closeAllModals();

  if (onDataChange) {
    onDataChange();
  }
}

// Handle delete confirmation
function handleConfirmDelete() {
  if (currentDeleteId) {
    deleteFlight(currentDeleteId);
    currentDeleteId = null;
    closeAllModals();

    if (onDataChange) {
      onDataChange();
    }
  }
}

// Handle import choice (replace or add)
function handleImportChoice(replace) {
  if (pendingImportData && pendingImportData.callback) {
    pendingImportData.callback(replace);
  }
  pendingImportData = null;
  closeAllModals();
}

// Open a specific modal
function openModal(modal) {
  const backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.add('active');
  modal.classList.add('active');

  // Focus first input
  const firstInput = modal.querySelector('input:not([type="hidden"])');
  if (firstInput) {
    setTimeout(() => firstInput.focus(), 100);
  }
}

// Close all modals
export function closeAllModals() {
  const backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.remove('active');

  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });

  currentDeleteId = null;
}
