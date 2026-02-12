window.onload = function () {

    const container = document.querySelector(".button-container");
    const goBtn = document.getElementById("goBtn");
    const skipBtn = document.getElementById("skipBtn");
    const video = document.getElementById("greetingsVideo");
    const background = document.querySelector(".background");

    // Fade buttons in (same timing as old enter)
    setTimeout(() => {
        container.style.opacity = "1";
    }, 2000);


    // GO Button – cinematic transition
    goBtn.addEventListener("click", function () {

        container.style.opacity = "0";

        background.style.transition = "transform 1.5s ease";
        background.style.transform = "scale(1.1)";

        setTimeout(() => {
            background.style.display = "none";
            video.style.display = "block";
            video.play();
        }, 1500);

    });


    // SKIP Button – instant teleport
    skipBtn.addEventListener("click", function () {

        container.style.opacity = "0";
        background.style.display = "none";
        video.style.display = "block";
        video.play();

    });

};