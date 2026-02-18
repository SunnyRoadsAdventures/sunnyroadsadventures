/* SCROLL FADE */

const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
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

/* ULTRA SUBTLE PARALLAX */

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const images = document.querySelectorAll('.slider img');

    images.forEach(img => {
        img.style.transform = `translateY(${scrolled * 0.01}px)`;
    });
});