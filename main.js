// ==============================
// main.js — STABLE FINAL VERSION
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Elements
  const layers = document.querySelectorAll(".tower-layer");
  const video  = document.querySelector("video");

  if (!layers.length) return;

  // ==============================
  // 🔥 FADE-IN OBSERVER (CORRECT)
  // ==============================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  // ==============================
  // 🔹 START OBSERVING FUNCTION
  // ==============================
  const startObserving = () => {
    layers.forEach(layer => observer.observe(layer));
  };

  // ==============================
  // 🎥 WAIT FOR tow.mp4 TO FINISH
  // ==============================
  if (video) {
    video.addEventListener(
      "ended",
      () => {
        startObserving(); // 🔥 fade starts AFTER video ends
      },
      { once: true }
    );
  } else {
    // Safety fallback if video is missing
    startObserving();
  }

});