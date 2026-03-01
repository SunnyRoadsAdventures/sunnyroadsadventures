document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CINEMATIC HERO SEQUENCE
  ========================== */

  const video = document.getElementById("heroVideo");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");
  const kayla = document.querySelector(".kayla-reveal");
  const heroText = document.querySelector(".hero-text");

  if (video && heroText) {

    heroText.style.opacity = "0";

    video.addEventListener("ended", () => {

      // 1️⃣ Fade to white
      if (whiteFade) {
        whiteFade.style.opacity = "1";
      }

      setTimeout(() => {

        // 2️⃣ Fade to black
        if (blackFade) {
          blackFade.style.opacity = "1";
        }

        setTimeout(() => {

          // 3️⃣ Reveal kayla image
          if (kayla) {
            kayla.style.opacity = "1";
          }

          setTimeout(() => {

            // 4️⃣ Fade in text
            heroText.style.transition = "opacity 3s ease";
            heroText.style.opacity = "1";

          }, 2000);

        }, 1500);

      }, 2500);

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

    if (lang === "eng") {
      welcomeVideo.src = "eng.mp4";
      if (buttons[0]) buttons[0].classList.add("active");
    } else {
      welcomeVideo.src = "esp.mp4";
      if (buttons[1]) buttons[1].classList.add("active");
    }

    welcomeVideo.load();
    welcomeVideo.play();
  };

});