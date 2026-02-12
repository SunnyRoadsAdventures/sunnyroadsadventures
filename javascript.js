document.addEventListener("DOMContentLoaded", () => {
  // TOUR BUTTONS
  const tourButtons = document.querySelectorAll(".tourBtn");
  tourButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const link = btn.getAttribute("data-link");
      window.open(link, "_blank");
    });
  });

  // WHATSAPP BUTTON
  const whatsappBtn = document.getElementById("whatsappBtn");
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/50558365522", "_blank");
  });

  // Optional: add Grok click fun interaction
  const grokVideo = document.getElementById("grokVideo");
  grokVideo.addEventListener("click", () => {
    grokVideo.style.transform = "translateY(-20px)";
    setTimeout(() => grokVideo.style.transform = "translateY(0)", 300);
  });
});