var mapConfig = config()

function initializeMap() {
  var map = L.map('map').setView(mapConfig.centerPoint, mapConfig.initialZoom)

  // Display base map
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: mapConfig.MAPBOX_MAP_ID,
      accessToken: mapConfig.MAPBOX_API_TOKEN
  }).addTo(map)

  return map
}
