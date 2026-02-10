document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.saga-button');
  const stage = document.querySelector('.stage');

  // Fade-in button after 2 seconds
  setTimeout(() => {
    startBtn.classList.add('fade-in');
  }, 2000);

  // Click event → fade screen to black
  startBtn.addEventListener('click', () => {
    stage.classList.add('fade-black');

    // You can trigger next sequence here after 2s
    setTimeout(() => {
      console.log("Next sequence triggered!"); // placeholder
      // Trigger videos, next screen, etc. here
    }, 2000);
  });
});