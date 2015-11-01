/**
 * Nav Menu color animation
 * ===============================
**/

$(window).bind('scroll',function(e){
  navMenuScroll();
});

function navMenuScroll(){
  var scrolled = $(window).scrollTop();
  if (scrolled > 685) {
    $('#nav-menu').css('fill', '#586373');
  }
  else if (scrolled < 685 ) {
    $('#nav-menu').css('fill', '#FFF');
  }
}
