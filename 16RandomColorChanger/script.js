// let hex = "#"
// hex += Math.random().toString(16).substring(2,8);
const btn = document.querySelector("button");
const body = document.querySelector("body");
const span = document.querySelector("span");

const hexMaxNumber = 16777215;

function changeColor() {
  let hex = "#";
  let complementaryHex = "#";
  let randomNumber = 0;

  let complementary = 0;
  //   hex += Math.random().toString(16).substring(2, 8);
  randomNumber = Math.floor(Math.random() * 16777215);
  //   console.log(parseInt(hexString, 16));
  let hexNumber = randomNumber.toString(16);
  complementary = hexMaxNumber - randomNumber;
  console.log(hexNumber);
  hex += hexNumber;
  complementaryHex += complementary.toString(16);
  //   hex += hexNumber;
  console.log(hex);
  //   console.log(complementaryHex);
  body.style.backgroundColor = hex;
  body.style.color = complementaryHex;

  span.textContent = hex;
}

btn.addEventListener("click", changeColor);
