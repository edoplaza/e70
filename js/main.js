$(document).ready( function($){

  $('.pull').on('click', function(){
    $('.pull').hasClass('close') ?  $('.pull').removeClass('close') : $('.pull').addClass('close');
    $('.nav').hasClass('open') ? $('.nav').removeClass('open') : $('.nav').addClass('open');
    $('.header__logo').hasClass('hidden') ? $('.header__logo').removeClass('hidden') : $('.header__logo').addClass('hidden');
  });

//   $(window).resize(function(){
//     $('.pull').removeClass('close');
//     $('.nav').removeClass('open');
//     $('.header__logo').removeClass('show');
//   });



// Change Logo Colors

  let removeLogoColors = () => {
    $('.logo').removeClass('logo_green logo_red logo_black');
  }

  let logoColor = color => {
    $('.logo').addClass('logo_'+ color);
  }

  let changeLogoColors = () => {
    let distanceS1 = $('.S1').offset().top;
    let distanceS2 = $('.S2').offset().top;

    removeLogoColors();

    if ( $(this).scrollTop() < distanceS2 ) {
        logoColor('green');
    }
    else if ( $(this).scrollTop() >= distanceS2 ) {
       logoColor('black');
    }
  }


  // Expand What We Do Sections

  let wwd1 = $('.what-we-do__section--s1');
  let wwd2 = $('.what-we-do__section--s2');
  let wwd3 = $('.what-we-do__section--s3');

  let removeExpanded = () => {
    wwd1.removeClass('expanded');
    wwd2.removeClass('expanded');
    wwd3.removeClass('expanded');
  }

  wwd1.on('click', document, function(){
    if ( wwd1.hasClass('expanded' )){
      wwd1.removeClass('expanded')
    } else {
      removeExpanded();
      wwd1.addClass('expanded');
    }

  });

  wwd2.on('click', document, function(){
     if ( wwd2.hasClass('expanded' )){
      wwd2.removeClass('expanded')
    } else {
      removeExpanded();
      wwd2.addClass('expanded');
    }
  });

  wwd3.on('click', document, function(){

     if ( wwd3.hasClass('expanded' )){
      wwd3.removeClass('expanded')
    } else {
      removeExpanded();
      wwd3.addClass('expanded');
    }
  });



  $(window).scroll(function() {
    changeLogoColors();
    removeExpanded();
  });

  $(window).resize(function() {
     changeLogoColors();
     removeExpanded();
  });






});
