// ===== HERO VIDEO 15.8s FADE (MOBILE SAFE) =====
const heroVideo = document.getElementById("heroVideo");

if (heroVideo) {

    const triggerFade = () => {
        document.querySelector(".hero-title")?.classList.add("hero-visible");
        document.querySelector(".hero-brand")?.classList.add("hero-visible");
        document.querySelector(".hero-subtitle")?.classList.add("hero-visible");

        document.querySelectorAll(".gold-divider").forEach(divider => {
            divider.classList.add("hero-visible");
        });
    };

    const checkTime = () => {
        if (heroVideo.currentTime >= 15.8) {
            triggerFade();
        } else {
            requestAnimationFrame(checkTime);
        }
    };

    heroVideo.addEventListener("playing", () => {
        requestAnimationFrame(checkTime);
    });

}