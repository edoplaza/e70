	$(document).ready( function($){

	// Selectors
	const frame = $('.frame');
	const pull = $('.pull');
	const logo = $('.logo');
	const nav = $('.nav');
	const headerLogo = $('.header__logo');
	const content = $('.content');
 	const landing = $('.landing');
 	const landingImage = $('.landing__image');
 	const s1 = $('.s1');
 	const s2 = $('.s2');
 	const s3 = $('.s3');
 	const s4 = $('.s4');
 	const s5 = $('.s5');


	// Initialize Landing Section Props
 	let landingHeight = landing.height() + landingImage.height() + 160;
 	landing.css('height', landingHeight);


  // Frame color effect
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

	pull.on('click', document, function(){
		pull.hasClass('close') ?  pull.removeClass('close') : pull.addClass('close');
		nav.hasClass('open') ? nav.removeClass('open') : nav.addClass('open');
		headerLogo.hasClass('hidden') ? headerLogo.removeClass('hidden') : headerLogo.addClass('hidden');
	});

  // let s2 = $('.s2');


  //Change nav icon color
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



	// Change Logo Colors

		let removeLogoColors = () => {
		  logo.removeClass('logo--green logo--red logo--black logo--blue');
		}

		let addLogoColor = color => {
			removeLogoColors();
		  logo.addClass('logo--'+ color);

		}

		// let changeLogoColors = () => {
		//   let distanceS1 = $('.s1').offset().top;
		//   let distanceS2 = $('.s2').offset().top;

		//   removeLogoColors();

		//   if ( $(this).scrollTop() < distanceS2 ) {
		//       addLogoColor('green');
		//   }
		//   else if ( $(this).scrollTop() >= distanceS2 ) {
		//      addLogoColor('black');
		//   }
		// }


 	// Content Scroll Listeners & Effects
  content.scroll(function(e){

  	//Move Landing Image

   	let s1Pos = s1.position().top;
   	let landingImgPos = s1Pos + $(window).height()
  	let s2Pos = s2.position().top;
  	let s3Pos = s3.position().top;
  	let s4Pos = s4.position().top;
  	let s5Pos = s5.position().top;



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






  });

  // $(window).scroll(function() {
		//   changeLogoColors();
		//   removeExpanded();
		// });

		// $(window).resize(function() {
		//    changeLogoColors();
		//    removeExpanded();
		// });






	// // Expand What We Do Sections

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










		});
