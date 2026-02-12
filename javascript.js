document.addEventListener("DOMContentLoaded", function () {

    const sraVideo = document.getElementById("sraVideo");
    const missionVideo = document.getElementById("missionVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const container = document.getElementById("container");
    const fadeOverlay = document.getElementById("fadeOverlay");

    /* Intro Fade In */
    sraVideo.style.opacity = "1";

    setTimeout(() => {
        goBtn.style.opacity = "1";
        skipBtn.style.opacity = "1";
    }, 2000);


    /* GO Click → Cinematic Transition */
    goBtn.addEventListener("click", function () {

        // Fade intro out
        container.style.opacity = "0";

        // Fade to black after intro fade
        setTimeout(() => {
            fadeOverlay.style.opacity = "1";
        }, 1500);

        // Dramatic pause → Mission fade in
        setTimeout(() => {
            missionVideo.style.opacity = "1";
            missionVideo.play();
            fadeOverlay.style.opacity = "0";
        }, 4200);
    });


    /* Mission clickable (for future branching) */
    missionVideo.addEventListener("click", function () {
        console.log("Mission clicked - ready for branching");
    });

});