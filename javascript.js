window.addEventListener("load", function () {

    const video = document.getElementById("sraVideo");
    const goBtn = document.getElementById("goBtn");

    // Fade in video
    setTimeout(() => {
        video.style.opacity = "1";
    }, 500);

    // Fade in GO button after video fade completes
    setTimeout(() => {
        goBtn.style.opacity = "1";
    }, 2500);

});