document.addEventListener("DOMContentLoaded", () => {
    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");

    // Start hidden
    sraVideo.style.opacity = 0;
    goBtn.style.opacity = 0;
    skipBtn.style.opacity = 0;
    goBtn.style.pointerEvents = "none";
    skipBtn.style.pointerEvents = "none";

    // Fade in sraVideo
    setTimeout(() => {
        sraVideo.style.opacity = 1;
    }, 1500);

    // Fade in goBtn
    setTimeout(() => {
        goBtn.style.opacity = 1;
        goBtn.style.pointerEvents = "auto";
    }, 2300);

    // Fade in skipBtn
    setTimeout(() => {
        skipBtn.style.opacity = 1;
        skipBtn.style.pointerEvents = "auto";
    }, 4000);

    // goBtn click → fade out and show mission.mp4
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

            const mission = document.getElementById("missionVideo");
            mission.style.display = "block";
            mission.style.opacity = 0;
            setTimeout(() => mission.style.opacity = 1, 100);
            mission.play();
        }, 1000); // fade out duration
    });

    // skipBtn click → teleport straight to greetings.mp4
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

            const greetings = document.getElementById("greetingsVideo");
            greetings.style.display = "block";
            greetings.style.opacity = 0;
            setTimeout(() => greetings.style.opacity = 1, 100);
            greetings.play();
        }, 1000); // fade out duration
    });
});