document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const enterBtn = document.getElementById("enterBtn");

  const heyVideo = document.getElementById("heyVideo");
  const gateVideo = document.getElementById("gateVideo");
  const missionVideo = document.getElementById("missionVideo");

  const beginsVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");

  const sunnyPlazaImg = document.getElementById("sunnyPlazaImg");

  setTimeout(() => { sagaBtn.style.opacity = 1; }, 2000);

  sagaBtn.addEventListener("click", () => {

    sagaBtn.style.opacity = 0;
    sagaBtn.style.pointerEvents = "none";
    setTimeout(() => sagaBtn.style.display = "none", 2000);

    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.play();

  }, { once: true });

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
          gateVideo.play();

          setTimeout(() => {
            enterBtn.style.display = "block";
            enterBtn.style.opacity = 1;
          }, 5000);

        }, 1000);
      }
    }
  });

  enterBtn.addEventListener("click", () => {

    gateVideo.pause();
    heyVideo.pause();

    beginsVideo.style.display = "block";
    beginsVideo.style.opacity = 1;
    beginsVideo.play();

    beginsVideo.onended = () => {
      beginsVideo.style.display = "none";

      journeyVideo.style.display = "block";
      journeyVideo.style.opacity = 1;
      journeyVideo.play();
    };
  });

  journeyVideo.addEventListener("timeupdate", () => {

    if (journeyVideo.currentTime >= 26.5) {

      journeyVideo.style.opacity = 0;

      setTimeout(() => {
        journeyVideo.pause();

        greetingsVideo.style.display = "block";
        greetingsVideo.style.opacity = 1;
        greetingsVideo.play();

      }, 2000);
    }
  });

  /* CLOSE GREETINGS → SHOW HALF SCREEN SUNNY PLAZA */
  document.addEventListener("click", () => {

    if (greetingsVideo.style.display === "block") {

      greetingsVideo.style.opacity = 0;

      setTimeout(() => {
        greetingsVideo.pause();
        greetingsVideo.style.display = "none";

        sunnyPlazaImg.style.display = "block";
        sunnyPlazaImg.style.opacity = 1;

        console.log("Sunny Plaza should now be visible.");

      }, 1000);
    }
  });

});