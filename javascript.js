document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");
const blackieVideo = document.getElementById("blackieVideo");
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");

/* Fade in saga */
setTimeout(() => {
    sagaBtn.style.opacity = 1;
}, 2000);

/* SAGA CLICK */
sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = 0;

    setTimeout(() => {
        sagaBtn.style.display = "none";

        missionVideo.style.display = "block";
        missionVideo.style.opacity = 1;
        missionVideo.currentTime = 0;
        missionVideo.play();

    }, 1000);

});

/* CLICK MISSION TO CONTINUE */
missionVideo.addEventListener("click", () => {

    missionVideo.style.opacity = 0;

    setTimeout(() => {

        missionVideo.pause();
        missionVideo.style.display = "none";

        /* SHOW REST */
        blackieVideo.style.display = "block";
        blackieVideo.style.opacity = 1;
        blackieVideo.currentTime = 0;
        blackieVideo.play();

        heyVideo.style.display = "block";
        heyVideo.style.opacity = 1;
        heyVideo.play();

        enterBtn.style.display = "block";
        enterBtn.style.opacity = 1;

    }, 1000);

});

/* ENTER CLICK → FADE EVERYTHING TO BLACK */
enterBtn.addEventListener("click", () => {

    /* Fade screen */
    document.body.style.transition = "background 1.5s ease";
    document.body.style.background = "black";

    /* Fade out videos */
    blackieVideo.style.opacity = 0;
    heyVideo.style.opacity = 0;
    enterBtn.style.opacity = 0;

    setTimeout(() => {
        blackieVideo.pause();
        heyVideo.pause();
        enterBtn.style.display = "none";
    }, 1500);

});

/* AUTO FADE blackie.mp4 at 1:05.2 */
blackieVideo.addEventListener("timeupdate", () => {
    if (blackieVideo.currentTime >= 65.2) {
        blackieVideo.style.opacity = 0;
        setTimeout(() => {
            blackieVideo.pause();
        }, 1000);
    }
});

});