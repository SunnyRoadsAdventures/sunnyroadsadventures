document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // HERO VIDEO FADE SYSTEM
  // =========================
  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (heroVideo && heroText) {
    // hidden initially
    heroText.style.opacity = "0";  

    heroVideo.addEventListener("ended", () => {  
      // White fade
      if (whiteFade) {  
        whiteFade.style.opacity = "1";  
      }  

      // Fade in hero text
      setTimeout(() => {  
        heroText.classList.add("is-visible"); // CSS handles fade
      }, 900);
    });
  }

  // =========================
  // LANGUAGE TOGGLE SYSTEM
  // =========================
  const welcomeVideo = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  if (welcomeVideo && buttons.length) {
    window.switchLanguage = function(lang) {
      buttons.forEach(btn => btn.classList.remove("active"));

      if (lang === "eng") {
        welcomeVideo.src = "eng.mp4";
        buttons[0].classList.add("active");
      } else {
        welcomeVideo.src = "esp.mp4";
        buttons[1].classList.add("active");
      }

      welcomeVideo.load();
      welcomeVideo.play();
    };
  }

});