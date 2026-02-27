// HERO VIDEO FADE LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");

  if (heroVideo) {
    heroVideo.addEventListener("ended", function () {
      heroText.classList.add("show");
    });
  }
});

// LANGUAGE TOGGLE LOGIC
function switchLanguage(lang) {
  const video = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (lang === "eng") {
    video.src = "eng.mp4";
    buttons[0].classList.add("active");
  } else {
    video.src = "esp.mp4";
    buttons[1].classList.add("active");
  }

  video.load();
  video.play();
}