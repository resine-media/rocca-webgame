mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlhc3Jlc2luZSIsImEiOiJja3Uzc3gwOWsydW14MzBwOGU2MHpxZHJiIn0.-d9PNnwjFaiqz9S5ho9IBQ';

// the map
const map = new mapboxgl.Map({
  container: 'map',                            // container ID
  style: 'mapbox://styles/mathiasresine/ckufquhl27yyx17mwljrqh4ui', // style URL
  center: [6.466033, 43.539873],             // starting position
  zoom: 17,
  maxBounds: bounds, // Set the map's geographical boundaries.
  container: 'map',
  antialias: true
});
// Add "locate me" control to the map (top right).
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true,
    showUserHeading: true,
    showAccuracyCircle: false
  })
);
// zoom and orientation (North)
map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
  // trace du parcours
  map.addSource('route', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': Rocca_Path
      }
    }
  });
  // afficher chemin parcours
  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#379',
      'line-width': 4
    }
  });
});

//------------------------------------------

const Rocca_Feats = generateFeats(Rocca_Data); // On genere et on stoque le tableau de Features
const Rocca_geojson = {                        // On le range dans une "Collection" pour que mapBox puisse l'utiliser
  "type": "FeatureCollection",
  "features": Rocca_Feats
};

// on ajoute les Markers Custom (html/css)
Rocca_geojson.features.forEach(function(marker, i) {

  var el = document.createElement('div'); // create a HTML element for each feature
  el.className = 'marker';
  el.innerHTML = '<span id="marker_pi-'+(i+1)+'" title="'+Rocca_Data[i].title+'" ><b>' + (i + 1) + '</b></span>';

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
        offset: 25
      }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3> <p>' + marker.properties.description + '</p>'))
    .addTo(map);
});