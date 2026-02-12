document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");
const blackieVideo = document.getElementById("blackieVideo");
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");

const beginningVideo = document.getElementById("beginningVideo");
const journeyVideo = document.getElementById("journeyVideo");

/* =========================
   MAX VOLUME AFTER USER CLICK
========================= */
function enableSound(video) {
    video.muted = false;
    video.volume = 1.0;
}

/* =========================
   SAGA FADE IN
========================= */
setTimeout(() => {
    sagaBtn.style.opacity = 1;
}, 2000);

/* =========================
   SAGA CLICK → SHOW MISSION
========================= */
sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = 0;

    setTimeout(() => {
        sagaBtn.style.display = "none";

        missionVideo.style.display = "block";
        missionVideo.style.opacity = 1;
        missionVideo.currentTime = 0;

        enableSound(missionVideo);
        missionVideo.play();

    }, 1000);

});

/* =========================
   CLICK MISSION → CONTINUE
========================= */
missionVideo.addEventListener("click", () => {

    missionVideo.style.opacity = 0;

    setTimeout(() => {

        missionVideo.pause();
        missionVideo.style.display = "none";

        // Show Blackie
        blackieVideo.style.display = "block";
        blackieVideo.style.opacity = 1;
        blackieVideo.currentTime = 0;

        enableSound(blackieVideo);
        blackieVideo.play();

        // Show Hey
        heyVideo.style.display = "block";
        heyVideo.style.opacity = 1;
        heyVideo.currentTime = 0;

        enableSound(heyVideo);
        heyVideo.play();

        // Show Enter
        enterBtn.style.display = "block";
        enterBtn.style.opacity = 1;

    }, 1000);

});

/* =========================
   BLACKIE AUTO FADE AT 1:05.2
========================= */
blackieVideo.addEventListener("timeupdate", () => {
    if (blackieVideo.currentTime >= 65.2) {
        blackieVideo.style.opacity = 0;
        blackieVideo.pause();
    }
});

/* =========================
   ENTER CLICK → CINEMATIC
========================= */
enterBtn.addEventListener("click", () => {

    // Fade lower elements
    heyVideo.pause();
    blackieVideo.pause();

    heyVideo.style.opacity = 0;
    blackieVideo.style.opacity = 0;
    enterBtn.style.opacity = 0;

    setTimeout(() => {

        heyVideo.style.display = "none";
        blackieVideo.style.display = "none";
        enterBtn.style.display = "none";

        // Play Beginning
        beginningVideo.style.display = "block";
        beginningVideo.style.opacity = 1;
        beginningVideo.currentTime = 0;

        enableSound(beginningVideo);
        beginningVideo.play();

        // When Beginning Ends → Journey
        beginningVideo.onended = () => {

            beginningVideo.style.opacity = 0;

            setTimeout(() => {

                beginningVideo.style.display = "none";

                journeyVideo.style.display = "block";
                journeyVideo.style.opacity = 1;
                journeyVideo.currentTime = 0;

                enableSound(journeyVideo);
                journeyVideo.play();

            }, 1500);
        };

    }, 1000);
});

});