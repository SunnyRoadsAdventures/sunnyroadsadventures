document.addEventListener("DOMContentLoaded", function () {

  const welcomeVideo = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  /* ------------------------------
     HERO VIDEO FADE LOGIC
  ------------------------------ */

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");

  if (heroVideo && heroText) {
    heroVideo.addEventListener("ended", function () {
      heroText.classList.add("show");
    });
  }

  /* ------------------------------
     LANGUAGE SWITCHER
  ------------------------------ */

  window.switchLanguage = function(lang) {

    if (!welcomeVideo) return;

    buttons.forEach(btn => btn.classList.remove("active"));

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