'use strict';

// Cache Selectors
const desktop = 1200;
const frame = document.querySelector('.frame');
const pull = document.querySelector('.pull');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');
const headerLogo = document.querySelector('.header__logo');
const content = document.querySelector('.content');
const landing = document.querySelector('.landing');
const landingInner = document.querySelector('.landing__inner');
const landingImage = document.querySelector('.landing__image');
const svgs = document.querySelector('.svgs');
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3');
const s4 = document.querySelector('.s4');
const s5 = document.querySelector('.s5');
const down = document.querySelector('.landing__down');
const close = document.querySelector('.what-we-do__close');



// Measures
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let frameWidth = 64;


// Initialize Landing Section
landing.style.height = landing.innerHeight + landingImage.offsetHeight + 160 + 'px';

if ( windowWidth < desktop ) {
  landing.style.height = 'auto';
}

// Outer Frame functions
let addColorFrame = () => {
 // frame.fadeTo( 400, 1);
}
let removeColorFrame = () => {
 // frame.fadeTo( 400, 0);
}
let pullColorWhite = () => {
  pull.classList.add('pull-white');
}
let pullColorBlack = () => {
  pull.classList.remove('pull-white');
}

pull.onmouseover = () => {
  if ( windowWidth > desktop ) {
    addColorFrame();
    pullColorWhite();
  }
}

pull.onmouseout = () => {
  if ( windowWidth > desktop ) {
  	removeColorFrame();
   	pullColorBlack();
  }
}

pull.onmousedown = event => {
	pull.classList.remove('pointer-events-none');
	pull.classList.contains('close') ?  pull.classList.remove('close') : pull.classList.add('close');
	nav.classList.contains('open') ? nav.classList.remove('open') : nav.classList.add('open');
	logo.classList.contains('hidden') ? logo.classList.remove('hidden') : logo.classList.add('hidden');
}

// Main Logo Functions
let removeLogoColors = () => {
	logo.classList.remove('logo--green');
	logo.classList.remove('logo--red');
	logo.classList.remove('logo--black');
	logo.classList.remove('logo--blue');
}

let addLogoColor = color => {
	removeLogoColors();
	logo.classList.add('logo--'+ color);
}

const speed = 1000;
const d0 = s1.offsetTop;
const d1 = s1.offsetTop - landingImage.offsetTop;
const d2 = s1.offsetTop - landingImage.offsetTop - landingImage.innerHeight + window.innerHeight;
const d3 = s1.offsetTop - s2.offsetTop;
const d4 = s1.offsetTop - s3.offsetTop;
const d5 = s1.offsetTop - s4.offsetTop;
const d6 = s1.offsetTop - s5.offsetTop;
const flags = [d0, d1, d2, d3, d4, d5, d6];

let old = 0;
let current = 0;
let flag = 0;
let counter = 0;
let direction = 'up';

let topPosition = e => {
	let rect = e.getBoundingClientRect(),
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let top = rect.top + scrollTop - frameWidth;
	return top;
}

content.addEventListener('wheel', () => {
	let s1Pos = topPosition(s1);
  let landingImgPos = s1Pos + windowHeight - 5;
 	let s2Pos = topPosition(s2);
 	let s3Pos = topPosition(s3);
  let s4Pos = topPosition(s4);
  let s5Pos = topPosition(s5);

	s1Pos < -10 ? down.style.display = 'none' : down.style.display = 'block';
	s2Pos < windowHeight ? svgs.classList.add('fadeOut') : svgs.classList.remove('fadeOut');

  //s2Pos <= window.innerHeight ? landingSvg.classList.add('fadeOut') : landingSvg.classList.remove('fadeOut');


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

  if ( windowWidth > desktop ){

    //Detect if going up or down
    old = current;
    current = s1Pos;

    if (old > current) {
      direction = 'up';

    }
    else if (old < current ) {
      direction = 'down';

    }

    if( direction == 'up') {
      if ( flag == 0 ) {
        flag = 1;
        counter += 1;
        // content.animate({ scrollTop: -(flags[counter]) }, speed, "easeOutQuart", function(){
        //   setTimeout( () => flag = 0 , 300);
        // });

        content.style.top = -200 + 'px';



      }
    }
    else if ( direction == 'down') {
      if ( flag == 0 ) {
        flag = 1;
        counter -= 1;
        // content.animate({ scrollTop: -(flags[counter]) }, speed, "easeOutQuart", function(){
        //   setTimeout( () => flag = 0 , 300);
        // });
      }
    }


  }



});

























