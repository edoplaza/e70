$(document).ready( function($){

	// Selectors
  const desktop = 1200;
	const frame = $('.frame');
  const wrapper = $('.wrapper');
	const pull = $('.pull');
	const logo = $('.logo');
	const nav = $('.nav');
	const content = $('.content');
 	const landing = $('.landing');
  const svgs = $('.svgs');
 	const landingImage = $('.landing__image');
 	const s1 = $('.s1');
 	const s2 = $('.s2');
 	const s3 = $('.s3');
 	const s4 = $('.s4');
 	const s5 = $('.s5');
  const wwd = $('.what-we-do__section');
  const down = $('.landing__down');
  const close = $('.what-we-do__close');

	// Initialize Landing Section Measures
 	let landingHeight = landing.height() + landingImage.height() + 160;
 	landing.css('height', landingHeight);


  if ( window.innerWidth < desktop ) landing.css('height', 'auto');

  //window.addEventListener('resize', () => window.innerWidth >= desktop && setTimeout( () => location.reload(), 100 ));

  window.addEventListener('orientationchange', () => location.reload(), false);



  // Outer Frame functions
	let addColorFrame = () => {
		frame.fadeTo( 400, 1);
	}
	let removeColorFrame = () => {
		frame.fadeTo( 400, 0);
	}
	let pullColorWhite = () => {
		pull.addClass('pull-white');
	}
	let pullColorBlack = () => {
		pull.removeClass('pull-white');
	}
	pull.on('mouseenter', document, () => {
    if ($(window).width() > desktop) {
      addColorFrame();
      pullColorWhite();
    }
	})
	pull.on('mouseleave', document, () => {
    if ($(window).width() > desktop) {
		  removeColorFrame();
		  pullColorBlack();
    }
	});

	frame.on( 'mousedown', function( event ) {
		let windowWidth = $(window).width();
		let mouseRight =  windowWidth - event.pageX;
		let mouseTop = event.pageY;
		if ( mouseRight > 0 && mouseRight < 50) {
			if ( mouseTop > 0 && mouseTop < 50) {
				pull.removeClass('pointer-events-none');
				pull.hasClass('close') ?  pull.removeClass('close') : pull.addClass('close');
				nav.hasClass('open') ? nav.removeClass('open') : nav.addClass('open');
				logo.hasClass('hidden') ? logo.removeClass('hidden') : logo.addClass('hidden');
			}
		}
	});


  // Navigation Functions
  pull.on('click', document, function(){
    pull.hasClass('close') ?  pull.removeClass('close') : pull.addClass('close');
    nav.hasClass('open') ? nav.removeClass('open') : nav.addClass('open');
    logo.hasClass('hidden') ? logo.removeClass('hidden') : logo.addClass('hidden');
  });


	// Main Logo Functions
	let removeLogoColors = () => {
		 logo.removeClass('logo--0 logo--1 logo--2 logo--3 logo--4');
	}
	let addLogoColor = () => {
    setTimeout( function(){
      removeLogoColors();
      logo.addClass('logo--' + Math.floor(Math.random() * 5) );

    }, 500 )

	}

  // Content Scroll Listeners & Effects

  let speed = 700;
  let wait = 700;
  let p0 = s1.position().top;
  let p1 = landingImage.position().top;
  let p2 = landingImage.position().top + (landingImage.height() - $(window).outerHeight() );
  let p3 = s2.position().top;
  let p4 = s3.position().top;
  let p5 = s4.position().top;
  let p6 = s5.position().top;
  let flags = [p0, p1, p2, p3, p4, p5, p6];
  let flag = 0;
  let counter = 0;

  wrapper.on('mousewheel', function(e) {
    if ($(window).width() > desktop ){
      if( e.deltaY < 0) {
        if ( flag == 0 ) {
          flag = 1;
          counter += 1;
          if (counter < 6) addLogoColor();
          if(counter > 6) counter = 6;
          content.animate({ top: -(flags[counter]) }, speed, "easeOutSine", function(){
            setTimeout( () => flag = 0, wait);
          });
        }
      } else if (e.deltaY > 0) {
        if ( flag == 0 ) {
          flag = 1;
          counter -= 1;
          if (counter > 0 ) addLogoColor();
          if (counter < 0) counter = 0;
          content.animate({ top: -(flags[counter]) }, speed, "easeOutSine", function(){
            setTimeout( () => flag = 0, wait);
          });
        }
      }
     }

    counter > 0 ? down.addClass('fadeOut') : down.removeClass('fadeOut');
    counter > 2 ? svgs.addClass('fadeOut') : svgs.removeClass('fadeOut');

  });


	// Expand What We Do Sections

	wwd.on('click', document, function(){
	  if ( $(this).hasClass('expanded' )){
	    $(this).removeClass('expanded');
      $(this).find('p').removeClass('fadeIn');
      close.removeClass('visible');
	  } else {
	    wwd.removeClass('expanded');
      wwd.find('p').removeClass('fadeIn');
	    $(this).addClass('expanded');
      $(this).find('p').addClass('fadeIn');
      close.addClass('visible');
	  }
	});


  close.on('click', document, ()=> {
    wwd.removeClass('expanded');
    wwd.find('p').removeClass('fadeIn');
    close.removeClass('visible');
  });

  // Campaigns Carousel
  $('.fade').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    //fade: true,
    cssEase: 'ease-out'
  });


  $('.slick-dots li').on('click', document, () => addLogoColor() );



});
