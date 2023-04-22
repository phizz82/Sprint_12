"use strict";

$(document).ready(function () {
    $("#button").click(function () {
      // Store an array of values for rgb
      let RGBvalues = randomRGBcolor();
  
      // Turn array into an rgb value
      let rgbcolor =
        "rgb(" + RGBvalues[0] + ", " + RGBvalues[1] + ", " + RGBvalues[2] + ")";
  
      // Give rgb color to the background
      $("body").css("background-color", rgbcolor);
  
      // Show user the rgb color
      $("#color").text(rgbcolor);
    });
});
  
function randomNumber() {
    return Math.floor(Math.random() * 256);
}
  
  // Returns an array of 3 values for rgb
function randomRGBcolor() {
    let red = randomNumber();
    let green = randomNumber();
    let blue = randomNumber();
    return [red, green, blue];
}

const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
let canvasH;
let canvasW;
let bgColor = "#C4AEAD";
let animations = [];
let circles = [];
let index = 0;

const pickcolor = (function(){
const colors=["#E2A76F","#228B22","#F62817","#8C001A","#98FB98","#81D8D0","#3CB371","#B4CFEC","#3EA99F","#3C565B","#728C00","#6495ED","#92C7C7","#4C4646","#FFFACD","#C9BE62","#B3446C","#B0CFDE","#4EE2EC","#FFE4E1","#7D0552","#BDEDFF","#6B8E23","#B0BF1A","#7B68EE","#C68E17","#2916F5","#151B8D","#BCE954","#CECECE","#B6B6B4","#4E8975","#454545","#778899","#90EE90","#C12267","#FFFFE0","#F4A460","#461B7E","#4863A0","#FFEFD5","#F5DEB3","#E38AAE"];
function next(){
    index = index++ < colors.length -1 ? index : 0; 
    return colors[index];
}

function current(){
    return colors[index];
}
return {
    next: next(),
    current:current()
}
});

function removeAnimation(animation) {
    let index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  }
  
function calcPageFillRadius(x, y) {
    let l = Math.max(x - 0, canvasW - x);
    let h = Math.max(y - 0, canvasH - y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
  }

function addClickListeners() {
    document.addEventListener("click", handleEvent);
    document.addEventListener("mousedown", handleEvent);
}

function handleEvent(e) {
    let currentColor = pickColor.current();
    let nextColor = pickColor.next();
    let targetR = calcPageFillRadius(e.pageX, e.pageY);
    let rippleSize = Math.min(200, (canvasW * .4));
    let minCoverDuration = 750;
      
    const pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: nextColor
    });
  
    const fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: function(){
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });
  
    function extend(a, b){
    for(let key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
    }
  
    const resizeCanvas = function() {
    canvasW = window.innerWidth;
    canvasH = window.innerHeight;
    canvas1.width = canvasW * devicePixelRatio;
    canvas1.height = canvasH * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    };
  
  (function init() {
    resizeCanvas();
    if (window.CP) {
      window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
    }
  
    window.addEventListener("resize", resizeCanvas);
    addClickListeners();
    if (!!window.location.pathname.match(/fullcpgrid/)) {
      startFauxClicking();
    }
    handleInactiveUser();
  })();
  
    function handleInactiveUser() {
        let inactive = setTimeout(function(){
        NoClick(canvasW/2, canvasH/2);
    }, 2000);
  
        function clearInactiveTimeout() {
            clearTimeout(inactive);
            document.removeEventListener("mousedown", clearInactiveTimeout);
            document.removeEventListener("touchstart", clearInactiveTimeout);
        }
    document.addEventListener("mousedown", clearInactiveTimeout);
    document.addEventListener("touchstart", clearInactiveTimeout);
    }
  
    function startFauxClicking() {
        setTimeout(function(){
        NoClick(anime.random( canvasW * .2, canvasW * .8), anime.random(canvasH * .2, canvasH * .8));
        startFauxClicking();
    }, anime.random(200, 900));
    }
  
    function NoClick(x, y) {
        let NoClick = new Event("mousedown");
        NoClick.pageX = x;
        NoClick.pageY = y;
        document.dispatchEvent(NoClick);
}};