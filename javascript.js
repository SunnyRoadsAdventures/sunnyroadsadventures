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


    /* GO Click → Start Story */
    goBtn.addEventListener("click", function () {

    alert("GO is working");

});

        console.log("GO clicked"); // Debug check

        container.style.opacity = "0";

        setTimeout(() => {
            fadeOverlay.style.opacity = "1";
        }, 1000);

        setTimeout(() => {
            missionVideo.style.opacity = "1";
            missionVideo.play();
            fadeOverlay.style.opacity = "0";
        }, 2500);
    });

});