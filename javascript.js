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
  setTimeout(() => { sagaBtn.style.opacity = 1; }, 2000);

  /* SAGA CLICK */
  sagaBtn.addEventListener("click", () => {
    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";
    setTimeout(() => sagaBtn.style.display = "none", 2000);

    heyVideo.style.opacity = 0;
    heyVideo.pause();
    gateVideo.style.opacity = 0;
    gateVideo.pause();

    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.play();
  }, { once: true });

  /* Close mission.mp4 on outside click */
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

          heyVideo.style.display = "block";
          heyVideo.style.opacity = 1;
          heyVideo.play();

          gateVideo.style.display = "block";
          gateVideo.style.opacity = 1;
          gateVideo.currentTime = 0;
          gateVideo.play();

          // Enter button appears after 5s
          setTimeout(() => {
            enterBtn.style.display = "block";
            enterBtn.style.opacity = 1;
          }, 5000);

        }, 1000);
      }
    }
  });

  /* ENTER CLICK → beginning & journey full screen */
  enterBtn.addEventListener("click", () => {

    // Stop lower-half videos
    gateVideo.pause();
    heyVideo.pause();
    gateVideo.style.opacity = 0;
    heyVideo.style.opacity = 0;

    // Hide enter button
    enterBtn.style.opacity = 0;
    setTimeout(() => enterBtn.style.display = "none", 2000);

    // Play beginning.mp4 full screen
    beginsVideo.style.display = "block";
    beginsVideo.style.opacity = 1;
    beginsVideo.currentTime = 0;
    beginsVideo.play();

    // When beginning ends, play journey.mp4 full screen
    beginsVideo.onended = () => {
      beginsVideo.style.opacity = 0;
      beginsVideo.style.display = "none";

      journeyVideo.style.display = "block";
      journeyVideo.style.opacity = 1;
      journeyVideo.currentTime = 0;
      journeyVideo.play();
    };
  });

  /* Fade journey.mp4 slowly at 26.5s → fade in greetings.mp4 */
  journeyVideo.addEventListener("timeupdate", () => {
    if (journeyVideo.currentTime >= 26.5) {
      journeyVideo.style.transition = "opacity 2s ease"; // smooth 2s fade
      journeyVideo.style.opacity = 0;

      // Start fade-in of greetings.mp4 after journey fade completes
      setTimeout(() => {
        journeyVideo.pause();

        greetingsVideo.style.display = "block";
        greetingsVideo.currentTime = 0; // start from beginning
        greetingsVideo.play();

        greetingsVideo.style.transition = "opacity 2s ease"; // smooth fade
        greetingsVideo.style.opacity = 1;
      }, 2000); // match journey fade duration
    }
  });

  /* blackie fade at 1:05.2 */
  gateVideo.addEventListener("timeupdate", () => {
    if (gateVideo.currentTime >= 65.2) {
      gateVideo.style.opacity = 0;
      gateVideo.pause();
    }
  });

  /* ANY CLICK → close greetings.mp4 and fade in plaza.png */
  document.addEventListener("click", () => {
    if (greetingsVideo.style.display === "block") {
      greetingsVideo.style.transition = "opacity 1s ease";
      greetingsVideo.style.opacity = 0;

      setTimeout(() => {
        greetingsVideo.pause();
        greetingsVideo.style.display = "none";

        // Show plaza.png
        if (plazaImg) {
          plazaImg.style.display = "block";
          plazaImg.style.transition = "opacity 2s ease";
          plazaImg.style.opacity = 1;
        }
      }, 1000);
    }
  });

  /* TOURS CLICK → open tours.jpg */
  if (toursBtn) {
    toursBtn.addEventListener("click", () => {
      window.open("tours.jpg", "_blank");
    });
  }

  /* WHATSAPP CLICK → open WhatsApp chat */
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      window.open("https://wa.me/50558365522", "_blank");
    });
  }

});