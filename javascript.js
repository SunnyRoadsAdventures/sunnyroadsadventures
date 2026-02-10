document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const enterBtn = document.getElementById('enterBtn');
  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');

  // Scenario 1: Beginning
  setTimeout(() => {
    sagaBtn.classList.add('show'); // fade in saga button
  }, 2000);

  sagaBtn.addEventListener('click', () => {
    sagaBtn.style.display = 'none'; // hide saga button

    // Show and play the 3 videos
    heyVideo.style.display = 'block';
    heyVideo.muted = false;
    heyVideo.play().catch(err => console.log("Autoplay blocked:", err));

    gateVideo.style.display = 'block';
    gateVideo.muted = false;
    gateVideo.play().catch(err => console.log("Autoplay blocked:", err));

    missionVideo.style.display = 'block';
    missionVideo.muted = false;
    missionVideo.play().catch(err => console.log("Autoplay blocked:", err));

    // Show enter button for next scenario
    enterBtn.style.opacity = 1;
  });

  // Scenario 2: Later sequence
  enterBtn.addEventListener('click', () => {
    console.log("Enter button clicked - trigger next sequence here");
    enterBtn.style.display = 'none';

    // Here you can load next scenario or videos
    // saga button is NOT present in this sequence
  });
});