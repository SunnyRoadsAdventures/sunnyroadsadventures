const heroVideo = document.getElementById("heroVideo");

if (heroVideo) {
    heroVideo.addEventListener("timeupdate", () => {
        if (heroVideo.currentTime >= 15.8) {

            document.querySelector(".hero-title")?.classList.add("hero-visible");
            document.querySelector(".hero-brand")?.classList.add("hero-visible");
            document.querySelector(".hero-subtitle")?.classList.add("hero-visible");

            document.querySelectorAll(".gold-divider").forEach(divider => {
                divider.classList.add("hero-visible");
            });

            // Prevent retrigger
            heroVideo.removeEventListener("timeupdate", arguments.callee);
        }
    });
}
