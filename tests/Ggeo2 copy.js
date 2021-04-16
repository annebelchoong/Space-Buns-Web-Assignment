function initMap() {

    const deliveryMap = new google.maps.Map(document.getElementById("delivery-map"), {
        // center: { lat: 3.081249, lng: 101.634908 },
        center: { lat: 3.041249, lng: 101.634908 },
        zoom: 10,
        disableDefaultUI: true,
        // gestureHandling: "none",
    });
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");

    const options = {
        componentRestrictions: { country: "my" },
        fields: ["geometry", "name", "formatted_address"],
        origin: deliveryMap.getCenter(),
        strictBounds: false,
        types: ["geocode", "establishment"], //search type restrictions 
    };
    deliveryMap.controls[google.maps.ControlPosition.TOP_CENTER].push(card);
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    // marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');

    autocomplete.bindTo("bounds", deliveryMap);
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({ map: deliveryMap, anchorPoint: new google.maps.Point(0, -29), });

    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();


        // if (!place.geometry || !place.geometry.location) {
        //     do {
        //         // User entered the name of a Place that was not suggested and
        //         // pressed the Enter key, or the Place Details request failed.
        //         window.alert("No details available for input: '" + place.name + "'");
        //         return;
        //     } while (!place.geometry || !place.geometry.location)
        // }

        // if (place !== (place.geometry || place.geometry.location)) {
        //     window.alert("test");
        //     return;
        // }

        // do {
        //     document.getElementById("confirm").disabled = true;
        // }while(place.name !== place.geometry)
        //     document.getElementById("confirm").disabled = false;


        // function disableBtn() {
        //     document.getElementById("myBtn").disabled = true;
        // }
        
        // function enableBtn() {
        //     document.getElementById("myBtn").disabled = false;
        // }
  

        if (!place.geometry || !place.geometry.location) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }





        if (place.geometry.viewport) {
            deliveryMap.fitBounds(place.geometry.viewport);
            // document.getElementById("confirm").disabled = false;
            //deliveryMap.setCenter(place.geometry.location);
        } else {
            deliveryMap.setCenter(place.geometry.location);
            deliveryMap.setZoom(17);
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent = place.formatted_address;
        infowindow.open(deliveryMap, marker);
    });

    const deliveryRadius = new google.maps.Circle({
        strokeColor: "#FF0000",
        // strokeColor: "#63cf63",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFDD21",
        // fillColor: "#63cf63",
        fillOpacity: 0.35,
        map: deliveryMap,
        center: deliveryMap.center,
        radius: 33000,
    });




    /* ############### Pickup Map ############### */



    // //Map Options
    // var startMap = {
    //     zoom: 11,
    //     center: { lat: 3.090762, lng: 101.611560 }, // this will have to be their current location
    //     disableDefaultUI: true,
    // }

    // //New map
    // var pickupMap = new google.maps.Map(document.getElementById('pickup-map'), startMap);


    const pickupMap = new google.maps.Map(document.getElementById("pickup-map"), {
        zoom: 11,
        center: { lat: 3.090762, lng: 101.611560 },
        disableDefaultUI: true,
        // gestureHandling: "none",
    });

    var imageMarker = {
        url: '../../Space-Buns-Web-Assignment/Media/icons/SpaceBunsMarker.svg',
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

    var infoWindow1 = new google.maps.InfoWindow();

    //add Marker
    function addMarker(branches) {
        var branchMarker = new google.maps.Marker({
            position: branches.coordinates,
            map: pickupMap,
            // map: deliveryMap,
            icon: imageMarker
        });

        if (branches.title) {
            branchMarker.addListener('click', function () {
                infoWindow1.setContent(
                    '<div id="branch-content">' +
                    '<img width="50px" src="../Media/icons/SpaceBunsLogo.png" alt="Space Buns Logo">' +
                    '<h3 class="branch-title">' +
                    branches.title + ' branch</h3>' +
                    '<a href="https://www.google.com/maps" target="_blank">Directions</a>' +
                    "</div>" +
                    '<button onclick="document.getElementById("id01").style.display="block""><h4>Select</h4></button>'
                );
                infoWindow1.open(pickupMap, branchMarker);
                pickupMap.panTo(branches.coordinates);
                // addMarker(google.maps.Marker({ icon: svgMarkerY }));
                // icon: svgMarker.scale(3), svgMarker.fillColor(blue);
                // icon: svgMarker.fillColor("blue");
            });
        }
    }

    // const pickupRadius = new google.maps.Circle({
    //     strokeColor: "#FF0000",
    //     // strokeColor: "#63cf63",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: "#FFDD21",
    //     // fillColor: "#63cf63",
    //     fillOpacity: 0.35,
    //     map: pickupMap,
    //     center: pickupMap.center,
    //     radius: 33000,
    // });

}







