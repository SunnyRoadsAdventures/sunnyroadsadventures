// Fade-in observer for tower layers
document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".tower-layer");

  console.log("Fade observer loaded. Layers found:", layers.length);

  if (!layers.length) return;

  const observer = new IntersectionObserver(
    entries => {
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

  layers.forEach(layer => observer.observe(layer));
});