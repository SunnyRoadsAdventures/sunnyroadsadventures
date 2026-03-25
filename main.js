const bg = document.getElementById("bg");
const light = document.getElementById("light");

const overlay = document.getElementById("overlay");
const content = document.getElementById("overlayContent");
const closeBtn = document.getElementById("closeBtn");

const core = document.querySelector(".core");
const book = document.querySelector(".book");
const cup = document.querySelector(".cup");
const watch = document.querySelector(".watch");
const lamp = document.querySelector(".lamp");

// ==========================
// 🎬 DEPTH + PARALLAX ENGINE
// ==========================
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  targetX = (e.clientX / window.innerWidth - 0.5) * 12;
  targetY = (e.clientY / window.innerHeight - 0.5) * 12;
});

// MOBILE SUPPORT
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  mouseX = touch.clientX;
  mouseY = touch.clientY;

  targetX = (touch.clientX / window.innerWidth - 0.5) * 12;
  targetY = (touch.clientY / window.innerHeight - 0.5) * 12;
});

// ==========================
// 🎬 ANIMATION LOOP
// ==========================
function animate() {
  currentX += (targetX - currentX) * 0.06;
  currentY += (targetY - currentY) * 0.06;

  // 🔥 CORE GRAVITY
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight * 0.68;

  const dx = (mouseX - centerX) * 0.002;
  const dy = (mouseY - centerY) * 0.002;

  bg.style.transform =
    `translate(-50%, -50%) scale(1.02) translate(${currentX - dx}px, ${currentY - dy}px)`;

  // 🔥 LIGHT FOLLOW
  if (light) {
    light.style.left = mouseX + "px";
    light.style.top = mouseY + "px";
  }

  requestAnimationFrame(animate);
}
animate();

// ==========================
// OVERLAY SYSTEM
// ==========================
function openOverlay(text) {
  content.innerText = text;
  overlay.classList.add("active");
}

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  resetScene();
});

// ==========================
// RESET
// ==========================
function resetScene() {
  bg.style.filter = "none";
  bg.style.transform = "translate(-50%, -50%) scale(1.02)";
}

// ==========================
// 🔥 CORE
// ==========================
core.addEventListener("click", () => {
  bg.style.transform = "translate(-50%, -50%) scale(1.25)";
  bg.style.filter = "brightness(2.2) blur(10px)";

  setTimeout(() => {
    openOverlay("ENTERING EXPERIENCE...");
  }, 700);
});

// ==========================
// 📖 BOOK
// ==========================
book.addEventListener("click", () => {
  bg.style.transform = "translate(-48%, -50%) scale(1.1)";
  openOverlay("ABOUT / STORY");
});

// ==========================
// ☕ CUP
// ==========================
cup.addEventListener("click", () => {
  bg.style.filter = "blur(6px)";
  openOverlay("CONTACT");
});

// ==========================
// ⌚ WATCH
// ==========================
watch.addEventListener("click", () => {
  bg.style.transform = "translate(-50%, -48%) scale(1.1)";
  openOverlay("PROJECTS / TIMELINE");
});

// ==========================
// 💡 LAMP
// ==========================
lamp.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});