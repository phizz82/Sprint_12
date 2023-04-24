"use strict";

let count = 0;
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");
const totalClicks = document.getElementById("totalClicks");


clickBtn.onclick= function(){
    count++;
    totalClicks.innerHTML = count;
};

resetBtn.onclick = function(){
    let count = 0;
    totalClicks.innerHTML = count;
};



