"use strict";

const usrInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const answer = document.querySelector(".answer");

function clickCopy() {
  usrInput.select();
  document.execCommand("copy");
}

btn.addEventListener("click", clickCopy);
