"use strict";

// const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
// const enterDate = document.querySelector("input");
// const btn = document.querySelector(".btn");

// let dateEntered = "";

function clock() {
  const presentDate = new Date();

  if (presentDate.getHours() < 10) {
    hours.innerText = `0${presentDate.getHours()}:`;
  } else {
    hours.innerText = `${presentDate.getHours()}:`;
  }
  minutes.innerHTML = `${presentDate.getMinutes()}:`;
  if (presentDate.getSeconds() < 10) {
    seconds.innerHTML = `0${presentDate.getSeconds()}`;
  } else {
    seconds.innerHTML = presentDate.getSeconds();
  }
}
clock();
setInterval(clock, 1000);
function countingDown() {
  // const futureDate = new Date(dateEntered);
  //all this code I am pretty sure I did it the hard way
  // const daysLeft = Math.floor((futureDate - presentDate) / 1000 / 60 / 60 / 24);
  // const daysWithRemainder = (futureDate - presentDate) / 1000 / 60 / 60 / 24;
  // const hoursRemainder = daysWithRemainder - daysLeft;
  // const hoursLeft = Math.floor(hoursRemainder * 24);
  // const hoursWithRemainder = hoursRemainder * 24;
  // const minutedRemainder = hoursWithRemainder - hoursLeft;
  // const minutesLeft = Math.floor(minutedRemainder * 60);
  // const minutesWithRemainder = minutedRemainder * 60;
  // const secondsRemainder = minutesWithRemainder - minutesLeft;
  // const secondsLeft = Math.floor(secondsRemainder * 60);
  //   days.innerHTML = daysLeft;
  //   hours.innerText = hoursLeft;
  //   minutes.textContent = minutesLeft;
  //   seconds.textContent = secondsLeft;
}
function starting() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const temp = new Date(enterDate.value);

  if (temp == "Invalid Date") {
    document.querySelector(".error").textContent = "Invalid Input";
  } else {
    document.querySelector(".error").textContent = "";
    document.querySelector(".countdown-container").classList.remove("hidden");
    document.querySelector(".enter-date").classList.add("hidden");
    dateEntered = enterDate.value;
    document.querySelector(".countingTo").textContent = `${
      monthNames[temp.getMonth()]
    } ${temp.getDate()}  ${temp.getFullYear()}  `;
    countingDown();
    setInterval(countingDown, 1000);
  }
}

// btn.addEventListener("click", starting);
// countingDown();
