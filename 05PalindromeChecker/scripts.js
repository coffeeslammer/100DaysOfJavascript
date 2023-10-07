"use strict";

const usrInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const answer = document.querySelector(".answer");

function checkPalindrome(e) {
  e.preventDefault();
  if (
    usrInput.value !== "" &&
    usrInput.value.toLowerCase() === usrInput.value.split("").reverse().join("").toLowerCase()
  ) {
    answer.textContent = `${usrInput.value.toUpperCase()} is a palindrome`;
  } else {
    answer.textContent = `${usrInput.value.toUpperCase()} is NOT a palindrome`;
  }
}

btn.addEventListener("click", checkPalindrome);
