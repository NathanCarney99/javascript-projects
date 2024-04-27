const background = document.getElementById("main-container");
const colorName = document.getElementById("color-name");
const arrayColors = ["green", "red", "blue", "gold"];
const arrayHex = ["#00FF00", "#FF0000", "#0000FF", "#FFD700"];
let simple = true;
let arrayIdx = -1;

function changeColor() {
  let color = Math.floor(Math.random() * arrayColors.length);
  arrayIdx = color;
  background.style.backgroundColor = arrayColors[color];
  changeColorName(arrayColors[color]);
}

function changeColorName(name) {
  if (simple) {
    const finalWord = name.charAt(0).toUpperCase() + name.slice(1);
    colorName.innerHTML = finalWord;
  } else changeHex();
}
function changeHex() {
  colorName.innerHTML = arrayHex[arrayIdx];
  simple = false;
}

function changeSimple() {
  simple = true;
  changeColorName(arrayColors[arrayIdx]);
}
