function initMap() {

    //Map Options
    var startMap = {
        zoom: 11,
        center: { lat: 3.090762, lng: 101.591560 }, // this will have to be their current location
        disableDefaultUI: true,
        // styles: [
        //     { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        //     { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        //     { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        //     {
        //         featureType: "administrative.locality",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#d59563" }],
        //     },
        //     {
        //         featureType: "poi",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#d59563" }],
        //     },
        //     {
        //         featureType: "poi.park",
        //         elementType: "geometry",
        //         stylers: [{ color: "#263c3f" }],
        //     },
        //     {
        //         featureType: "poi.park",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#6b9a76" }],
        //     },
        //     {
        //         featureType: "road",
        //         elementType: "geometry",
        //         stylers: [{ color: "#38414e" }],
        //     },
        //     {
        //         featureType: "road",
        //         elementType: "geometry.stroke",
        //         stylers: [{ color: "#212a37" }],
        //     },
        //     {
        //         featureType: "road",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#9ca5b3" }],
        //     },
        //     {
        //         featureType: "road.highway",
        //         elementType: "geometry",
        //         stylers: [{ color: "#746855" }],
        //     },
        //     {
        //         featureType: "road.highway",
        //         elementType: "geometry.stroke",
        //         stylers: [{ color: "#1f2835" }],
        //     },
        //     {
        //         featureType: "road.highway",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#f3d19c" }],
        //     },
        //     {
        //         featureType: "transit",
        //         elementType: "geometry",
        //         stylers: [{ color: "#2f3948" }],
        //     },
        //     {
        //         featureType: "transit.station",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#d59563" }],
        //     },
        //     {
        //         featureType: "water",
        //         elementType: "geometry",
        //         stylers: [{ color: "#17263c" }],
        //     },
        //     {
        //         featureType: "water",
        //         elementType: "labels.text.fill",
        //         stylers: [{ color: "#515c6d" }],
        //     },
        //     {
        //         featureType: "water",
        //         elementType: "labels.text.stroke",
        //         stylers: [{ color: "#17263c" }],
        //     },
        // ],

        // gestureHandling: "greedy",
    }

    //New map
    var map = new google.maps.Map(document.getElementById('map'), startMap);

    // const svgMarker = {
    //     path:
    //         "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    //     fillColor: "red",
    //     fillOpacity: 0.75,
    //     strokeWeight: 0,
    //     rotation: 0,
    //     scale: 1.9,
    //     anchor: new google.maps.Point(15, 30),
    // };

    // var imageMarker = {
    //     url: '../Space-Buns-Web-Assignment/Media/Space Buns Logo.png',
    //     scaledSize: new google.maps.Size(35, 50)
    // };

    var imageMarker = {
        url: '../Space-Buns-Web-Assignment/Media/icons/Space Buns Marker.svg',
        scaledSize: new google.maps.Size(35, 50),
    };

    var markers = [
        { coordinates: { lat: 3.119762, lng: 101.581560 }, title: 'Damansara' },
        { coordinates: { lat: 3.086330, lng: 101.741026 }, title: 'Cheras' },
        { coordinates: { lat: 3.209240, lng: 101.570204 }, title: 'Sungai Buloh' },
        { coordinates: { lat: 3.198470, lng: 101.714486 }, title: 'Setapak' },
        { coordinates: { lat: 3.047383, lng: 101.583945 }, title: 'Subang Jaya' },
        { coordinates: { lat: 2.924272, lng: 101.655964 }, title: 'Cyberjaya' },
        { coordinates: { lat: 2.990344, lng: 101.788260 }, title: 'Kajang' },
        { coordinates: { lat: 3.065954, lng: 101.483355 }, title: 'Shah Alam' },
    ];

    //Loop through Markers and Call addMarker function
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    var infoWindow = new google.maps.InfoWindow();

    //add Marker
    function addMarker(branches) {
        var marker = new google.maps.Marker({
            position: branches.coordinates,
            map: map,
            icon: imageMarker
            // icon: svgMarker
        });

        if (branches.title) {
            marker.addListener('click', function () {
                // infoWindow.setContent(branches.title + 'Space Buns' + ' >Directions');
                infoWindow.setContent(
                    '<div id="branch-content">' +
                    '<img width="50px" src="./Media/Space Buns Logo.png" alt="Space Buns Logo">' +
                    '<h3 class="branch-title">' + 
                    branches.title + ' branch</h3>' + 
                    '<a href="https://www.google.com/maps" target="_blank">Directions</a>' +
                    "</div>" + 
                    '<button onclick="document.getElementById("id01").style.display="block""><h4>Select</h4></button>'
                );
                infoWindow.open(map, marker);
                map.panTo(branches.coordinates);
                // addMarker(google.maps.Marker({ icon: svgMarkerY }));

                // icon: svgMarker.scale(3), svgMarker.fillColor(blue);
                // icon: svgMarker.fillColor("blue");
            });
        }
    }
}
