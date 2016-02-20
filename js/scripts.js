function initMap() {

        var myLatLng = {lat: 40.7566605, lng: -73.9858488};
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: myLatLng,
          zoom: 13
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });

        var styles = [
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            { color: "#1f1e1c" },
            { lightness: 10 }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            { color: "#1f1e1c" },
            { lightness: 15 }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { color: "#1f1e1c" },
            { lightness: -5 },
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            { color: "#656669" },
            { lightness: 10 }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            { color: "#000000" },
            { lightness: 10 },
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            { color: "#484640" },
            { lightness: 20 },
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            { color: "#000000" },
            { lightness: 12 },
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            { color: "#ffffff" },
            { lightness: -15 },
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            { color: "#000000" },
            { lightness: 10 },
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            { visibility: "off" }
          ]
        },

      ];

      map.setOptions({styles: styles});
}

$(document).ready(function() {


  var scrollStart = 0;
  var changePoint = $("#top-cover");
  var offset = changePoint.offset();

  if(changePoint.length) {
    $(document).scroll(function() {
      scrollStart = $(this).scrollTop();
      if(scrollStart > offset.top) {
        $('.navbar-fat, .navbar-brand, .icon-bar, .navbar-nav > li, .navbar-nav > li > a').addClass('navbarChange');
      } else {
         $('.navbar-fat, .navbar-brand, .icon-bar, .navbar-nav > li, .navbar-nav > li > a').removeClass('navbarChange');
      }
    });
  }

});