

  $(document).ready( function($){

	// Selectors
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


  //content.animate({ scrollTop: 0 }, 0);

	// Initialize Landing Section Measures
 	let landingHeight = landing.height() + landingImage.height() + 160;
 	landing.css('height', landingHeight);


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
		addColorFrame();
		pullColorWhite();
	})
	pull.on('mouseleave', document, () => {
		removeColorFrame();
		pullColorBlack();
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


  //Navigation Functions
  pull.on('click', document, function(){
    pull.hasClass('close') ?  pull.removeClass('close') : pull.addClass('close');
    nav.hasClass('open') ? nav.removeClass('open') : nav.addClass('open');
    headerLogo.hasClass('hidden') ? headerLogo.removeClass('hidden') : headerLogo.addClass('hidden');
  });



	// Main Logo Functions
	let removeLogoColors = () => {
		 logo.removeClass('logo--green logo--red logo--black logo--blue');
	}

	let addLogoColor = color => {
		removeLogoColors();
		 logo.addClass('logo--'+ color);
	}


 let stop2 = 0;
 let stop3 = 0;
 let stop4 = 0;


 function initializeStops(){
  stop2 = 1;
  stop3 = 1;
  stop4 = 1;
 }


  setInterval(function(){ initializeStops(); }, 200);

 	// Content Scroll Listeners & Effects
  content.scroll(function(e){

  	//Move Landing Image


    let s1Pos = s1.position().top;
    let landingImgPos = s1Pos + $(window).outerHeight();
  	let s2Pos = s2.position().top;
  	let s3Pos = s3.position().top;
  	let s4Pos = s4.position().top;
  	let s5Pos = s5.position().top;



    s1Pos < -10 ? down.hide() : down.show();
  	s2Pos <= $(window).height() ? $('.landing__svg').addClass('absolute') : $('.landing__svg').removeClass('absolute');

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

    // Magnetic Scroll
    const speed = 500;
    const range = $(window).height()/5;
    const d1 = s1.offset().top - s2.offset().top - 10;
    const d2 = s1.offset().top - s3.offset().top - 10;
    const d3 = s1.offset().top - s4.offset().top - 10;

    //S2
    if (( s2Pos < range && s2Pos > -range ) && stop2 == 0 ) {
      content.animate({ scrollTop: -d1 }, speed, "easeOutQuad");
      stop2 = 1;
    }

    if ((s2Pos > range || s2Pos < -range) && stop2 == 1) stop2 = 0;


    //S3
    if (( s3Pos < range && s3Pos > -range ) && stop3 == 0 ) {
      content.animate({ scrollTop: -d2 }, speed, "easeOutQuad");
      stop3 = 1;
    }

    if ((s3Pos > range || s3Pos < -range) && stop3 == 1) stop3 = 0;


    //S4
    if (( s4Pos < range && s4Pos > -range ) && stop4 == 0 ) {
      content.animate({ scrollTop: -d3 }, speed, "easeOutQuad");
      stop4 = 1;
    }
    if ((s4Pos > range || s4Pos < -range) && stop4 == 1) stop4 = 0;


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


