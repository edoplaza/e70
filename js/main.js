$(document).ready( function($){

  $('.pull').on('click', function(){
    $('.pull').hasClass('close') ?  $('.pull').removeClass('close') : $('.pull').addClass('close');
    $('.nav').hasClass('open') ? $('.nav').removeClass('open') : $('.nav').addClass('open');
    $('.header__logo').hasClass('visible') ? $('.header__logo').removeClass('visible') : $('.header__logo').addClass('hidden');
  });

  $(window).resize(function(){
    $('.pull').removeClass('close');
    $('.nav').removeClass('open');
    $('.header__logo').removeClass('show');
  });



  $(window).scroll(function() {


  });


});
