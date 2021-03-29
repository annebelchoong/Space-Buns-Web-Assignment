
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(3.078891, 101.737206),
        zoom: 5,
    };

    const uluru = { lat: -25.344, lng: 131.036 };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
