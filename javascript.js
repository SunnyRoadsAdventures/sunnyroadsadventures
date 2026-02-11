document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");

/* Fade in saga after 2 seconds */
setTimeout(() => {
    sagaBtn.style.opacity = "1";
}, 2000);

/* Click saga → show mission.mp4 */
sagaBtn.addEventListener("click", () => {

    // Hide saga
    sagaBtn.style.opacity = "0";

    setTimeout(() => {
        sagaBtn.style.display = "none";
    }, 2000);

    // Show mission video
    missionVideo.style.display = "block";

    setTimeout(() => {
        missionVideo.style.opacity = "1";
        missionVideo.play();
    }, 50);

});

});