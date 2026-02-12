document.addEventListener("DOMContentLoaded", () => {
    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const missionVideo = document.getElementById("missionVideo");
    const blackieVideo = document.getElementById("blackieVideo");
    const heyVideo = document.getElementById("heyVideo");
    const sagaBtn = document.getElementById("sagaBtn");
    const beginningVideo = document.getElementById("beginningVideo");

    // Initial fade-in sequence
    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // ==== GO BUTTON → MISSION VIDEO ====
    goBtn.addEventListener("click", () => {
        // Fade out SRA and buttons
        sraVideo.style.opacity = 0;
        goBtn.style.opacity = 0;
        skipBtn.style.opacity = 0;
        goBtn.style.pointerEvents = "none";
        skipBtn.style.pointerEvents = "none";

        setTimeout(() => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            // Show mission
            missionVideo.style.display = "block";
            setTimeout(() => missionVideo.style.opacity = 1, 100);
            missionVideo.play();

            // Click anywhere to close mission
            missionVideo.addEventListener("click", () => {
                missionVideo.style.opacity = 0;
                missionVideo.style.pointerEvents = "none";
                setTimeout(() => missionVideo.style.display = "none", 1000);

                // Show blackie + hey
                blackieVideo.style.display = "block";
                heyVideo.style.display = "block";
                setTimeout(() => { blackieVideo.style.opacity = 1; heyVideo.style.opacity = 1; }, 100);
                blackieVideo.play();
                heyVideo.play();

                // Fade out blackie at 65s
                setTimeout(() => blackieVideo.style.opacity = 0, 65000);

                // Fade in saga.png at 4s
                setTimeout(() => { sagaBtn.style.display = "block"; sagaBtn.style.opacity = 1; sagaBtn.style.pointerEvents = "auto"; }, 4000);
            });
        }, 1000);
    });

    // ==== SKIP BUTTON → GREETINGS VIDEO ====
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
            });
        }, 1000);
    });

    // ==== SAGA BUTTON → BEGINNING VIDEO ====
    sagaBtn.addEventListener("click", () => {
        sagaBtn.style.opacity = 0;
        blackieVideo.style.opacity = 0;
        heyVideo.style.opacity = 0;
        sagaBtn.style.pointerEvents = "none";
        blackieVideo.style.pointerEvents = "none";
        heyVideo.style.pointerEvents = "none";

        setTimeout(() => {
            sagaBtn.style.display = "none";
            blackieVideo.style.display = "none";
            heyVideo.style.display = "none";

            beginningVideo.style.display = "block";
            setTimeout(() => beginningVideo.style.opacity = 1, 100);
            beginningVideo.play();
        }, 1000);
    });
});