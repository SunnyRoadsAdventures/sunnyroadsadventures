document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");
const blackieVideo = document.getElementById("blackieVideo");
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");

/* Fade in saga after 2 seconds */
setTimeout(() => {
    sagaBtn.style.opacity = 1;
}, 2000);

/* Click saga → show mission */
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

/* Click mission → close and continue */
missionVideo.addEventListener("click", () => {

    missionVideo.style.opacity = 0;

    setTimeout(() => {

        missionVideo.pause();
        missionVideo.style.display = "none";

        blackieVideo.style.display = "block";
        blackieVideo.style.opacity = 1;
        blackieVideo.play();

        heyVideo.style.display = "block";
        heyVideo.style.opacity = 1;
        heyVideo.play();

        enterBtn.style.display = "block";
        enterBtn.style.opacity = 1;

    }, 1000);

});

});