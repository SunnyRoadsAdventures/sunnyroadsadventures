document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const missionVideo = document.getElementById("missionVideo");
  const blackieVideo = document.getElementById("blackieVideo");
  const heyVideo = document.getElementById("heyVideo");
  const enterBtn = document.getElementById("enterBtn");
  const beginningVideo = document.getElementById("beginningVideo");
  const journeyVideo = document.getElementById("journeyVideo");
  const greetingsVideo = document.getElementById("greetingsVideo");

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

      /* PLAY BEGINNING VIDEO FULLSCREEN */
      beginningVideo.style.display = "block";
      beginningVideo.style.opacity = 1;
      beginningVideo.currentTime = 0;
      beginningVideo.play();

      /* WHEN BEGINNING ENDS → PLAY JOURNEY FULLSCREEN */
      beginningVideo.onended = () => {
          beginningVideo.style.display = "none";
          beginningVideo.style.opacity = 0;

          journeyVideo.style.display = "block";
          journeyVideo.style.opacity = 1;
          journeyVideo.currentTime = 0;
          journeyVideo.play();
      };
  });

  /* FADE JOURNEY TO BLACK AT 26.5s */
  journeyVideo.addEventListener("timeupdate", () => {
      if (journeyVideo.currentTime >= 26.5) {
          journeyVideo.style.transition = "opacity 2s ease";
          journeyVideo.style.opacity = 0;

          setTimeout(() => {
              journeyVideo.pause();
              journeyVideo.style.display = "none";

              /* FADE IN GREETINGS */
              greetingsVideo.style.display = "block";
              greetingsVideo.style.opacity = 1;
              greetingsVideo.currentTime = 0;
              greetingsVideo.play();

          }, 2000);
      }
  });

  /* CLICK GREETINGS → FADE OUT & BLACK */
  greetingsVideo.addEventListener("click", () => {
      greetingsVideo.style.transition = "opacity 1.5s ease";
      greetingsVideo.style.opacity = 0;

      setTimeout(() => {
          greetingsVideo.pause();
          greetingsVideo.style.display = "none";

          // Fade to black (body background already black)
          document.body.style.transition = "background 1.5s ease";
          document.body.style.backgroundColor = "black";

          // Ready for next scene/chapter here
      }, 1500);
  });

});

// CLICK TO CLOSE GREETINGS
greetingsVideo.addEventListener("click", () => {
  greetingsVideo.style.transition = "opacity 1.5s ease";
  greetingsVideo.style.opacity = 0;

  setTimeout(() => {
    greetingsVideo.pause();
    greetingsVideo.style.display = "none";

    // fade to black if needed
    document.body.style.background = "black";
  }, 1500);
});

const marketImg = document.getElementById("marketImg");
const toursBtn = document.getElementById("toursBtn");
const whatsappBtn = document.getElementById("whatsappBtn");

// Trigger market display after greetings.mp4 ends or fades out
greetingsVideo.addEventListener("timeupdate", () => {
    // Check if greetings is fading or ending
    if (greetingsVideo.currentTime >= greetingsVideo.duration - 0.5) { // last 0.5s
        // Fade out greetings
        greetingsVideo.style.opacity = 0;
        setTimeout(() => {
            greetingsVideo.pause();
            greetingsVideo.style.display = "none";

            // Show market.png
            marketImg.style.display = "block";
            setTimeout(() => { marketImg.style.opacity = 1; }, 50);

            // Show buttons
            toursBtn.style.display = "block";
            whatsappBtn.style.display = "block";
            setTimeout(() => {
                toursBtn.style.opacity = 1;
                whatsappBtn.style.opacity = 1;
            }, 100);

        }, 1000); // match fade timing
    }
});

// Optional: Click buttons functionality
toursBtn.addEventListener("click", () => {
    window.open("tours.jpg", "_blank");
});
whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/50558365522", "_blank");
});