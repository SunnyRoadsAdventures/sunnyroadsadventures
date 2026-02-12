document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const missionVideo = document.getElementById("missionVideo");
  const blackieVideo = document.getElementById("blackieVideo");
  const heyVideo = document.getElementById("heyVideo");
  const enterBtn = document.getElementById("enterBtn");
  const beginningVideo = document.getElementById("beginningVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");
  const marketImg = document.getElementById("marketImg");
  const toursBtn = document.getElementById("toursBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  /* MAX VOLUME */
  document.querySelectorAll("video").forEach(video => {
    video.muted = false;
    video.volume = 1.0;
  });

  /* ===== SAGA BUTTON FADE-IN ===== */
  setTimeout(() => {
    sagaBtn.style.opacity = 1;
  }, 2000);

  sagaBtn.addEventListener("click", () => {
    sagaBtn.style.opacity = 0;
    sagaBtn.style.display = "none";

    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.currentTime = 0;
    missionVideo.play();
  });

  /* ===== MISSION CLICK ===== */
  missionVideo.addEventListener("click", () => {
    missionVideo.pause();
    missionVideo.style.display = "none";

    blackieVideo.style.display = "block";
    blackieVideo.style.opacity = 1;
    blackieVideo.play();

    heyVideo.style.display = "block";
    heyVideo.style.opacity = 1;
    heyVideo.play();

    enterBtn.style.display = "block";
    enterBtn.style.opacity = 1;
  });

  /* ===== BLACKIE FADE AT 65.5s ===== */
  blackieVideo.addEventListener("timeupdate", () => {
    if (blackieVideo.currentTime >= 65.5) {
      blackieVideo.pause();
      blackieVideo.style.opacity = 0;
      blackieVideo.style.display = "none";
    }
  });

  /* ===== ENTER BUTTON CLICK ===== */
  enterBtn.addEventListener("click", () => {
    blackieVideo.pause();
    heyVideo.pause();

    blackieVideo.style.display = "none";
    heyVideo.style.display = "none";
    enterBtn.style.display = "none";

    beginningVideo.style.display = "block";
    beginningVideo.style.opacity = 1;
    beginningVideo.currentTime = 0;
    beginningVideo.play();

    beginningVideo.onended = () => {
      beginningVideo.style.display = "none";

      journeyVideo.style.display = "block";
      journeyVideo.style.opacity = 1;
      journeyVideo.currentTime = 0;
      journeyVideo.play();
    };
  });

  /* ===== JOURNEY → GREETINGS ===== */
  journeyVideo.addEventListener("timeupdate", () => {
    if (journeyVideo.currentTime >= 26.5) {
      journeyVideo.pause();
      journeyVideo.style.display = "none";

      greetingsVideo.style.display = "block";
      greetingsVideo.style.background = "black";
      greetingsVideo.style.opacity = 0;
      greetingsVideo.currentTime = 0;
      greetingsVideo.play();

      setTimeout(() => {
        greetingsVideo.style.opacity = 1;
      }, 50);
    }
  });

  /* ===== GREETINGS → MARKET ===== */
  greetingsVideo.addEventListener("click", () => {
    greetingsVideo.pause();
    greetingsVideo.style.display = "none";

    // Show market full screen
    marketImg.style.display = "block";
    marketImg.style.opacity = 0;
    setTimeout(() => { marketImg.style.opacity = 1; }, 50);

    // Show market buttons
    toursBtn.style.display = "block";
    whatsappBtn.style.display = "block";
    setTimeout(() => {
      toursBtn.style.opacity = 1;
      whatsappBtn.style.opacity = 1;
    }, 100);
  });

  /* ===== MARKET BUTTONS CLICK ===== */
  toursBtn.addEventListener("click", () => {
    window.open("tour.jpg", "_blank");
  });

  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/50558365522", "_blank");
  });

});