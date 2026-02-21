

// main.js — STABLE BASELINE

document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".tower-layer");
  const video = document.querySelector("video");

  // 🔎 Mobile-safe debug (no console needed)
  const debug = (msg) => {
    const el = document.createElement("div");
    el.textContent = msg;
    el.style.cssText =
      "position:fixed;bottom:10px;left:10px;background:#000;color:#0f0;font:12px monospace;padding:6px;z-index:9999";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  };

  debug(`JS loaded. Layers: ${layers.length}`);
  debug(`Video found: ${!!video}`);

  if (!layers.length) return;

 const startObserving = () => {
  layers.forEach(layer => {
    observer.observe(layer);

    // 🔒 SAFETY: if already visible, force fade
    const rect = layer.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      layer.classList.add("is-visible");
      observer.unobserve(layer);
    }
  });

  debug("Fade observer ACTIVATED + safety check ran");
const startObserving = () => {
  layers.forEach(layer => {
    observer.observe(layer);

    // 🔴 DIAGNOSTIC FORCE (temporary)
    layer.classList.add("is-visible");
  });

  debug("Fade observer ACTIVATED (forced visible)");
};

  if (video) {
    video.addEventListener("ended", startObserving, { once: true });
    debug("Waiting for video end");
  } else {
    startObserving();
  }
});