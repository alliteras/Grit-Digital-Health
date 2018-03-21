<!--Meta data to be inported in the header for Grit Digital Health-->   	
    <?php //variables
		$url = $_SERVER["REQUEST_URI"]; 
		$prod =  "/product/";
		$team = "/team/";
		$contact = "/contact/";
		$about = "/about/";
		$news = "/newsroom/";
	?>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php /*?>remove when we go live<?php */?>
	<meta name="robots" content="noindex,nofollow">

     <?php
		if($url === $prod) {
			echo "<meta property='og:title' content='Tools that build grit and resilience | Grit Digital Health'>" . $pos; 
		}else if($url === $team){
			echo "<meta property='og:title' content='CCreated by experts in behavioral health, wellness, technology and marketing communications | Grit Digital Health'>" . $pos; 
		}else if($url === $contact){
			echo "<meta property='og:title' content='Inquire about our customized solutions | Grit Digital Health'>" . $pos; 
		}else if($url === $home){
			echo "<meta property='og:title' content='Grit Digital Health | Technology that helps people thrive'>" . $pos; 
		}else if($url === $news){
			echo "<meta property='og:title' content='Inquire about our customized solutions | Grit Digital Health'>" . $pos; 
		}else if($url === $about){
			echo "<meta property='og:title' content='Healthier. Grittier. Worthier. | Grit Digital Health'>" . $pos; 
		}
    ?> 
    <meta property="og:title" content="Grit Digital Health">
    <meta property="og:site_name" content="Grit Digital Health">
    <meta property="og:url" content="http://gritdigitalhealth.com/">
    <meta property="og:description" content="YOU at College - A student well-being portal with tools, content and resources built to match the heartbeat of student life.">
    <meta property="og:type" content="business">
    <meta property="og:image" content="http://gritdigitalhealth.com/img/product-hero-inline.jpg">
    <?php
		if($url === $prod) {
			echo "<title>Tools that build grit and resilience | Grit Digital Health</title>" . $pos; 
		}else if($url === $team){
			echo "<title>Created by experts in behavioral health, wellness, technology and marketing communications | Grit Digital Health</title>" . $pos; 
		}else if($url === $contact){
			echo "<title>Inquire about our customized solutions | Grit Digital Health </title>" . $pos; 
		}else if($url === $about){
			echo "<title>Healthier. Grittier. Worthier. | Grit Digital Health </title>" . $pos; 
		}else if($url === $news){
			echo "<title>Inquire about our customized solutions | Grit Digital Health </title>" . $pos; 
		}else{
			echo "<title>Grit Digital Health | Technology that helps people thrive</title>" . $pos; 
		}
    ?> 
    <link rel="icon" href="favicon/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="description" content="Grit Digital Health, creator of the YOU portal, leverages innovation and creativity to create mental health technology that is relatable and accessible."/>