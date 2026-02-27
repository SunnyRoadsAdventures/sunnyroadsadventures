function switchLanguage(lang) {
  const video = document.getElementById("welcomeVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  // Remove active state
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