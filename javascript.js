document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const enterBtn = document.getElementById("enterBtn");

  const heyVideo = document.getElementById("heyVideo");
  const gateVideo = document.getElementById("gateVideo");
  const missionVideo = document.getElementById("missionVideo");

  const beginsVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo"); // NEW VIDEO

  /* Initial saga fade-in */
  setTimeout(() => {
    sagaBtn.style.opacity = 1;
  }, 2000);

  /* SAGA CLICK */
  sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";

    setTimeout(() => {
      sagaBtn.style.display = "none";
    }, 2000);

    /* hey.mp4 */
    setTimeout(() => {
      heyVideo.style.opacity = 1;
      heyVideo.muted = false;
      heyVideo.volume = 1;
      heyVideo.play();
    }, 3000);

    /* gate.mp4 */
    setTimeout(() => {
      gateVideo.style.opacity = 1;
      gateVideo.muted = false;
      gateVideo.volume = 1;
      gateVideo.play();
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

  /* ENTER CLICK → FADE TO beginning.mp4 fullscreen */
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

    /* Show beginning.mp4 fullscreen */
    setTimeout(() => {
      beginsVideo.style.display = "block";
      setTimeout(() => { beginsVideo.style.opacity = 1; }, 50);
      beginsVideo.muted = false;
      beginsVideo.volume = 1;
      beginsVideo.play();
    }, 2000);

    /* After beginning.mp4 ends, fade to journey.mp4 fullscreen */
    beginsVideo.onended = () => {
      beginsVideo.style.opacity = 0;
      setTimeout(() => {
        beginsVideo.style.display = "none";
        journeyVideo.style.display = "block";
        setTimeout(() => { journeyVideo.style.opacity = 1; }, 50);
        journeyVideo.muted = false;
        journeyVideo.volume = 1;
        journeyVideo.play();
      }, 500); // small fade
    };

    /* After journey.mp4 ends → slow fade to black, then greetings.mp4 */
    journeyVideo.onended = () => {

      let fadeOpacity = 1; // current opacity
      const fadeStep = 0.005; // very slow
      const fadeInterval = setInterval(() => {
        fadeOpacity -= fadeStep;
        if (fadeOpacity <= 0) {
          fadeOpacity = 0;
          clearInterval(fadeInterval);

          // After 2 seconds total darkness, show greetings.mp4
          setTimeout(() => {
            greetingsVideo.style.display = "block";
            setTimeout(() => { greetingsVideo.style.opacity = 1; }, 50);
            greetingsVideo.muted = false;
            greetingsVideo.volume = 1;
            greetingsVideo.play();
          }, 2000);

        }
        journeyVideo.style.opacity = fadeOpacity;
      }, 16); // ~60fps
    };

  });

});