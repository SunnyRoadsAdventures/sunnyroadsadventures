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

    const fadeDuration = 1000;

    // ===== INITIAL FADE-IN =====
    sraVideo.style.opacity = 0;
    goBtn.style.opacity = 0;
    skipBtn.style.opacity = 0;
    goBtn.style.pointerEvents = "none";
    skipBtn.style.pointerEvents = "none";

    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // ===== GO BUTTON → mission.mp4 =====
    goBtn.addEventListener("click", () => {
        fadeOut([sraVideo, goBtn, skipBtn], () => {
            hideElements([sraVideo, goBtn, skipBtn]);
            showVideo(missionVideo);

            missionVideo.addEventListener("click", () => {
                fadeOut([missionVideo], () => {
                    hideElements([missionVideo]);

                    // Show blackie + hey
                    showVideo(blackieVideo);
                    showVideo(heyVideo);

                    // Saga button fades in after 4s
                    setTimeout(() => {
                        sagaBtn.style.display = "block";
                        fadeIn(sagaBtn);
                    }, 4000);
                });
            }, { once: true });
        });
    });

    // ===== SAGA BUTTON → beginning + journey =====
    sagaBtn.addEventListener("click", () => {
        fadeOut([blackieVideo, heyVideo, sagaBtn], () => {
            hideElements([blackieVideo, heyVideo, sagaBtn]);
            showVideo(beginningVideo, true);
            showVideo(journeyVideo, true);

            // Journey fades to black at 26.7s
            journeyVideo.addEventListener("timeupdate", function fadeJourney() {
                if (journeyVideo.currentTime >= 26.7) {
                    fadeOut([journeyVideo], () => journeyVideo.style.display = "none");
                    journeyVideo.removeEventListener("timeupdate", fadeJourney);
                }
            });
        });
    });

    // ===== SKIP BUTTON → greetings.mp4 =====
    skipBtn.addEventListener("click", () => {
        fadeOut([sraVideo, goBtn, skipBtn], () => {
            hideElements([sraVideo, goBtn, skipBtn]);
            showVideo(greetingsVideo);

            greetingsVideo.addEventListener("click", () => {
                fadeOut([greetingsVideo], () => greetingsVideo.style.display = "none");
                // Next scene trigger could go here
            }, { once: true });
        });
    });

    // ===== HELPER FUNCTIONS =====
    function fadeOut(elements, callback) {
        elements.forEach(el => el.style.opacity = 0);
        setTimeout(() => { if(callback) callback(); }, fadeDuration);
    }

    function fadeIn(element) {
        element.style.opacity = 1;
    }

    function showVideo(videoEl, fullscreen = false) {
        videoEl.style.display = "block";
        if(videoEl.id !== "sraVideo") {
            videoEl.muted = false;
            videoEl.volume = 1;
        }
        if(fullscreen) {
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

    function hideElements(elements) {
        elements.forEach(el => el.style.display = "none");
    }

});