document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');

  // Fade-in button after 2 seconds
  setTimeout(() => {
    sagaBtn.classList.add('show');
  }, 2000);

  // Button click
  sagaBtn.addEventListener('click', () => {
    // Hide button
    sagaBtn.style.display = 'none';

    // Show and play all videos
    heyVideo.style.display = 'block';
    heyVideo.muted = false;
    heyVideo.play().catch(err => console.log("Autoplay blocked:", err));

    gateVideo.style.display = 'block';
    gateVideo.muted = false;
    gateVideo.play().catch(err => console.log("Autoplay blocked:", err));

    missionVideo.style.display = 'block';
    missionVideo.muted = false;
    missionVideo.play().catch(err => console.log("Autoplay blocked:", err));
  });
});