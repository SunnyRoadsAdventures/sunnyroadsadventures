document.addEventListener("DOMContentLoaded", () => {
  
  const tours = document.querySelectorAll("#toursList li");
  const toursBtn = document.getElementById("toursBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  // Tours click
  tours.forEach(tour => {
    tour.addEventListener("click", () => {
      alert(`More info about: ${tour.innerText}`);
    });
  });

  // Tours Info Button
  toursBtn.addEventListener("click", () => {
    alert("Full tours info coming soon!");
  });

  // WhatsApp Button
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/50558365522", "_blank");
  });

});