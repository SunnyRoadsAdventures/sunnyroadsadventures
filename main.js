(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    const heroVideo = document.getElementById("heroVideo");
    const heroText  = document.querySelector(".hero-text");

    if (!heroVideo || !heroText) {
      console.warn("Hero video or hero text not found.");
      return;
    }

    let revealed = false;

    const revealText = () => {
      if (!revealed) {
        heroText.classList.add("is-visible");
        revealed = true;
      }
    };

    // Reveal when video is actually ready (bulletproof)
if (heroVideo.readyState >= 2) {
  revealText();
} else {
  heroVideo.addEventListener("loadeddata", revealText, { once: true });
}

    // ✅ If autoplay already active
    if (!heroVideo.paused && !heroVideo.ended) {
      revealText();
    }

    // ✅ Fallback (in case autoplay blocked)
    setTimeout(() => {
      revealText();
    }, 2500);

  });

})();