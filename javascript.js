document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const enterBtn = document.getElementById("enterBtn");

  const heyVideo = document.getElementById("heyVideo");
  const gateVideo = document.getElementById("gateVideo"); // blackie.mp4
  const missionVideo = document.getElementById("missionVideo");

  const beginsVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");

  /* Initial saga fade-in */
  setTimeout(() => {
    sagaBtn.style.opacity = 1;
  }, 2000);

  /* SAGA CLICK */
  sagaBtn.addEventListener("click", () => {
    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";

    setTimeout(() => sagaBtn.style.display = "none", 2000);

    /* hey.mp4 */
    setTimeout(() => {
      heyVideo.style.opacity = 1;
      heyVideo.muted = false;
      heyVideo.volume = 1;
      heyVideo.play();
    }, 3000);

    /* blackie.mp4 */
    setTimeout(() => {
      gateVideo.style.opacity = 1;
      gateVideo.muted = false;
      gateVideo.volume = 1;
      gateVideo.play();

      // Fade to black at exactly 1:05.2
      gateVideo.addEventListener("timeupdate", () => {
        if (gateVideo.currentTime >= 65.2) {
          gateVideo.style.opacity = 0;
          gateVideo.pause();
        }
      });

    }, 4000);

    /* mission.mp4 */
    setTimeout(() => {
      missionVideo.style.opacity = 1;
      missionVideo.muted = false;
      missionVideo.volume = 1;
      missionVideo.play();
    }, 7000);

    /* enter.png */
    setTimeout(() => {
      enterBtn.style.display = "block";
      enterBtn.style.opacity = 1;
    }, 10000);

  }, { once: true });

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

  /* Fade journey.mp4 slowly after begins.mp4 sequence */
  beginsVideo.addEventListener("ended", () => {
    journeyVideo.style.display = "block";
    journeyVideo.style.opacity = 1;
    journeyVideo.muted = false;
    journeyVideo.volume = 1;
    journeyVideo.play();

    // Fade out last 3 seconds to black
    journeyVideo.addEventListener("timeupdate", () => {
      if (journeyVideo.currentTime >= 24) { // video length 28s
        let remaining = 28 - journeyVideo.currentTime;
        journeyVideo.style.opacity = remaining / 4; // slow fade to 0
      }
    });
  });

});