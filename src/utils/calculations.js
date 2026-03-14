import { getCoordinates } from '../data/airports.js';

// Calculate great circle distance between two points (Haversine formula)
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

// Get distance between two airports
export function getFlightDistance(departureCode, arrivalCode) {
  const dep = getCoordinates(departureCode);
  const arr = getCoordinates(arrivalCode);

  if (!dep || !arr) return null;

  return Math.round(calculateDistance(dep.lat, dep.lon, arr.lat, arr.lon));
}

// Parse time string (HH:MM) to minutes
export function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;

  const parts = timeStr.split(':');
  if (parts.length !== 2) return 0;

  const hours = parseInt(parts[0], 10) || 0;
  const minutes = parseInt(parts[1], 10) || 0;

  return hours * 60 + minutes;
}

// Format minutes to display string (H:MM)
export function formatMinutes(totalMinutes) {
  if (!totalMinutes || totalMinutes <= 0) {
    return '0:00';
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}:${String(minutes).padStart(2, '0')}`;
}

// Format date for display (DD.MM.YYYY)
export function formatDate(isoDate) {
  if (!isoDate) return '';

  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;

  const [year, month, day] = parts;
  return `${day}.${month}.${year}`;
}

// Get day of week from ISO date (0 = Sunday)
export function getDayOfWeek(isoDate) {
  return new Date(isoDate).getDay();
}

// Get month from ISO date (0 = January)
export function getMonth(isoDate) {
  return new Date(isoDate).getMonth();
}

// Get year from ISO date
export function getYear(isoDate) {
  return new Date(isoDate).getFullYear();
}

// Get time of day category
export function getTimeOfDay(timeStr) {
  const minutes = parseTimeToMinutes(timeStr);
  const hour = Math.floor(minutes / 60);

  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

// Calculate all statistics from flights
export function calculateStats(flights) {
  if (!flights || flights.length === 0) {
    return getEmptyStats();
  }

  // Sort flights by date
  const sortedFlights = [...flights].sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  );

  // Basic counts
  const totalFlights = flights.length;

  // Total time
  let totalMinutes = 0;
  let totalNightMinutes = 0;
  let totalPicMinutes = 0;
  let totalTakeoffDay = 0;
  let totalTakeoffNight = 0;
  let totalLandingDay = 0;
  let totalLandingNight = 0;

  flights.forEach(f => {
    totalMinutes += parseTimeToMinutes(f.totalTime);
    totalNightMinutes += parseTimeToMinutes(f.nightTime);
    totalPicMinutes += parseTimeToMinutes(f.picTime);
    totalTakeoffDay += f.takeoffDay || 0;
    totalTakeoffNight += f.takeoffNight || 0;
    totalLandingDay += f.landingDay || 0;
    totalLandingNight += f.landingNight || 0;
  });

  const totalSicMinutes = totalMinutes - totalPicMinutes;
  const totalLandings = totalLandingDay + totalLandingNight;
  const totalTakeoffs = totalTakeoffDay + totalTakeoffNight;

  // Total distance and flight distances
  let totalDistance = 0;
  const flightDistances = [];

  flights.forEach(f => {
    const dist = getFlightDistance(f.departure, f.arrival);
    if (dist !== null) {
      totalDistance += dist;
      flightDistances.push({ flight: f, distance: dist });
    }
  });

  // Unique airports
  const airportSet = new Set();
  flights.forEach(f => {
    airportSet.add(f.departure);
    airportSet.add(f.arrival);
  });

  // Airport visit counts
  const airportCounts = {};
  flights.forEach(f => {
    airportCounts[f.departure] = (airportCounts[f.departure] || 0) + 1;
    airportCounts[f.arrival] = (airportCounts[f.arrival] || 0) + 1;
  });

  // Route counts
  const routeCounts = {};
  flights.forEach(f => {
    // Normalize route (alphabetically sorted)
    const route = [f.departure, f.arrival].sort().join(' - ');
    routeCounts[route] = (routeCounts[route] || 0) + 1;
  });

  // Top airports
  const topAirports = Object.entries(airportCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([code, count]) => ({ code, count }));

  // Top routes
  const topRoutes = Object.entries(routeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([route, count]) => ({ route, count }));

  // Flights per year
  const flightsByYear = {};
  flights.forEach(f => {
    const year = getYear(f.date);
    flightsByYear[year] = (flightsByYear[year] || 0) + 1;
  });

  // Find longest and shortest flights
  let longestFlight = null;
  let shortestFlight = null;
  let maxDuration = 0;
  let minDuration = Infinity;

  flights.forEach(f => {
    const duration = parseTimeToMinutes(f.totalTime);
    if (duration > maxDuration) {
      maxDuration = duration;
      longestFlight = f;
    }
    if (duration > 0 && duration < minDuration) {
      minDuration = duration;
      shortestFlight = f;
    }
  });

  // Day of week distribution
  const dayDistribution = [0, 0, 0, 0, 0, 0, 0]; // Sun-Sat
  flights.forEach(f => {
    const day = getDayOfWeek(f.date);
    dayDistribution[day]++;
  });
  const dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const mostActiveDay = dayNames[dayDistribution.indexOf(Math.max(...dayDistribution))];

  // Month distribution
  const monthDistribution = Array(12).fill(0);
  flights.forEach(f => {
    const month = getMonth(f.date);
    monthDistribution[month]++;
  });
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const mostActiveMonth = monthNames[monthDistribution.indexOf(Math.max(...monthDistribution))];

  // Most active year
  const yearEntries = Object.entries(flightsByYear);
  const mostActiveYear = yearEntries.length > 0
    ? yearEntries.sort((a, b) => b[1] - a[1])[0][0]
    : '-';

  // Time of day distribution
  const timeDistribution = { morning: 0, afternoon: 0, evening: 0, night: 0 };
  flights.forEach(f => {
    const tod = getTimeOfDay(f.departureTime);
    timeDistribution[tod]++;
  });

  // Round trips vs one-way
  const roundTrips = flights.filter(f => f.departure === f.arrival).length;
  const oneWay = flights.length - roundTrips;

  // Longest consecutive flying streak
  const dates = [...new Set(flights.map(f => f.date))].sort();
  let maxStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1]);
    const curr = new Date(dates[i]);
    const diffDays = (curr - prev) / (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }

  return {
    totalFlights,
    totalMinutes,
    totalTime: formatMinutes(totalMinutes),
    totalDistance,
    totalDistanceMiles: Math.round(totalDistance * 0.621371),
    uniqueAirports: airportSet.size,
    averageDuration: formatMinutes(Math.round(totalMinutes / totalFlights)),
    longestFlight: longestFlight ? {
      route: `${longestFlight.departure} - ${longestFlight.arrival}`,
      duration: longestFlight.totalTime
    } : null,
    shortestFlight: shortestFlight ? {
      route: `${shortestFlight.departure} - ${shortestFlight.arrival}`,
      duration: shortestFlight.totalTime
    } : null,
    firstFlight: sortedFlights[0]?.date,
    lastFlight: sortedFlights[sortedFlights.length - 1]?.date,
    mostActiveDay,
    mostActiveMonth,
    mostActiveYear,
    longestStreak: maxStreak,
    timeDistribution,
    roundTrips,
    oneWay,
    topAirports,
    topRoutes,
    flightsByYear,
    airportCounts,
    totalLandings,
    totalTakeoffs,
    totalTakeoffDay,
    totalTakeoffNight,
    totalLandingDay,
    totalLandingNight,
    totalNightTime: formatMinutes(totalNightMinutes),
    totalNightMinutes,
    totalPicTime: formatMinutes(totalPicMinutes),
    totalPicMinutes,
    totalSicTime: formatMinutes(totalSicMinutes > 0 ? totalSicMinutes : 0),
    totalSicMinutes: totalSicMinutes > 0 ? totalSicMinutes : 0
  };
}

function getEmptyStats() {
  return {
    totalFlights: 0,
    totalMinutes: 0,
    totalTime: '0:00',
    totalDistance: 0,
    totalDistanceMiles: 0,
    uniqueAirports: 0,
    averageDuration: '0:00',
    longestFlight: null,
    shortestFlight: null,
    firstFlight: null,
    lastFlight: null,
    mostActiveDay: '-',
    mostActiveMonth: '-',
    mostActiveYear: '-',
    longestStreak: 0,
    timeDistribution: { morning: 0, afternoon: 0, evening: 0, night: 0 },
    roundTrips: 0,
    oneWay: 0,
    topAirports: [],
    topRoutes: [],
    flightsByYear: {},
    airportCounts: {},
    totalLandings: 0,
    totalTakeoffs: 0,
    totalTakeoffDay: 0,
    totalTakeoffNight: 0,
    totalLandingDay: 0,
    totalLandingNight: 0,
    totalNightTime: '0:00',
    totalNightMinutes: 0,
    totalPicTime: '0:00',
    totalPicMinutes: 0,
    totalSicTime: '0:00',
    totalSicMinutes: 0
  };
}

// Calculate bounds for map centering
export function calculateBounds(flights) {
  let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
  let hasValidCoords = false;

  flights.forEach(f => {
    const dep = getCoordinates(f.departure);
    const arr = getCoordinates(f.arrival);

    [dep, arr].forEach(coord => {
      if (coord) {
        hasValidCoords = true;
        minLat = Math.min(minLat, coord.lat);
        maxLat = Math.max(maxLat, coord.lat);
        minLon = Math.min(minLon, coord.lon);
        maxLon = Math.max(maxLon, coord.lon);
      }
    });
  });

  if (!hasValidCoords) {
    return null;
  }

  // Add padding
  const latPad = (maxLat - minLat) * 0.1 || 5;
  const lonPad = (maxLon - minLon) * 0.1 || 5;

  return {
    minLat: minLat - latPad,
    maxLat: maxLat + latPad,
    minLon: minLon - lonPad,
    maxLon: maxLon + lonPad
  };
}

// Get color based on frequency (for heatmap-style coloring)
// Using orange/amber tones for better contrast against blue ocean
export function getFrequencyColor(count, maxCount) {
  const ratio = count / maxCount;

  if (ratio > 0.8) return '#c2410c'; // Dark orange
  if (ratio > 0.6) return '#ea580c'; // Orange
  if (ratio > 0.4) return '#f97316'; // Bright orange
  if (ratio > 0.2) return '#fb923c'; // Light orange
  return '#fdba74'; // Lightest orange
}

// Get color based on year
// Gradient from yellow (old) to magenta (recent) for visibility
export function getYearColor(year, minYear, maxYear) {
  const colors = [
    '#fbbf24', // Yellow (oldest)
    '#f59e0b', // Amber
    '#f97316', // Orange
    '#ef4444', // Red
    '#ec4899', // Pink
    '#d946ef', // Fuchsia
    '#a855f7', // Purple
    '#8b5cf6', // Violet
    '#6366f1', // Indigo
    '#22d3ee'  // Cyan (newest)
  ];

  if (minYear === maxYear) return colors[4]; // Default to pink/red

  const range = maxYear - minYear;
  const index = Math.floor(((year - minYear) / range) * (colors.length - 1));

  return colors[index];
}
