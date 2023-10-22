"use strict";

window.addEventListener("keydown", (e) => {
  console.log(e.code);
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add("playing");
});

function removingTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  console.log("here");
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach((key) => key.addEventListener("transitionend", removingTransition));
