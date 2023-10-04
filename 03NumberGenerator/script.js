"use strict";

const body = document.querySelector("body");
const generate = document.querySelector(".generate");
const display = document.querySelector("h2");

generate.addEventListener("click", () => {
  display.textContent = Math.floor(Math.random() * 100);

  body.style.backgroundColor = generatedText;
});
