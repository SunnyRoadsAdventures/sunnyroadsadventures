document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("heroVideo");
    const flash = document.querySelector(".white-flash");
    const title = document.querySelector(".hero-title");
    const subtitle = document.querySelector(".hero-subtitle");

    if (!video) return; // safety check

    video.addEventListener("ended", function () {

        video.pause();
        video.currentTime = video.duration; // lock on last frame

        if (flash) flash.classList.add("active");

        setTimeout(() => {
            if (title) title.classList.add("visible");
            if (subtitle) subtitle.classList.add("visible");
        }, 800);

    });

});