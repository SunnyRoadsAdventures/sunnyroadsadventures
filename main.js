/* SLIDER */

const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  index++;
  if(index >= slides.length){
    index = 0;
  }
  slides[index].classList.add("active");
}

if(slides.length > 0){
  setInterval(showSlide, 5000);
}

/* FADE IN */

const fadeSections = document.querySelectorAll(".fade-section");

function revealOnScroll() {
  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if(sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);