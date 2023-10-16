"use strict";

const images = document.querySelectorAll(".image");

function removeActive() {
  images.forEach((i) => {
    i.classList.remove("active");
  });
}
function setActive(e) {
  removeActive();
  e.target.classList.add("active");
}
images.forEach((image) => {
  image.addEventListener("click", setActive);
});
