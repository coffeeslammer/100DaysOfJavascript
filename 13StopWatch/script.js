"use strict";

const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const millisecond = document.querySelector(".milliseconds");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let startTime = 0;
let elapseTime = 0;
let timerInterval;

function starting() {
  startTime = new Date() - elapseTime;

  timerInterval = setInterval(() => {
    elapseTime = Date.now() - startTime;

    formatTime(elapseTime);
  }, 10);
  btnStart.disabled = true;
  btnStop.disabled = false;
}
function formatTime(time) {
  const mill = Math.floor((time % 1000) / 10);
  const sec = Math.floor((time % (1000 * 60)) / 1000);
  const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const h = Math.floor(time / (1000 * 60 * 60));

  mill <= 9 ? (millisecond.textContent = `0${mill}`) : (millisecond.textContent = mill);

  sec <= 9 ? (second.textContent = `0${sec}`) : (second.textContent = sec);

  min <= 9 ? (minute.textContent = `0${min}`) : (minute.textContent = min);
  //FIXME I still need to set up to unhide hour if timer reach's a hour
  h <= 9 ? (hour.textContent = `0${h}`) : (hour.textContent = h);
}

function resting() {
  clearInterval(timerInterval);
  elapseTime = 0;
  btnStart.disabled = false;
  btnStop.disabled = true;
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  millisecond.textContent = "00";
}
function stoppingTimer() {
  clearInterval(timerInterval);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

btnStart.addEventListener("click", starting);
btnReset.addEventListener("click", resting);
btnStop.addEventListener("click", stoppingTimer);
