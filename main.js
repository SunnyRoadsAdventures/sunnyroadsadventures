/* =========================================
   EMPIRE OF WHITE GOLD — INTERACTION CORE
   ========================================= */


/* GOLD LIGHT FOLLOW */
const light = document.createElement("div");
light.classList.add("light-follow");
document.body.appendChild(light);

document.addEventListener("mousemove", (e) => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});


/* FLOATING GOLD DUST GENERATOR */
const dustContainer = document.querySelector(".gold-dust");

for (let i = 0; i < 25; i++) {
  const particle = document.createElement("span");

  particle.style.top = Math.random() * 100 + "%";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 20 + "s";
  particle.style.opacity = Math.random() * 0.6 + 0.2;

  dustContainer.appendChild(particle);
}


/* SECTION FADE-IN ON SCROLL */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in", "visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("fade-in");
  observer.observe(section);
});


/* PARALLAX DEPTH */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section, index) => {
    const speed = 0.03 * (index + 1);
    section.style.transform = `translateY(${scrollY * speed}px)`;
  });
});