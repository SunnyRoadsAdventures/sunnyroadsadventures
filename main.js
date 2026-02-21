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

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  const startObserving = () => {
    layers.forEach(layer => observer.observe(layer));
    debug("Fade observer ACTIVATED");
  };

  if (video) {
    video.addEventListener("ended", startObserving, { once: true });
    debug("Waiting for video end");
  } else {
    startObserving();
  }
});