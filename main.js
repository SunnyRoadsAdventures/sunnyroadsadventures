(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       HERO VIDEO FADE-IN LOGIC
    ================================= */

    const heroVideo = document.querySelector(".hero-video video");
    const heroText  = document.querySelector(".hero-text");

    if (heroVideo && heroText) {

      let hasFadedIn = false;

      const revealText = () => {
        if (!hasFadedIn) {
          heroText.classList.add("is-visible");
          hasFadedIn = true;
        }
      };

      // 1️⃣ Trigger when video actually starts playing
      heroVideo.addEventListener("playing", revealText, { once: true });

      // 2️⃣ Fallback if autoplay fails or video stalls
      setTimeout(() => {
        if (!hasFadedIn) {
          revealText();
        }
      }, 2500);

      // 3️⃣ Extra protection in case video is already playing
      if (!heroVideo.paused && !heroVideo.ended) {
        revealText();
      }
    }


    /* ================================
       SAFE CTA SMOOTH SCROLL
    ================================= */

    const ctaButtons = document.querySelectorAll(".cta");

    ctaButtons.forEach(cta => {

      cta.addEventListener("click", (e) => {

        const href = cta.getAttribute("href");

        if (!href) return;

        // Only intercept internal anchors
        if (href.startsWith("#")) {

          const target = document.querySelector(href);

          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }

      });

    });

  });

})();