// JavaScript Document
$( document ).ready(function() {
	var map;
	function initialize() {
	  map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: new google.maps.LatLng(39.754045, -105.006408),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
				  {
					  "featureType": "administrative",
					  "elementType": "labels.text.fill",
					  "stylers": [
						  {
							  "color": "#444444"
						  }
					  ]
				  },
				  {
					  "featureType": "landscape",
					  "elementType": "all",
					  "stylers": [
						  {
							  "color": "#f2f2f2"
						  }
					  ]
				  },
				  {
					  "featureType": "landscape.man_made",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#e9eae1"
						  }
					  ]
				  },
				  {
					  "featureType": "landscape.natural.landcover",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#d6dab9"
						  }
					  ]
				  },
				  {
					  "featureType": "landscape.natural.terrain",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#d6dab9"
						  }
					  ]
				  },
				  {
					  "featureType": "poi",
					  "elementType": "all",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "poi",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#d6dbba"
						  }
					  ]
				  },
				  {
					  "featureType": "poi.park",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#d6dbba"
						  },
						  {
							  "visibility": "on"
						  }
					  ]
				  },
				  {
					  "featureType": "road",
					  "elementType": "all",
					  "stylers": [
						  {
							  "saturation": -100
						  },
						  {
							  "lightness": 45
						  }
					  ]
				  },
				  {
					  "featureType": "road.highway",
					  "elementType": "all",
					  "stylers": [
						  {
							  "visibility": "simplified"
						  }
					  ]
				  },
				  {
					  "featureType": "road.highway",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "visibility": "on"
						  },
						  {
							  "color": "#c2d16b"
						  }
					  ]
				  },
				  {
					  "featureType": "road.arterial",
					  "elementType": "labels.icon",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "transit",
					  "elementType": "all",
					  "stylers": [
						  {
							  "visibility": "off"
						  }
					  ]
				  },
				  {
					  "featureType": "transit.line",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#c9c9c9"
						  },
						  {
							  "visibility": "on"
						  }
					  ]
				  },
				  {
					  "featureType": "water",
					  "elementType": "all",
					  "stylers": [
						  {
							  "color": "#e0e4ca"
						  },
						  {
							  "visibility": "on"
						  }
					  ]
				  },
				  {
					  "featureType": "water",
					  "elementType": "geometry.fill",
					  "stylers": [
						  {
							  "color": "#edf4c3"
						  }
					  ]
				  }
			  ]
		  });
		  
		  var iconImage = {
			  url: "../img/marker.png",
		  };
		  
		  marker = new google.maps.Marker({
			  map:map,
			  animation: google.maps.Animation.DROP,
			  position: new google.maps.LatLng(39.754045, -105.006408),
			  icon: iconImage,
			});
			
			

		  }
	
      google.maps.event.addDomListener(window, 'load', initialize);
});
