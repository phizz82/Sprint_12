"use strict";

const url = "https://api.openweathermap.org/data/2.5/weather?q=glasgow&units=metric&APPID=cdde77ac8d7a03ac7c0cb52a025705c3";

fetch(url)
    .then (response => response.json())
    .then (data => console.log(data))
    .catch(error => console.log(error));




