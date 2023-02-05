const btn = document.getElementById("btn");
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
];
const colors = ["#bc4e9c", "#CAC531", "#F11712", "#654ea3"];

const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    let j = Math.floor(Math.random() * colors.length);
    box.classList.add(shapes[i]);
    box.style.backgroundColor = colors[j];
  });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);
