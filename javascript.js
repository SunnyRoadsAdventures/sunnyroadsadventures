window.addEventListener("load", function () {

    const sraVideo = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");

    /* Start loading video immediately */
    sraVideo.load();

    /* 1.5s → fade in video */
    setTimeout(() => {
        sraVideo.style.opacity = "1";
        sraVideo.play().catch(() => {});
    }, 1500);

    /* 2.3s → fade in GO */
    setTimeout(() => {
        goBtn.style.opacity = "1";
    }, 2300);

    /* 4s → fade in SKIP */
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