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
  setTimeout(() => {
    sagaBtn.style.opacity = 1;
  }, 2000);

  /* SAGA CLICK (only once) */
  sagaBtn.addEventListener("click", () => {

    // Fade saga button
    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";
    setTimeout(() => sagaBtn.style.display = "none", 2000);

    // PAUSE background videos initially
    heyVideo.style.opacity = 0;
    heyVideo.pause();
    gateVideo.style.opacity = 0;
    gateVideo.pause();

    // mission.mp4 appears immediately
    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.muted = false;
    missionVideo.volume = 1;
    missionVideo.play();

  }, { once: true });

  /* Close mission.mp4 when clicking outside */
  document.addEventListener("click", (e) => {
    if (missionVideo.style.display === "block") {
      const rect = missionVideo.getBoundingClientRect();
      const insideX = e.clientX >= rect.left && e.clientX <= rect.right;
      const insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (!insideX || !insideY) {

        // Fade out mission.mp4
        missionVideo.style.opacity = 0;
        setTimeout(() => {
          missionVideo.style.display = "none";
          missionVideo.pause();

          // RESUME background videos
          heyVideo.style.opacity = 1;
          heyVideo.muted = false;
          heyVideo.volume = 1;
          heyVideo.play();

          gateVideo.style.opacity = 1;
          gateVideo.muted = false;
          gateVideo.volume = 1;
          gateVideo.play();

          // Show enter button again
          enterBtn.style.opacity = 1;

        }, 1000); // match CSS fade duration
      }
    }
  });

  /* ENTER CLICK → FADE TO beginning.mp4 */
  enterBtn.addEventListener("click", () => {

    enterBtn.style.opacity = 0;
    heyVideo.style.opacity = 0;
    gateVideo.style.opacity = 0;
    missionVideo.style.opacity = 0;

    setTimeout(() => {
      enterBtn.style.display = "none";
      heyVideo.style.display = "none";
      gateVideo.style.display = "none";
      missionVideo.style.display = "none";
    }, 2000);

    setTimeout(() => {
      beginsVideo.style.display = "block";
      beginsVideo.style.opacity = 1;
      beginsVideo.muted = false;
      beginsVideo.volume = 1;
      beginsVideo.play();
    }, 2000);

  });

  /* blackie.mp4 fade to black at 1:05.2 */
  gateVideo.addEventListener("timeupdate", () => {
    if (gateVideo.currentTime >= 65.2) {
      gateVideo.style.opacity = 0;
      gateVideo.pause();
    }
  });

});