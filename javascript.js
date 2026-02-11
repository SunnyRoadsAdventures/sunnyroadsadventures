document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");

/* Fade in saga after 2 seconds */
setTimeout(() => {
    sagaBtn.style.transition = "opacity 2s ease";
    sagaBtn.style.opacity = 1;
}, 2000);

/* Click saga → show mission */
sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";

    setTimeout(() => {
        sagaBtn.style.display = "none";
    }, 2000);

    missionVideo.style.display = "block";

    setTimeout(() => {
        missionVideo.style.transition = "opacity 1s ease";
        missionVideo.style.opacity = 1;
        missionVideo.currentTime = 0;
        missionVideo.play();
    }, 50);

});

/* Click anywhere → close mission */
document.addEventListener("click", () => {

    if (missionVideo.style.display === "block") {

        missionVideo.style.opacity = 0;

        setTimeout(() => {
            missionVideo.pause();
            missionVideo.style.display = "none";
        }, 1000);

    }

});

});