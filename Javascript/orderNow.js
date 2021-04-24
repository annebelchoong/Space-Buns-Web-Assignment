function initMap() {

    const deliveryMap = new google.maps.Map(document.getElementById("delivery-map"), {
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

    autocomplete.bindTo("bounds", deliveryMap);
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({ map: deliveryMap, anchorPoint: new google.maps.Point(0, -29), });

    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        // deliveryMap.strictBounds = false;
        marker.setVisible(false);
        const place = autocomplete.getPlace();
        if (place.geometry.viewport) {
            deliveryMap.fitBounds(place.geometry.viewport);
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


    // const deliveryRadius = new google.maps.Circle({
    //     strokeColor: "#FF0000",
    //     // strokeColor: "#63cf63",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: "#FFDD21",
    //     // fillColor: "#63cf63",
    //     fillOpacity: 0.35,
    //     map: deliveryMap,
    //     center: deliveryMap.center,
    //     radius: 33000,
    // });

    /* ############### Pickup Map ############### */
    const pickupMap = new google.maps.Map(document.getElementById("pickup-map"), {
        zoom: 11,
        center: { lat: 3.090762, lng: 101.611560 },
        disableDefaultUI: true,
        // gestureHandling: "none",
    });

    var imageMarker = {
        url: 'Media/icons/SpaceBunsMarker.svg',
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
                    '<img width="50px" src="Media/icons/SpaceBunsLogo.png" alt="Space Buns Logo">' +
                    '<h3 class="branch-title">' +
                    branches.title + ' branch</h3>' +
                    '<a href="https://www.google.com/maps" target="_blank">Directions</a>' +
                    "</div>" +
                    '<button id="pickup-button" class="button" onclick="pickupText()"><h4>Select</h4></button>'
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
    // });  s[]
}

function selection(show, hide) {
    var toShow = document.getElementById(show);
    var toHide = document.getElementById(hide);
    // toShow.style.display = (toShow.style.display == 'block') ? 'none' : 'block';
    toShow.style.display = 'block';
    toHide.style.display = 'none';
}

function buttons(selected, notSelected) {
    var buttonSelected = document.getElementById(selected);
    var buttonNotSelected = document.getElementById(notSelected);

    buttonSelected.style.backgroundColor = 'var(--gold)';
    buttonSelected.style.color = '#fff';
    buttonNotSelected.style.backgroundColor = '#000';
    buttonNotSelected.style.color = 'var(--gold)';
}

function togglePopup() {
    document.getElementById("popup1").classList.toggle("active");
    var scrollLock = document.getElementsByTagName("body")[0];
    scrollLock.classList.toggle("scroll-lock");





    // if (scrollLock == "hidden") {
    //     scrollLock = "scroll";
    // } 
    // if (scrollLock == "scroll") {
    //     scrollLock = "hidden";
    // }




    // var lockScroll = document.getElementById("yes");
    // lockScroll.style.overflowY = "hidden";
}


// function validateAddress() {

//     var x = document.forms["deliveryForm"]["deliveryAddress"].value;
//     if (x == "") {
//         // alert("HELLO");
//         return false;
//     }

//     const address = document.getElementById("confirm");
//     if (address.value == "") {
//         // return false;
//     } else {
//         togglePopup();
//         // alert('tes');
//     }
// }


function deliveryText() {
    document.getElementById("selection-text").innerHTML = "Delivery";
    togglePopup();
}

function pickupText() {
    document.getElementById("selection-text").innerHTML = "Self-Pickup";
    togglePopup();
}

// function toOrder() {
//     window.location.href = "sb_orderMenu.html";
// }

// document.getElementById("pickup-button").addEventListener("click", displayText);
// document.getElementById("delivery-button").addEventListener("click", displayText);

// function displayText() {
//     const a = "delivery";
//     document.getElementById("selection-text").innerHTML = a ;
// }


// var today = new Date();
// var tomorrow = new Date();
// var nextDay = new Date();
// tomorrow.setDate(new Date().getDate()+1);
// nextDay.setDate(new Date().getDate()+2);

function formatDate(today) {
    var dayNames = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var dd = today.getDate();
    var mm = today.getMonth();
    var day = today.getDay();

    var stringDate = dayNames[day] + ", " + dd + " " + monthNames[mm];

    return stringDate;
}

var today = new Date();
var tomorrow = new Date();
var dayAfterTomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
dayAfterTomorrow.setDate(new Date().getDate() + 2);

// var today = new Date("May 30, 2021");
// var tomorrow = new Date("May 30, 2021");
// var dayAfterTomorrow = new Date("May 30, 2021");
// tomorrow.setDate(new Date("May 30, 2021").getDate() + 1);
// dayAfterTomorrow.setDate(new Date("May 30, 2021").getDate() + 2);

function getDate() {
    var formatToday = formatDate(today);
    var formatTomorrow = formatDate(tomorrow);
    var formatDayAfterTomorrow = formatDate(dayAfterTomorrow);

    return [formatToday, formatTomorrow, formatDayAfterTomorrow];
}


function checkTime() {
    var minTime = new Date();
    var newHour = minTime.getHours();
    var newMin = minTime.getMinutes();
    var stringTime = newHour + ":" + newMin.toString().padStart(2, '0');
    console.log(stringTime); //delete later
    // updateTime.setAttribute("min", stringTime);

    if (document.getElementById("select-date").value == "1") {
        updateTime.min = stringTime;
    } else {
        updateTime.min = "11:00";
    }

    // var selectedDay = document.getElementById("today");

    // if (selectedDay.selected == true) {
    //     updateTime.min = stringTime;
    // }

}
