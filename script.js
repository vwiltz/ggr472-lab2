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

    map.addSource('TCHC-locations', {
        'type': 'vector',
        'url': 'mapbox://vwiltz.3wff5s3i'
    });

    map.addLayer({
        'id': 'neighbs-fill',
        'type': 'fill',
        'source': 'neighbourhoods',
        'paint': {
            'fill-color': '#ffffff',
            'fill-opacity': 1

        }
    });

    map.addLayer({
        'id': 'neighbs-outline',
        'type': 'line',
        'source': 'neighbourhoods',
        'paint': {
            'line-color': 'black',
            'line-width': 1


        }
    });


});