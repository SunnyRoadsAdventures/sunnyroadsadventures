/* =========================================
   EMPIRE OF WHITE GOLD
   CINEMATIC INTERACTION ENGINE
   ========================================= */


/* ===============================
   CUSTOM CURSOR (DESKTOP ONLY)
=============================== */

if (window.matchMedia("(pointer: fine)").matches) {

  const cursor = document.createElement("div");
  cursor.classList.add("lux-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

}


/* ===============================
   CINEMATIC SCROLL DEPTH SHIFT
=============================== */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;
  const trigger = window.innerHeight * 0.4;

  if (scrollY > trigger) {
    document.body.classList.add("depth-shift");
  } else {
    document.body.classList.remove("depth-shift");
  }

});


/* ===============================
   ULTRA SMOOTH PARALLAX DEPTH
=============================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  sections.forEach((section, index) => {

    const speed = 0.02 * (index + 1);
    section.style.transform = `translateY(${scrollY * speed}px)`;

  });

});


/* ===============================
   CINEMATIC FADE-IN
=============================== */

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });

}, {
  threshold: 0.15
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "opacity 1.4s ease, transform 1.4s ease";
  observer.observe(section);
});


/* ===============================
   GOLD DUST GENERATOR
=============================== */

const dustContainer = document.querySelector(".gold-dust");

for (let i = 0; i < 30; i++) {

  const particle = document.createElement("span");

  particle.style.top = Math.random() * 100 + "%";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 20 + "s";
  particle.style.opacity = Math.random() * 0.6 + 0.2;

  dustContainer.appendChild(particle);
}


/* ===============================
   GOLD LIGHT FOLLOW (SOFT)
=============================== */

if (window.matchMedia("(pointer: fine)").matches) {

  const light = document.createElement("div");
  light.classList.add("light-follow");
  document.body.appendChild(light);

  document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
  });

}