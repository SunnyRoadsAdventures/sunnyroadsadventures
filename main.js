document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (!video || !heroText) return;

  // Ensure text is hidden no matter what
  heroText.style.opacity = "0";

  video.addEventListener("ended", () => {
    if (whiteFade) {
      whiteFade.style.opacity = "1";
    }

    setTimeout(() => {
      heroText.style.opacity = "1";
    }, 300);
  });
});