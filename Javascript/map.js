let map;

function initMap() {
    var location = { lat: 3.008870, lng: 101.698529 };
    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: location,
        zoom: 11,
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


let map;

function initMap() {
    var latitude = [
        "3.119762",
        "3.113531",
        "3.086330",
        "3.206359",
        "3.209240",
        "3.147830",
        "3.083883",
        "3.198470",
        "3.047383",
        "2.924272",
        "2.990344"
    ]
    var longtitude = [
        "101.581560",
        "101.611194",
        "101.741026",
        "101.626022",
        "101.570204",
        "101.710721",
        "101.411595",
        "101.714486",
        "101.583945",
        "101.655964",
        "101.788260"
    ]
    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: location,
        zoom: 11,
    });
}