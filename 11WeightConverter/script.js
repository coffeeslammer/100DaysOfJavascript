"use strict";

const inputKg = document.querySelector(".input-k");
const inputLb = document.querySelector(".input-p");
const inputWeight = document.querySelectorAll(".weight-input");

function toPounds(kg) {
  // lb = kg x 0.453592
  return kg / 0.453592;
}
function toKilogram(lb) {
  // kg = lb/2.2046
  return lb / 2.2046;
}

function checkingWeights(e) {
  console.log(e.target.name);
  if (e.target.name === "kilogram") {
    inputLb.value = toPounds(e.target.value);
  } else if (e.target.name === "pound") {
    inputKg.value = toKilogram(e.target.value);
  }
}

inputWeight.forEach((x) => x.addEventListener("input", checkingWeights));
