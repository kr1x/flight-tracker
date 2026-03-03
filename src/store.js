// LocalStorage-based state management

const STORAGE_KEY = 'flight-tracker-data';

// Event system for state changes
const listeners = new Set();

// Current state
let state = {
  flights: [],
  loaded: false,
  aircraftFilter: '',
  departureFilter: '',
  arrivalFilter: ''
};

// Sort flights by date (newest first), then by departureTime as secondary sort
function sortByDateAndTime(flights) {
  flights.sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    // Same date: sort by departureTime descending
    if (a.departureTime > b.departureTime) return -1;
    if (a.departureTime < b.departureTime) return 1;
    return 0;
  });
}

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

// Get current flights (unfiltered)
export function getFlights() {
  return state.flights;
}

// Get filtered flights based on all active filters
export function getFilteredFlights() {
  const { aircraftFilter, departureFilter, arrivalFilter } = state;
  const hasFilter = aircraftFilter || departureFilter || arrivalFilter;
  if (!hasFilter) return state.flights;

  return state.flights.filter(f => {
    if (aircraftFilter && f.aircraftIcao !== aircraftFilter) return false;
    if (departureFilter && f.departure !== departureFilter) return false;
    if (arrivalFilter && f.arrival !== arrivalFilter) return false;
    return true;
  });
}

// Set aircraft type filter
export function setAircraftFilter(icao) {
  state.aircraftFilter = icao || '';
  notifyListeners();
}

// Get current aircraft filter
export function getAircraftFilter() {
  return state.aircraftFilter;
}

// Set departure airport filter
export function setDepartureFilter(code) {
  state.departureFilter = code || '';
  notifyListeners();
}

// Set arrival airport filter
export function setArrivalFilter(code) {
  state.arrivalFilter = code || '';
  notifyListeners();
}

// Get available options for each filter, constrained by the other two active filters.
// Each dropdown only shows values that would produce results.
export function getAvailableFilterOptions() {
  const { aircraftFilter, departureFilter, arrivalFilter } = state;

  const departures = new Set();
  const arrivals = new Set();
  const aircraftTypes = new Set();

  state.flights.forEach(f => {
    const matchAircraft = !aircraftFilter || f.aircraftIcao === aircraftFilter;
    const matchDeparture = !departureFilter || f.departure === departureFilter;
    const matchArrival = !arrivalFilter || f.arrival === arrivalFilter;

    // Departure options: flights matching arrival + aircraft filters
    if (matchArrival && matchAircraft && f.departure) {
      departures.add(f.departure);
    }
    // Arrival options: flights matching departure + aircraft filters
    if (matchDeparture && matchAircraft && f.arrival) {
      arrivals.add(f.arrival);
    }
    // Aircraft options: flights matching departure + arrival filters
    if (matchDeparture && matchArrival && f.aircraftIcao) {
      aircraftTypes.add(f.aircraftIcao);
    }
  });

  return {
    departures: [...departures].sort(),
    arrivals: [...arrivals].sort(),
    aircraftTypes: [...aircraftTypes].sort()
  };
}

// Add flights (optionally replace all)
export function addFlights(newFlights, replace = false) {
  if (replace) {
    state.flights = newFlights;
  } else {
    state.flights = [...state.flights, ...newFlights];
  }

  sortByDateAndTime(state.flights);

  saveState();
  notifyListeners();
}

// Add a single flight
export function addFlight(flight) {
  if (!flight.id) {
    flight.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  flight.departure = flight.departure.toUpperCase();
  flight.arrival = flight.arrival.toUpperCase();

  state.flights.push(flight);

  sortByDateAndTime(state.flights);

  saveState();
  notifyListeners();
}

// Update a flight
export function updateFlight(id, updates) {
  const index = state.flights.findIndex(f => f.id === id);
  if (index === -1) return false;

  if (updates.departure) updates.departure = updates.departure.toUpperCase();
  if (updates.arrival) updates.arrival = updates.arrival.toUpperCase();

  state.flights[index] = { ...state.flights[index], ...updates };

  sortByDateAndTime(state.flights);

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
