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

    // ===== SAGA BUTTON CLICK → beginning + journey =====
    sagaBtn.addEventListener("click", () => {

        // Stop blackie + hey immediately
        [blackieVideo, heyVideo].forEach(v => {
            v.pause();
            v.style.opacity = 0;
            v.style.display = "none";
        });

        fadeOutElements([sagaBtn], () => {
            sagaBtn.style.display = "none";

            // Show beginning and journey
            showVideo(beginningVideo, true);
            showVideo(journeyVideo, true);

            // journey fades out at 26.7s
            journeyVideo.addEventListener("timeupdate", () => {
                if (journeyVideo.currentTime >= 26.7) {
                    fadeOutElements([journeyVideo, beginningVideo], () => {
                        journeyVideo.style.display = "none";
                        beginningVideo.style.display = "none";

                        // Now show greetings.mp4 with solid black background
                        showGreetingsScroll();
                    });
                }
            });
        });
    });

    // ===== SKIP BUTTON CLICK → greetings.mp4 =====
    skipBtn.addEventListener("click", () => {
        // Stop everything
        [sraVideo, goBtn, skipBtn, missionVideo, blackieVideo, heyVideo, beginningVideo, journeyVideo].forEach(v => {
            v.pause();
            v.style.display = "none";
        });

        // Show greetings with solid black background
        showGreetingsScroll();
    });

    // ===== SHOW GREETINGS FUNCTION =====
    function showGreetingsScroll() {
        // Ensure black background behind scroll
        document.body.style.background = "black";

        greetingsVideo.style.display = "block";
        greetingsVideo.style.opacity = 0;
        greetingsVideo.muted = false;
        greetingsVideo.volume = 1;

        setTimeout(() => greetingsVideo.style.opacity = 1, 100);
        greetingsVideo.play();

        // Click anywhere to close greetings
        greetingsVideo.addEventListener("click", () => {
            fadeOutElements([greetingsVideo], () => greetingsVideo.style.display = "none");
        }, { once: true });
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