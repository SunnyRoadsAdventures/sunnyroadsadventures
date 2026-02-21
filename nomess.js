const video = document.getElementById("heroVideo");
const overlay = document.querySelector(".hero-overlay");

// SAFETY LOG
console.log("nomess.js running");

// 15s → fade video
setTimeout(() => {
  video.classList.add("fade-out");
}, 15000);

// 16s → show titles
setTimeout(() => {
  overlay.classList.add("fade-in");
}, 16000);