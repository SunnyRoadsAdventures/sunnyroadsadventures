const sraVideo = document.getElementById("sraVideo");
const missionVideo = document.getElementById("missionVideo");
const goBtn = document.getElementById("goBtn");
const skipBtn = document.getElementById("skipBtn");
const container = document.getElementById("container");
const fadeOverlay = document.getElementById("fadeOverlay");

/* Intro Fade In */
window.onload = () => {
    sraVideo.style.opacity = "1";

    setTimeout(() => {
        goBtn.style.opacity = "1";
        skipBtn.style.opacity = "1";
    }, 2000);
};

/* GO Click → Start Story */
goBtn.addEventListener("click", () => {

    // Fade intro away
    container.style.opacity = "0";

    // Fade to black
    setTimeout(() => {
        fadeOverlay.style.opacity = "1";
    }, 1000);

    // Start mission video
    setTimeout(() => {
        missionVideo.style.opacity = "1";
        missionVideo.play();
        fadeOverlay.style.opacity = "0";
    }, 2500);
});