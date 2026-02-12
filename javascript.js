document.addEventListener("DOMContentLoaded", () => {
  const grok = document.getElementById("grok");
  const toursBtn = document.getElementById("toursBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  // Start Grok animation
  function startGrok() {
    grok.style.animation = "sneak 8s ease-in-out infinite";
  }

  // Grok reacts on click
  grok.addEventListener("click", () => {
    grok.style.transform = "scale(1.3) rotate(-10deg)";
    setTimeout(() => grok.style.transform = "scale(1) rotate(0deg)", 500);
  });

  startGrok();

  // Market Buttons
  toursBtn.addEventListener("click", () => {
    window.open("tours.jpg", "_blank");
  });

  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/50558365522", "_blank");
  });
});