"use strict";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//trunk
ctx.fillStyle = "Red";
ctx.fillRect(0,30,15,15);
//body
ctx.fillRect(15,20,25,25);
//window
ctx.fillStyle = "Blue";
ctx.fillRect(28,23,7,7);
ctx.fillStyle = "Red";
//hood
ctx.fillRect(40,30,15,15);
//wheels
ctx.fillStyle = "Grey";
ctx.fillRect(7,43,10,10);
ctx.fillRect(37,43,10,10);
// restore to default
ctx.restore();