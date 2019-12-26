jQuery(document).ready(function () {
  //Responsive menu
  jQuery('#smallMenuIcon').click(function(){
  var smallMenu   = jQuery('#smallMenu');
  var smallMenuUl = jQuery('.cbtHeader__navList-container-small');

  if(smallMenu.css('width') === '0px'){
    smallMenuUl.css('display','block');
    smallMenu.css('height','calc(100vh + 100px)');
    smallMenu.animate({
      width: '60%'
    }, 150);
  }
  });

  jQuery('#close').click(function(){
  var smallMenu = jQuery('#smallMenu');
  var smallMenuUl = jQuery('.cbtHeader__navList-container-small');

  if(smallMenu.css('width') !== '0px'){
    smallMenu.animate({
      width: '0'
    }, 150, function(){
      smallMenu.css('height','0');
      smallMenuUl.css('display','none');
      });
  }
  });
})
