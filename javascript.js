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

    const fadeDuration = 1000; // 1s fade

    // Helper for fading volume
    function fadeVolume(video, start, end, duration) {
        const steps = 20;
        const stepTime = duration / steps;
        let currentStep = 0;
        const delta = (end - start) / steps;
        video.volume = start;

        const interval = setInterval(() => {
            currentStep++;
            video.volume = Math.min(Math.max(video.volume + delta, 0), 1);
            if (currentStep >= steps) clearInterval(interval);
        }, stepTime);
    }

    // Initial fade-in sequence
    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // ==== GO BUTTON → MISSION VIDEO ====
    goBtn.addEventListener("click", () => {
        // Fade out sra & buttons
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
            missionVideo.style.opacity = 0;
            missionVideo.play();
            fadeVolume(missionVideo, 0, 1, fadeDuration); // fade in audio
            setTimeout(() => missionVideo.style.opacity = 1, 100);

            // Click anywhere to close mission
            missionVideo.addEventListener("click", () => {
                missionVideo.style.opacity = 0;
                fadeVolume(missionVideo, 1, 0, fadeDuration); // fade out audio
                missionVideo.style.pointerEvents = "none";
                setTimeout(() => missionVideo.style.display = "none", fadeDuration);

                // Show blackie + hey
                blackieVideo.style.display = "block";
                blackieVideo.style.opacity = 0;
                blackieVideo.play();
                fadeVolume(blackieVideo, 0, 1, fadeDuration);

                heyVideo.style.display = "block";
                heyVideo.style.opacity = 0;
                heyVideo.play();
                fadeVolume(heyVideo, 0, 1, fadeDuration);

                setTimeout(() => {
                    blackieVideo.style.opacity = 1;
                    heyVideo.style.opacity = 1;
                }, 100);

                // Fade out blackie at 65s
                setTimeout(() => {
                    blackieVideo.style.opacity = 0;
                    fadeVolume(blackieVideo, 1, 0, fadeDuration);
                }, 65000);

                // Fade out hey at 70s
                setTimeout(() => {
                    heyVideo.style.opacity = 0;
                    fadeVolume(heyVideo, 1, 0, fadeDuration);
                }, 70000);

                // Fade in saga.png at 4s
                setTimeout(() => {
                    sagaBtn.style.display = "block";
                    sagaBtn.style.opacity = 0;
                    sagaBtn.style.pointerEvents = "auto";
                    setTimeout(() => sagaBtn.style.opacity = 1, 100);
                }, 4000);
            });
        }, fadeDuration);
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
            greetingsVideo.style.opacity = 0;
            greetingsVideo.play();
            fadeVolume(greetingsVideo, 0, 1, fadeDuration);
            setTimeout(() => greetingsVideo.style.opacity = 1, 100);

            greetingsVideo.addEventListener("click", () => {
                greetingsVideo.style.opacity = 0;
                fadeVolume(greetingsVideo, 1, 0, fadeDuration);
                greetingsVideo.style.pointerEvents = "none";
                setTimeout(() => greetingsVideo.style.display = "none", fadeDuration);
            });
        }, fadeDuration);
    });

    // ==== SAGA BUTTON → BEGINNING → JOURNEY ====
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
            beginningVideo.style.opacity = 0;
            beginningVideo.play();
            fadeVolume(beginningVideo, 0, 1, fadeDuration);
            setTimeout(() => beginningVideo.style.opacity = 1, 100);

            // When beginning ends → journey
            beginningVideo.addEventListener("ended", () => {
                beginningVideo.style.opacity = 0;
                fadeVolume(beginningVideo, 1, 0, fadeDuration);
                beginningVideo.style.display = "none";

                journeyVideo.style.display = "block";
                journeyVideo.style.opacity = 0;
                journeyVideo.play();
                fadeVolume(journeyVideo, 0, 1, fadeDuration);
                setTimeout(() => journeyVideo.style.opacity = 1, 100);

                // Click anywhere on journey to close
                journeyVideo.addEventListener("click", () => {
                    journeyVideo.style.opacity = 0;
                    fadeVolume(journeyVideo, 1, 0, fadeDuration);
                    journeyVideo.style.pointerEvents = "none";
                    setTimeout(() => journeyVideo.style.display = "none", fadeDuration);
                });
            });
        }, fadeDuration);
    });
});