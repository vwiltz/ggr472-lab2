mapboxgl.accessToken = 'pk.eyJ1IjoidndpbHR6IiwiYSI6ImNscmZ0N3liOTA1Mmkybm8xeGU0cmZuOW8ifQ.EpQc24rhxsadjwWf3mvoiQ'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [43.65314167329393, -79.38385683409712], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.on('load', () => {
    // Add a data source from a GeoJSON file
    map.addSource('DV-data', {
        type: 'geojson',
        data: 'https://github.com/vwiltz/ggr472-lab2/blob/58878bf60cbd3aaa288a855725db4889186f1488/merged_gdf_DAs.geojson' // Your URL to your buildings.geojson file
    });
    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'DV-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    });
});