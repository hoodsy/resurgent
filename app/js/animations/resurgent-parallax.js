/**
 * Resurgent logo scroll animation
 * ===============================
**/

$(window).bind('scroll',function(e){
  parallaxScroll();
});

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  // $('.transition-overlay').css('top',(0-(scrolled*.5))+'px');
  $('.transition-hero').css('top',(500-(scrolled*.3))+'px');
  console.log(scrolled);
}
