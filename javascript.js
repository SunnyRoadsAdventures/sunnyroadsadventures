const greetingsVideo = document.getElementById("greetingsVideo");
const marketImage = document.getElementById("marketImage");

let transitionStarted = false;

// Click anywhere to close greetings and show market
document.addEventListener("click", function () {

    if (transitionStarted) return;
    transitionStarted = true;

    // Fade out greetings
    greetingsVideo.style.opacity = "0";

    // After fade completes
    setTimeout(function () {

        greetingsVideo.pause();
        greetingsVideo.classList.add("hidden");

        // Show market image
        marketImage.classList.remove("hidden");

        // Allow browser to render before fading in
        setTimeout(function () {
            marketImage.style.opacity = "1";
        }, 50);

    }, 1500); // matches video fade duration
});