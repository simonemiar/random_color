"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

function randomBackground() {
    let randomColorReturn = randomColor();
    let rgbObject = rgbToCSS(randomColorReturn);
    let bodyColor = document.querySelector("body");
    bodyColor.style.backgroundColor = rgbObject;
}

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgbObject = {r,g,b}; 
    return rgbObject;
}

function rgbToCSS(rgb){
    let rgbReturn = randomColor();
    let rgbCSS = `rgb(${rgbReturn.r},${rgbReturn.g},${rgbReturn.b})`;
    
    return rgbCSS;
 }
