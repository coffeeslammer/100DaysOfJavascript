"use strict";

const counter = document.querySelector("h2");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

let number = 0;

function counterCheck() {
  counter.textContent = number;
  if (number < 0) {
    counter.style.color = "red";
  } else if (number > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "white";
  }
}

subtract.addEventListener("click", () => {
  --number;
  counterCheck();
});
reset.addEventListener("click", () => {
  number = 0;
  counterCheck();
});
add.addEventListener("click", () => {
  ++number;
  counterCheck();
});

// ===============================alt version==================================================
//can delete querySelector buttons

// const section = document.querySelector("section");

// section.addEventListener("click", (e) => {
//   if (e.target.classList.contains("add")) {
//     ++number;
//     counterCheck();
//   } else if (e.target.classList.contains("subtract")) {
//     --number;
//     counterCheck();
//   } else if (e.target.classList.contains("reset")) {
//     number = 0;
//     counterCheck();
//   }
// });
