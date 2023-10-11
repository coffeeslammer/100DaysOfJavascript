"use strict";

const inputF = document.querySelector(".temp-f");
const inputC = document.querySelector(".temp-c");
const inputTemp = document.querySelectorAll(".input-temp");

function toCelsius(F) {
  // C = (F − 32) × 5⁄9
  return ((F - 32) * 5) / 9;
}
function toFahrenheit(C) {
  // F = C(9⁄5) + 32
  return C * (9 / 5) + 32;
}

function converting(e) {
  if (e.target.name === "celsius") {
    inputF.value = toFahrenheit(inputC.value); //could have also done e.target.value in the function
  } else if (e.target.name === "fahrenheit") {
    inputC.value = toCelsius(inputF.value);
  }
}
inputTemp.forEach((x) => x.addEventListener("input", converting));
