$(document).ready(function () {
   // MAPS

   var map;
   var directionsDisplay; // Instanciaremos ele mais tarde, que será o nosso google.maps.DirectionsRenderer
   var directionsService = new google.maps.DirectionsService();
   var markerA = new google.maps.MarkerImage('img/pin.png');
   var markerB = new google.maps.MarkerImage('img/pin.png');
   var markersArray = [];


   function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();
      var myLatlng = new google.maps.LatLng(-23.5836528,-46.6712752);
      var mapOptions = {
         zoom: 16,
         center: myLatlng,
         scrollwheel: false
      }

      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var image = 'img/pin.png';
      var marker = new google.maps.Marker({
         position: myLatlng,
         map: map,
         title: 'Bastrô',
         icon: image
      });
      markersArray.push(marker);
      directionsDisplay.setMap(map);
      directionsDisplay.setOptions( { suppressMarkers : true } );
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    
});