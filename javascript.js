document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const missionVideo = document.getElementById("missionVideo");
  const blackieVideo = document.getElementById("blackieVideo");
  const heyVideo = document.getElementById("heyVideo");
  const enterBtn = document.getElementById("enterBtn");

  const beginningVideo = document.getElementById("beginningVideo");
  const journeyVideo = document.getElementById("journeyVideo");

  /* MAX VOLUME */
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach(video => {
      video.muted = false;
      video.volume = 1.0;
  });

  /* SAGA FADE IN */
  setTimeout(() => {
      sagaBtn.style.opacity = 1;
  }, 2000);

  /* CLICK SAGA → SHOW MISSION */
  sagaBtn.addEventListener("click", () => {
      sagaBtn.style.opacity = 0;
      setTimeout(() => {
          sagaBtn.style.display = "none";

          missionVideo.style.display = "block";
          missionVideo.style.opacity = 1;
          missionVideo.currentTime = 0;
          missionVideo.play();
      }, 1000);
  });

  /* CLICK ANYWHERE ON MISSION → CLOSE AND CONTINUE */
  missionVideo.addEventListener("click", () => {
      missionVideo.style.opacity = 0;
      setTimeout(() => {
          missionVideo.pause();
          missionVideo.style.display = "none";

          blackieVideo.style.display = "block";
          blackieVideo.style.opacity = 1;
          blackieVideo.play();

          heyVideo.style.display = "block";
          heyVideo.style.opacity = 1;
          heyVideo.play();

          enterBtn.style.display = "block";
          enterBtn.style.opacity = 1;

      }, 1000);
  });

  /* BLACKIE FADE AT 65.2s */
  blackieVideo.addEventListener("timeupdate", () => {
      if (blackieVideo.currentTime >= 65.2) {
          blackieVideo.style.opacity = 0;
          blackieVideo.pause();
      }
  });

  /* ENTER BUTTON CLICK → STOP LOWER VIDEOS & START BEGINNING + JOURNEY */
  enterBtn.addEventListener("click", () => {

      /* fade out lower videos */
      blackieVideo.style.opacity = 0;
      blackieVideo.pause();
      heyVideo.style.opacity = 0;
      heyVideo.pause();

      /* hide enter button */
      enterBtn.style.opacity = 0;
      setTimeout(() => enterBtn.style.display = "none", 1000);

      /* PLAY BEGINNING VIDEO */
      beginningVideo.style.display = "block";
      beginningVideo.style.opacity = 1;
      beginningVideo.currentTime = 0;
      beginningVideo.play();

      /* WHEN BEGINNING ENDS → PLAY JOURNEY */
      beginningVideo.onended = () => {
          beginningVideo.style.opacity = 0;
          beginningVideo.style.display = "none";

          journeyVideo.style.display = "block";
          journeyVideo.style.opacity = 1;
          journeyVideo.currentTime = 0;
          journeyVideo.play();
      };
  });

  /* FADE JOURNEY AT 26.5s + BLACK SCREEN AFTER */
  journeyVideo.addEventListener("timeupdate", () => {
      if (journeyVideo.currentTime >= 26.5) {
          journeyVideo.style.transition = "opacity 2s ease";
          journeyVideo.style.opacity = 0;

          setTimeout(() => {
              journeyVideo.pause();
              journeyVideo.style.display = "none";
              
              // Fade to black
              document.body.style.background = "black";
          }, 2000);
      }
  });

});