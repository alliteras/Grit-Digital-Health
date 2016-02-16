<nav>
  <ul class="desktop">
   <?php echo '
      <li class="text-link"><a href="'.SCRIPT_ROOT.'product/" data-target="-1" class="product-link">PRODUCT</a></li>
      <li class="text-link"><a href="'.SCRIPT_ROOT.'team/" data-target="-1">TEAM</a></li>
      <li><img src="'.SCRIPT_ROOT.'img/GritLogo.svg" alt="grit logo"/></li>
      <li class="text-link"><a href="'.SCRIPT_ROOT.'#about"><span>ABOUT</span></a></li>
      <li class="text-link"><a href="'.SCRIPT_ROOT.'contact/" data-target="1">CONTACT</a></li>
	  ';?>
  </ul>
  </nav>
  <?php echo ' <a href="'.SCRIPT_ROOT.'" class="mobile logo"><img src="'.SCRIPT_ROOT.'img/GritLogo.svg" alt="grit logo"/></a> ';?>
  <div id="nav-icon" class="mobile">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav class="mobile">
      <ul>
		<?php echo '
          <li><a href="'.SCRIPT_ROOT.'">HOME</a></li>
          <li><a href="'.SCRIPT_ROOT.'product/" class="product-link">PRODUCT</a></li>
          <li><a href="'.SCRIPT_ROOT.'team/">TEAM</a></li> 
          <li><a href="'.SCRIPT_ROOT.'#about">ABOUT</a></li>
          <li><a href="'.SCRIPT_ROOT.'contact/">CONTACT</a></li> 
		  ';?>
      </ul>
  </nav>