document.addEventListener("DOMContentLoaded", function () {

  const welcomeVideo = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  /* ------------------------------
     HERO VIDEO FADE LOGIC
  ------------------------------ */
  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (heroVideo && heroText && whiteFade) {
    heroVideo.addEventListener("ended", function () {
      // Fade white overlay first
      whiteFade.style.opacity = "1";

      // Then fade in hero text after slight delay
      setTimeout(() => {
        heroText.classList.add("is-visible");
      }, 300);
    });
  }

  /* ------------------------------
     LANGUAGE SWITCHER
  ------------------------------ */
  window.switchLanguage = function(lang) {

    if (!welcomeVideo) return;

    buttons.forEach(btn => btn.classList.remove("active"));

    // Choose video source
    const newSource = lang === "eng" ? "eng.mp4" : "esp.mp4";

    // Pause, change source, then wait for user to click play
    welcomeVideo.pause();
    welcomeVideo.src = newSource;
    welcomeVideo.load();

    // Update active button
    const activeBtn = document.querySelector(
      `.lang-btn[onclick="switchLanguage('${lang}')"]`
    );
    if (activeBtn) activeBtn.classList.add("active");
  };

});