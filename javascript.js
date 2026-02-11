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

  /* ENTER CLICK → beginning.mp4 fullscreen */
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

    /* BEGINNING VIDEO */
    setTimeout(() => {
      beginsVideo.style.display = "block";
      setTimeout(() => { beginsVideo.style.opacity = 1; }, 50);
      beginsVideo.muted = false;
      beginsVideo.volume = 1;
      beginsVideo.play();
    }, 2000);

    /* AFTER BEGINNING ENDS → JOURNEY VIDEO */
    beginsVideo.onended = () => {
      beginsVideo.style.opacity = 0;
      setTimeout(() => {
        beginsVideo.style.display = "none";
        journeyVideo.style.display = "block";
        setTimeout(() => { journeyVideo.style.opacity = 1; }, 50);
        journeyVideo.muted = false;
        journeyVideo.volume = 1;
        journeyVideo.play();
      }, 500);
    };

    /* JOURNEY FADE-OUT (exactly 24s → 28s) */
    journeyVideo.addEventListener("timeupdate", () => {
      const fadeStart = 24;
      const fadeEnd = 28;
      const currentTime = journeyVideo.currentTime;

      if (currentTime >= fadeStart && currentTime <= fadeEnd) {
        const fadeProgress = (currentTime - fadeStart) / (fadeEnd - fadeStart);
        journeyVideo.style.opacity = 1 - fadeProgress;
      }
    });

    /* AFTER JOURNEY ENDS → 2s BLACK → GREETINGS */
    journeyVideo.onended = () => {
      journeyVideo.style.opacity = 0;
      journeyVideo.style.display = "none";

      setTimeout(() => {
        greetingsVideo.style.display = "block";
        setTimeout(() => { 
          greetingsVideo.style.opacity = 1;
          greetingsVideo.style.transform = "translate(-50%, -50%) scale(1)";
        }, 50);
        greetingsVideo.muted = false;
        greetingsVideo.volume = 1;
        greetingsVideo.play();
      }, 2000); // 2s black
    };

  });

});