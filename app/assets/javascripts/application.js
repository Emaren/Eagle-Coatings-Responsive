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

  $("img[src='/assets/thermal.png'], .thermal-text").click(function() {
    $( '.thermal-parallax' ).show( "slow" );
  });

  $("img[src='/assets/co.png'], .corrosion-text").click(function() {
    $( '.corrosion-parallax' ).show( "slow" );
  });

  $("img[src='/assets/fire.png'], .fire-text").click(function() {
    $( '.fire-parallax' ).show( "slow" );
  });




});
