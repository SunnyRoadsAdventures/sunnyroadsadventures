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

    // ===== Initial fade-in for SRA + buttons =====
    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // ===== Helper functions =====
    function fadeOut(elements, callback) {
        elements.forEach(el => el.style.opacity = 0);
        setTimeout(callback, fadeDuration);
    }
    function fadeIn(el) { el.style.opacity = 1; }
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
        setTimeout(() => fadeIn(videoEl), 100);
        videoEl.play();
    }

    // ===== GO BUTTON → Mission Scroll =====
    goBtn.addEventListener("click", () => {
        fadeOut([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            showVideo(missionVideo);

            missionVideo.addEventListener("click", () => {
                fadeOut([missionVideo], () => {
                    missionVideo.style.display = "none";

                    // Show blackie + hey
                    showVideo(blackieVideo);
                    showVideo(heyVideo);

                    // Saga button fade in after 4s
                    setTimeout(() => { sagaBtn.style.display = "block"; fadeIn(sagaBtn); }, 4000);
                });
            }, { once: true });
        });
    });

    // ===== SKIP BUTTON → Greetings Scroll =====
    skipBtn.addEventListener("click", () => {
        fadeOut([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            showVideo(greetingsVideo);

            greetingsVideo.addEventListener("click", () => {
                fadeOut([greetingsVideo], () => greetingsVideo.style.display = "none");
            }, { once: true });
        });
    });

    // ===== SAGA BUTTON → Beginning + Journey =====
    sagaBtn.addEventListener("click", () => {
        // Stop blackie + hey immediately
        blackieVideo.pause(); blackieVideo.style.display = "none";
        heyVideo.pause(); heyVideo.style.display = "none";
        sagaBtn.style.display = "none";

        showVideo(beginningVideo, true);

        beginningVideo.addEventListener("ended", () => {
            showVideo(journeyVideo, true);

            // Fade journey to black at 27s
            journeyVideo.addEventListener("timeupdate", () => {
                if (journeyVideo.currentTime >= 27) {
                    fadeOut([journeyVideo], () => journeyVideo.style.display = "none");

                    // Fade in greetings scroll
                    showVideo(greetingsVideo);
                    greetingsVideo.addEventListener("click", () => {
                        fadeOut([greetingsVideo], () => greetingsVideo.style.display = "none");
                    }, { once: true });
                }
            });
        }, { once: true });
    });

});