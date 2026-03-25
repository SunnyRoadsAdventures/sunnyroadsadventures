const bg = document.getElementById("bg");

const core = document.querySelector(".core");
const book = document.querySelector(".book");
const cup = document.querySelector(".cup");
const watch = document.querySelector(".watch");
const lamp = document.querySelector(".lamp");

// ==========================
// 🎬 PARALLAX (DEPTH FEEL)
// ==========================
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
});

// ==========================
// 🔥 CORE (MAIN ENTRY)
// ==========================
core.addEventListener("click", () => {
  document.body.style.transition = "all 0.8s ease";
  document.body.style.transform = "scale(1.2)";
  document.body.style.filter = "brightness(2) blur(10px)";

  setTimeout(() => {
    alert("ENTER SITE"); // replace with real navigation
    // window.location.href = "home.html";
  }, 800);
});

// subtle glow reaction
core.addEventListener("mouseenter", () => {
  bg.style.filter = "brightness(1.15)";
});

core.addEventListener("mouseleave", () => {
  bg.style.filter = "brightness(1)";
});

// ==========================
// 📖 BOOK
// ==========================
book.addEventListener("click", () => {
  alert("Open About / Story");
});

// ==========================
// ☕ CUP
// ==========================
cup.addEventListener("click", () => {
  alert("Contact / Personal");
});

// ==========================
// ⌚ WATCH
// ==========================
watch.addEventListener("click", () => {
  alert("Projects / Navigation");
});

// ==========================
// 💡 LAMP (MODE SWITCH)
// ==========================
lamp.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});