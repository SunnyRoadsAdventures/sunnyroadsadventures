document.addEventListener('DOMContentLoaded', () => {
  const sagaBtn = document.getElementById('sagaBtn');
  const enterBtn = document.getElementById('enterBtn');

  const heyVideo = document.getElementById('heyVideo');
  const gateVideo = document.getElementById('gateVideo');
  const missionVideo = document.getElementById('missionVideo');
  const beginsVideo = document.getElementById('beginsVideo');

  /* -----------------------------
     INITIAL STATE
  ------------------------------ */
  enterBtn.style.display = 'none';
  beginsVideo.style.display = 'none';

  /* -----------------------------
     SAGA BUTTON FADE IN
  ------------------------------ */
  setTimeout(() => {
    sagaBtn.style.opacity = 1;
  }, 2000);

  /* -----------------------------
     SAGA BUTTON CLICK (ONCE)
  ------------------------------ */
  sagaBtn.addEventListener('click', () => {
    sagaBtn.style.display = 'none';

    // Fade to black
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = "#000";

    // hey.mp4
    setTimeout(() => {
      heyVideo.style.display = 'block';
      heyVideo.style.opacity = 1;
      heyVideo.muted = false;
      heyVideo.volume = 1.0;
      heyVideo.play().catch(() => {});
    }, 3000);

    // gate.mp4
    setTimeout(() => {
      gateVideo.style.display = 'block';
      gateVideo.style.opacity = 1;
      gateVideo.muted = false;
      gateVideo.volume = 1.0;
      gateVideo.play().catch(() => {});
    }, 4000);

    // mission.mp4
    setTimeout(() => {
      missionVideo.style.display = 'block';
      missionVideo.style.opacity = 1;
      missionVideo.muted = false;
      missionVideo.volume = 1.0;
      missionVideo.play().catch(() => {});
    }, 7000);

    // enter.png
    setTimeout(() => {
      enterBtn.style.display = 'block';
      enterBtn.style.opacity = 1;
    }, 10000);

  }, { once: true });

  /* -----------------------------
     ENTER BUTTON CLICK → BEGINNING
  ------------------------------ */
  enterBtn.addEventListener('click', () => {
    // Fade out enter button
    enterBtn.style.opacity = 0;

    // Fade out current scene
    heyVideo.style.opacity = 0;
    gateVideo.style.opacity = 0;
    missionVideo.style.opacity = 0;

    setTimeout(() => {
      enterBtn.style.display = 'none';
      heyVideo.style.display = 'none';
      gateVideo.style.display = 'none';
      missionVideo.style.display = 'none';
    }, 1000);

    // Ensure full black
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = "#000";

    // begins.mp4
    setTimeout(() => {
      beginsVideo.style.display = 'block';
      beginsVideo.style.opacity = 1;
      beginsVideo.muted = false;
      beginsVideo.volume = 1.0;
      beginsVideo.play().catch(() => {});
    }, 2000);
  });
});