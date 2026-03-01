document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CINEMATIC HERO SEQUENCE
  ========================== */

  const heroSection = document.querySelector(".hero");
  const video = document.getElementById("heroVideo");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");
  const kayla = document.querySelector(".kayla-reveal");
  const heroText = document.querySelector(".hero-text");

  // Helper function for async waits
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function playCinematic() {
    if (!video || !heroText) return;

    heroText.style.opacity = "0";

    // Wait for video to end
    await new Promise(resolve => video.addEventListener("ended", resolve));

    // 0️⃣ Hide video gradually
    video.style.transition = "opacity 1s ease";
    video.style.opacity = "0";
    video.style.pointerEvents = "none";
    await wait(1000);
    video.style.display = "none";

    // Keep hero section full height
    if (heroSection) {
      heroSection.style.height = "100vh";
      heroSection.style.overflow = "hidden";
    }

    // 1️⃣ Fade to white
    if (whiteFade) {
      whiteFade.style.opacity = "1";
    }
    await wait(2500);

    // 2️⃣ Fade to black
    if (blackFade) {
      blackFade.style.opacity = "1";
    }
    await wait(1500);

    // 3️⃣ Reveal kayla image
    if (kayla) {
      kayla.style.visibility = "visible";
      kayla.style.opacity = "1";
    }
    await wait(2000);

    // 4️⃣ Fade in hero text
    heroText.style.transition = "opacity 3s ease";
    heroText.style.opacity = "1";

    // 5️⃣ Fade out black layer so kayla is fully visible
    if (blackFade) {
      blackFade.style.transition = "opacity 2s ease";
      blackFade.style.opacity = "0";
    }
  }

  playCinematic();

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

  /* =========================
     PARALLAX BACKGROUND DEPTH
  ========================== */

  window.addEventListener("scroll", () => {
    const depth = window.scrollY * 0.15;
    document.body.style.backgroundPosition = `center ${-depth}px`;
  });

});