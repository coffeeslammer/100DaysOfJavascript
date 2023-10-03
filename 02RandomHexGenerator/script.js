"use strict";

const body = document.querySelector("body");
const generate = document.querySelector(".generate");
const display = document.querySelector("h2");

const hex = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
generate.addEventListener("click", () => {
  let generatedText = "#";
  for (let i = 0; i < 6; i++) {
    let temp = Math.floor(Math.random() * 16);
    generatedText += hex[temp];
  }
  console.log(generatedText);
  body.style.backgroundColor = generatedText;
  display.textContent = generatedText;
});

//===========alt=============
// let hex = "#"
// hex += Math.random().toString(16).substring(2,8);
