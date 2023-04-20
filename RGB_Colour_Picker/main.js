"use strict"; 

$(document).ready(function(){
    $("#button").click(function(){
        const RGBvalues = randomRGBcolor();
        const rgbcolor = "rgb("+RGBvalues[0]+","+RGBvalues[1]+","+RGBvalues[2]+")"
        $("body").css("background-color",rgbcolor);
        $("#color").text(" This colour is " + rgbcolor);
    });
    
});

function randomNumber (){
    return Math.floor(Math.random()* 256);
};

function randomRGBcolor(){
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    return [r,g,b];
};


