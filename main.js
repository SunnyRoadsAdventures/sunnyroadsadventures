const video = document.getElementById("heroVideo");
const flash = document.querySelector(".white-flash");
const title = document.querySelector(".hero-title");
const subtitle = document.querySelector(".hero-subtitle");

video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 15) {

        // Fade to white
        flash.classList.add("active");

        // After white flash, reveal text
        setTimeout(() => {
            title.classList.add("visible");
            subtitle.classList.add("visible");
        }, 1000);

        // Prevent retrigger
        video.removeEventListener("timeupdate", arguments.callee);
    }
});