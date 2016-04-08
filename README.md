We have a Chip API endpoint setup. If you hit the end point with the latitude and longitude of any point on earth the API returns a PNG image chip of the latest DigitalGlobe imagery for that point. The API is very slow. But it will work well enough for our coding challenge. 

The URL for the endpoint is: 
http://mapperdev.tomnod.com/chip_api/chip/lat/<REPLACE_WITH_LATITUDE_VALUE>/lng/<REPLACE_WITH_LONGITUDE_VALUE>

For example if you wanted to see an image of downtown Lafayette Colorado you would:

http://mapperdev.tomnod.com/chip_api/chip/lat/39.9943643/lng/-105.0925646

Your mission
- Set up a webpage with a slippy map
- User can zoom, pan, then click anywhere in the world. 
- When the user clicks your app should 
  - Grab the latitude and longitude of the click 
  - Forward it to the chip API 
  - Display the chip returned to the user  
- Deploy
- Push to public repo

(we suggest using Leaflet.js, but feel free to use other options) 
