// Create CSS for Digital Globe image based on click location
function createBackgroundImageCSS(latitude, longitude) {
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

  return background
}
