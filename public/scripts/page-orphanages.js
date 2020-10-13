// create map
const map = L.map('mapid').setView([-8.9055183,13.2221317], 15)


// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon

L.marker([-8.9055183,13.2221317]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup()