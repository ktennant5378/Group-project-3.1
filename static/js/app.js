// Hold the data from JSON/CSV file
let allData;

// Create initial map object using Los Angeles coordinates
let myMap = L.map("map", {
    center: [34.05, -118.24],
    zoom: 11
});

// Add tiles into LA_Map object
// Use topical, not street view
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Read CSV file  
d3.csv("static/Data/area_crime.csv").then(function(data) {
    allData = data;
    console.log("allData", allData);
    GetMarkers(data)
});