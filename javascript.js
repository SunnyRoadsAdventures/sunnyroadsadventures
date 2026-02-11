document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const enterBtn = document.getElementById("enterBtn");

  const heyVideo = document.getElementById("heyVideo");
  const gateVideo = document.getElementById("gateVideo");
  const missionVideo = document.getElementById("missionVideo");

  const beginsVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo"); // Optional, can be added later

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

    /* After beginning.mp4 ends → journey.mp4 fullscreen */
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

    /* Slow fade out starting 6 seconds before end (so 3 seconds before fully black) */
    journeyVideo.addEventListener("timeupdate", () => {
      const fadeDuration = 6; // seconds, start fading earlier
      const remainingTime = journeyVideo.duration - journeyVideo.currentTime;

      if (remainingTime <= fadeDuration) {
        // opacity goes from 1 → 0 over fadeDuration
        journeyVideo.style.opacity = remainingTime / fadeDuration;
      }
    });

    // Optionally, after journey.mp4 ends, fade in greetings.mp4
    journeyVideo.onended = () => {
      journeyVideo.style.opacity = 0;
      journeyVideo.style.display = "none";

      // greetings.mp4 fade-in after 2 seconds black
      setTimeout(() => {
        greetingsVideo.style.display = "block";
        setTimeout(() => { greetingsVideo.style.opacity = 1; }, 50);
        greetingsVideo.muted = false;
        greetingsVideo.volume = 1;
        greetingsVideo.play();
      }, 2000);
    };

  });

});