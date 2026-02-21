document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ main.js loaded");

  const layers = document.querySelectorAll(".tower-layer");
  const video = document.getElementById("heroVideo");

  if (!layers.length) {
    console.error("❌ No tower layers found");
    return;
  }

  function revealText() {
    console.log("✨ Revealing tower layers");
    layers.forEach(layer => layer.classList.add("is-visible"));
  }

  if (video) {
    video.addEventListener("ended", revealText);

    // Mobile safety fallback
    setTimeout(revealText, 7000);
  } else {
    console.warn("⚠️ Video not found, revealing immediately");
    revealText();
  }
});