const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


/* ===========================
   PRIVATE INQUIRY TOGGLE
=========================== */

function toggleForm() {
    const form = document.getElementById('inquiry-form');
    form.classList.toggle('active');
}