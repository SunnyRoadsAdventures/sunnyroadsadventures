document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const enterBtn = document.getElementById("enterBtn");
  const heyVideo = document.getElementById("heyVideo");
  const gateVideo = document.getElementById("gateVideo");
  const missionVideo = document.getElementById("missionVideo");
  const beginsVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");
  const plazaImg = document.getElementById("plazaImg");
  const toursBtn = document.getElementById("toursBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  /* Saga fade-in */
  setTimeout(() => { sagaBtn.style.opacity = 1; }, 2000);

  /* Saga click → mission */
  sagaBtn.addEventListener("click", () => {
    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";
    setTimeout(() => sagaBtn.style.display = "none", 2000);

    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.currentTime = 0;
    missionVideo.play();
  }, { once: true });

  /* Enter click → beginning + journey */
  enterBtn.addEventListener("click", () => {
    heyVideo.pause();
    gateVideo.pause();
    heyVideo.style.opacity = 0;
    gateVideo.style.opacity = 0;

    enterBtn.style.opacity = 0;
    setTimeout(() => enterBtn.style.display = "none", 2000);

    beginsVideo.style.display = "block";
    beginsVideo.style.opacity = 1;
    beginsVideo.currentTime = 0;
    beginsVideo.play();

    beginsVideo.onended = () => {
      beginsVideo.style.opacity = 0;
      beginsVideo.style.display = "none";

      journeyVideo.style.display = "block";
      journeyVideo.style.opacity = 1;
      journeyVideo.currentTime = 0;
      journeyVideo.play();
    };
  });

  /* Journey fade at 26.5s → greetings */
  journeyVideo.addEventListener("timeupdate", () => {
    if (journeyVideo.currentTime >= 26.5) {
      journeyVideo.style.transition = "opacity 2s ease";
      journeyVideo.style.opacity = 0;

      setTimeout(() => {
        journeyVideo.pause();
        greetingsVideo.style.display = "block";
        greetingsVideo.currentTime = 0;
        greetingsVideo.play();
        greetingsVideo.style.opacity = 1;
      }, 2000);
    }
  });

  /* Blackie stops at 1:05.2 */
  gateVideo.addEventListener("timeupdate", () => {
    if (gateVideo.currentTime >= 65.2) {
      gateVideo.style.opacity = 0;
      gateVideo.pause();
    }
  });

  /* Unified click handler */
  document.addEventListener("click", (e) => {

    // Mission outside click
    if (missionVideo.style.display !== "none") {
      const rect = missionVideo.getBoundingClientRect();
      if (!(e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom)) {

        missionVideo.style.opacity = 0;
        setTimeout(() => {
          missionVideo.style.display = "none";
          missionVideo.pause();

          heyVideo.style.display = "block";
          heyVideo.style.opacity = 1;
          heyVideo.currentTime = 0;
          heyVideo.play();

          gateVideo.style.display = "block";
          gateVideo.style.opacity = 1;
          gateVideo.currentTime = 0;
          gateVideo.play();

          setTimeout(() => {
            enterBtn.style.display = "block";
            enterBtn.style.opacity = 1;
          }, 5000);

        }, 1000);
      }
      return;
    }

    // Greetings click → fade in plaza
    if (greetingsVideo.style.display !== "none") {
      greetingsVideo.style.opacity = 0;
      setTimeout(() => {
        greetingsVideo.pause();
        greetingsVideo.style.display = "none";

        plazaImg.style.display = "block";
        plazaImg.style.opacity = 1;

        toursBtn.style.display = "block";
        toursBtn.style.opacity = 1;
        whatsappBtn.style.display = "block";
        whatsappBtn.style.opacity = 1;

      }, 1000);
    }

  });

  /* Tours button → tours.jpg */
  toursBtn.addEventListener("click", () => {
    window.open("tours.jpg", "_blank");
  });

  /* WhatsApp button → chat */
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/50558365522", "_blank");
  });

});