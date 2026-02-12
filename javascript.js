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

    const fadeDuration = 1000; // 1s

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

    // Initial Fade In
    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // ===== GO BUTTON =====
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
            missionVideo.muted = false;
            missionVideo.volume = 0;
            missionVideo.play();
            fadeVolume(missionVideo, 0, 1, fadeDuration);
            setTimeout(() => missionVideo.style.opacity = 1, 100);

            missionVideo.addEventListener("click", () => {
                missionVideo.style.opacity = 0;
                fadeVolume(missionVideo, 1, 0, fadeDuration);
                missionVideo.style.pointerEvents = "none";
                setTimeout(() => missionVideo.style.display = "none", fadeDuration);

                // Show blackie + hey
                blackieVideo.style.display = "block";
                blackieVideo.muted = false;
                blackieVideo.volume = 0;
                blackieVideo.play();
                fadeVolume(blackieVideo, 0, 1, fadeDuration);
                blackieVideo.style.opacity = 1;

                heyVideo.style.display = "block";
                heyVideo.muted = false;
                heyVideo.volume = 0;
                heyVideo.play();
                fadeVolume(heyVideo, 0, 1, fadeDuration);
                heyVideo.style.opacity = 1;

                // Blackie fade at 65s
                setTimeout(() => {
                    blackieVideo.style.opacity = 0;
                    fadeVolume(blackieVideo, 1, 0, fadeDuration);
                }, 65000);

                // Hey fade at 70s
                setTimeout(() => {
                    heyVideo.style.opacity = 0;
                    fadeVolume(heyVideo, 1, 0, fadeDuration);
                }, 70000);

                // Saga button fade in after 4s
                setTimeout(() => {
                    sagaBtn.style.display = "block";
                    sagaBtn.style.opacity = 0;
                    sagaBtn.style.pointerEvents = "auto";
                    setTimeout(() => sagaBtn.style.opacity = 1, 100);
                }, 4000);
            });
        }, fadeDuration);
    });

    // ===== SKIP BUTTON =====
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
            greetingsVideo.muted = false;
            greetingsVideo.volume = 0;
            greetingsVideo.play();
            fadeVolume(greetingsVideo, 0, 1, fadeDuration);
            greetingsVideo.style.opacity = 1;

            greetingsVideo.addEventListener("click", () => {
                greetingsVideo.style.opacity = 0;
                fadeVolume(greetingsVideo, 1, 0, fadeDuration);
                greetingsVideo.style.pointerEvents = "none";
                setTimeout(() => greetingsVideo.style.display = "none", fadeDuration);
            });
        }, fadeDuration);
    });

    // ===== SAGA BUTTON =====
    sagaBtn.addEventListener("click", () => {
        sagaBtn.style.opacity = 0;
        sagaBtn.style.pointerEvents = "none";
        blackieVideo.style.opacity = 0;
        heyVideo.style.opacity = 0;
        blackieVideo.style.pointerEvents = "none";
        heyVideo.style.pointerEvents = "none";

        setTimeout(() => {
            sagaBtn.style.display = "none";
            blackieVideo.style.display = "none";
            heyVideo.style.display = "none";

            beginningVideo.style.display = "block";
            beginningVideo.muted = false;
            beginningVideo.volume = 0;
            beginningVideo.play();
            fadeVolume(beginningVideo, 0, 1, fadeDuration);
            beginningVideo.style.opacity = 1;

            beginningVideo.addEventListener("ended", () => {
                beginningVideo.style.opacity = 0;
                fadeVolume(beginningVideo, 1, 0, fadeDuration);
                beginningVideo.style.display = "none";

                journeyVideo.style.display = "block";
                journeyVideo.muted = false;
                journeyVideo.volume = 0;
                journeyVideo.play();
                fadeVolume(journeyVideo, 0, 1, fadeDuration);
                journeyVideo.style.opacity = 1;

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