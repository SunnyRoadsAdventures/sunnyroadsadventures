// LIGHT FOLLOW
const light = document.querySelector(".light-follow");

document.addEventListener("mousemove", e => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

// FADE IN SECTIONS
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "opacity 2.4s ease, transform 2.4s ease";
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));