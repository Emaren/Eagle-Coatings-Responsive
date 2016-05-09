// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){


  // $("img[src='/assets/thermal.png'], .thermal-text").click(function() {
  //   $( '.thermal-parallax' ).show( "slow" );
  // });

  $("img[src='/assets/co.png'], .corrosion-text").click(function() {
    $( '.corrosion-parallax' ).show( "slow" );
  });

  $("img[src='/assets/fire.png'], .fire-text").click(function() {
    $( '.fire-parallax' ).show( "slow" );
  });



  $("img[src='/assets/thermal.png'], .thermal-text").click(function(){
    $("img[src='/assets/co.png'], .corrosion-text").fadeOut({
      opacity: .5,
    }, 1500 );
    $("img[src='/assets/fire.png'], .fire-text").fadeOut({
      opacity: .5,
    }, 1500 );
    $("img[src='/assets/thermal.png'], .thermal-text").animate({
      left: "+=24%"
    }, 1000 );
    $("p.intro").fadeOut({
      opacity: .5,
    }, 1500 );
    $(".mainFooter").fadeOut({
      opacity: .5,
    }, 1500 );
    $("img[src='/assets/phone.png']").fadeOut({
      opacity: .5,
    }, 1500 );
    $(".thermal-parallax").show('scale', 2500);
    // $("p.intro").hide('clip', 2000);
    // $(".footer-container").hide('clip', 2000);
    // $(".page-opening").show('scale', 1900);
    // $(".page-opening-bottom").show('scale', 1900);
  });


$(".corrosion-img-title").click(function(){
  $(".thermal-img-title").fadeOut(1000)
  $(".thermal-white").fadeOut(1000)
  $(".thermal-box").fadeOut(1000)
  $(".thermal-img").fadeOut(1000)
  $(".thermal-vid").fadeOut(1000)
  $(".play-thermal").fadeOut(1000)
  $(".fire-img-title").fadeOut(1000)
  $(".fire-white").fadeOut(1000)
  $(".fire-box").fadeOut(1000)
  $(".fire-img").fadeOut(1000)
  $(".fire-vid").fadeOut(1000)
  $(".play-fire").fadeOut(1000)
  $(".corrosion-img-title").animate({
    height: "100%",
    width: "100%",
  }, 300 );
        $(".corrosion-white").animate({

  }, 300 );
        $(".corrosion-box").animate({

  }, 300 );
        $(".corrosion-img").animate({
    height: "100%",
    width: "100%",
  }, 300 );
        $(".corrosion-vid, .play-corrosion").animate({
    height: "100%",
    width: "100%",
  }, 300 );
        $(".play-corrosion").animate({
    height: "100%",
    width: "100%",
  }, 300 );
  $(".intro").hide('scale', 400);
  $(".footer-container").hide('scale', 100);
  $(".thermal-parallax").show('scale', 2500);
});




$(".fire-img-title").click(function(){
  $(".thermal-img-title").fadeOut(1000)
  $(".thermal-white").fadeOut(1000)
  $(".thermal-box").fadeOut(1000)
  $(".thermal-img").fadeOut(1000)
  $(".thermal-vid").fadeOut(1000)
  $(".play-thermal").fadeOut(1000)
  $(".corrosion-img-title").fadeOut(1000)
  $(".corrosion-white").fadeOut(1000)
  $(".corrosion-box").fadeOut(1000)
  $(".corrosion-img").fadeOut(1000)
  $(".corrosion-vid").fadeOut(1000)
  $(".play-corrosion").fadeOut(1000)
  $(".fire-img-title").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-white").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-box").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-img").animate({
    left: "-=515px"
  }, 1000 );
  $(".fire-vid").animate({
    left: "-=515px"
  }, 1000 );
  $(".play-fire").animate({
    left: "-=515px"
  }, 1000 );
  $(".intro").hide('scale', 400);
  $(".footer-container").hide('scale', 500);
  $(".thermal-parallax").show('scale', 1000);
});


});
