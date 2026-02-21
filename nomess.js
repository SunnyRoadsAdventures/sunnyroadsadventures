document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const whiteFade = document.querySelector(".white-fade");
  const heroText = document.querySelector(".hero-text");

  if (!video || !heroText) return;

  function revealText() {
    whiteFade.style.opacity = "1";
    heroText.classList.add("hero-visible");
  }

  // Primary (when video ends)
  video.addEventListener("ended", revealText);

  // Fallback (mobile safety)
  setTimeout(() => {
    if (!heroText.classList.contains("hero-visible")) {
      revealText();
    }
  }, 7000); // after 7 seconds
});