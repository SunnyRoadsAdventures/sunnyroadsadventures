/* IMAGE SLIDER */
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

/* FORM AJAX SUBMIT */

const form = document.getElementById("invitationForm");
const overlay = document.getElementById("successOverlay");

if(form){
  form.addEventListener("submit", async function(e){
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if(response.ok){
        form.reset();
        overlay.classList.add("active");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch(error){
      alert("Network error. Please try again.");
    }
  });
}