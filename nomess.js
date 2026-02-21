document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const title = document.querySelector(".title");
  const brand = document.querySelector(".brand");
  const whiteFade = document.querySelector(".white-fade");

  if (!video) return;

  video.addEventListener("ended", () => {
    // White cinematic fade
    whiteFade.style.opacity = "1";

    // Slight delay, then reveal text
    setTimeout(() => {
      title.classList.add("hero-visible");
      brand.classList.add("hero-visible");
    }, 300);
  });
});