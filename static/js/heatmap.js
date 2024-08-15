// Initialize the map
var map = L.map('heatmap').setView([39.8283, -98.5795], 4.3); // Centered on the USA

// Add base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to create heatmap layer using Turf.js for clustering
function createHeatmap(geojsonData) {
    var points = turf.featureCollection(geojsonData.features.map(feature => {
        if (feature.geometry && feature.geometry.coordinates) {  // Check if geometry and coordinates exist
            return turf.point([feature.geometry.coordinates[0], feature.geometry.coordinates[1]], {
                damage: feature.properties.damages
            });
        }
    }).filter(Boolean));  // Filter out undefined points

    // Use Turf to cluster the points based on proximity
    var clusteredPoints = turf.clustersDbscan(points, 50, { units: 'kilometers' });

    var heatArray = clusteredPoints.features.map(feature => {
        var coords = feature.geometry.coordinates;
        var damages = feature.properties.damages;
        return [coords[1], coords[0], damages]; // Lat, Lon, Damages
    });

    var heat = L.heatLayer(heatArray, {
        radius: 30,
        blur: 10,
        maxZoom: 17,
        gradient: {0.3: 'blue', 0.55: 'lime', 0.85: 'yellow', 1: 'red'}
    }).addTo(map);
}

// Fetch data and update heatmap
function updateHeatmap(selectedMonth) {
    fetch(`/data?month=${selectedMonth}`)
        .then(response => response.json())
        .then(data => {
            // Clear the existing heatmap layers
            map.eachLayer(function(layer) {
                if (layer instanceof L.heatLayer) {
                    map.removeLayer(layer);
                }
            });

            // Create a new heatmap layer with the fetched data
            createHeatmap(data);
        })
        .catch(error => console.error('Error loading the data:', error));
}

// Initial load with all data
updateHeatmap('all');

// Event listener for month selection
document.getElementById('month-select').addEventListener('change', function() {
    var selectedMonth = this.value;
    updateHeatmap(selectedMonth);
});
