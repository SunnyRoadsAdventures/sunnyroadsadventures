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

      // Fade to black instantly at exactly 1:05.2
      const fadeTime = 65.2; // seconds
      const checkFade = () => {
        if (gateVideo.currentTime >= fadeTime) {
          gateVideo.style.opacity = 0;
          gateVideo.pause();
          gateVideo.removeEventListener("timeupdate", checkFade);
        }
      };
      gateVideo.addEventListener("timeupdate", checkFade);

    }, 4000);

    /* mission.mp4 popup appears 2 seconds after saga click */
    setTimeout(() => {
      missionVideo.style.display = "block";
      missionVideo.style.opacity = 1;
      missionVideo.muted = false;
      missionVideo.volume = 1;
      missionVideo.play();
    }, 2000);

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

          // Fade back to background
          heyVideo.style.opacity = 1;
          gateVideo.style.opacity = 1;
          enterBtn.style.opacity = 1;
        }, 1000); 
      }
    }
  });

});