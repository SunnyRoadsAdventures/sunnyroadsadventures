const video = document.getElementById("heroVideo");
const flash = document.querySelector(".white-flash");
const title = document.querySelector(".hero-title");
const subtitle = document.querySelector(".hero-subtitle");

video.addEventListener("ended", function () {

    // Fade to white
    flash.classList.add("active");

    // After white flash (0.8 sec), show text
    setTimeout(() => {
        title.classList.add("visible");
        subtitle.classList.add("visible");
    }, 800);

});