// JavaScript Document
$( document ).ready(function() {
	
	//check for team page
	var teamControl = function() {
	if ($('.team').length) {		
		//team member tray open
		$('.team-member').click(function(){
			//fade out each team member one at a time
			$('.team-member').each(function(i) {
				var $li = $(this);
				setTimeout(function() {
				  $li.addClass('hide');
				}, i*70); // delay 70 ms
			  });
			
			setTimeout(function(){
				//adjust height of containing div
				$('.content-wrap').addClass('active');
				//set the z index so the overlay is clickable
				$('.team-overlay').addClass('position');
				//update the height of the team member div so it's not visable below the overlay
				$('.team').addClass('inactive');
			}, 600);
			//team member check and order to slide out
			if ($(this).hasClass('joe-select')){
				$('.joe').addClass('slide');
			}
			else if ($(this).hasClass('doug-select')){
				$('.doug').addClass('slide');
			}
			else if ($(this).hasClass('norm-select')){
				$('.norm').addClass('slide');
			}
			else if ($(this).hasClass('mimi-select')){
				$('.mimi').addClass('slide');
			}
			else if ($(this).hasClass('brit-select')){
				$('.brit').addClass('slide');
			}
			else if ($(this).hasClass('andrew-select')){
				$('.andrew').addClass('slide');
			}
			else if ($(this).hasClass('frank-select')){
				$('.frank').addClass('slide');
			}
			else if ($(this).hasClass('kyle-select')){
				$('.kyle').addClass('slide');
			}
			else if ($(this).hasClass('ross-select')){
				$('.ross').addClass('slide');
			}
			return false;
		});
		//close overlay functionality
		$('.close').click(function(){
			//turn off overlay
			//slide the pannels back out
			$('.overlay-member').removeClass('slide');			
			setTimeout(function(){
					//reset height of containing div
					$('.content-wrap').removeClass('active');
					//restore team members section to normal size
					$('.team').removeClass('inactive');
					//reset the z index to make the team members clickable
					$('.team-overlay').removeClass('position');
			}, 600);
			//fix for mobile - resets the footer faster otherwise the footer may be jank city
			if ($(window).width() < 768) {$('.team').removeClass('inactive');}
			//fade the members back in
			 $('.team-member').each(function(i) {
				var $li = $(this);
				setTimeout(function() {
				  $li.removeClass('hide');
				}, i*70); // delay 100 ms
			  });
			
			return false;
		});
	
		}
	};
	teamControl();
	
	//about section fix
	var aboutScroll = function() {
		if(window.location.href.indexOf("about") > -1) {
		   $("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
		}
	};
	aboutScroll();
	
	
	var scrollWatch = function() {
		//product page
		if ($('.product-feature').length) {		
			//inview actions
			$(window).scroll( function(){
			/* Check the location of each desired element */
			$('.left img, .right img').each( function(){
				
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				/* If the object is completely visible in the window, fade it in */
				if( bottom_of_window > bottom_of_object -150){
					$(this).addClass('active');
				}else{
					//$(this).removeClass('active');
				}
				
			}); 
		
		});
		}
		
		//home page grid
			//inview actions
		if ($('.grid').length) {		
			$(window).scroll( function(){
			/* Check the location of each desired element */
			$('.grid').each( function(){
				
				var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 225;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				/* If the object is completely visible in the window, fade it in */
				if( bottom_of_window > bottom_of_object){
					$('.grid .hero, .grid .support1, .grid .support2 img').addClass('active');
				}else{
					//$('.grid .hero, .grid .support1, .grid .support2 img').removeClass('active');
				}
				
			}); 
		
		});
		}
	};
	
	scrollWatch();

	//smooth Scroll to anchor
	var reAnchor = function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 600);
			return false;
		  }
		}
	  });
	};
	reAnchor();
	
	//mobile nav icon toggle
	var mobileAnchors = function() {
		$('#nav-icon').click(function(){
			$(this).toggleClass('open');
			$('nav').toggleClass('open');
		});
		//close nav on selction
		$('nav a').click(function(){
			$('nav, #nav-icon').toggleClass('open');
		});
	};
	mobileAnchors();
	
	//paralax scroll
	//var parallax = function() {
//		if ($('#about').length) {		
//			(function(){
//			  var parallax = document.querySelectorAll(".parallax"),
//				  speed = -0.20;
//			  window.onscroll = function(){
//				[].slice.call(parallax).forEach(function(el,i){
//			
//				  var windowYOffset = window.pageYOffset,
//					  elBackgrounPos = "center " + (windowYOffset * speed) + "px";
//			
//				  el.style.backgroundPosition = elBackgrounPos;
//			
//				});
//			  };
//			})();
//		}
//		if ($('.product-feature').length) {		
//			(function(){
//			  var parallax = document.querySelectorAll(".parallax"),
//				  speed = .5;
//			  window.onscroll = function(){
//				[].slice.call(parallax).forEach(function(el,i){
//			
//				  var windowYOffset = window.pageYOffset,
//					  elBackgrounPos = "center " + (windowYOffset * speed) + "px";
//			
//				  el.style.backgroundPosition = elBackgrounPos;
//			
//				});
//			  };
//			})();
//		}
//		
//	};
//	parallax();
		
	
	//map js
	var map;
	function initialize() {
	if ($('#map').length) {		
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
		}
	initialize();

	//fade in content when loaded
	var pageLoader = function() {
	$('#main').imagesLoaded( function() {
		//setTimeout(function(){
			if ($('.map-element').length) {		
				$('.contact, .map').addClass('active');
			}else if($('#team').length){
				$('.team-wrapper').addClass('fadeup-in');
			}else if($('.product-hero').length){
				$('.product-hero-wrapper, .product-hero img').addClass('fadeup-in');
			}else if($('.hero-wrap').length){
				$('section.hero').addClass('active');
			}
			$('#main').removeClass('hidden');
		//}, 1000);
	});
	};
	setTimeout(function(){
		pageLoader();
	}, 1000);

	
	 // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
			forms: 'mc-embedded-subscribe-form',
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } 
            },
            onStart: {
                duration: 900,
                render: function (url, $container) {
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    $site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
					//$main.imagesLoaded( function() {
					  pageLoader();
					  $container.removeClass('is-exiting');
					//});
                    
                }
            },
			 onAfter: function($container, $newContent) {
				 teamControl();
				 reAnchor();
				 initialize();
				 mobileAnchors();
				 scrollWatch();
				 aboutScroll();
			 }
        }).data('smoothState');
	 });