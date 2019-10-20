export const mapStyle ={
  "version": 8,
  "name": "Mapbox Streets",
  "metadata": {
      "mapbox:autocomposite": true
  },
  "sprite": "mapbox://sprites/mapbox/streets-v8",
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  "sources": {
      "mapbox-streets": {
          "url": "mapbox://mapbox.mapbox-streets-v7",
          "type": "vector"
      }
  },
  "layers": [
      {
        "id": "water",
        "source": "mapbox-streets",
        "source-layer": "water",
        "type": "fill",
        "paint": {
          "fill-color": "#3F51B5"
        }
      },
      
    ]
}