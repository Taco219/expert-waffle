export default class initiatievenController{
    /*@ngInject*/
    constructor($scope, $http){
        $scope.title = "hello initiatievencontroller";

        mapboxgl.accessToken = 'pk.eyJ1IjoidGFjbzIxOSIsImEiOiJjajRrNnhzbnQwa3d2MzJzZXR6NmxzNmw5In0.X8H6i84oY5DxKkbwrTaGyw';
        const map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/taco219/cj4k7w2me4opu2rs37hwpyr8h', //stylesheet location
            center: [5.298487, 51.695835], // starting position
            pitch: 60, // pitch in degrees
            zoom: 16 // starting zoom
        });

        map.on('mousedown', function (e) {
                console.log(e.lngLat);
        });

        const geojson ={
            "type": "FeatureCollection",
            "features": []
        };

        $http.get('http://localhost:3333/api/initiatief')
            .then((data) => {
                // console.log('yolo')

                console.log(geojson);

                let itemsProcessed = 0;
                data.data.initiatieven.forEach((initiatief)=>{
                    console.log(initiatief);

                    const feature =
                        {
                            "type": "Feature",
                            "properties": initiatief,
                            "geometry": {
                                coordinates: [initiatief.location.coordinates[1], initiatief.location.coordinates[0]]
                            }
                        };

                    console.log(initiatief.location);

                    feature.properties.iconSize = [40, 40];

                    geojson.features.push(feature);

                    itemsProcessed++;
                    if(itemsProcessed === data.data.initiatieven.length) {
                        test(geojson);
                    }
                });

            })
            .catch((err) => {
                console.log(err);

            });

        $scope.currentInitiatief = {};

        function test(geojson) {
            console.log('geojson');
            console.log(geojson);

            const map = new mapboxgl.Map({
                container: 'map',
                // style: 'mapbox://styles/mapbox/streets-v9',
                style: 'mapbox://styles/taco219/cj4k7w2me4opu2rs37hwpyr8h', //stylesheet location

                center: [-65.017, -16.457],
                zoom: 5
            });

            // add markers to map
            geojson.features.forEach(function(marker) {
                // create a DOM element for the marker
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.background = "#333";
                // el.style.backgroundImage = 'url(https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg)';
                el.style.width = marker.properties.iconSize[0] + 'px';
                el.style.height = marker.properties.iconSize[1] + 'px';

                el.addEventListener('click', function() {
                    console.log(marker.properties);
                    $scope.currentInitiatief = marker.properties;

                    new mapboxgl.Popup()
                        .setLngLat(e.features[0].geometry.coordinates)
                        .setHTML('random')
                        // .setHTML(e.features[0].properties.message)
                        .addTo(map);

                });

                // add marker to map
                new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
            });
        }
    }
}
