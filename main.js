document.addEventListener("DOMContentLoaded", function () {

  const heroVideo = document.getElementById("heroVideo");
  const heroText = document.querySelector(".hero-text");
  const whiteFade = document.querySelector(".white-fade");
  const blackFade = document.querySelector(".black-fade");

  if (!heroVideo || !heroText || !whiteFade || !blackFade) {
    console.log("Hero elements not found");
    return;
  }

  console.log("Hero system ready");

  heroVideo.addEventListener("ended", function () {
    console.log("Video ended fired");

    whiteFade.style.opacity = "1";

    setTimeout(() => {
      console.log("Switching to black");
      whiteFade.style.opacity = "0";
      blackFade.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
      heroText.classList.add("is-visible");
    }, 2000);
  });

});