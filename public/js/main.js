var map = initializeMap()

// Listen for clicks
map.on('click', function(event) {
  // Show the lightbox
  $('.lightbox').toggleClass('show-lightbox')

  // Show the DigitalGlobe image
  var background = createBackgroundImageCSS(event.latlng.lat, event.latlng.lng)
  $('.digital-globe-image').css('background', background)

}) // End mymap.on click handler

// Close the lightbox on clicking the X
$('.close-lightbox').on('click', function() {
  $('.lightbox').toggleClass('show-lightbox')
})
