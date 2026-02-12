document.addEventListener("DOMContentLoaded", () => {
    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const missionVideo = document.getElementById("missionVideo");
    const blackieVideo = document.getElementById("blackieVideo");
    const heyVideo = document.getElementById("heyVideo");
    const sagaBtn = document.getElementById("sagaBtn");
    const beginningVideo = document.getElementById("beginningVideo");
    const journeyVideo = document.getElementById("journeyVideo");
    const greetingsVideo = document.getElementById("greetingsVideo");

    // Initial fade-in sequence
    sraVideo.style.opacity = 0;
    goBtn.style.opacity = 0; goBtn.style.pointerEvents = "none";
    skipBtn.style.opacity = 0; skipBtn.style.pointerEvents = "none";

    setTimeout(() => { sraVideo.style.opacity = 1; }, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // go.png click → mission.mp4
    goBtn.addEventListener("click", () => {
        sraVideo.style.opacity = 0;
        goBtn.style.opacity = 0;
        skipBtn.style.opacity = 0;
        goBtn.style.pointerEvents = "none";
        skipBtn.style.pointerEvents = "none";

        setTimeout(() => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            missionVideo.style.display = "block";
            setTimeout(() => missionVideo.style.opacity = 1, 100);
            missionVideo.play();

            // Click anywhere on mission to close
            missionVideo.addEventListener("click", () => {
                missionVideo.style.opacity = 0;
                missionVideo.style.pointerEvents = "none";

                setTimeout(() => {
                    missionVideo.style.display = "none";

                    // === Show blackie + hey ===
                    blackieVideo.style.display = "block";
                    heyVideo.style.display = "block";
                    setTimeout(() => {
                        blackieVideo.style.opacity = 1;
                        heyVideo.style.opacity = 1;
                    }, 100);
                    blackieVideo.play();
                    heyVideo.play();

                    // Blackie fades out at 65s
                    blackieVideo.addEventListener("timeupdate", () => {
                        if (blackieVideo.currentTime >= 65) {
                            blackieVideo.style.opacity = 0;
                            blackieVideo.style.pointerEvents = "none";
                            blackieVideo.pause();

                            // Show saga.png after blackie fades
                            sagaBtn.style.display = "block";
                            setTimeout(() => sagaBtn.style.opacity = 1, 100);
                        }
                    });

                }, 1000);
            });
        }, 1000);
    });

    // skip.png click → greetings.mp4
    skipBtn.addEventListener("click", () => {
        sraVideo.style.opacity = 0;
        goBtn.style.opacity = 0;
        skipBtn.style.opacity = 0;
        goBtn.style.pointerEvents = "none";
        skipBtn.style.pointerEvents = "none";

        setTimeout(() => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            greetingsVideo.style.display = "block";
            setTimeout(() => greetingsVideo.style.opacity = 1, 100);
            greetingsVideo.play();

            greetingsVideo.addEventListener("click", () => {
                greetingsVideo.style.opacity = 0;
                greetingsVideo.style.pointerEvents = "none";
                setTimeout(() => greetingsVideo.style.display = "none", 1000);
            });
        }, 1000);
    });

    // saga.png click → beginning.mp4 → journey.mp4 → greetings.mp4
    sagaBtn.addEventListener("click", () => {
        sagaBtn.style.opacity = 0;
        sagaBtn.style.pointerEvents = "none";
        setTimeout(() => sagaBtn.style.display = "none", 500);

        // Play beginning.mp4
        beginningVideo.style.display = "block";
        setTimeout(() => beginningVideo.style.opacity = 1, 100);
        beginningVideo.play();

        beginningVideo.addEventListener("ended", () => {
            beginningVideo.style.opacity = 0;
            beginningVideo.style.display = "none";

            // Play journey.mp4 fullscreen
            journeyVideo.style.display = "block";
            setTimeout(() => journeyVideo.style.opacity = 1, 100);
            journeyVideo.play();

            journeyVideo.addEventListener("ended", () => {
                journeyVideo.style.opacity = 0;
                journeyVideo.style.display = "none";

                // Show greetings.mp4
                greetingsVideo.style.display = "block";
                setTimeout(() => greetingsVideo.style.opacity = 1, 100);
                greetingsVideo.play();
            });
        });
    });
});