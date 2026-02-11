document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");
const blackieVideo = document.getElementById("blackieVideo");
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");

/* Fade in saga after 2 seconds */
setTimeout(() => {
    sagaBtn.style.opacity = "1";
}, 2000);

/* Click saga → show mission */
sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = "0";
    setTimeout(() => {
        sagaBtn.style.display = "none";
    }, 2000);

    missionVideo.style.display = "block";

    setTimeout(() => {
        missionVideo.style.opacity = "1";
        missionVideo.play();
    }, 50);

}, { once: true });

/* Click anywhere to close mission */
document.addEventListener("click", () => {

    if (missionVideo.style.display === "block") {

        missionVideo.style.opacity = "0";

        setTimeout(() => {
            missionVideo.pause();
            missionVideo.style.display = "none";

            // Show blackie
            blackieVideo.style.display = "block";
            blackieVideo.style.opacity = "1";
            blackieVideo.play();

            // Show hey
            heyVideo.style.display = "block";
            heyVideo.style.opacity = "1";
            heyVideo.play();

            // Show enter
            enterBtn.style.display = "block";
            enterBtn.style.opacity = "1";

        }, 2000);
    }

});

});