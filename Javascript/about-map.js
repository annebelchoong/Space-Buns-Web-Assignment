function initMap() {

    const aboutUsMap = new google.maps.Map(document.getElementById("googleMap"), {
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
        { coordinates: { lat: 3.119756, lng: 101.580166 }, title: 'Damansara', address: '12, Jalan PJU 1a/20a, Dataran Ara Damansara, 47301 Petaling Jaya, Selangor' },
        { coordinates: { lat: 3.086330, lng: 101.741026 }, title: 'Cheras', address: '37, Jalan 1/119, Taman Bukit Hijau, 56100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur' },
        { coordinates: { lat: 3.210967, lng: 101.561119 }, title: 'Sungai Buloh', address: '25-13, Jalan BRP 1/4, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor' },
        { coordinates: { lat: 3.198470, lng: 101.714486 }, title: 'Setapak', address: 'Lot 1-3A,wisma setapak 33,jalan 2/23D, off, Jalan Genting Kelang, Setapak, 53300 Kuala Lumpur' },
        { coordinates: { lat: 3.047383, lng: 101.583945 }, title: 'Subang Jaya', address: 'Taipan Business Centre, 47620 Subang Jaya, Selangor' },
        { coordinates: { lat: 2.924272, lng: 101.655964 }, title: 'Cyberjaya', address: 'No 9, Jalan GC 1, Cyberjaya, 63000 Cyberjaya, Selangor' },
        { coordinates: { lat: 2.990344, lng: 101.788260 }, title: 'Kajang', address: 'Arkib Mara, Bandar Kajang, 43000 Kajang, Selangor' },
        { coordinates: { lat: 3.065954, lng: 101.483355 }, title: 'Shah Alam', address: '4, Jalan Multimedia 7/Ah, I-city, 40000 Shah Alam, Selangor' }
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
            map: aboutUsMap,
            icon: imageMarker
        });
        if (branches.title) {
            branchMarker.addListener('click', function () {
                '<a href="aboutUs.html#location-kajang"></a>'
                infoWindow1.setContent(
                    '<div id="branch-content">' +
                    '<h3 class="branch-title"> <img width="30px" src="Media/icons/SpaceBunsLogo.png" alt="Space Buns Logo"> <a href="#location-' + branches.title + '">Space Buns @ ' +
                    branches.title + '</a></h3>' +
                    "</div>"
                );
                infoWindow1.open(aboutUsMap, branchMarker);
                aboutUsMap.panTo(branches.coordinates);
            });

        }
    }
}
