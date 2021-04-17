
function initMap() {

    const pickupMap = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 10,
        center: { lat: 3.090762, lng: 101.611560 },
        // disableDefaultUI: true,
        // gestureHandling: "none",
    });

    var imageMarker = {
        url: '../../Space-Buns-Web-Assignment/Media/icons/SpaceBunsMarker.svg',
        scaledSize: new google.maps.Size(35, 50),
    };

    var markers = [
        { coordinates: { lat: 3.119756, lng: 101.580166 }, title: 'Damansara' },
        { coordinates: { lat: 3.086330, lng: 101.741026 }, title: 'Cheras' },
        { coordinates: { lat: 3.210967, lng: 101.561119 }, title: 'Sungai Buloh' },
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
    }
}






// let map;

// function initMap() {
//     var icon = {

//         scaledSize: new google.maps.Size(35, 50),
//         url: '../Space-Buns-Web-Assignment/Media/icons/SpaceBunsMarker.svg'
//     }

//     var location = { lat: 3.008870, lng: 101.698529 };
//     map = new google.maps.Map(document.getElementById("googleMap"), {
//         center: location,
//         // disableDefaultUI: true, // disable the controls
//         zoom: 11,
//     });

//     var marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         icon: icon
//     });
// }



// let map;

// function initMap() {
//     var latitude = [
//         "3.119762",
//         "3.113531",
//         "3.086330",
//         "3.206359",
//         "3.209240",
//         "3.147830",
//         "3.083883",
//         "3.198470",
//         "3.047383",
//         "2.924272",
//         "2.990344"
//     ]
//     var longtitude = [
//         "101.581560",
//         "101.611194",
//         "101.741026",
//         "101.626022",
//         "101.570204",
//         "101.710721",
//         "101.411595",
//         "101.714486",
//         "101.583945",
//         "101.655964",
//         "101.788260"
//     ]
//     map = new google.maps.Map(document.getElementById("googleMap"), {
//         center: location,
//         zoom: 11,
//     });
// }
