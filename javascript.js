document.addEventListener("DOMContentLoaded", () => {

    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const missionVideo = document.getElementById("missionVideo");
    const blackieVideo = document.getElementById("blackieVideo");
    const heyVideo = document.getElementById("heyVideo");
    const sagaBtn = document.getElementById("sagaBtn");
    const greetingsVideo = document.getElementById("greetingsVideo");

    const fadeDuration = 1000; // 1 second fade

    // ===== INITIAL FADE-IN SEQUENCE =====
    sraVideo.style.opacity = 0;
    goBtn.style.opacity = 0;
    skipBtn.style.opacity = 0;
    goBtn.style.pointerEvents = "none";
    skipBtn.style.pointerEvents = "none";

    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // ===== GO BUTTON CLICK → mission.mp4 =====
    goBtn.addEventListener("click", () => {
        fadeOutElements([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            showVideo(missionVideo);

            // Click anywhere to close mission
            missionVideo.addEventListener("click", closeMissionOnce, { once: true });
        });
    });

    function closeMissionOnce() {
        fadeOutElements([missionVideo], () => {
            missionVideo.style.display = "none";

            // Next scene: blackie + hey
            showVideo(blackieVideo);
            showVideo(heyVideo);

            // Saga button fades in after 4 seconds
            setTimeout(() => {
                sagaBtn.style.display = "block";
                fadeInElement(sagaBtn);
            }, 4000);
        });
    }

    // ===== SAGA BUTTON CLICK → beginning + journey =====
    sagaBtn.addEventListener("click", () => {
        fadeOutElements([blackieVideo, heyVideo, sagaBtn], () => {
            blackieVideo.style.display = "none";
            heyVideo.style.display = "none";
            sagaBtn.style.display = "none";

            // Full screen videos
            showVideo(document.getElementById("beginningVideo"), true);
            const journeyVideo = document.getElementById("journeyVideo");
            showVideo(journeyVideo, true);

            // journey fades to black at 26.7s
            journeyVideo.addEventListener("timeupdate", () => {
                if (journeyVideo.currentTime >= 26.7) {
                    fadeOutElements([journeyVideo], () => journeyVideo.style.display = "none");
                }
            });
        });
    });

    // ===== SKIP BUTTON CLICK → greetings.mp4 =====
    skipBtn.addEventListener("click", () => {
        fadeOutElements([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            showVideo(greetingsVideo);

            // Click anywhere to close greetings
            greetingsVideo.addEventListener("click", closeGreetingsOnce, { once: true });
        });
    });

    function closeGreetingsOnce() {
        fadeOutElements([greetingsVideo], () => {
            greetingsVideo.style.display = "none";
        });
    }

    // ===== HELPER FUNCTIONS =====
    function fadeOutElements(elements, callback) {
        elements.forEach(el => el.style.opacity = 0);
        setTimeout(() => { if(callback) callback(); }, fadeDuration);
    }

    function fadeInElement(element) {
        element.style.opacity = 1;
    }

    function showVideo(videoEl, fullscreen = false) {
        videoEl.style.display = "block";
        videoEl.muted = false;
        videoEl.volume = 1;
        if (fullscreen) {
            videoEl.style.position = "fixed";
            videoEl.style.top = "0";
            videoEl.style.left = "0";
            videoEl.style.width = "100%";
            videoEl.style.height = "100%";
            videoEl.style.objectFit = "cover";
        }
        setTimeout(() => videoEl.style.opacity = 1, 100);
        videoEl.play();
    }

});