"use strict";var desktop=1200,frame=document.querySelector(".frame"),pull=document.querySelector(".pull"),logo=document.querySelector(".logo"),nav=document.querySelector(".nav"),headerLogo=document.querySelector(".header__logo"),content=document.querySelector(".content"),landing=document.querySelector(".landing"),landingInner=document.querySelector(".landing__inner"),landingImage=document.querySelector(".landing__image"),svgs=document.querySelector(".svgs"),s1=document.querySelector(".s1"),s2=document.querySelector(".s2"),s3=document.querySelector(".s3"),s4=document.querySelector(".s4"),s5=document.querySelector(".s5"),down=document.querySelector(".landing__down"),close=document.querySelector(".what-we-do__close"),windowHeight=window.innerHeight,windowWidth=window.innerWidth,frameWidth=64;landing.style.height=landing.innerHeight+landingImage.offsetHeight+160+"px",windowWidth<desktop&&(landing.style.height="auto");var addColorFrame=function o(){},removeColorFrame=function o(){},pullColorWhite=function o(){pull.classList.add("pull-white")},pullColorBlack=function o(){pull.classList.remove("pull-white")};pull.onmouseover=function(){windowWidth>desktop&&(addColorFrame(),pullColorWhite())},pull.onmouseout=function(){windowWidth>desktop&&(removeColorFrame(),pullColorBlack())},pull.onmousedown=function(o){pull.classList.remove("pointer-events-none"),pull.classList.contains("close")?pull.classList.remove("close"):pull.classList.add("close"),nav.classList.contains("open")?nav.classList.remove("open"):nav.classList.add("open"),logo.classList.contains("hidden")?logo.classList.remove("hidden"):logo.classList.add("hidden")};var removeLogoColors=function o(){logo.classList.remove("logo--green"),logo.classList.remove("logo--red"),logo.classList.remove("logo--black"),logo.classList.remove("logo--blue")},addLogoColor=function o(e){removeLogoColors(),logo.classList.add("logo--"+e)},speed=1e3,d0=s1.offsetTop,d1=s1.offsetTop-landingImage.offsetTop,d2=s1.offsetTop-landingImage.offsetTop-landingImage.innerHeight+window.innerHeight,d3=s1.offsetTop-s2.offsetTop,d4=s1.offsetTop-s3.offsetTop,d5=s1.offsetTop-s4.offsetTop,d6=s1.offsetTop-s5.offsetTop,flags=[d0,d1,d2,d3,d4,d5,d6],old=0,current=0,flag=0,counter=0,direction="up",topPosition=function o(e){var t=e.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n-frameWidth};content.addEventListener("wheel",function(){var o=topPosition(s1),e=o+windowHeight-5,t=topPosition(s2),n=topPosition(s3),l=topPosition(s4),s=topPosition(s5);down.style.display=o<-10?"none":"block",t<windowHeight?svgs.classList.add("fadeOut"):svgs.classList.remove("fadeOut"),e>=0&&addLogoColor("green"),e<0&&addLogoColor("blue"),t<=0&&addLogoColor("black"),n<=0&&addLogoColor("green"),l<=0&&addLogoColor("red"),s<=75&&addLogoColor("black"),windowWidth>desktop&&(old=current,current=o,old>current?direction="up":old<current&&(direction="down"),"up"==direction?0==flag&&(flag=1,counter+=1,content.style.top="-200px"):"down"==direction&&0==flag&&(flag=1,counter-=1))});