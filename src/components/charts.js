import Chart from 'chart.js/auto';
import { calculateStats } from '../utils/calculations.js';
import { getFlights } from '../store.js';

let flightsChart = null;

// Initialize the flights per year chart
export function initCharts() {
  const ctx = document.getElementById('flights-chart');
  if (!ctx) return;

  // Destroy existing chart if present
  if (flightsChart) {
    flightsChart.destroy();
  }

  flightsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Flüge',
        data: [],
        backgroundColor: '#0ea5e9',
        borderColor: '#0369a1',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#1e293b',
          titleFont: {
            size: 13
          },
          bodyFont: {
            size: 12
          },
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: (context) => `${context.parsed.y} Flüge`
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 11
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: '#e2e8f0'
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 11
            },
            stepSize: 1,
            callback: (value) => {
              if (Number.isInteger(value)) {
                return value;
              }
            }
          }
        }
      }
    }
  });

  updateCharts();
}

// Update chart with current data
export function updateCharts() {
  if (!flightsChart) return;

  const flights = getFlights();
  const stats = calculateStats(flights);

  // Sort years chronologically
  const sortedYears = Object.keys(stats.flightsByYear)
    .sort((a, b) => parseInt(a) - parseInt(b));

  const counts = sortedYears.map(year => stats.flightsByYear[year]);

  flightsChart.data.labels = sortedYears;
  flightsChart.data.datasets[0].data = counts;
  flightsChart.update();
}

// Destroy charts
export function destroyCharts() {
  if (flightsChart) {
    flightsChart.destroy();
    flightsChart = null;
  }
}
