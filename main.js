setTimeout(() => {
  console.log("⚠️ Forcing is-visible on all layers");
  layers.forEach(layer => layer.classList.add("is-visible"));
}, 2000);
document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".tower-layer");
  const video = document.querySelector("video");

  console.log("Layers found:", layers.length);
  console.log("Video found:", !!video);

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

  // 🔒 Lock fades until video finishes
  const startObserving = () => {
    layers.forEach(layer => observer.observe(layer));
    console.log("Fade observer ACTIVATED");
  };

  if (video) {
    video.addEventListener("ended", startObserving, { once: true });
  } else {
    // fallback if no video
    startObserving();
  }
});