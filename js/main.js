$(document).ready( function($){

	// Selectors
  const desktop = 1200;
	const frame = $('.frame');
	const pull = $('.pull');
	const logo = $('.logo');
	const nav = $('.nav');
	const headerLogo = $('.header__logo');
	const content = $('.content');
 	const landing = $('.landing');
  const landingInner = $('.landing__inner');
 	const landingImage = $('.landing__image');
 	const s1 = $('.s1');
 	const s2 = $('.s2');
 	const s3 = $('.s3');
 	const s4 = $('.s4');
 	const s5 = $('.s5');
  const down = $('.landing__down');
  const close = $('.what-we-do__close');


	// Initialize Landing Section Measures
 	let landingHeight = landing.height() + landingImage.height() + 160;
 	landing.css('height', landingHeight);

  if ($(window).width() < desktop ) {
    landing.css('height', 'auto');
  }


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
				headerLogo.hasClass('hidden') ? headerLogo.removeClass('hidden') : headerLogo.addClass('hidden');
			}
		}
	});


  // Navigation Functions
  pull.on('click', document, function(){
    pull.hasClass('close') ?  pull.removeClass('close') : pull.addClass('close');
    nav.hasClass('open') ? nav.removeClass('open') : nav.addClass('open');
    headerLogo.hasClass('hidden') ? headerLogo.removeClass('hidden') : headerLogo.addClass('hidden');
  });


	// Main Logo Functions
	let removeLogoColors = () => {
		 logo.removeClass('logo--green logo--red logo--black logo--blue logo--transparent');
	}
	let addLogoColor = color => {
		removeLogoColors();
		 logo.addClass('logo--'+ color);
	}


  // Content Scroll Listeners & Effects


  const speed = 1000;
  const d0 = s1.offset().top;
  const d1 = s1.offset().top - landingImage.offset().top;
  const d2 = s1.offset().top - landingImage.offset().top - (landingImage.height() - $(window).outerHeight() );
  const d3 = s1.offset().top - s2.offset().top;
  const d4 = s1.offset().top - s3.offset().top;
  const d5 = s1.offset().top - s4.offset().top;
  const d6 = s1.offset().top - s5.offset().top;
  const flags = [d0, d1, d2, d3, d4, d5, d6];

  let old = 0;
  let current = 0;
  let flag = 0;
  let counter = 0;
  let direction = 'up';


  content.on('wheel', function(e){

    let s1Pos = s1.position().top;
    let landingImgPos = s1Pos + $(window).outerHeight() - 5;
  	let s2Pos = s2.position().top;
  	let s3Pos = s3.position().top;
  	let s4Pos = s4.position().top;
  	let s5Pos = s5.position().top;

    s1Pos < -10 ? down.hide() : down.show();

    s2Pos <= $(window).height() ? $('.landing__svg').addClass('fadeOut') : $('.landing__svg').removeClass('fadeOut');

    // Change Logo colors
        if(landingImgPos >= 0 ) {
          addLogoColor('green');
        }

        if(landingImgPos < 0 ) {
          addLogoColor('blue');
        }

        if(s2Pos <= 0 ) {
          addLogoColor('black');
        }

        if(s3Pos <= 0 ) {
          addLogoColor('green');
        }

        if(s4Pos <= 0 ) {
          addLogoColor('red');
        }

        if(s5Pos <= 75 ) {
          addLogoColor('black');
        }



    //Magnetic Scroll

    if ($(window).width() > desktop ){

      //Detect if going up or down
      old = current;
      current = s1Pos;

      if (old > current) {
        direction = 'up'
      }
      else if (old < current ) {
        direction = 'down';
      }

      if( direction == 'up') {
        if ( flag == 0 ) {
          flag = 1;
          counter += 1;
          content.animate({ scrollTop: -(flags[counter]) }, speed, "easeOutQuart", function(){
            setTimeout( () => flag = 0 , 300);
            console.log(counter);
          });
        }
      }
      else if ( direction == 'down') {
        if ( flag == 0 ) {
          flag = 1;
          counter -= 1;
          content.animate({ scrollTop: -(flags[counter]) }, speed, "easeOutQuart", function(){
            setTimeout( () => flag = 0 , 300);
          });
        }
      }
     }


  });




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
	    wwd1.removeClass('expanded');
      close.removeClass('visible');
	  } else {
	    removeExpanded();
	    wwd1.addClass('expanded');
      close.addClass('visible');
	  }

	});

	wwd2.on('click', document, function(){
	   if ( wwd2.hasClass('expanded' )){
	    wwd2.removeClass('expanded');
      close.removeClass('visible');
	  } else {
	    removeExpanded();
	    wwd2.addClass('expanded');
      close.addClass('visible');
	  }
	});

	wwd3.on('click', document, function(){

	   if ( wwd3.hasClass('expanded' )){
	    wwd3.removeClass('expanded');
      close.removeClass('visible');
	  } else {
	    removeExpanded();
	    wwd3.addClass('expanded');
      close.addClass('visible');
	  }
	});

  close.on('click', document, ()=> {
    removeExpanded();
    close.removeClass('visible');

  });

});



