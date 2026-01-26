#!/usr/bin/env node

/**
 * Airport Database Builder
 * Downloads airport data from OpenFlights and generates airports.js
 *
 * Source: https://github.com/jpatokal/openflights
 * License: Open Database License (ODbL)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const OPENFLIGHTS_URL = 'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'airports.js');

// Download file from URL
function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => resolve(data));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Parse CSV line (handles quoted fields)
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());

  return result;
}

// Manual additions - airports not in OpenFlights database
const MANUAL_AIRPORTS = {
  // Small US training airports
  "E63": { icao: "E63", iata: "", name: "Gila Bend Air Force Auxiliary Field", city: "Gila Bend", country: "United States", lat: 32.8881, lon: -112.7197 },
  "GBN": { icao: "KGBN", iata: "", name: "Gila Bend Municipal Airport", city: "Gila Bend", country: "United States", lat: 32.9603, lon: -112.6792 },
  "KGBN": { icao: "KGBN", iata: "", name: "Gila Bend Municipal Airport", city: "Gila Bend", country: "United States", lat: 32.9603, lon: -112.6792 },
  "KE60": { icao: "KE60", iata: "", name: "Eloy Municipal Airport", city: "Eloy", country: "United States", lat: 32.8069, lon: -111.5867 },
  "KGYI": { icao: "KGYI", iata: "", name: "North Texas Regional Airport", city: "Sherman", country: "United States", lat: 33.7141, lon: -96.6737 },

  // Kazakhstan - NQZ is newer code for Astana (TSE in OpenFlights)
  "NQZ": { icao: "UACC", iata: "NQZ", name: "Nursultan Nazarbayev International Airport", city: "Astana", country: "Kazakhstan", lat: 51.0222, lon: 71.4669 },

  // Aliases and alternate codes
  "CAS": { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5900 },
  "TAN": { icao: "GMTT", iata: "TNG", name: "Tangier Ibn Battouta Airport", city: "Tangier", country: "Morocco", lat: 35.7269, lon: -5.9169 },
};

// Parse OpenFlights data
// Format: ID, Name, City, Country, IATA, ICAO, Lat, Lon, Alt, Timezone, DST, Tz, Type, Source
function parseAirports(data) {
  const airports = {};
  const lines = data.split('\n');

  for (const line of lines) {
    if (!line.trim()) continue;

    const fields = parseCSVLine(line);
    if (fields.length < 8) continue;

    const [id, name, city, country, iata, icao, lat, lon] = fields;

    // Skip entries without valid codes
    if ((!iata || iata === '\\N') && (!icao || icao === '\\N')) continue;

    // Skip entries without valid coordinates
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);
    if (isNaN(latitude) || isNaN(longitude)) continue;

    const airport = {
      icao: icao !== '\\N' ? icao : '',
      iata: iata !== '\\N' ? iata : '',
      name: name.replace(/"/g, ''),
      city: city.replace(/"/g, ''),
      country: country.replace(/"/g, ''),
      lat: latitude,
      lon: longitude
    };

    // Add by IATA code
    if (airport.iata && airport.iata.length === 3) {
      airports[airport.iata] = airport;
    }

    // Add by ICAO code
    if (airport.icao && airport.icao.length === 4) {
      airports[airport.icao] = airport;
    }
  }

  return airports;
}

// Generate JavaScript file
function generateJS(airports) {
  const sortedKeys = Object.keys(airports).sort();

  let js = `// Airport Database - Auto-generated from OpenFlights
// Source: https://github.com/jpatokal/openflights
// License: Open Database License (ODbL)
// Generated: ${new Date().toISOString()}
// Total entries: ${sortedKeys.length}

export const airports = {
`;

  for (const code of sortedKeys) {
    const a = airports[code];
    // Escape for JSON string
    const name = JSON.stringify(a.name);
    const city = JSON.stringify(a.city);
    const country = JSON.stringify(a.country);

    js += `  "${code}": { icao: "${a.icao}", iata: "${a.iata}", name: ${name}, city: ${city}, country: ${country}, lat: ${a.lat}, lon: ${a.lon} },\n`;
  }

  js += `};

// Lookup function - tries both ICAO and IATA codes
export function getAirport(code) {
  if (!code) return null;
  const upperCode = code.toUpperCase().trim();
  return airports[upperCode] || null;
}

// Get coordinates for a code
export function getCoordinates(code) {
  const airport = getAirport(code);
  if (!airport) return null;
  return { lat: airport.lat, lon: airport.lon };
}

// Check if airport exists
export function airportExists(code) {
  return getAirport(code) !== null;
}

// Get airport display name
export function getAirportName(code) {
  const airport = getAirport(code);
  if (!airport) return code;
  return airport.city || airport.name;
}
`;

  return js;
}

// Main
async function main() {
  console.log('Downloading airport data from OpenFlights...');

  try {
    const data = await download(OPENFLIGHTS_URL);
    console.log(`Downloaded ${data.length} bytes`);

    console.log('Parsing airports...');
    const airports = parseAirports(data);
    console.log(`Found ${Object.keys(airports).length} airport entries from OpenFlights`);

    // Add manual airports
    console.log(`Adding ${Object.keys(MANUAL_AIRPORTS).length} manual airport entries...`);
    Object.assign(airports, MANUAL_AIRPORTS);
    console.log(`Total: ${Object.keys(airports).length} airport entries`);

    console.log('Generating JavaScript...');
    const js = generateJS(airports);

    console.log(`Writing to ${OUTPUT_FILE}...`);
    fs.writeFileSync(OUTPUT_FILE, js, 'utf8');

    console.log('Done!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
