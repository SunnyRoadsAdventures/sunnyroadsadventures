document.addEventListener("DOMContentLoaded", () => {
    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const missionVideo = document.getElementById("missionVideo");
    const greetingsVideo = document.getElementById("greetingsVideo");
    const blackieVideo = document.getElementById("blackieVideo");
    const heyVideo = document.getElementById("heyVideo");
    const sagaBtn = document.getElementById("sagaBtn");

    // Initial setup
    sraVideo.style.opacity = 0;
    goBtn.style.opacity = 0;
    skipBtn.style.opacity = 0;
    goBtn.style.pointerEvents = "none";
    skipBtn.style.pointerEvents = "none";

    // Fade in sequence for intro
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

                setTimeout(() => missionVideo.style.display = "none", 1000);

                // === Show blackie + hey ===
                blackieVideo.style.display = "block";
                heyVideo.style.display = "block";

                setTimeout(() => {
                    blackieVideo.style.opacity = 1;
                    heyVideo.style.opacity = 1;
                    blackieVideo.play();
                    heyVideo.play();
                }, 100);

                // saga.png fades in after 4 seconds
                setTimeout(() => {
                    sagaBtn.style.display = "block";
                    setTimeout(() => sagaBtn.style.opacity = 1, 100);
                }, 4000);

                // blackie fades out at 65 seconds
                blackieVideo.addEventListener("timeupdate", () => {
                    if (blackieVideo.currentTime >= 65) {
                        blackieVideo.style.opacity = 0;
                        blackieVideo.style.pointerEvents = "none";
                        blackieVideo.pause();
                    }
                });
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

            // Click anywhere on greetings to close
            greetingsVideo.addEventListener("click", () => {
                greetingsVideo.style.opacity = 0;
                greetingsVideo.style.pointerEvents = "none";
                setTimeout(() => greetingsVideo.style.display = "none", 1000);

                // TODO: Load next scene if needed
            });
        }, 1000);
    });
});