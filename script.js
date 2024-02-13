// default mapbox public access token
mapboxgl.accessToken = 'pk.eyJ1IjoidndpbHR6IiwiYSI6ImNscmZ0N3liOTA1Mmkybm8xeGU0cmZuOW8ifQ.EpQc24rhxsadjwWf3mvoiQ';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-79.365, 43.725],
    zoom: 11,
});

// add a data source from geojson
map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('neighbourhoods', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/vwiltz/ggr472-lab2/main/Neighbourhoods.geojson'
    });
    // TCHC housing locations
    map.addSource('TCHC-locations', {
        'type': 'vector',
        'url': 'mapbox://vwiltz.3wff5s3i'
    });
    // polygon fill (neighbourhoods)
    map.addLayer({
        'id': 'neighbs-fill', //  unique layer ID
        'type': 'fill',
        'source': 'neighbourhoods',  // data source: neighbourhood boundaries
        'paint': {
            'fill-color': '#ffffff',
            'fill-opacity': 1
        }
    });
    // polygon outlines
    map.addLayer({
        'id': 'neighbs-outline', // unique layer ID
        'type': 'line',
        'source': 'neighbourhoods', // data source: neighbourhood boundaries
        'paint': {
            'line-color': 'black',
            'line-width': 1
        }
    });

    map.addLayer({
        'id': 'locations', // unique layer ID
        'type': 'circle',
        'source': 'TCHC-locations', // data source: TCHC Community Housing data
        'paint': {
            'circle-radius': 2,
            'circle-color': '#000000'
        },
        'source-layer': 'Community_Housing_Data-btz8qw'
    });
});