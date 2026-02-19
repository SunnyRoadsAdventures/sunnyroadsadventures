const video = document.getElementById("heroVideo");
const flash = document.querySelector(".white-flash");
const title = document.querySelector(".hero-title");
const subtitle = document.querySelector(".hero-subtitle");

video.addEventListener("ended", function () {

    video.pause();
    video.currentTime = video.duration; // lock on last frame

    flash.classList.add("active");

    setTimeout(() => {
        title.classList.add("visible");
        subtitle.classList.add("visible");
    }, 800);

});