document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.saga-button');
  const overlay = document.querySelector('.overlay');
  const video = document.getElementById('heyVideo');

  // Fade-in button after 2 seconds
  setTimeout(() => {
    startBtn.classList.add('fade-in');
  }, 2000);

  // Click event → hide button, fade overlay, play video
  startBtn.addEventListener('click', () => {
    // Hide button
    startBtn.style.display = 'none';

    // Fade overlay
    overlay.classList.add('active');

    // After 2s fade, show and play video
    setTimeout(() => {
      video.style.display = 'block';
      video.play();   // autoplay
    }, 2000);
  });
});