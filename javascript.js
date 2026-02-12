document.addEventListener("DOMContentLoaded", () => {

    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const missionVideo = document.getElementById("missionVideo");
    const blackieVideo = document.getElementById("blackieVideo");
    const heyVideo = document.getElementById("heyVideo");
    const sagaBtn = document.getElementById("sagaBtn");
    const greetingsVideo = document.getElementById("greetingsVideo");
    const marketImg = document.getElementById("marketImg");

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

    // ===== GO BUTTON CLICK → mission.mp4 =====
    goBtn.addEventListener("click", () => {
        fadeOutElements([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            showVideo(missionVideo);

            missionVideo.addEventListener("click", () => {
                fadeOutElements([missionVideo], () => {
                    missionVideo.style.display = "none";

                    // Show blackie + hey
                    showVideo(blackieVideo);
                    showVideo(heyVideo);

                    // Saga button fades in after 4s
                    setTimeout(() => {
                        sagaBtn.style.display = "block";
                        fadeInElement(sagaBtn);
                    }, 4000);
                });
            }, { once: true });
        });
    });

    // ===== SAGA BUTTON CLICK → GREETINGS =====
    sagaBtn.addEventListener("click", () => {
        // Stop blackie + hey immediately
        blackieVideo.pause();
        heyVideo.pause();

        fadeOutElements([blackieVideo, heyVideo, sagaBtn], () => {
            blackieVideo.style.display = "none";
            heyVideo.style.display = "none";
            sagaBtn.style.display = "none";

            // Show greetings scroll smoothly
            greetingsVideo.style.display = "block";
            greetingsVideo.style.opacity = 0;
            greetingsVideo.style.pointerEvents = "auto";

            setTimeout(() => {
                greetingsVideo.style.opacity = 1;
                greetingsVideo.play();
            }, 50);

            // Click anywhere on greetings to fade out and show market
            greetingsVideo.addEventListener("click", () => {
                fadeOutElements([greetingsVideo], () => {
                    greetingsVideo.style.display = "none";

                    // Fade in market image smoothly
                    marketImg.style.display = "block";
                    setTimeout(() => marketImg.style.opacity = 1, 50);
                });
            }, { once: true });
        });
    });

    // ===== SKIP BUTTON CLICK → greetings.mp4 =====
    skipBtn.addEventListener("click", () => {
        fadeOutElements([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            // Show greetings scroll
            greetingsVideo.style.display = "block";
            greetingsVideo.style.opacity = 0;
            greetingsVideo.style.pointerEvents = "auto";

            setTimeout(() => {
                greetingsVideo.style.opacity = 1;
                greetingsVideo.play();
            }, 50);

            // Click anywhere on greetings to fade out and show market
            greetingsVideo.addEventListener("click", () => {
                fadeOutElements([greetingsVideo], () => {
                    greetingsVideo.style.display = "none";

                    // Fade in market image smoothly
                    marketImg.style.display = "block";
                    setTimeout(() => marketImg.style.opacity = 1, 50);
                });
            }, { once: true });
        });
    });

    // ===== HELPER FUNCTIONS =====
    function fadeOutElements(elements, callback) {
        elements.forEach(el => el.style.opacity = 0);
        setTimeout(() => { if(callback) callback(); }, fadeDuration);
    }

    function fadeInElement(element) {
        element.style.opacity = 1;
    }

    function showVideo(videoEl) {
        videoEl.style.display = "block";
        videoEl.muted = false;
        videoEl.volume = 1;
        setTimeout(() => videoEl.style.opacity = 1, 100);
        videoEl.play();
    }

});