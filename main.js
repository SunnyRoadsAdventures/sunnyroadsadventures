document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");
    const heroElements = document.querySelectorAll(
        ".hero-title, .hero-brand, .hero-subtitle, .gold-divider"
    );

    if (!video) return;

    const revealHero = () => {
        heroElements.forEach(el => el.classList.add("hero-visible"));
    };

    // Desktop: video ends
    video.addEventListener("ended", revealHero);

    // Mobile fallback: detect near-end playback
    video.addEventListener("timeupdate", () => {
        if (video.duration && video.currentTime >= video.duration - 0.3) {
            revealHero();
        }
    });
});

// ================================
// MAIN SCRIPT (SAFE + STABLE)
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // HERO FADE-IN AFTER VIDEO ENDS
  // ================================

  const heroVideo = document.getElementById("heroVideo");

  const revealHeroText = () => {
    document.querySelector(".hero-title")?.classList.add("hero-visible");
    document.querySelector(".hero-brand")?.classList.add("hero-visible");
    document.querySelector(".hero-subtitle")?.classList.add("hero-visible");

    document.querySelectorAll(".gold-divider").forEach(divider => {
      divider.classList.add("hero-visible");
    });
  };

  if (heroVideo) {
    heroVideo.addEventListener("ended", revealHeroText);
  }

  // ================================
  // TOWER SCROLL ANIMATION
  // ================================

  const tower = document.querySelector(".tower");
  const floors = document.querySelectorAll(".tower-floor");

  if (tower && floors.length > 0) {
    window.addEventListener("scroll", () => {
      const towerTop = tower.offsetTop;
      const towerHeight = tower.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY >= towerTop && scrollY <= towerTop + towerHeight) {
        const progress = (scrollY - towerTop) / towerHeight;

        floors.forEach((floor, index) => {
          const offset = (progress * floors.length) - index;
          const translate = Math.max(0, 100 - offset * 100);
          floor.style.transform = `translateY(${translate}%)`;
        });
      }
    });
  }

});