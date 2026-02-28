// =============================
// MAIN.JS – Updated for Hero Fade
// =============================

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // HERO VIDEO FADE SYSTEM
  // =========================
  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (heroVideo && heroText) {
    // Always start hidden
    heroText.style.opacity = "0";  
    let fadeTriggered = false;

    // Trigger fade just before video ends
    heroVideo.addEventListener("timeupdate", () => {
      if (!fadeTriggered && heroVideo.duration > 0 && heroVideo.currentTime >= heroVideo.duration - 0.3) {
        fadeTriggered = true;

        // White fade overlay
        if (whiteFade) {
          whiteFade.style.opacity = "1";
        }

        // Fade in text after short delay
        setTimeout(() => {
          heroText.classList.add("is-visible");

          // Ensure all child elements are royal gold
          heroText.querySelectorAll("*").forEach(el => el.style.color = "var(--royal-gold)");
        }, 300);
      }
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