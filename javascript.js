document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');
  const enterBtn = document.getElementById('enterBtn');

  // Fade-in saga button after 2 seconds
  setTimeout(() => {
    sagaBtn.classList.add('show');
  }, 2000);

  // Click event for saga button
  sagaBtn.addEventListener('click', () => {
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

  // Optional: fade-in enter button after 2 seconds
  setTimeout(() => {
    enterBtn.style.opacity = 1;
  }, 2000);

  // Click event for enter button
  enterBtn.addEventListener('click', () => {
    console.log("Enter button clicked - trigger next sequence here");
    enterBtn.style.display = 'none';
    // Add your next action here
  });
});