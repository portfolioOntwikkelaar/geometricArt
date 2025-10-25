const btn = document.getElementById("btn");
const boxes = document.querySelectorAll(".container div");
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

// Dynamische achtergrond
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8,
    color: `hsl(${Math.random() * 360}, 80%, 70%)`
  });
}

function animateBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(animateBackground);
}
animateBackground();

// Vorm- en kleurarrays
const shapes = ["shape-tri", "shape-hex", "shape-star", "shape-circle"];
const colors = [
  "#ff6b6b", "#f7b733", "#45f7c2", "#6a5acd",
  "#ff0099", "#00f2ff", "#9d50bb", "#00ff87"
];

// Generatorfunctie
function generatePattern() {
  boxes.forEach((box) => {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    box.className = shape;
    box.style.background = `linear-gradient(135deg, ${color}, #000)`;
    box.style.setProperty("--color", color);
    box.style.boxShadow = `0 0 25px ${color}, inset 0 0 25px ${color}`;
    box.style.transform = `rotate(${Math.random() * 360}deg) scale(${1 + Math.random() * 0.4})`;
  });
}

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);
