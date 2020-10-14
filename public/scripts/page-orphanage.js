//criar objecto para desabilitar propriedades do mapa(zoom, scrool, zoomcontrol)

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}



// create map
const map = L.map('mapid', options).setView([-8.9055183,13.2221317], 15)


// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon
const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2]
})

// create and add marker
L.marker([-8.9055183,13.2221317], { icon })
.addTo(map)


/*image gallery. Seleção das imagens */

function selectImage(event)

    