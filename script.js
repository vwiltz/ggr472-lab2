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
    map.addSource('TCHC_data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/vwiltz/ggr472-lab2/main/Community%20Housing%20Data.geojson'
    }
    });

map.addLayer({
    'id': 'location-points',
    'type': 'circle',
    'source': 'TCHC_data',
    'paint': {
        'circle-radius': 5,
        'circle-color': '#000000'
    }
});