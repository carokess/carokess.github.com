// Borrowed from tutorial: 
// http://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/

$(function() {
  $('header.home a').bind('click',function(event){
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 60
    }, 1000,'easeInOutExpo');

    $('nav a').removeClass('selected');

    $anchor.addClass('selected');

    event.preventDefault();
  });
});
