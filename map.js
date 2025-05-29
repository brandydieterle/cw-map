// Wait for the DOM to be ready (optional but good practice)
document.addEventListener('DOMContentLoaded', function() {

    // 1. Initialize the map and set its view
    // L.map('map') creates a map instance linked to the div with id="map"
    const map = L.map('map').setView([38.7946, -106.5348], 4); // NYC Coordinates [lat, lng], Zoom level 13

    // 2. Add a tile layer (the base map image)
    // Using OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, // Max zoom level for these tiles
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Add the tile layer to our map instance

    console.log("Map initialized.");

// map.js (Inside the DOMContentLoaded listener, after map initialization)



// creating an array for all conference locations
const eventsArray = [ {
    uni: "U of GA",
    year: "2025",
    coords: [33.9423, -83.3724],
    city: "Athens, GA",
    theme: "Agency and Authorship",}];

    
    //"UC Davis", "East Carolina U", "2020 cancelled", "2021 cancelled", "Michigan State U", "George Mason U", "U of Findlay", "St. John Fisher College", "U of Wisconsin, Stout", "Washington State U"];

for (let i = 0; i < eventsArray.length; i++) {
const coords = (eventsArray[i].coords);
const marker = L.marker(coords).addTo(map).bindPopup(`<b> ${eventsArray[i].year} </b><br>The conference theme was "${eventsArray[i].theme}," and it was held at ${eventsArray[i].uni} in ${eventsArray[i].city}.`); 
    // Chain .bindPopup().addTo();
}

// Add a marker 


//const cw2025Coords = [33.9423, -83.3724];
//const cw2025Marker = L.marker(cw2025Coords).addTo(map);

// Add a popup to the marker
//cw2025Marker.bindPopup('<b>2025</b><br>The conference theme was "Agency and Authorship," and it was held at the University of Georgia in Athens, Georgia.');

const cw2024Coords = [32.7079, -97.3628];
const cw2024Marker = L.marker(cw2024Coords).addTo(map)
    .bindPopup('<b>2024</b><br>The conference theme was "Agency and Authorship," and it was held at the University of Georgia in Athens, Georgia.'); // Chain .bindPopup().addTo()

}); // End DOMContentLoaded listener