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