"use strict";

const input = document.querySelector(".pw");
// const btn = document.querySelector(".btn");
const strength = document.querySelector(".strength");

function strengthTest(e) {
  console.log(e.target.value);

  const password = e.target.value;
  const diffCharCount = [0, 0, 0, 0];

  if (password.match(/[A-Z]/g) != null && password.match(/[A-Z]/g).length >= 1) {
    diffCharCount[0]++;
  }
  if (password.match(/[0-9]/g) != null && password.match(/[0-9]/g).length >= 1) {
    diffCharCount[1]++;
  }
  if (password.match(/[a-z]/g) != null && password.match(/[a-z]/g).length >= 1) {
    diffCharCount[2]++;
  }
  if (
    password.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/) != null &&
    password.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/).length >= 1
  ) {
    diffCharCount[3]++;
  }

  checkStrength(
    diffCharCount.reduce((acc, cc) => acc + cc),
    password
  );
}
function clearClassList() {
  input.classList.remove("strong");
  input.classList.remove("decent");
  input.classList.remove("weak");
  input.classList.remove("poor");
}
//FIXME I don't have a way of testing if the backspace button was used
//I could create a strong password but backspace to a couple characters and still be strong
function checkStrength(strengthNum, pw) {
  if (strengthNum == 4 && pw.length >= 10) {
    clearClassList();
    input.classList.add("strong");
    strength.textContent = "Strong";
  }
  if (strengthNum == 3 && pw.length >= 6) {
    clearClassList();
    input.classList.add("decent");

    strength.textContent = "Decent";
  }
  if (strengthNum == 2 && pw.length >= 6) {
    clearClassList();
    input.classList.add("weak");

    strength.textContent = "Weak";
  }
  if (strengthNum == 1) {
    clearClassList();
    input.classList.add("poor");

    strength.textContent = "Poor";
  }
}

input.addEventListener("input", strengthTest);
