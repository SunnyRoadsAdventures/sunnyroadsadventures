startBtn.addEventListener('click', () => {
  // Hide button
  startBtn.style.display = 'none';

  // Fade overlay
  overlay.classList.add('active');

  // After 2s fade, show and play video
  setTimeout(() => {
    video.style.display = 'block';
    video.muted = false; // optional: unmute after play if you want
    video.play().catch(err => console.log("Autoplay blocked:", err));
  }, 2000);
});