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
  allVideos.forEach(video => {
      video.muted = false;
      video.volume = 1.0;
  });

  /* === SAGA BUTTON === */
  setTimeout(() => {
      sagaBtn.style.opacity = 1;
      sagaBtn.style.pointerEvents = 'auto';
  }, 2000);

  sagaBtn.addEventListener("click", () => {
      sagaBtn.style.opacity = 0;
      sagaBtn.style.pointerEvents = 'none';
      setTimeout(() => {
          sagaBtn.style.display = "none";

          missionVideo.style.display = "block";
          missionVideo.style.opacity = 1;
          missionVideo.style.pointerEvents = 'auto';
          missionVideo.currentTime = 0;
          missionVideo.play();
      }, 500);
  });

  /* === MISSION CLICK === */
  missionVideo.addEventListener("click", () => {
      missionVideo.style.opacity = 0;
      missionVideo.style.pointerEvents = 'none';
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
          enterBtn.style.pointerEvents = 'auto';
      }, 500);
  });

  /* === BLACKIE FADE AT 65.2s === */
  blackieVideo.addEventListener("timeupdate", () => {
      if (blackieVideo.currentTime >= 65.2) {
          blackieVideo.style.opacity = 0;
          blackieVideo.style.pointerEvents = 'none';
          blackieVideo.pause();
      }
  });

  /* === ENTER BUTTON CLICK === */
  enterBtn.addEventListener("click", () => {
      enterBtn.style.opacity = 0;
      enterBtn.style.pointerEvents = 'none';
      blackieVideo.style.opacity = 0;
      blackieVideo.style.pointerEvents = 'none';
      blackieVideo.pause();
      heyVideo.style.opacity = 0;
      heyVideo.style.pointerEvents = 'none';
      heyVideo.pause();

      setTimeout(() => enterBtn.style.display = "none", 500);

      beginningVideo.style.display = "block";
      beginningVideo.style.opacity = 1;
      beginningVideo.style.pointerEvents = 'auto';
      beginningVideo.currentTime = 0;
      beginningVideo.play();

      beginningVideo.onended = () => {
          beginningVideo.style.opacity = 0;
          beginningVideo.style.pointerEvents = 'none';
          beginningVideo.style.display = "none";

          journeyVideo.style.display = "block";
          journeyVideo.style.opacity = 1;
          journeyVideo.style.pointerEvents = 'auto';
          journeyVideo.currentTime = 0;
          journeyVideo.play();
      };
  });

  /* === JOURNEY FADE TO GREETINGS === */
  journeyVideo.addEventListener("timeupdate", () => {
      if (journeyVideo.currentTime >= 26.5) {
          journeyVideo.style.opacity = 0;
          journeyVideo.style.pointerEvents = 'none';
          journeyVideo.pause();

          greetingsVideo.style.display = "block";
          greetingsVideo.style.opacity = 1;
          greetingsVideo.style.pointerEvents = 'auto';
          greetingsVideo.currentTime = 0;
          greetingsVideo.play();
      }
  });

  /* === GREETINGS CLICK → SHOW MARKET === */
  greetingsVideo.addEventListener("click", () => {
      greetingsVideo.style.opacity = 0;
      greetingsVideo.style.pointerEvents = 'none';
      setTimeout(() => {
          greetingsVideo.pause();
          greetingsVideo.style.display = "none";

          marketImg.style.display = "block";
          marketImg.style.opacity = 1;

          toursBtn.style.opacity = 1;
          whatsappBtn.style.opacity = 1;
      }, 500);
  });

  /* BUTTONS */
  if (toursBtn) toursBtn.addEventListener("click", () => window.open("tours.jpg", "_blank"));
  if (whatsappBtn) whatsappBtn.addEventListener("click", () => window.open("https://wa.me/50558365522", "_blank"));

});