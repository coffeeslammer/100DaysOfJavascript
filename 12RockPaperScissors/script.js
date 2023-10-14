"use strict";

const image = document.querySelector(".image-container");

image.addEventListener("click", check);

function check(e) {
  let player;
  let computer;
  if (e.target.getAttribute("data-set") == "rock") player = "rock";
  else if (e.target.getAttribute("data-set") == "paper") player = "paper";
  else if (e.target.getAttribute("data-set") == "scissors") player = "scissors";

  const rand = Math.ceil(Math.random() * 3);
  if (rand === 1) computer = "rock";
  else if (rand === 2) computer = "paper";
  else computer = "scissors";
  console.log(computer);
  document.querySelector(".winner").textContent = compare(player, computer);
  document.querySelector(".output").textContent = `${player} vs ${computer}`;
}

function compare(p, c) {
  if (p === c) return "Draw";
  else if (p === "rock" && c === "scissors") return "You Win!";
  else if (p === "paper" && c === "rock") return "You Win!";
  else if (p === "scissors" && c === "paper") return "You Win!";
  return "You Lose!";
}
