window.addEventListener("load", function () {

    const introVideo = document.getElementById("introVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");

    /* 1.5 seconds → fade in video */
    setTimeout(() => {
        introVideo.style.opacity = "1";
        introVideo.play().catch(() => {});
    }, 1500);

    /* 2.3 seconds → fade in GO button */
    setTimeout(() => {
        goBtn.style.opacity = "1";
    }, 2300);

    /* 4 seconds → fade in SKIP button */
    setTimeout(() => {
        skipBtn.style.opacity = "1";
    }, 4000);

    /* Button actions */
    goBtn.addEventListener("click", function () {
        window.location.href = "mission.mp4";
    });

    skipBtn.addEventListener("click", function () {
        window.location.href = "greetings.mp4";
    });

});