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
    theme: "Agency and Authorship"},
{
    uni: "TCU",
    year: "2024",
    coords: [32.7079, -97.3628],
    city: "Forth Worth, TX",
    theme: "Seriously Digital"},

    {
    uni: "UC Davis",
    year: "2023",
    coords: [38.5382, -121.7617],
    city: "Davis, CA",
    theme: "To What End?"},

    {
    uni: "East Carolina U",
    year: "2022",
    coords: [35.6075, -77.3672],
    city: "Greenville, NC",
    theme: "Practicing Digital Activisms"},

      {
    uni: "Michigan State U",
    year: "2019",
    coords: [42.7251, -84.4791],
    city: "East Lansing, MI",
    theme: "Mission Critical"},

          {
    uni: "George Mason U",
    year: "2018",
    coords: [38.8851, -77.1002],
    city: "Fairfax, VA",
    theme: "Digital Phronesis"},

    {
    uni: "U of Findlay",
    year: "2017",
    coords: [41.0546, -83.6549],
    city: "Findlay, OH",
    theme: "Techne"},

        {
    uni: "St. John Fisher College",
    year: "2016",
    coords: [43.1161, -77.5119],
    city: "Rochester, NY",
    theme: "Crossing Wires"},
{
    uni: "U of Wisconsin, Stout",
    year: "2015",
    coords: [44.5211, -91.5540],
    city: "Menomonie, WI",
    theme: "unknown"},

    {
    uni: "Washing State U",
    year: "2014",
    coords: [46.7295, -117.1803],
    city: "Pullman, WA",
    theme: "Evolutions, Revolutions, Convolutions"},

];


for (let i = 0; i < eventsArray.length; i++) {
const coords = (eventsArray[i].coords);
const marker = L.marker(coords).addTo(map).bindPopup(`<b> ${eventsArray[i].year} </b><br>The conference theme was "${eventsArray[i].theme}," and it was held at ${eventsArray[i].uni} in ${eventsArray[i].city}.`); 
    // Chain .bindPopup().addTo(); above

const listDiv = document.getElementById('list');
    const listItem = document.createElement('div');
    listItem.innerHTML = `<b>${eventsArray[i].year}</b><br>The conference theme was "${eventsArray[i].theme}," and it was held at ${eventsArray[i].uni} in ${eventsArray[i].city}.<br><br>`;
    listDiv.appendChild(listItem);
} // End for loop to add markers
}); // End DOMContentLoaded listener