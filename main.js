document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (!video || !heroText || !whiteFade) return;

  video.addEventListener("ended", () => {
    whiteFade.style.opacity = "1";

    setTimeout(() => {
      heroText.style.opacity = "1";
    }, 400);
  });
});