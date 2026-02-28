document.addEventListener("DOMContentLoaded", function () {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");

  let triggered = false;

  heroVideo.addEventListener("ended", function () {

    if (triggered) return;
    triggered = true;

    whiteFade.style.opacity = "1";

    setTimeout(() => {
      whiteFade.style.opacity = "0";
      blackFade.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
      heroText.classList.add("visible");
    }, 2000);

  });

});