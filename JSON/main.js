"use strict";

fetch("./project.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });