$( document ).ready(function () {
    var $menu = $('.nav-collapse'),
    $menulink = $('.nav-toggle');
    
    $menulink.click(function () {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });
});

//Styling Google Maps

window.onload = function () {


    var latlng = new google.maps.LatLng(53.3193766, -3.8239764);

    var styles = [
        {
            featureType: "landscape",
            stylers: [
                { color: '#fff' }
            ]
        }, {
            featureType: "natural",
            stylers: [
                { hue: '#a6cadd' }
            ]
        }, {
            featureType: "road",
            stylers: [
                { hue: '#0875C7' },
                { saturation: -70 }
            ]
        }, {
            featureType: "building",
            elementType: "labels",
            stylers: [
                { hue: '#0875C7' }
            ]
        }, {
            featureType: "poi", //points of interest
            stylers: [
                { hue: '#0875C7' }
            ]
        }
    ];

    var myOptions = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: styles
    };

    map = new google.maps.Map(document.getElementById('map'), myOptions);
}
