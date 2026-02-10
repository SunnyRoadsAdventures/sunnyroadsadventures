document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const enterBtn = document.getElementById('enterBtn');
  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');

  // Fade in saga button at 2s
  setTimeout(() => sagaBtn.style.opacity = 1, 2000);

  sagaBtn.addEventListener('click', () => {
    sagaBtn.style.display = 'none'; // hide saga button

    // Fade to black over 2s
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = "#000";

    // Schedule videos and enter button fade-in
    setTimeout(() => {
      heyVideo.style.display = 'block';
      heyVideo.style.opacity = 1;
      heyVideo.muted = false;   // UNMUTED
      heyVideo.play().catch(err => console.log("Autoplay blocked:", err));
    }, 3000);

    setTimeout(() => {
      gateVideo.style.display = 'block';
      gateVideo.style.opacity = 1;
      gateVideo.muted = false;  // UNMUTED
      gateVideo.play().catch(err => console.log("Autoplay blocked:", err));
    }, 4000);

    setTimeout(() => {
      missionVideo.style.display = 'block';
      missionVideo.style.opacity = 1;
      missionVideo.muted = false; // UNMUTED
      missionVideo.play().catch(err => console.log("Autoplay blocked:", err));
    }, 7000);

    // Show enter button at 10s
    setTimeout(() => {
      enterBtn.style.display = 'block';
      enterBtn.style.opacity = 1;
    }, 10000);
  });

  enterBtn.addEventListener('click', () => {
    enterBtn.style.display = 'none';
    console.log("Enter button clicked - trigger next sequence here");
  });
});