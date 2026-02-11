/* Close mission.mp4 when clicking outside */
document.addEventListener("click", (e) => {
  if (missionVideo.style.display === "block") {
    const rect = missionVideo.getBoundingClientRect();
    const insideX = e.clientX >= rect.left && e.clientX <= rect.right;
    const insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

    if (!insideX || !insideY) {

      // Fade out mission.mp4
      missionVideo.style.opacity = 0;

      setTimeout(() => {
        missionVideo.style.display = "none";
        missionVideo.pause();

        // RESUME background videos immediately
        heyVideo.style.opacity = 1;
        heyVideo.muted = false;
        heyVideo.volume = 1;
        heyVideo.play();

        gateVideo.style.opacity = 1;
        gateVideo.muted = false;
        gateVideo.volume = 1;
        gateVideo.play();

        // DELAYED enter button fade-in (5 seconds after mission closes)
        setTimeout(() => {
          enterBtn.style.display = "block";
          enterBtn.style.opacity = 1;
        }, 5000); // 5000ms = 5 seconds

      }, 1000); // match mission fade-out duration
    }
  }
});