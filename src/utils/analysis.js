import { getAirportName } from '../data/airports.js';
import { parseTimeToMinutes, formatMinutes } from './calculations.js';

// Calculate airport departure/arrival analysis
export function calculateAirportAnalysis(flights) {
  const airports = {};

  flights.forEach(f => {
    // Departure
    if (!airports[f.departure]) {
      airports[f.departure] = { code: f.departure, departures: 0, arrivals: 0, landings: 0 };
    }
    airports[f.departure].departures++;

    // Arrival
    if (!airports[f.arrival]) {
      airports[f.arrival] = { code: f.arrival, departures: 0, arrivals: 0, landings: 0 };
    }
    airports[f.arrival].arrivals++;
    airports[f.arrival].landings += (f.landingDay || 0) + (f.landingNight || 0);
  });

  return Object.values(airports)
    .map(a => ({
      ...a,
      name: getAirportName(a.code),
      total: a.departures + a.arrivals
    }))
    .sort((a, b) => b.total - a.total);
}

// Calculate aircraft type analysis
export function calculateAircraftAnalysis(flights) {
  const aircraft = {};

  flights.forEach(f => {
    const type = f.aircraftIcao || 'Unbekannt';
    if (!aircraft[type]) {
      aircraft[type] = {
        type,
        flights: 0,
        registrations: new Set(),
        totalMinutes: 0,
        nightMinutes: 0,
        picMinutes: 0,
        landings: 0
      };
    }

    aircraft[type].flights++;
    if (f.registration) {
      aircraft[type].registrations.add(f.registration);
    }
    aircraft[type].totalMinutes += parseTimeToMinutes(f.totalTime);
    aircraft[type].nightMinutes += parseTimeToMinutes(f.nightTime);
    aircraft[type].picMinutes += parseTimeToMinutes(f.picTime);
    aircraft[type].landings += (f.landingDay || 0) + (f.landingNight || 0);
  });

  return Object.values(aircraft)
    .map(a => ({
      type: a.type,
      flights: a.flights,
      registrations: [...a.registrations].sort(),
      totalTime: formatMinutes(a.totalMinutes),
      totalMinutes: a.totalMinutes,
      nightTime: formatMinutes(a.nightMinutes),
      picTime: formatMinutes(a.picMinutes),
      landings: a.landings
    }))
    .sort((a, b) => b.flights - a.flights);
}
