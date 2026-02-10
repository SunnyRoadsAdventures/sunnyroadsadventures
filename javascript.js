document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const enterBtn = document.getElementById('enterBtn');
  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');

  // Saga button fade-in after 2s
  setTimeout(() => {
    sagaBtn.classList.add('show');
  }, 2000);

  // Click event for saga button
  sagaBtn.addEventListener('click', () => {
    sagaBtn.style.display = 'none'; // hide saga button

    // Show and play videos
    heyVideo.style.display = 'block';
    heyVideo.muted = false;
    heyVideo.play().catch(err => console.log("Autoplay blocked:", err));

    gateVideo.style.display = 'block';
    gateVideo.muted = false;
    gateVideo.play().catch(err => console.log("Autoplay blocked:", err));

    missionVideo.style.display = 'block';
    missionVideo.muted = false;
    missionVideo.play().catch(err => console.log("Autoplay blocked:", err));

    // Show the second button enter.png
    enterBtn.style.opacity = 1;
  });

  // Click event for enter button
  enterBtn.addEventListener('click', () => {
    console.log("Enter button clicked - trigger next cinematic sequence here");
    enterBtn.style.display = 'none';
    // Add next sequence actions here
  });
});