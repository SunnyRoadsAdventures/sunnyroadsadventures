document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("heroVideo");
    const flash = document.querySelector(".white-flash");
    const title = document.querySelector(".hero-title");
    const brand = document.querySelector(".hero-brand"); // ADD THIS
    const subtitle = document.querySelector(".hero-subtitle");
const dividers = document.querySelectorAll(".gold-divider");

    if (!video) return;

    video.addEventListener("ended", function () {

        video.pause();
        video.currentTime = video.duration;

        if (flash) flash.classList.add("active");

        setTimeout(() => {
            if (title) title.classList.add("visible");
            if (brand) brand.classList.add("visible"); // ADD THIS
            if (subtitle) subtitle.classList.add("visible");
        }, 800);

    });

});