window.onload = function() {


  var sq = document.getElementById("wrapper");



  if (sq.addEventListener) {
    sq.addEventListener("mousewheel", MouseWheelHandler, false);
    sq.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  }
  else sq.attachEvent("onmousewheel", MouseWheelHandler);

  function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //sq.e.style.width = Math.max(sq.zoom, Math.min(sq.nw, sq.e.width + (sq.zoom * delta))) + "px";
    console.log(delta);
    return false;
  }

}
