document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const enterBtn = document.getElementById("enterBtn");

  const heyVideo = document.getElementById("heyVideo");
  const gateVideo = document.getElementById("gateVideo");
  const missionVideo = document.getElementById("missionVideo");

  const beginsVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");

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

  /* Fade journey.mp4 at exactly 26.2s → fade in greetings.mp4 */
  journeyVideo.addEventListener("timeupdate", () => {
    if (journeyVideo.currentTime >= 26.2) {
      journeyVideo.style.transition = "opacity 1s ease"; // fade over 1s
      journeyVideo.style.opacity = 0;
      journeyVideo.pause();

      // Fade in greetings.mp4
      greetingsVideo.style.display = "block";
      setTimeout(() => {
        greetingsVideo.style.transition = "opacity 2s ease"; // smooth fade
        greetingsVideo.style.opacity = 1;
      }, 50);
    }
  });

  /* blackie fade at 1:05.2 */
  gateVideo.addEventListener("timeupdate", () => {
    if (gateVideo.currentTime >= 65.2) {
      gateVideo.style.opacity = 0;
      gateVideo.pause();
    }
  });

});