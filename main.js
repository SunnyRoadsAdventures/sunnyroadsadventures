const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(255,255,255,0.95)";
    header.style.backdropFilter = "blur(6px)";
  } else {
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
  }
});
