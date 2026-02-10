document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const enterBtn = document.getElementById('enterBtn');
  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');

  // Fade in saga button at 2s
  setTimeout(() => sagaBtn.classList.add('show'), 2000);

  sagaBtn.addEventListener('click', () => {
    sagaBtn.style.display = 'none'; // hide saga button

    // Fade to black over 2s
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = "#000";

    // Schedule videos and enter button fade-in
    setTimeout(() => {
      heyVideo.style.display = 'block';
      heyVideo.style.opacity = 1;
      heyVideo.muted = false;
      heyVideo.play().catch(err => console.log("Autoplay blocked:", err));
    }, 3000); // hey.mp4 at 3s

    setTimeout(() => {
      gateVideo.style.display = 'block';
      gateVideo.style.opacity = 1;
      gateVideo.muted = false;
      gateVideo.play().catch(err => console.log("Autoplay blocked:", err));
    }, 4000); // gate.mp4 at 4s

    setTimeout(() => {
      missionVideo.style.display = 'block';
      missionVideo.style.opacity = 1;
      missionVideo.muted = false;
      missionVideo.play().catch(err => console.log("Autoplay blocked:", err));
    }, 7000); // mission.mp4 at 7s

    setTimeout(() => {
      enterBtn.style.display = 'block';
      enterBtn.classList.add('show'); // fade in
    }, 10000); // enter.png at 10s
  });

  // Click event for enter button
  enterBtn.addEventListener('click', () => {
    console.log("Enter button clicked - trigger next sequence here");
    enterBtn.style.display = 'none';
  });
});