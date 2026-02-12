window.addEventListener("load", function () {
    const video = document.getElementById("sraVideo");

    // Small delay before fade
    setTimeout(() => {
        video.style.opacity = "1";
    }, 500);
});