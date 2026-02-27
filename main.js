document.addEventListener("DOMContentLoaded", function () {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");

  if (!heroVideo || !heroText || !whiteFade || !blackFade) return;

  heroText.classList.remove("is-visible");
  heroText.style.opacity = "0";

  heroVideo.addEventListener("ended", function () {

    // 1. Fade to white
    whiteFade.style.opacity = "1";

    // 2. After 1s → start transition to obsidian
    setTimeout(() => {

      // Fade white out
      whiteFade.style.opacity = "0";

      // Fade black in
      blackFade.style.opacity = "1";

    }, 1000);

    // 3. Show text AFTER obsidian is visible
    setTimeout(() => {
      heroText.classList.add("is-visible");
    }, 2000);

  });

});