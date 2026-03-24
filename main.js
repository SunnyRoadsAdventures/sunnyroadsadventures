const btn = document.getElementById("enterBtn");

// --- CUSTOM CURSOR (WITH DELAY) ---
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let delayedX = 0;
let delayedY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// subtle lag effect
function animateCursor() {
  delayedX += (mouseX - delayedX) * 0.15;
  delayedY += (mouseY - delayedY) * 0.15;

  cursor.style.left = delayedX + "px";
  cursor.style.top = delayedY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

// --- BUTTON RESISTANCE ---
let attempts = 0;

btn.addEventListener("mouseenter", () => {
  attempts++;

  const rect = btn.getBoundingClientRect();
  const offset = 40;

  if (attempts <= 3) {
    // subtle move
    const moveX = (Math.random() - 0.5) * offset;
    const moveY = (Math.random() - 0.5) * offset;

    btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  if (attempts === 2) {
    // quick flicker illusion
    btn.style.opacity = "0.3";
    setTimeout(() => {
      btn.style.opacity = "1";
    }, 80);
  }

  if (attempts >= 3) {
    // slightly stronger resistance
    btn.style.transform = `translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px)`;
  }
});

// reset position slowly when leaving
btn.addEventListener("mouseleave", () => {
  btn.style.transform = "translate(0,0)";
});

// --- CLICK (TEMP PLACEHOLDER) ---
btn.addEventListener("click", () => {
  btn.innerText = "...";
});