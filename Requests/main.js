"use strict";

const HydrateFn = setInterval(function(){
    document.write("Hello!");
}, 2000);

setTimeout(StopFn,60000);

function StopFn() {
    clearInterval(HydrateFn);
}