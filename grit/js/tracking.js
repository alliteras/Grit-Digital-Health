// JavaScript Document
$( document ).ready(function() {

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56096290-1', 'auto');
  ga('send', 'pageview');
  
//GA Event Tracking
  function trackEvent(label){
	  ga('send', 'event', 'Grit-Website', 'click', label);
  }
  
  $('#more').click(function(){
	  trackEvent('More-About-You');	
  });
  
  $('#brochure').click(function(){
	  trackEvent('Brochure-Download');	
  });
  
  $('#white-paper').click(function(){
	  trackEvent('White-Paper-Download');	
  });
  
  $('#mc-embedded-subscribe').click(function(){
	  trackEvent('eCRM-Sign-Up');	
  });
  
  $('.contact-link').click(function(){
	  trackEvent('Contact');	
  });
  
   $('.joe-select').click(function(){
	  trackEvent('Joe-Team-Member-Click');	
  });

   $('.norm-select').click(function(){
	  trackEvent('Norm-Team-Member-Click');	
  });

   $('.doug-select').click(function(){
	  trackEvent('Doug-Team-Member-Click');	
  });

   $('.mimi-select').click(function(){
	  trackEvent('Mimi-Team-Member-Click');	
  });

   $('.brit-select').click(function(){
	  trackEvent('Brit-Team-Member-Click');	
  });

   $('.andrew-select').click(function(){
	  trackEvent('Andrew-Team-Member-Click');	
  });

   $('.frank-select').click(function(){
	  trackEvent('Frank-Team-Member-Click');	
  });

   $('.kyle-select').click(function(){
	  trackEvent('Kyle-Team-Member-Click');	
  });

   $('.ross-select').click(function(){
	  trackEvent('Ross-Team-Member-Click');	
  });

  
});

