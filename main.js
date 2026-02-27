document.addEventListener("DOMContentLoaded", function () {

  const languageVideo = document.getElementById("languageVideo");
  const buttons = document.querySelectorAll(".lang-btn");

  window.switchLanguage = function(lang) {

    if (!languageVideo) return;

    // Remove active class
    buttons.forEach(btn => btn.classList.remove("active"));

    // Set correct video
    const newSource = lang === "eng" ? "eng.mp4" : "esp.mp4";

    languageVideo.pause();
    languageVideo.src = newSource;
    languageVideo.load();

    // Activate correct button
    const activeBtn = document.querySelector(
      `.lang-btn[onclick="switchLanguage('${lang}')"]`
    );

    if (activeBtn) {
      activeBtn.classList.add("active");
    }

  };

});