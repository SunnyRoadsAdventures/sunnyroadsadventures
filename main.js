const bg = document.getElementById("bg");
const overlay = document.getElementById("overlay");
const content = document.getElementById("overlayContent");
const closeBtn = document.getElementById("closeBtn");

const core = document.querySelector(".core");
const book = document.querySelector(".book");
const cup = document.querySelector(".cup");
const watch = document.querySelector(".watch");
const lamp = document.querySelector(".lamp");

// ==========================
// 🎬 PARALLAX (SMOOTHER)
// ==========================
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 20;
  targetY = (e.clientY / window.innerHeight - 0.5) * 20;
});

function animate() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  bg.style.transform =
    `translate(-50%, -50%) scale(1.05) translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
}
animate();

// ==========================
// 🎬 OVERLAY SYSTEM
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
// 🔥 RESET SCENE
// ==========================
function resetScene() {
  bg.style.filter = "none";
  bg.style.transform = "translate(-50%, -50%) scale(1.05)";
}

// ==========================
// 🔥 CORE (REAL ENTRY FEEL)
// ==========================
core.addEventListener("click", () => {
  bg.style.transform = "translate(-50%, -50%) scale(1.4)";
  bg.style.filter = "brightness(2) blur(10px)";

  setTimeout(() => {
    openOverlay("ENTERING EXPERIENCE...");
  }, 600);
});

// ==========================
// 📖 BOOK
// ==========================
book.addEventListener("click", () => {
  bg.style.transform = "translate(-45%, -50%) scale(1.2)";
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
  bg.style.transform = "translate(-50%, -45%) scale(1.2)";
  openOverlay("PROJECTS / TIMELINE");
});

// ==========================
// 💡 LAMP
// ==========================
lamp.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});