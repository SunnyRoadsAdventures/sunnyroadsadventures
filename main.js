document.addEventListener("DOMContentLoaded", function () {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");

  if (heroVideo && heroText && whiteFade) {

    heroVideo.addEventListener("ended", function () {
      whiteFade.style.opacity = "1";

      setTimeout(() => {
        heroText.classList.add("is-visible");
      }, 300);
    });

  }

});