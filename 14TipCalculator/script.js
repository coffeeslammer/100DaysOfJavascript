"use strict";

const tipInput = document.querySelector("#tip-amount");
const tipTotal = document.querySelector(".tip-total");
const total = document.querySelector(".total");
const btn = document.querySelector(".btn");

function calculateTip() {
  if (document.getElementById("ten").checked) {
    // console.log("ten");
    total.textContent = `$${(tipInput.value * 0.1 + +tipInput.value).toFixed(2)}`;
    tipTotal.textContent = `$${(tipInput.value * 0.1).toFixed(2)}`;
  } else if (document.getElementById("fifteen").checked) {
    tipTotal.textContent = `$${(tipInput.value * 0.15).toFixed(2)}`;
    total.textContent = `$${(tipInput.value * 0.15 + +tipInput.value).toFixed(2)}`;
  } else if (document.getElementById("twenty").checked) {
    tipTotal.textContent = `$${(tipInput.value * 0.2).toFixed(2)}`;
    total.textContent = `$${(tipInput.value * 0.2 + +tipInput.value).toFixed(2)}`;
  } else if (document.getElementById("other").checked) {
    const t = document.getElementById("option").value;
    tipTotal.textContent = `$${(tipInput.value * (t / 100)).toFixed(2)}`;
    total.textContent = `$${((t / 100) * tipInput.value + +tipInput.value).toFixed(2)}`;
  }
}

btn.addEventListener("click", calculateTip);
