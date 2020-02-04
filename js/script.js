//SMOOTH PAGE SCROLL
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




$(document).ready(

  function () {

    $("html").niceScroll({
      cursorcolor: "#222",
      scrollspeed: "100",
      cursorborder: "1px solid #222",
      horizrailenabled: "false",
      cursorborderradius: "0px"
    });

  }

);

new WOW().init();



/*Preloader*/
//<![CDATA[
$(window).load(function () { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})
//]]>