var MAPBOX_MAP_ID = 'mapbox.mapbox-streets-v7'
var MAPBOX_API_TOKEN = 'pk.eyJ1IjoiYmlsbHl6YWMiLCJhIjoiY2ltczZ4em84MDFmNXVya2tra3YwZm9pcCJ9.xIziBomXWsiSMYhe2naLng'

var middleOfTheAtlanticOceanCoordinates = [34.016241889667015, -18.28125]

var mymap = L.map('map').setView(middleOfTheAtlanticOceanCoordinates, 3)

// Display base map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: MAPBOX_MAP_ID,
    accessToken: MAPBOX_API_TOKEN
}).addTo(mymap);

// Listen for clicks
mymap.on('click', function(event) {
  // Create Digital Globe image url based on click location
  var latitude = event.latlng.lat
  var longitude = event.latlng.lng
  var imageUrl = [
    'http://mapperdev.tomnod.com/chip_api/chip',
    '/lat/',
    latitude,
    '/lng/',
    longitude
  ].join('')
  var background = [
    'url(',
    imageUrl,
    ')'
  ].join('')

  // Display the overlay
  $('.lightbox')
    .toggleClass('show-lightbox')

  // Set bg of overlay to the DigitalGlobe image of the current location
  $('.digital-globe-image')
    .show()
    .css('background', background)

}) // End mymap.on click handler

// Close the lightbox on clicking the X
$('.close-lightbox').on('click', function() {
  console.log('clik');
  $('.lightbox')
    .toggleClass('show-lightbox')
})
