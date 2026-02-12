document.addEventListener("DOMContentLoaded", () => {

  const sagaBtn = document.getElementById("sagaBtn");
  const missionVideo = document.getElementById("missionVideo");
  const blackieVideo = document.getElementById("blackieVideo");
  const heyVideo = document.getElementById("heyVideo");
  const enterBtn = document.getElementById("enterBtn");
  const beginningVideo = document.getElementById("beginsVideo");
  const journeyVideo = document.getElementById("journeyVideo");

  // Set all videos to max volume
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach(video => {
    video.muted = false;
    video.volume = 1.0;
  });

  /* -------------------------------
     Saga Button → Mission Video
  --------------------------------- */
  setTimeout(() => { sagaBtn.style.opacity = 1; }, 2000);

  sagaBtn.addEventListener("click", () => {
    sagaBtn.style.opacity = 0;
    setTimeout(() => { sagaBtn.style.display = "none"; }, 1000);

    missionVideo.style.display = "block";
    missionVideo.style.opacity = 1;
    missionVideo.currentTime = 0;
    missionVideo.play();
  });

  /* -------------------------------
     Click anywhere on Mission → Close
  --------------------------------- */
  missionVideo.addEventListener("click", () => {
    missionVideo.style.opacity = 0;
    setTimeout(() => {
      missionVideo.pause();
      missionVideo.style.display = "none";

      // Play remaining videos
      blackieVideo.style.display = "block";
      blackieVideo.style.opacity = 1;
      blackieVideo.currentTime = 0;
      blackieVideo.play();

      heyVideo.style.display = "block";
      heyVideo.style.opacity = 1;
      heyVideo.currentTime = 0;
      heyVideo.play();

      enterBtn.style.display = "block";
      enterBtn.style.opacity = 1;

    }, 1000);
  });

  /* -------------------------------
     Blackie auto-fade at 65.2s
  --------------------------------- */
  blackieVideo.addEventListener("timeupdate", () => {
    if (blackieVideo.currentTime >= 65.2) {
      blackieVideo.style.opacity = 0;
      blackieVideo.pause();
    }
  });

  /* -------------------------------
     Enter Button → Stop videos & play beginning + journey
  --------------------------------- */
  enterBtn.addEventListener("click", () => {

    // Stop lower videos
    heyVideo.pause();
    blackieVideo.pause();
    heyVideo.style.opacity = 0;
    blackieVideo.style.opacity = 0;

    // Hide enter button
    enterBtn.style.opacity = 0;
    setTimeout(() => { enterBtn.style.display = "none"; }, 1000);

    // Play beginning.mp4
    beginningVideo.style.display = "block";
    beginningVideo.style.opacity = 1;
    beginningVideo.currentTime = 0;
    beginningVideo.play();

    // When beginning ends → play journey.mp4
    beginningVideo.onended = () => {
      beginningVideo.style.opacity = 0;
      beginningVideo.style.display = "none";

      journeyVideo.style.display = "block";
      journeyVideo.style.opacity = 1;
      journeyVideo.currentTime = 0;
      journeyVideo.play();
    };
  });

});