"use strict";

const timer = document.querySelector(".timer");
const btn = document.querySelector("button");
const minuteInput = document.getElementById("minute-input");

function starting() {
  let timeInSeconds = +minuteInput.value * 60;
  timer.textContent = `${minuteInput.value}: 00`;
  let t = setInterval(() => {
    if (timeInSeconds <= 0) {
      clearInterval(t);
      console.log("done");
    } else {
      timeInSeconds--;

      const minute = Math.floor(timeInSeconds / 60) % 60;
      const seconds = Math.floor(timeInSeconds % 60);

      timer.textContent = `${minute}: ${seconds}`;
    }
  }, 1000);
}

btn.addEventListener("click", starting);
