document.addEventListener("DOMContentLoaded", function () {

    const sraVideo = document.getElementById("sraVideo");
    const missionVideo = document.getElementById("missionVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const container = document.getElementById("container");
    const fadeOverlay = document.getElementById("fadeOverlay");

    let missionActive = false;


    /* Intro Fade In */
    sraVideo.style.opacity = "1";

    setTimeout(() => {
        goBtn.style.opacity = "1";
        skipBtn.style.opacity = "1";
    }, 2000);


    /* GO Click → Cinematic Transition */
    goBtn.addEventListener("click", function () {

        container.style.opacity = "0";

        setTimeout(() => {
            fadeOverlay.style.opacity = "1";
        }, 1500);

        setTimeout(() => {
            missionVideo.style.opacity = "1";
            missionVideo.play();
            fadeOverlay.style.opacity = "0";
            missionActive = true;
        }, 4200);
    });


    /* TAP ANYWHERE TO CLOSE SCROLL */
    document.addEventListener("click", function () {

        if (missionActive) {

            missionActive = false;

            // Fade to black
            fadeOverlay.style.opacity = "1";

            setTimeout(() => {
                missionVideo.pause();
                missionVideo.style.opacity = "0";

                // NEXT SCENE GOES HERE
                console.log("Ready for next scene");

                fadeOverlay.style.opacity = "0";
            }, 2000);
        }

    });

});