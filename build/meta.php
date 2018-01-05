<!--Meta data to be inported in the header for Grit - You at College-->   	
    <?php //variables
		$url = $_SERVER["REQUEST_URI"]; 
		$prod =  "/product/";
		$team = "/team/";
		$contact = "/contact/";
	?>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
     <?php
		if($url === $prod) {
			echo "<meta property='og:title' content='Designed to build resilience and campus connections | YOU at College '>" . $pos; 
		}else if($url === $team){
			echo "<meta property='og:title' content='Created by experts in behavioral health, wellness, technology, and marketing communications | YOU at College'>" . $pos; 
		}else if($url === $contact){
			echo "<meta property='og:title' content='Contact us to request a demo | YOU at College'>" . $pos; 
		}else if($url === $home){
			echo "<meta property='og:title' content='YOU at College | The tool to support student success and well-being'>" . $pos; 
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
			echo "<title>Designed to build resilience and campus connections | YOU at College </title>" . $pos; 
		}else if($url === $team){
			echo "<title>Created by experts in behavioral health, wellness, technology, and marketing communications | YOU at College</title>" . $pos; 
		}else if($url === $contact){
			echo "<title>Contact us to request a demo | YOU at College </title>" . $pos; 
		}else{
			echo "<title>YOU at College | The tool to support student success and well-being</title>" . $pos; 
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