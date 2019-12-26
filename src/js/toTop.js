jQuery(document).ready(function () {
  var zeroScroll = jQuery(window).height();
  var topButton = jQuery('#toTop');

  //Smooth to top scroll
  topButton.click(function(e){
    e.preventDefault();

    jQuery('body,html').animate({
      scrollTop: 0
    }, 1100);
  });

  jQuery(window).scroll(function(){

    let scrollLocation = jQuery(this).scrollTop();

    if(zeroScroll <= scrollLocation){
      topButton.show('slow');
    }else if(scrollLocation <= zeroScroll){
      topButton.hide('slow');
    }
  });

});
