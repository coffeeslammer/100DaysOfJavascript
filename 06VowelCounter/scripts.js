"use strict";

const usrInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const answer = document.querySelector(".answer");

function vowelCounter() {
  let vowels = usrInput.value
    .split("")
    .filter((str) => "aeiou".includes(str))
    .join("");
  answer.textContent = `${usrInput.value.toUpperCase()} has ${vowels.length} vowels`;
}

btn.addEventListener("click", vowelCounter);
