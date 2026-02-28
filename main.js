document.addEventListener("DOMContentLoaded", function () {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");

  if (!heroVideo || !heroText || !whiteFade || !blackFade) return;

  let transitionTriggered = false;

  heroVideo.addEventListener("timeupdate", function () {

    if (!transitionTriggered && heroVideo.duration > 0) {

      // When 0.4 seconds remain
      if (heroVideo.currentTime >= heroVideo.duration - 0.4) {

        transitionTriggered = true;

        // Fade to white
        whiteFade.style.opacity = "1";

        // After white is visible → switch to obsidian
        setTimeout(() => {
          whiteFade.style.opacity = "0";
          blackFade.style.opacity = "1";
        }, 900);

        // Show text after obsidian settles
        setTimeout(() => {
          heroText.classList.add("is-visible");
        }, 1700);

      }
    }

  });

});