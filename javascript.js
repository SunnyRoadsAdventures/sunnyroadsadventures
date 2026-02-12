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
    const marketScene = document.getElementById("marketScene");

    const fadeDuration = 1000;

    // Initial fade-in for sra + buttons
    sraVideo.style.opacity = 0;
    goBtn.style.opacity = 0;
    skipBtn.style.opacity = 0;
    goBtn.style.pointerEvents = "none";
    skipBtn.style.pointerEvents = "none";

    setTimeout(() => sraVideo.style.opacity = 1, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // Helper functions
    function fadeOutElements(elements, callback) {
        elements.forEach(el => el.style.opacity = 0);
        setTimeout(() => { if(callback) callback(); }, fadeDuration);
    }
    function fadeInElement(element) { element.style.opacity = 1; }
    function showVideo(videoEl, fullscreen=false, muted=false) {
        videoEl.style.display = "block";
        videoEl.muted = muted;
        videoEl.volume = muted ? 0 : 1;
        if(fullscreen) {
            videoEl.style.position = "fixed";
            videoEl.style.top = 0;
            videoEl.style.left = 0;
            videoEl.style.width = "100%";
            videoEl.style.height = "100%";
            videoEl.style.objectFit = "cover";
        }
        setTimeout(() => videoEl.style.opacity = 1, 100);
        videoEl.play();
    }

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

                    // Show blackie and hey
                    showVideo(blackieVideo);
                    showVideo(heyVideo);

                    // Blackie auto fade at 65.5s
                    blackieVideo.addEventListener("timeupdate", function fadeBlackie() {
                        if(blackieVideo.currentTime >= 65.5) {
                            fadeOutElements([blackieVideo], () => blackieVideo.style.display="none");
                            blackieVideo.removeEventListener("timeupdate", fadeBlackie);
                        }
                    });

                    setTimeout(() => { sagaBtn.style.display="block"; fadeInElement(sagaBtn); }, 4000);
                });
            }, { once: true });
        });
    });

    // ===== SAGA BUTTON CLICK =====
    sagaBtn.addEventListener("click", () => {
        // Stop blackie + hey immediately
        blackieVideo.pause(); blackieVideo.style.display="none";
        heyVideo.pause(); heyVideo.style.display="none";
        fadeOutElements([sagaBtn], () => sagaBtn.style.display="none");

        // Beginning first, then journey
        showVideo(beginningVideo, true);
        beginningVideo.addEventListener("ended", () => {
            showVideo(journeyVideo, true);

            // Journey fades at 27s
            journeyVideo.addEventListener("timeupdate", function fadeJourney() {
                if(journeyVideo.currentTime >= 27) {
                    fadeOutElements([journeyVideo], () => journeyVideo.style.display="none");
                    journeyVideo.removeEventListener("timeupdate", fadeJourney);

                    // Greetings scroll fades in
                    showVideo(greetingsVideo, false, false);
                    greetingsVideo.style.background = "black";

                    greetingsVideo.addEventListener("click", () => {
                        fadeOutElements([greetingsVideo], () => {
                            greetingsVideo.style.display="none";
                            marketScene.style.display="block";
                        });
                    }, { once:true });
                }
            });
        }, { once:true });
    });

    // ===== SKIP BUTTON CLICK → greetings.mp4 =====
    skipBtn.addEventListener("click", () => {
        fadeOutElements([sraVideo, goBtn, skipBtn], () => {
            sraVideo.style.display = "none";
            goBtn.style.display = "none";
            skipBtn.style.display = "none";

            showVideo(greetingsVideo);
            greetingsVideo.style.background = "black";

            greetingsVideo.addEventListener("click", () => {
                fadeOutElements([greetingsVideo], () => {
                    greetingsVideo.style.display="none";
                    marketScene.style.display="block";
                });
            }, { once:true });
        });
    });

});