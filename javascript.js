document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");
const blackieVideo = document.getElementById("blackieVideo");
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");
const beginsVideo = document.getElementById("beginsVideo");
const journeyVideo = document.getElementById("journeyVideo");

/* =========================
   MAX VOLUME AFTER USER CLICK
========================= */
const allVideos = document.querySelectorAll("video");
allVideos.forEach(video => {
    video.muted = false;
    video.volume = 1.0;
});

/* =========================
   SAGA FADE IN (2s delay)
========================= */
setTimeout(() => {
    sagaBtn.style.opacity = 1;
}, 2000);

/* =========================
   CLICK SAGA → SHOW MISSION
========================= */
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

/* =========================
   CLICK MISSION → CLOSE + SHOW MAIN
========================= */
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

/* =========================
   BLACKIE FADE AT 65s
========================= */
let blackieFaded = false;

blackieVideo.addEventListener("timeupdate", () => {

    if (!blackieFaded && blackieVideo.currentTime >= 65) {

        blackieFaded = true;

        blackieVideo.style.opacity = 0;

        setTimeout(() => {
            blackieVideo.pause();
        }, 1500);

    }

});

/* =========================
   ENTER CLICK → FADE TO BLACK
========================= */
enterBtn.addEventListener("click", () => {

    // Stop lower content
    heyVideo.pause();
    blackieVideo.pause();

    heyVideo.style.opacity = 0;
    blackieVideo.style.opacity = 0;
    enterBtn.style.opacity = 0;

    setTimeout(() => {

        heyVideo.style.display = "none";
        blackieVideo.style.display = "none";
        enterBtn.style.display = "none";

        /* PLAY BEGINNING FULLSCREEN */
        beginsVideo.style.display = "block";
        beginsVideo.style.opacity = 1;
        beginsVideo.currentTime = 0;
        beginsVideo.play();

    }, 1500);

});

/* =========================
   BEGINNING → JOURNEY
========================= */
beginsVideo.addEventListener("ended", () => {

    beginsVideo.style.opacity = 0;

    setTimeout(() => {

        beginsVideo.style.display = "none";

        journeyVideo.style.display = "block";
        journeyVideo.style.opacity = 1;
        journeyVideo.currentTime = 0;
        journeyVideo.play();

    }, 1000);

});

});