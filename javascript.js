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

  /* Initial saga fade-in */
  setTimeout(() => {
    sagaBtn.style.opacity = 1;
  }, 2000);

  /* SAGA CLICK */
  sagaBtn.addEventListener("click", () => {
    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";
    setTimeout(() => sagaBtn.style.display = "none", 2000);

    // Pause lower-half videos
    heyVideo.style.opacity = 0;
    heyVideo.pause();
    gateVideo.style.opacity = 0;
    gateVideo.pause();

    // Show mission.mp4
    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.play();

  }, { once: true });

  /* Close mission.mp4 when clicking outside */
  document.addEventListener("click", (e) => {
    if (missionVideo.style.display === "block") {
      const rect = missionVideo.getBoundingClientRect();
      const insideX = e.clientX >= rect.left && e.clientX <= rect.right;
      const insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (!insideX || !insideY) {
        missionVideo.style.opacity = 0;

        setTimeout(() => {
          missionVideo.style.display = "none";
          missionVideo.pause();

          // Start lower-half videos: hey and blackie
          heyVideo.style.display = "block";
          heyVideo.style.opacity = 1;
          heyVideo.play();

          gateVideo.style.display = "block";
          gateVideo.style.opacity = 1;
          gateVideo.currentTime = 0;
          gateVideo.play();

          // Enter button appears 5 seconds later
          setTimeout(() => {
            enterBtn.style.display = "block";
            enterBtn.style.opacity = 1;
          }, 5000);

        }, 1000); // match mission fade
      }
    }
  });

  /* ENTER CLICK → full-screen beginning & journey */
  enterBtn.addEventListener("click", () => {
    enterBtn.style.opacity = 0;
    setTimeout(() => enterBtn.style.display = "none", 2000);

    // Fade out lower-half videos
    heyVideo.style.opacity = 0;
    gateVideo.style.opacity = 0;

    // Play beginning.mp4 full screen
    beginsVideo.style.display = "block";
    beginsVideo.style.opacity = 1;
    beginsVideo.currentTime = 0;
    beginsVideo.play();

    // When beginning ends, play journey.mp4
    beginsVideo.onended = () => {
      beginsVideo.style.opacity = 0;
      beginsVideo.style.display = "none";

      journeyVideo.style.display = "block";
      journeyVideo.style.opacity = 1;
      journeyVideo.currentTime = 0;
      journeyVideo.play();
    };
  });

  /* blackie fade to black at 1:05.2 */
  gateVideo.addEventListener("timeupdate", () => {
    if (gateVideo.currentTime >= 65.2) {
      gateVideo.style.opacity = 0;
      gateVideo.pause();
    }
  });

  /* Click outside greetings.mp4 → show plaza */
  greetingsVideo.addEventListener("click", (e) => {
    const rect = greetingsVideo.getBoundingClientRect();
    const insideX = e.clientX >= rect.left && e.clientX <= rect.right;
    const insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

    if (!insideX || !insideY) {
      greetingsVideo.style.opacity = 0;

      setTimeout(() => {
        greetingsVideo.style.display = "none";

        // Show plaza.png full screen
        plazaImg.style.display = "block";
        setTimeout(() => plazaImg.style.opacity = 1, 50);

        // Show buttons
        toursBtn.style.opacity = 1;
        whatsappBtn.style.opacity = 1;
      }, 1000); // 1s fade
    }
  });

  /* Tours Button opens tours.jpg */
  toursBtn.addEventListener("click", () => {
    window.open("tours.jpg", "_blank");
  });

  /* WhatsApp Button opens chat */
  whatsappBtn.addEventListener("click", () => {
    const phone = "+50558365522";
    const url = `https://wa.me/${phone.replace(/\D/g, "")}`;
    window.open(url, "_blank");
  });

});