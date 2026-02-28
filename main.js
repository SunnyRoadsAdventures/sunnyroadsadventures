document.addEventListener("DOMContentLoaded", () => {
  // HERO TEXT VISIBLE IMMEDIATELY
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.style.opacity = "1"; // show immediately
  }

  // LANGUAGE TOGGLE SYSTEM
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