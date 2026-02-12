/* ENTER BUTTON CLICK → STOP LOWER VIDEOS & START BEGINNING + JOURNEY */
enterBtn.addEventListener("click", () => {

    /* fade out lower videos */
    blackieVideo.style.opacity = 0;
    blackieVideo.pause();
    heyVideo.style.opacity = 0;
    heyVideo.pause();

    /* hide enter button */
    enterBtn.style.opacity = 0;
    setTimeout(() => enterBtn.style.display = "none", 1000);

    /* PLAY BEGINNING VIDEO */
    beginningVideo.style.display = "block";
    beginningVideo.style.opacity = 1;
    beginningVideo.currentTime = 0;
    beginningVideo.play();

    /* WHEN BEGINNING ENDS → PLAY JOURNEY */
    beginningVideo.onended = () => {
        beginningVideo.style.opacity = 0;
        beginningVideo.style.display = "none";

        /* SHOW JOURNEY FULLSCREEN */
        journeyVideo.style.display = "block";
        journeyVideo.style.opacity = 1;
        journeyVideo.currentTime = 0;
        journeyVideo.play();

        /* Ensure full screen via CSS */
        journeyVideo.style.top = "50%";
        journeyVideo.style.left = "50%";
        journeyVideo.style.width = "100vw";
        journeyVideo.style.height = "100vh";
        journeyVideo.style.transform = "translate(-50%, -50%)";
        journeyVideo.style.objectFit = "cover";
        journeyVideo.style.zIndex = 50;
    };

    /* FADE JOURNEY AT 26.5s */
    journeyVideo.addEventListener("timeupdate", () => {
        if (journeyVideo.currentTime >= 26.5) {
            journeyVideo.style.transition = "opacity 2s ease";
            journeyVideo.style.opacity = 0;

            setTimeout(() => {
                journeyVideo.pause();
                journeyVideo.style.display = "none";

                /* ensure black background after fade */
                document.body.style.background = "black";
            }, 2000); // fade duration
        }
    });

    /* ALSO FADE TO BLACK AFTER VIDEO ENDS COMPLETELY */
    journeyVideo.onended = () => {
        journeyVideo.style.opacity = 0;
        journeyVideo.style.display = "none";
        document.body.style.background = "black";
    };
});