document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     HERO VIDEO FADE SYSTEM
  ========================== */

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (heroVideo && heroText) {

    heroVideo.addEventListener("ended", () => {

      if (whiteFade) {
        whiteFade.style.opacity = "1";
      }

      setTimeout(() => {
        heroText.classList.add("is-visible");
      }, 300);

    });

  }


  /* =========================
     LANGUAGE TOGGLE SYSTEM
  ========================== */

  const welcomeVideo = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  window.switchLanguage = function(lang) {

    if (!welcomeVideo) return;

    buttons.forEach(btn => btn.classList.remove("active"));

    const newSource = lang === "eng" ? "eng.mp4" : "esp.mp4";
    welcomeVideo.src = newSource;

    const activeBtn = document.querySelector(
      `.lang-btn[onclick="switchLanguage('${lang}')"]`
    );

    if (activeBtn) {
      activeBtn.classList.add("active");
    }

    welcomeVideo.load();

    // DO NOT autoplay
    // User must press play manually

  };

});