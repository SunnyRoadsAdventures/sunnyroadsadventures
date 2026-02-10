document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.saga-button');
  const stage = document.querySelector('.stage');

  // Fade-in button after 2 seconds
  setTimeout(() => {
    startBtn.classList.add('fade-in');
  }, 2000);

  // Click event → fade screen to black and hide button
  startBtn.addEventListener('click', () => {
    // Hide button
    startBtn.style.display = 'none';

    // Fade screen to black
    stage.classList.add('fade-black');

    // Placeholder for next sequence after 2s
    setTimeout(() => {
      console.log("Next sequence triggered!");
      // You can replace this with video, text, or next div
    }, 2000);
  });
});