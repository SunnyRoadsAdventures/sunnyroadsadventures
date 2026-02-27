document.addEventListener("DOMContentLoaded", function () {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");

  if (!heroVideo || !heroText || !whiteFade || !blackFade) return;

  // Make sure text is NEVER visible at start
  heroText.classList.remove("is-visible");
  heroText.style.opacity = "0";

  // When video ends (NO loop assumed)
  heroVideo.addEventListener("ended", function () {

    // Step 1: Fade to white
    whiteFade.style.opacity = "1";

    // Step 2: After white is visible, fade to obsidian
    setTimeout(() => {
      blackFade.style.opacity = "1";
    }, 800);

    // Step 3: Reveal text after background is dark
    setTimeout(() => {
      heroText.classList.add("is-visible");
    }, 1500);

  });

});