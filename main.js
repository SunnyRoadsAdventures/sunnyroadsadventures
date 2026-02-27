document.addEventListener("DOMContentLoaded", function () {

  /* ==============================
     HERO VIDEO FADE LOGIC
  ============================== */

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (heroVideo && heroText && whiteFade) {

    // Make sure text is hidden on load (for safety)
    heroText.classList.remove("is-visible");
    whiteFade.style.opacity = "0";

    heroVideo.addEventListener("ended", function () {

      // Fade white overlay in
      whiteFade.style.transition = "opacity 0.8s ease";
      whiteFade.style.opacity = "1";

      // Fade in text slightly after white appears
      setTimeout(function () {
        heroText.classList.add("is-visible");
      }, 400);

    });

  }


  /* ==============================
     LANGUAGE SWITCHER
  ============================== */

  const welcomeVideo = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  window.switchLanguage = function(lang) {

    if (!welcomeVideo) return;

    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    const newSource = lang === "eng" ? "eng.mp4" : "esp.mp4";

    welcomeVideo.pause();
    welcomeVideo.src = newSource;
    welcomeVideo.load();

    const activeBtn = document.querySelector(
      `.lang-btn[onclick="switchLanguage('${lang}')"]`
    );

    if (activeBtn) {
      activeBtn.classList.add("active");
    }

  };

});