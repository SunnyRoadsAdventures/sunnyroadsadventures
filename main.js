
console.log("JS Loaded");
const video = document.getElementById("heroVideo");
const flash = document.querySelector(".white-flash");
const title = document.querySelector(".hero-title");
const subtitle = document.querySelector(".hero-subtitle");

function handleTimeUpdate() {
    if (video.currentTime >= 15) {

        flash.classList.add("active");

        setTimeout(() => {
            title.classList.add("visible");
            subtitle.classList.add("visible");
        }, 1000);

        video.removeEventListener("timeupdate", handleTimeUpdate);
    }
}

video.addEventListener("timeupdate", handleTimeUpdate);