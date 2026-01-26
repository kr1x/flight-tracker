import Papa from 'papaparse';

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

  return result.data.map((row, index) => {
    return {
      id: generateId(),
      date: parseDate(row['Date']),
      departure: (row['Departure place'] || '').toUpperCase().trim(),
      arrival: (row['Arrival place'] || '').toUpperCase().trim(),
      departureTime: row['Departure time'] || '',
      arrivalTime: row['Arrival time'] || '',
      totalTime: row['Total time'] || ''
    };
  }).filter(flight => flight.date && flight.departure && flight.arrival);
}

// Generate CSV content from flight objects
export function generateCSV(flights) {
  const headers = ['Date', 'Departure place', 'Arrival place', 'Departure time', 'Arrival time', 'Total time'];

  const rows = flights.map(flight => {
    return [
      formatDateForCSV(flight.date),
      flight.departure,
      flight.arrival,
      flight.departureTime,
      flight.arrivalTime,
      flight.totalTime
    ].join(';');
  });

  return [headers.join(';'), ...rows].join('\n');
}

// Parse date from DD.MM.YY format to ISO date string
function parseDate(dateStr) {
  if (!dateStr) return null;

  const parts = dateStr.trim().split('.');
  if (parts.length !== 3) return null;

  let [day, month, year] = parts.map(p => parseInt(p, 10));

  // Handle 2-digit years
  if (year < 100) {
    year = year > 50 ? 1900 + year : 2000 + year;
  }

  // Create ISO date string (YYYY-MM-DD)
  const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  // Validate the date
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
