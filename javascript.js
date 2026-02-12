document.addEventListener("DOMContentLoaded", () => {
    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const missionVideo = document.getElementById("missionVideo");
    const greetingsVideo = document.getElementById("greetingsVideo");

    // Initial fade in sequence
    setTimeout(() => { sraVideo.style.opacity = 1; }, 1500);
    setTimeout(() => { goBtn.style.opacity = 1; goBtn.style.pointerEvents = "auto"; }, 2300);
    setTimeout(() => { skipBtn.style.opacity = 1; skipBtn.style.pointerEvents = "auto"; }, 4000);

    // go.png → mission.mp4
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
            setTimeout(() => missionVideo.style.opacity = 1, 100);
            missionVideo.play();

            // Click anywhere to close mission
            missionVideo.addEventListener("click", () => {
                missionVideo.style.opacity = 0;
                missionVideo.style.pointerEvents = "none";
                setTimeout(() => missionVideo.style.display = "none", 1000);

                // Next scene placeholder
                console.log("Mission ended → load next scene");
            });
        }, 1000);
    });

    // skip.png → greetings.mp4
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

            greetingsVideo.addEventListener("click", () => {
                greetingsVideo.style.opacity = 0;
                greetingsVideo.style.pointerEvents = "none";
                setTimeout(() => greetingsVideo.style.display = "none", 1000);

                console.log("Skipped → greetings ended");
            });
        }, 1000);
    });
});