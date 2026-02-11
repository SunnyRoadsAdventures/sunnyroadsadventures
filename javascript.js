document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");
const blackieVideo = document.getElementById("blackieVideo");
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");

let missionActive = false;

/* Fade in saga after 2 seconds */
setTimeout(() => {
    sagaBtn.style.opacity = "1";
}, 2000);

/* Click saga → open mission */
sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = "0";
    setTimeout(() => {
        sagaBtn.style.display = "none";
    }, 1500);

    missionVideo.style.display = "block";

    setTimeout(() => {
        missionVideo.style.opacity = "1";
        missionVideo.play();
        missionActive = true;
    }, 50);

}, { once: true });

/* Click anywhere → close mission and continue */
document.addEventListener("click", () => {

    if (!missionActive) return;

    missionActive = false;

    missionVideo.style.opacity = "0";

    setTimeout(() => {
        missionVideo.pause();
        missionVideo.style.display = "none";

        // Show blackie
        blackieVideo.style.display = "block";
        setTimeout(() => {
            blackieVideo.style.opacity = "1";
            blackieVideo.play();
        }, 50);

        // Show hey
        heyVideo.style.display = "block";
        setTimeout(() => {
            heyVideo.style.opacity = "1";
            heyVideo.play();
        }, 50);

        // Show enter
        enterBtn.style.display = "block";
        setTimeout(() => {
            enterBtn.style.opacity = "1";
        }, 50);

    }, 1500);

});

});