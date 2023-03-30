"use strict";

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const clock = document.getElementById("time");
const dayIntro = document.getElementById("dayDisplay");

setInterval(currentTime, 1000);

function currentTime() {
    let time = new Date();
    let dayDisplay = time.getDay();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let am_pm = "AM";
    if(hours >=12){
        am_pm = "PM";
        hours -= 12;}
    if (hours == 0) {
        hours = 12;
        }
    if (hours < 10) {
        hours = "0"+ hours;} 
    if (mins < 10) {
        mins = "0"+ mins;} 
    if (secs < 10) {
        secs = "0"+ secs;} 
    let CurrentTime = hours + ":" + mins + ":" + secs + " " + am_pm;
    let CurrentDay = week[dayDisplay] + "," + date + " " + months[month] +  "," + year;
    clock.innerHTML = CurrentTime; 
    dayIntro.innerHTML = CurrentDay; 
}
    
