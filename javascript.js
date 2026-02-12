const missionVideo = document.getElementById("missionVideo");
const greetingsVideo = document.getElementById("greetingsVideo");
const blackFade = document.getElementById("blackFade");

let started = false;

document.body.addEventListener("click", function () {

    if (!started) {
        started = true;

        missionVideo.style.display = "block";

        setTimeout(() => {
            missionVideo.style.opacity = "1";
            missionVideo.play();

            // Slow fade from black into mission
            blackFade.style.opacity = "0";
        }, 100);
    }

});

missionVideo.onended = function () {

    // Fade to black slowly
    blackFade.style.opacity = "1";

    setTimeout(() => {

        missionVideo.style.display = "none";

        // Cinematic pause before greetings appears
        setTimeout(() => {

            greetingsVideo.style.display = "block";

            setTimeout(() => {
                greetingsVideo.style.opacity = "1";
                greetingsVideo.play();

                // Fade back from black
                blackFade.style.opacity = "0";

            }, 100);

        }, 1200); // dramatic delay

    }, 2500); // wait for fade-to-black to finish
};