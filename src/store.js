// LocalStorage-based state management

const STORAGE_KEY = 'flight-tracker-data';

// Event system for state changes
const listeners = new Set();

// Current state
let state = {
  flights: [],
  loaded: false
};

// Load state from LocalStorage
export function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.flights = parsed.flights || [];
    }
    state.loaded = true;
  } catch (error) {
    console.error('Error loading state from LocalStorage:', error);
    state.flights = [];
    state.loaded = true;
  }
  notifyListeners();
  return state;
}

// Save state to LocalStorage
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      flights: state.flights
    }));
  } catch (error) {
    console.error('Error saving state to LocalStorage:', error);
  }
}

// Get current flights
export function getFlights() {
  return state.flights;
}

// Add flights (optionally replace all)
export function addFlights(newFlights, replace = false) {
  if (replace) {
    state.flights = newFlights;
  } else {
    state.flights = [...state.flights, ...newFlights];
  }

  // Sort by date (newest first)
  state.flights.sort((a, b) => new Date(b.date) - new Date(a.date));

  saveState();
  notifyListeners();
}

// Add a single flight
export function addFlight(flight) {
  // Generate ID if not present
  if (!flight.id) {
    flight.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Ensure uppercase codes
  flight.departure = flight.departure.toUpperCase();
  flight.arrival = flight.arrival.toUpperCase();

  state.flights.push(flight);

  // Sort by date (newest first)
  state.flights.sort((a, b) => new Date(b.date) - new Date(a.date));

  saveState();
  notifyListeners();
}

// Update a flight
export function updateFlight(id, updates) {
  const index = state.flights.findIndex(f => f.id === id);
  if (index === -1) return false;

  // Ensure uppercase codes
  if (updates.departure) updates.departure = updates.departure.toUpperCase();
  if (updates.arrival) updates.arrival = updates.arrival.toUpperCase();

  state.flights[index] = { ...state.flights[index], ...updates };

  // Re-sort by date
  state.flights.sort((a, b) => new Date(b.date) - new Date(a.date));

  saveState();
  notifyListeners();
  return true;
}

// Delete a flight
export function deleteFlight(id) {
  const index = state.flights.findIndex(f => f.id === id);
  if (index === -1) return false;

  state.flights.splice(index, 1);

  saveState();
  notifyListeners();
  return true;
}

// Get a single flight by ID
export function getFlight(id) {
  return state.flights.find(f => f.id === id) || null;
}

// Clear all flights
export function clearFlights() {
  state.flights = [];
  saveState();
  notifyListeners();
}

// Subscribe to state changes
export function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

// Notify all listeners
function notifyListeners() {
  listeners.forEach(callback => callback(state));
}

// Export for debugging
export function getState() {
  return state;
}
