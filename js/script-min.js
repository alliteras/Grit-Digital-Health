$(document).ready(function(){function e(){if($("#map").length){l=new google.maps.Map(document.getElementById("map"),{zoom:14,center:new google.maps.LatLng(39.754045,-105.006408),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#e9eae1"}]},{featureType:"landscape.natural.landcover",elementType:"geometry.fill",stylers:[{color:"#d6dab9"}]},{featureType:"landscape.natural.terrain",elementType:"geometry.fill",stylers:[{color:"#d6dab9"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#d6dbba"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#d6dbba"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#c2d16b"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#c9c9c9"},{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{color:"#e0e4ca"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#edf4c3"}]}]});var e={url:"../img/marker.png"};marker=new google.maps.Marker({map:l,animation:google.maps.Animation.DROP,position:new google.maps.LatLng(39.754045,-105.006408),icon:e})}}var a=function(){$(".team").length&&($(".team-member").click(function(){return $(".team-member").each(function(e){var a=$(this);setTimeout(function(){a.addClass("hide")},70*e)}),setTimeout(function(){$(".content-wrap").addClass("active"),$(".team-overlay").addClass("position"),$(".team").addClass("inactive")},600),$(this).hasClass("joe-select")?$(".joe").addClass("slide"):$(this).hasClass("doug-select")?$(".doug").addClass("slide"):$(this).hasClass("norm-select")?$(".norm").addClass("slide"):$(this).hasClass("mimi-select")?$(".mimi").addClass("slide"):$(this).hasClass("andrew-select")?$(".andrew").addClass("slide"):$(this).hasClass("frank-select")?$(".frank").addClass("slide"):$(this).hasClass("chance-select")?$(".chance").addClass("slide"):$(this).hasClass("nathaan-select")?$(".nathaan").addClass("slide"):$(this).hasClass("paige-select")?$(".paige").addClass("slide"):$(this).hasClass("nolan-select")&&$(".nolan").addClass("slide"),!1}),$(".close").click(function(){return $(".overlay-member").removeClass("slide"),setTimeout(function(){$(".content-wrap").removeClass("active"),$(".team").removeClass("inactive"),$(".team-overlay").removeClass("position")},600),$(window).width()<768&&$(".team").removeClass("inactive"),$(".team-member").each(function(e){var a=$(this);setTimeout(function(){a.removeClass("hide")},70*e)}),!1}))};a();var t=function(){$(".product-feature").length&&$(window).scroll(function(){$(".left img, .right img, .video .wrap").each(function(){var e=$(this).offset().top+$(this).outerHeight();$(window).scrollTop()+$(window).height()>e-350&&$(this).addClass("active")})})};t();var s=function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},600),!1}})};s();var i=function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$("nav").toggleClass("open")}),$("nav a").click(function(){$("nav, #nav-icon").toggleClass("open")})};i();var l;e();var o=function(){$("#main").imagesLoaded(function(){$(".map-element").length?$(".contact, .map").addClass("active"):$("#team").length?$(".team-wrapper").addClass("fadeup-in"):$(".product-hero").length?$(".product-hero-wrapper, .product-hero img").addClass("fadeup-in"):$(".about-hero").length?$(".product-hero-wrapper, .product-hero img").addClass("fadeup-in"):$(".hero-wrap").length&&$("section.hero").addClass("active"),$("#main").removeClass("hidden")})};setTimeout(function(){o()},1e3);var n=function(){window.location.href.indexOf("team")>-1?$(".team-nav").addClass("active"):window.location.href.indexOf("product")>-1?$(".product-nav").addClass("active"):window.location.href.indexOf("about")>-1?$(".about-nav").addClass("active"):window.location.href.indexOf("contact")>-1&&$(".contact-nav").addClass("active")};n();var r=function(){$(".text-link a").removeClass("active")},d=$("body"),c=$("#main"),m=$("html, body"),p="fade",f;f=c.smoothState({forms:"mc-embedded-subscribe-form",onBefore:function(e,a){var t=$("[data-viewport]").first().data("viewport"),s=e.data("target");t=t||0,s=s||0,t===s&&(p="fade"),r()},onStart:{duration:900,render:function(e,a){c.attr("data-transition",p),c.addClass("is-exiting"),m.animate({scrollTop:0})}},onReady:{duration:0,render:function(e,a){e.html(a),o(),e.removeClass("is-exiting"),n()}},onAfter:function(l,o){a(),s(),e(),i(),t()}}).data("smoothState")});