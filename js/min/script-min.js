$(document).ready(function(){function e(){if($("#map").length){o=new google.maps.Map(document.getElementById("map"),{zoom:14,center:new google.maps.LatLng(39.754045,-105.006408),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#e9eae1"}]},{featureType:"landscape.natural.landcover",elementType:"geometry.fill",stylers:[{color:"#d6dab9"}]},{featureType:"landscape.natural.terrain",elementType:"geometry.fill",stylers:[{color:"#d6dab9"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#d6dbba"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#d6dbba"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#c2d16b"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#c9c9c9"},{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{color:"#e0e4ca"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#edf4c3"}]}]});var e={url:"../img/marker.png"};marker=new google.maps.Marker({map:o,animation:google.maps.Animation.DROP,position:new google.maps.LatLng(39.754045,-105.006408),icon:e})}}var t=function(){$(".team").length&&($(".team-member").click(function(){return $(".team-member").each(function(e){var t=$(this);setTimeout(function(){t.addClass("hide")},70*e)}),setTimeout(function(){$(".content-wrap").addClass("active"),$(".team-overlay").addClass("position"),$(".team").addClass("inactive")},600),$(this).hasClass("joe-select")?$(".joe").addClass("slide"):$(this).hasClass("doug-select")?$(".doug").addClass("slide"):$(this).hasClass("norm-select")?$(".norm").addClass("slide"):$(this).hasClass("mimi-select")?$(".mimi").addClass("slide"):$(this).hasClass("brit-select")?$(".brit").addClass("slide"):$(this).hasClass("andrew-select")?$(".andrew").addClass("slide"):$(this).hasClass("frank-select")?$(".frank").addClass("slide"):$(this).hasClass("kyle-select")?$(".kyle").addClass("slide"):$(this).hasClass("ross-select")&&$(".ross").addClass("slide"),!1}),$(".close").click(function(){return $(".overlay-member").removeClass("slide"),setTimeout(function(){$(".content-wrap").removeClass("active"),$(".team").removeClass("inactive"),$(".team-overlay").removeClass("position")},600),$(window).width()<768&&$(".team").removeClass("inactive"),$(".team-member").each(function(e){var t=$(this);setTimeout(function(){t.removeClass("hide")},70*e)}),!1}))};t();var a=function(){window.location.href.indexOf("about")>-1&&$("html, body").animate({scrollTop:$("#about").offset().top},1e3)};a();var s=function(){$(".product-feature").length&&$(window).scroll(function(){$(".left img, .right img").each(function(){var e=$(this).offset().top+$(this).outerHeight(),t=$(window).scrollTop()+$(window).height();t>e-150&&$(this).addClass("active")})}),$(".grid").length&&$(window).scroll(function(){$(".grid").each(function(){var e=$(this).offset().top+$(this).outerHeight()-225,t=$(window).scrollTop()+$(window).height();t>e&&$(".grid .hero, .grid .support1, .grid .support2 img").addClass("active")})})};s();var i=function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},600),!1}})};i();var l=function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$("nav").toggleClass("open")}),$("nav a").click(function(){$("nav, #nav-icon").toggleClass("open")})};l();var o;e();var n=function(){$("#main").imagesLoaded(function(){$(".map-element").length?$(".contact, .map").addClass("active"):$("#team").length?$(".team-wrapper").addClass("fadeup-in"):$(".product-hero").length?$(".product-hero-wrapper, .product-hero img").addClass("fadeup-in"):$(".hero-wrap").length&&$("section.hero").addClass("active"),$("#main").removeClass("hidden")})};setTimeout(function(){n()},1e3);var r=$("body"),d=$("#main"),c=$("html, body"),m="fade",p;p=d.smoothState({forms:"mc-embedded-subscribe-form",onBefore:function(e,t){var a=$("[data-viewport]").first().data("viewport"),s=e.data("target");a=a?a:0,s=s?s:0,a===s&&(m="fade")},onStart:{duration:900,render:function(e,t){d.attr("data-transition",m),d.addClass("is-exiting"),c.animate({scrollTop:0})}},onReady:{duration:0,render:function(e,t){e.html(t),n(),e.removeClass("is-exiting")}},onAfter:function(o,n){t(),i(),e(),l(),s(),a()}}).data("smoothState")});