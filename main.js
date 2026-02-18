/* ======================================
   WHITE GOLD CINEMATIC ENGINE
====================================== */

/* Fade-in sections */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  observer.observe(section);
});

/* Gold Dust Generator */
const dustContainer = document.querySelector(".gold-dust");

for (let i = 0; i < 20; i++) {
  const particle = document.createElement("span");

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.top = Math.random() * 100 + "vh";
  particle.style.animationDuration = 15 + Math.random() * 20 + "s";
  particle.style.opacity = 0.2 + Math.random() * 0.3;

  dustContainer.appendChild(particle);
}