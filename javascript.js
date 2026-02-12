document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const missionVideo = document.getElementById("missionVideo");
  const blackieVideo = document.getElementById("blackieVideo");
  const heyVideo = document.getElementById("heyVideo");
  const enterBtn = document.getElementById("enterBtn");
  const beginningVideo = document.getElementById("beginningVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");
  const marketImg = document.getElementById("marketImg");
  const toursBtn = document.getElementById("toursBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  /* MAX VOLUME */
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach(video => { video.muted = false; video.volume = 1.0; });

  /* SAGA FADE IN */
  setTimeout(() => { sagaBtn.style.opacity = 1; }, 2000);

  /* CLICK SAGA → SHOW MISSION */
  sagaBtn.addEventListener("click", () => {
      sagaBtn.style.opacity = 0;
      setTimeout(() => {
          sagaBtn.style.display = "none";
          missionVideo.style.display = "block";
          missionVideo.style.opacity = 1;
          missionVideo.currentTime = 0;
          missionVideo.play();
      }, 500);
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
      }, 500);
  });

  /* BLACKIE FADE AT 65.2s */
  blackieVideo.addEventListener("timeupdate", () => {
      if (blackieVideo.currentTime >= 65.2) {
          blackieVideo.style.opacity = 0;
          blackieVideo.pause();
      }
  });

  /* ENTER CLICK → STOP LOWER VIDEOS & PLAY BEGINNING + JOURNEY */
  enterBtn.addEventListener("click", () => {

      blackieVideo.style.opacity = 0; blackieVideo.pause();
      heyVideo.style.opacity = 0; heyVideo.pause();

      enterBtn.style.opacity = 0;
      setTimeout(() => enterBtn.style.display = "none", 500);

      beginningVideo.style.display = "block";
      beginningVideo.style.opacity = 1;
      beginningVideo.currentTime = 0;
      beginningVideo.play();

      beginningVideo.onended = () => {
          beginningVideo.style.opacity = 0;
          beginningVideo.style.display = "none";

          journeyVideo.style.display = "block";
          journeyVideo.style.opacity = 1;
          journeyVideo.currentTime = 0;
          journeyVideo.play();
      };
  });

  /* FADE JOURNEY AT 26.5s → GREETINGS */
  journeyVideo.addEventListener("timeupdate", () => {
      if (journeyVideo.currentTime >= 26.5) {
          journeyVideo.style.opacity = 0;
          journeyVideo.pause();

          greetingsVideo.style.display = "block";
          greetingsVideo.style.opacity = 1;
          greetingsVideo.currentTime = 0;
          greetingsVideo.play();
      }
  });

  /* CLICK GREETINGS → FADE TO BLACK + SHOW MARKET */
  greetingsVideo.addEventListener("click", () => {
      greetingsVideo.style.opacity = 0;
      setTimeout(() => {
          greetingsVideo.pause();
          greetingsVideo.style.display = "none";

          marketImg.style.display = "block";
          marketImg.style.opacity = 1;

          toursBtn.style.opacity = 1;
          whatsappBtn.style.opacity = 1;
      }, 500);
  });

  /* MARKET BUTTONS */
  toursBtn.addEventListener("click", () => { window.open("tours.jpg", "_blank"); });
  whatsappBtn.addEventListener("click", () => { window.open("https://wa.me/50558365522", "_blank"); });

});