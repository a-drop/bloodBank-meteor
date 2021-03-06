var place;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.5112445, lng: 79.7795264},
    zoom: 6
  });
  var input = /** @type {!HTMLInputElement} */(
      document.getElementById('pac-input'));

  var types = document.getElementById('type-selector');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    place = autocomplete.getPlace();

    console.log(place);
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    };
    $('.formatted_address').val(place.formatted_address);
    $('.geometry-lat').val(place.geometry.location.J);
    $('.geometry-lng').val(place.geometry.location.M);
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      //url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);

      $.getJSON( "https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&key=AIzaSyAjf0oot5KPQSJ4J6eqTS4qZi9Gh-4vAAI", function( data ) {
        // console.log(data);
        //var location = '('+data.results[0].geometry.location.lat+', '+data.results[0].geometry.location.lng+')';
        infoWindow.setContent(data.results[0].formatted_address);
        $('.formatted_address').val(data.results[0].formatted_address);
        $('#pac-input').val(data.results[0].formatted_address);
        $('.geometry-lat').val(data.results[0].geometry.location.lat);
        $('.geometry-lng').val(data.results[0].geometry.location.lng);
      });
      map.setCenter(pos);
      // marker.setPosition(pos);
      map.setZoom(17);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //infoWindow.setPosition(pos);
  // infoWindow.setContent(browserHasGeolocation ?
  //                       'Error: The Geolocation service failed.' :
  //                       'Error: Your browser doesn\'t support geolocation.');
  if (browserHasGeolocation) {
    alert('The Geolocation service failed.')
  } else {
    alert('Your browser doesn\'t support geolocation.')
  }

}

function staticMap(lat, lng) {
  lat = parseFloat(lat);
  lng = parseFloat(lng);
  var myLatlng = new google.maps.LatLng(lat, lng);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 16
  });
  var marker = new google.maps.Marker({
    position: myLatlng
    //title: address
  });
  marker.setMap(map);
}
