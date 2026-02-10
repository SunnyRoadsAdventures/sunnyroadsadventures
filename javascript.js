document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const video = document.getElementById('heyVideo');

  // Fade-in button after 2 seconds
  setTimeout(() => {
    sagaBtn.classList.add('show');
  }, 2000);

  // Button click
  sagaBtn.addEventListener('click', () => {
    // Hide button
    sagaBtn.style.display = 'none';

    // Show and play video
    video.style.display = 'block';
    video.muted = false; // optional: allow sound
    video.play().catch(err => console.log("Autoplay blocked:", err));
  });
});