"use strict";

const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
}

btn.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
