const size = document.querySelector(".num");
const slider = document.getElementById("range");
let space = document.querySelector(".space");
const color = document.getElementById("picker");
const label = document.getElementById("label");
const rgb = document.querySelector(".RGB");

createGrid(slider.value);

let eraserActive = false;
let RGBActive = false;

size.innerHTML = slider.value;
slider.addEventListener("input", () => {
  size.innerHTML = slider.value;
  const value = parseInt(slider.value);
  createGrid(value);
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  let divs = document.querySelectorAll(".space div");
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  })
})

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
  eraserActive = true;
})

color.addEventListener("click", () => {
  RGBActive = false;
  eraserActive = false;
})

rgb.addEventListener("click", () => {
  eraserActive = false;
  RGBActive = true;
})

label.addEventListener("click", () => {
  eraserActive = false;
  RGBActive = false;
})

function createGrid(value){
    space.innerHTML = "";
  for (let i = 0; i < value ** 2; ++i) {
    let div = document.createElement("div");
    div.style.width = Math.floor(960 / value) + "px";
    div.style.height = Math.floor(960 / value) + "px";
    div.style.backgroundColor = "white";
    div.addEventListener("mouseover", () => {
      if (eraserActive) {
        div.style.backgroundColor = "white";
      }
      else if (RGBActive) {
        const r1 = Math.floor(Math.random() * 255);
        const r2 = Math.floor(Math.random() * 255);
        const r3 = Math.floor(Math.random() * 255);
        randomcolor = `rgb(${r1}, ${r2}, ${r3})`;
        div.style.backgroundColor = randomcolor;
      }
      else {
        div.style.backgroundColor = color.value;
      }
    })
    space.appendChild(div);
  }
}