function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.140196, lng: -118.375725},
      zoom: 15
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
      placeId: 'ChIJj77jhhO-woARyE3GYmx0bFE'
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Phone Number: ' + place.formatted_phone_number + '<br>'+
            'Goople Places Rating ' + place.rating + '<br>' +
            place.formatted_address + '</div>');
          infowindow.open(map, this);
        });
      }
    });
  }