// ✅ HERO FADE SYSTEM (ONLY ONE)
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");
    const heroElements = document.querySelectorAll(
        ".hero-title, .hero-brand, .hero-subtitle, .gold-divider"
    );

    if (!video) return;

    const revealHero = () => {
        heroElements.forEach(el => el.classList.add("hero-visible"));
    };

    video.addEventListener("ended", revealHero);

    video.addEventListener("timeupdate", () => {
        if (video.duration && video.currentTime >= video.duration - 0.3) {
            revealHero();
        }
    });
});

// ✅ TOWER SCROLL ANIMATION (leave untouched)
// (your tower code here)