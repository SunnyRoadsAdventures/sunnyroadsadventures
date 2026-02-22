document.addEventListener("DOMContentLoaded", () => {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");

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

  // 🔒 Reveal ONLY when video fully ends
  heroVideo.addEventListener("ended", revealText, { once: true });

});