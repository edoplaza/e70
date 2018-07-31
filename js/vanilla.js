'use strict';

// Cache Selectors
const desktop = 1200;
const frame = document.querySelector('.frame');
const wrapper = document.querySelector('.wrapper');
const pull = document.querySelector('.pull');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');
const content = document.querySelector('.content');
const landing = document.querySelector('.landing');
const landingImage = document.querySelector('.landing__image');
const svgs = document.querySelector('.svgs');
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3');
const s4 = document.querySelector('.s4');
const s5 = document.querySelector('.s5');
const down = document.querySelector('.landing__down');
const close = document.querySelector('.what-we-do__close');
const wwd = document.querySelector('.what-we-do__section');
const cosa = document.querySelector('.cosa');

let flag = 0;



// Measures
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let frameWidth = 64;


// Initialize Landing Section
landing.style.height = landing.innerHeight + landingImage.innerHeight + 160 + 'px';

if ( windowWidth < desktop ) {
  landing.style.height = 'auto';
}



// fade out
let fadeOut = el => {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
let fadeIn = (el, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}




 window.addEventListener('resize', () => window.innerWidth >= desktop && setTimeout( () => location.reload(), 100 ));
 window.addEventListener('orientationchange', () => location.reload(), false);

// Outer Frame functions
let addColorFrame = () => {
 fadeIn(frame);
}
let removeColorFrame = () => {
 fadeOut(frame);
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
  for ( let i = 0; i < 4; i++ ) {
    logo.classList.remove('logo--' + i);
  }
}

let addLogoColor = () => {
  setTimeout( function(){
    removeLogoColors();
    logo.classList.add('logo--' + Math.floor(Math.random() * 4) );
  }, 500 )
}

let topPosition = e => {
  let rect = e.getBoundingClientRect(),
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let top = rect.top + scrollTop - frameWidth;
  return top;
}




const speed = 700;
let p0 = topPosition(s1);
let p1 = topPosition(landingImage);
let p2 = topPosition(landingImage) + (landingImage.innerHeight - window.outerHeight);
let p3 = topPosition(s2);
let p4 = topPosition(s3);
let p5 = topPosition(s4);
let p6 = topPosition(s5);

const flags = [p4, p5, p6];


let counter = 0;
let pos = 0;
var b = 1;

function up(target){
  flag = 1;
  function move(){
    pos -= 20;
    content.style.top = pos + 'px';
    if (counter < 3) {
      if ( b < target/20){
      b++
      window.setTimeout(move, 5);
    } else {
        setTimeout(() => {
        addLogoColor();
        counter += 1;
        flag = 0
      }, 1000);
    }
    }
  }
  move();
}

function godown(target){
  flag = 1;
  function move(){
    pos += 20;
    content.style.top = pos + 'px';
    if (counter < 3) {
      if ( b < target/20){
      b++
      window.setTimeout(move, 5);
    } else {
        setTimeout(() => {
        addLogoColor();
        counter -= 1;
        flag = 0
      }, 1000);
    }
    }
  }
  move();
}



if (wrapper.addEventListener) {
  wrapper.addEventListener("mousewheel", MouseWheelHandler, false);
  wrapper.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
else wrapper.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {
  var e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));



  if (windowWidth > desktop ){

    if( delta == -1 ) {
      if ( flag == 0 ) {

        //counter += 1;


        // content.animate({ top: -(flags[counter]) }, speed, "easeInOutCubic", function(){
        //   setTimeout( () => flag = 0 , 700);
        // });
        up(flags[counter]);
      }
    } else if (delta == 1) {
        if ( flag == 0 ) {
    //     flag = 1;
    //     counter -= 1;
    //     if (counter > 0 ) addLogoColor();
    //     if (counter < 0) counter = 0;
    //     // content.animate({ top: -(flags[counter]) }, speed, "easeInOutCubic", function(){
    //     //   setTimeout( () => flag = 0 , 700);
    //     // });

          godown(flags[counter]);
        }
    }
   }

  counter >= 1 ? down.style.display = 'none' : down.style.display = 'block';
  counter >= 3 ? svgs.classList.add('fadeOut') : svgs.classList.remove('fadeOut');

};

  // Expand What We Do Sections

  wwd.onmousedown = event => {
    if ( wwd.classList.contains('expanded' )){
      wwd.classList.remove('expanded');
      close.classList.remove('visible');
    } else {
      wwd.classList.remove('expanded');
      wwd.classList.add('expanded');
      close.classList.add('visible');
    }
  };


  close.onmousedown = event => {
    wwd.removeClass('expanded');
    close.removeClass('visible');
  };














