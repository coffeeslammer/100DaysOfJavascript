"use strict";

window.addEventListener("keydown", (e) => {
  e.key === " "
    ? (document.querySelector(".key-entered").textContent = "Spacebar")
    : (document.querySelector(".key-entered").textContent = e.key);
  document.querySelector(".key-code").textContent = e.keyCode;
  document.querySelector(".key").textContent = e.code;
  document.querySelector(".ascii").textContent = e.key.charCodeAt(0);
});
