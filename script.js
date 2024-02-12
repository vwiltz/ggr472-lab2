mapboxgl.accessToken = '...'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: '...', // map container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [..., ...], // starting position [lng, lat]
    zoom: ..., // starting zoom
});



map.addSource('buildings-data', {
    type: 'geojson',
    data: 'merged_gdf_DAs.geojson' // Your URL to your buildings.geojson file
});
map.addLayer({
    'id': 'buildings-point',
    'type': 'circle',
    'source': 'buildings-data',
    'paint': {
        'circle-radius': 5,
        'circle-color': '#007cbf'