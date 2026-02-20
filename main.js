document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");

    if (!video) return;

    const revealHero = () => {
        document
            .querySelectorAll(
                ".hero-title, .hero-brand, .hero-subtitle, .gold-divider"
            )
            .forEach(el => el.classList.add("hero-visible"));
    };

    // When video naturally ends
    video.addEventListener("ended", revealHero);

    // Fallback in case ended event fails (mobile)
    video.addEventListener("timeupdate", () => {
        if (video.duration && video.currentTime >= video.duration - 0.3) {
            revealHero();
        }
    });
});

// =============================
// Tower Ascent Reveal Logic
// =============================

const towerLayers = document.querySelectorAll('.tower-layer');

const towerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        towerObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25
  }
);

towerLayers.forEach(layer => {
  towerObserver.observe(layer);
});