window.addEventListener("load", function () {

    const video = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");

    // Fade in video
    setTimeout(() => {
        video.style.opacity = "1";
    }, 500);

    // Fade in GO
    setTimeout(() => {
        goBtn.style.opacity = "1";
    }, 2500);

    // Fade in SKIP
    setTimeout(() => {
        skipBtn.style.opacity = "1";
    }, 3500);

});