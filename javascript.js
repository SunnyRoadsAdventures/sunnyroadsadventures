document.addEventListener("DOMContentLoaded", function () {

const sagaBtn = document.getElementById("sagaBtn");
const missionVideo = document.getElementById("missionVideo");

const gateVideo = document.getElementById("gateVideo"); // blackie.mp4
const heyVideo = document.getElementById("heyVideo");
const enterBtn = document.getElementById("enterBtn");

/* =========================
   1. Saga fades in
========================= */

setTimeout(function () {
    sagaBtn.style.opacity = "1";
}, 2000);

/* =========================
   2. Click saga → mission.mp4
========================= */

sagaBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    sagaBtn.style.opacity = "0";
    sagaBtn.style.pointerEvents = "none";

    setTimeout(function () {
        sagaBtn.style.display = "none";
    }, 1000);

    missionVideo.style.display = "block";
    missionVideo.style.opacity = "1";
    missionVideo.currentTime = 0;
    missionVideo.play();

});

/* =========================
   3. Tap anywhere → close mission
      → start rest of system
========================= */

document.addEventListener("click", function () {

    if (missionVideo.style.display === "block") {

        missionVideo.style.opacity = "0";

        setTimeout(function () {

            missionVideo.pause();
            missionVideo.style.display = "none";

            /* NOW REST STARTS */

            // blackie.mp4
            gateVideo.style.display = "block";
            gateVideo.style.opacity = "1";
            gateVideo.currentTime = 0;
            gateVideo.play();

            // hey.mp4
            heyVideo.style.display = "block";
            heyVideo.style.opacity = "1";
            heyVideo.play();

            // enter button
            setTimeout(function () {
                enterBtn.style.display = "block";
                enterBtn.style.opacity = "1";
            }, 3000);

        }, 1000);
    }

});

});