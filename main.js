const heroVideo = document.getElementById("heroVideo");
const heroText = document.querySelector(".hero-text");
const whiteFade = document.querySelector(".white-fade");

if (heroVideo && heroText && whiteFade) {

  heroVideo.addEventListener("timeupdate", function () {

    // Trigger when 0.5s remains
    if (heroVideo.duration - heroVideo.currentTime < 0.5) {

      whiteFade.style.opacity = "1";
      heroText.classList.add("is-visible");

      // Remove listener so it only runs once
      heroVideo.removeEventListener("timeupdate", arguments.callee);
    }

  });

}