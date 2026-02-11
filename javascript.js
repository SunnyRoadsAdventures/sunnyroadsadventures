document.addEventListener("DOMContentLoaded", function () {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");

/* Fade in saga after 2 seconds */
setTimeout(function () {
    sagaBtn.style.opacity = "1";
}, 2000);

/* Click saga → show mission */
sagaBtn.addEventListener("click", function (e) {

    e.stopPropagation(); // prevent instant close

    sagaBtn.style.opacity = "0";
    sagaBtn.style.display = "none";

    missionVideo.style.display = "block";
    missionVideo.style.opacity = "1";

    missionVideo.currentTime = 0;

    // FORCE PLAY
    const playPromise = missionVideo.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Mission video failed to play:", error);
        });
    }

});

/* Tap anywhere → close mission */
document.addEventListener("click", function () {

    if (missionVideo.style.display === "block") {

        missionVideo.style.opacity = "0";

        setTimeout(function () {
            missionVideo.pause();
            missionVideo.style.display = "none";
        }, 1000);
    }

});

});