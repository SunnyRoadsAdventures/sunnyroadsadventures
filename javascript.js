document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.saga-button');
  const overlay = document.querySelector('.overlay');

  // Fade-in button after 2 seconds
  setTimeout(() => {
    startBtn.classList.add('fade-in');
  }, 2000);

  // Click event → hide button, fade overlay
  startBtn.addEventListener('click', () => {
    // Hide button
    startBtn.style.display = 'none';

    // Trigger overlay fade to black
    overlay.classList.add('active');

    // Placeholder for next sequence after 2s
    setTimeout(() => {
      console.log("Next sequence triggered!");
      // Trigger videos, next div, etc. here
    }, 2000);
  });
});