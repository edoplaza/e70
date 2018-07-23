$(document).ready( function($){

	// Selectors
  const desktop = 1000;
	const frame = $('.frame');
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


  if ($(window).width() < desktop ) {
    landing.css('height', 'auto');
  }

  $(window).resize(function(){
    // if ($(window).width() >= desktop ) {
    //   setTimeout( function(){location.reload(); }, 100 );
    // }
  })



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
		 logo.removeClass('logo--green logo--red logo--black logo--blue logo--transparent');
	}
	let addLogoColor = color => {

    setTimeout( function(){
      removeLogoColors();
      logo.addClass('logo--'+ color);

    }, 500 )

	}


  // Content Scroll Listeners & Effects


  const speed = 700;
  let p0 = s1.position().top;
  let p1 = landingImage.position().top;
  let p2 = landingImage.position().top + (landingImage.height() - $(window).outerHeight() );
  let p3 = s2.position().top;
  let p4 = s3.position().top;
  let p5 = s4.position().top;
  let p6 = s5.position().top;



  const flags = [p0, p1, p2, p3, p4, p5, p6];

  let flag = 0;
  let counter = 0;

  let wrapper = document.getElementById("wrapper");

  if (wrapper.addEventListener) {
    wrapper.addEventListener("mousewheel", MouseWheelHandler, false);
    wrapper.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  }
  else wrapper.attachEvent("onmousewheel", MouseWheelHandler);

  function MouseWheelHandler(e) {
    var e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    if ($(window).width() > desktop ){
      if( delta == -1) {
        if ( flag == 0 ) {
          flag = 1;
          counter += 1;
          if(counter > 6) counter = 6;
          content.animate({ top: -(flags[counter]) }, speed, "easeInOutCubic", function(){
            setTimeout( () => flag = 0 , 500);
          });
        }
      } else {
        if ( flag == 0 ) {
          flag = 1;
          counter -= 1;
          if (counter < 0) counter = 0;
          content.animate({ top: -(flags[counter]) }, speed, "easeInOutCubic", function(){
            setTimeout( () => flag = 0 , 500);
          });
        }
      }
     }

    counter >= 1 ? down.hide() : down.show();
    counter >= 3 ? svgs.addClass('fadeOut') : svgs.removeClass('fadeOut');
    counter == 0 && addLogoColor('green');
    counter == 1 && addLogoColor('blue');
    counter == 3 && addLogoColor('black');
    counter == 4 && addLogoColor('green');
    counter == 5 && addLogoColor('red');
    counter == 6 && addLogoColor('black');
  }


	// Expand What We Do Sections

	wwd.on('click', document, function(){
	  if ( $(this).hasClass('expanded' )){
	    $(this).removeClass('expanded');
      close.removeClass('visible');
	  } else {
	    wwd.removeClass('expanded');
	    $(this).addClass('expanded');
      close.addClass('visible');
	  }
	});


  close.on('click', document, ()=> {
    wwd.removeClass('expanded');
    close.removeClass('visible');
  });


});
