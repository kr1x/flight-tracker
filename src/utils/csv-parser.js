import Papa from 'papaparse';
import * as XLSX from 'xlsx';

// Parse file (CSV or Numbers) to flight objects
export async function parseFile(file) {
  const extension = file.name.split('.').pop().toLowerCase();

  if (['numbers', 'xls', 'xlsx'].includes(extension)) {
    return parseSpreadsheet(file);
  } else {
    const content = await readFileAsText(file);
    return parseCSV(content);
  }
}

// Read file as text
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
}

// Read file as ArrayBuffer
function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsArrayBuffer(file);
  });
}

// Get departure column value with fallback for old format
function getDeparture(row) {
  return (row['Departure'] || row['Departure place'] || '').toUpperCase().trim();
}

// Get arrival column value with fallback for old format
function getArrival(row) {
  return (row['Arrival'] || row['Arrival place'] || '').toUpperCase().trim();
}

// Extract all flight fields from a row
function mapRowToFlight(row) {
  return {
    id: generateId(),
    date: parseDate(row['Date']),
    departure: getDeparture(row),
    arrival: getArrival(row),
    departureTime: row['Departure time'] || '',
    arrivalTime: row['Arrival time'] || '',
    totalTime: row['Total time'] || '',
    registration: (row['Registration'] || '').trim(),
    aircraftIcao: (row['Aircraft ICAO'] || '').toUpperCase().trim(),
    takeoffDay: parseInt(row['Take off day'], 10) || 0,
    takeoffNight: parseInt(row['Take off night'], 10) || 0,
    landingDay: parseInt(row['Landing day'], 10) || 0,
    landingNight: parseInt(row['Landing night'], 10) || 0,
    nightTime: row['Night time'] || '',
    picTime: row['PIC Time'] || '',
    isPic: row['PIC'] === '1' || row['PIC'] === 1,
    isSic: row['SIC'] === '1' || row['SIC'] === 1,
    crew: (row['Crew'] || '').trim(),
    notes: (row['Notes'] || '').trim()
  };
}

// Parse spreadsheet file (Numbers, XLS, XLSX)
async function parseSpreadsheet(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const workbook = XLSX.read(buffer, { type: 'array' });

  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { raw: false });

  return data
    .map(mapRowToFlight)
    .filter(flight => flight.date && flight.departure && flight.arrival);
}

// Parse CSV file content to flight objects
export function parseCSV(csvContent) {
  const result = Papa.parse(csvContent, {
    header: true,
    delimiter: ';',
    skipEmptyLines: true,
    transformHeader: (header) => header.trim()
  });

  if (result.errors.length > 0) {
    console.warn('CSV parsing warnings:', result.errors);
  }

  return result.data
    .map(mapRowToFlight)
    .filter(flight => flight.date && flight.departure && flight.arrival);
}

// CSV column headers for export
const CSV_HEADERS = [
  'Date', 'Departure', 'Arrival', 'Departure time', 'Arrival time', 'Total time',
  'Registration', 'Aircraft ICAO', 'Take off day', 'Take off night',
  'Landing day', 'Landing night', 'Night time', 'PIC Time',
  'PIC', 'SIC', 'Crew', 'Notes'
];

// Generate CSV content from flight objects
export function generateCSV(flights) {
  const rows = flights.map(flight => {
    return [
      formatDateForCSV(flight.date),
      flight.departure,
      flight.arrival,
      flight.departureTime,
      flight.arrivalTime,
      flight.totalTime,
      flight.registration || '',
      flight.aircraftIcao || '',
      flight.takeoffDay || 0,
      flight.takeoffNight || 0,
      flight.landingDay || 0,
      flight.landingNight || 0,
      flight.nightTime || '',
      flight.picTime || '',
      flight.isPic ? '1' : '',
      flight.isSic ? '1' : '',
      flight.crew || '',
      flight.notes || ''
    ].join(';');
  });

  return [CSV_HEADERS.join(';'), ...rows].join('\n');
}

// Parse date from various formats to ISO date string
// Supports: DD.MM.YY, DD.MM.YYYY, M/D/YY, MM/DD/YYYY, YYYY-MM-DD
function parseDate(dateStr) {
  if (!dateStr) return null;

  const trimmed = dateStr.trim();
  let day, month, year;

  if (trimmed.includes('.')) {
    // DD.MM.YY or DD.MM.YYYY
    const parts = trimmed.split('.');
    if (parts.length !== 3) return null;
    [day, month, year] = parts.map(p => parseInt(p, 10));
  } else if (trimmed.includes('/')) {
    // M/D/YY or MM/DD/YYYY (US format from Numbers/Excel)
    const parts = trimmed.split('/');
    if (parts.length !== 3) return null;
    [month, day, year] = parts.map(p => parseInt(p, 10));
  } else if (trimmed.includes('-')) {
    // YYYY-MM-DD (ISO)
    const parts = trimmed.split('-');
    if (parts.length !== 3) return null;
    [year, month, day] = parts.map(p => parseInt(p, 10));
  } else {
    return null;
  }

  if (year < 100) {
    year = year > 50 ? 1900 + year : 2000 + year;
  }

  const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const dateObj = new Date(isoDate);
  if (isNaN(dateObj.getTime())) return null;

  return isoDate;
}

// Format ISO date back to DD.MM.YY for CSV export
function formatDateForCSV(isoDate) {
  if (!isoDate) return '';

  const parts = isoDate.split('-');
  if (parts.length !== 3) return '';

  const [year, month, day] = parts;
  const shortYear = year.slice(-2);

  return `${day}.${month}.${shortYear}`;
}

// Generate a unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Download CSV file
export function downloadCSV(content, filename = 'flights.csv') {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
