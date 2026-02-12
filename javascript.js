document.addEventListener("DOMContentLoaded", () => {

  const grok = document.getElementById("grok");
  const tours = document.querySelectorAll("#toursList li");
  const toursBtn = document.getElementById("toursBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  // Fade in Grok and start walking
  setTimeout(() => {
    grok.style.opacity = 1;
    grok.style.animation = "walkGrok 10s linear infinite";
    startGrokRandomActions();
  }, 2000);

  // Tours pop-in one by one
  tours.forEach((tour, index) => {
    setTimeout(() => {
      tour.style.opacity = 1;
      tour.style.transform = "translateY(0)";
    }, index * 200);
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

  // Grok random actions function
  function startGrokRandomActions() {
    setInterval(() => {
      const action = Math.floor(Math.random() * 4);
      switch(action) {
        case 0: grok.style.transform += " rotate(360deg)"; break; // spin
        case 1: grok.style.bottom = "15%"; setTimeout(()=>{grok.style.bottom="10%";}, 500); break; // jump
        case 2: grok.style.left = `${Math.random()*90}%`; break; // sneak to random
        case 3: grok.style.transform += " rotate(-20deg)"; setTimeout(()=>{grok.style.transform="rotate(0deg)";}, 500); break; // trip
      }
    }, 3000);
  }

});