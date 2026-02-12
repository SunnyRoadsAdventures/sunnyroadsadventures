const introVideo = document.getElementById("introVideo");
const goBtn = document.getElementById("goBtn");
const skipBtn = document.getElementById("skipBtn");

/* Fade in intro video at 1.5s */
setTimeout(() => {
    introVideo.style.opacity = "1";
    introVideo.play();
}, 1500);

/* Fade in go button at 2.3s */
setTimeout(() => {
    goBtn.style.opacity = "1";
}, 2300);

/* Fade in skip button at 4s */
setTimeout(() => {
    skipBtn.style.opacity = "1";
}, 4000);

/* Button actions */
goBtn.addEventListener("click", function() {
    window.location.href = "mission.mp4";
});

skipBtn.addEventListener("click", function() {
    window.location.href = "greetings.mp4";
});