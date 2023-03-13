function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

button.addEventListener("click", buttonClickHandler);

function buttonClickHandler(event) {
  const currentColor = getRandomHexColor();
  text.textContent = currentColor;
  body.style.backgroundColor = currentColor;
}