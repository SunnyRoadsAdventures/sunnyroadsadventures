window.addEventListener("load", () => {
    document.querySelector(".hero-title").classList.add("visible");
    document.querySelector(".hero-brand").classList.add("visible");
    document.querySelector(".hero-subtitle").classList.add("visible");
});

const tower = document.querySelector(".tower");
const floors = document.querySelectorAll(".tower-floor");

if (tower && floors.length > 0) {

    window.addEventListener("scroll", () => {

        const towerTop = tower.offsetTop;
        const towerHeight = tower.offsetHeight;
        const scrollY = window.scrollY;

        // Only animate while inside tower section
        if (scrollY >= towerTop && scrollY <= towerTop + towerHeight) {

            const progress = (scrollY - towerTop) / towerHeight;

            floors.forEach((floor, index) => {

                const offset = (progress * floors.length) - index;

                const translate = Math.max(0, 100 - offset * 100);

                floor.style.transform = `translateY(${translate}%)`;

            });

        }

    });

}// existing code above

// ---- EXPERIENCE ANIMATION ----
const sections = document.querySelectorAll(".experience-section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const content = entry.target.querySelector(".experience-content");
            const divider = entry.target.querySelector(".gold-divider");
            const cta = entry.target.querySelector(".section-cta");

            setTimeout(() => {
                content.style.opacity = "1";
                content.style.transform = "translateY(0)";
            }, 400);

            setTimeout(() => {
                divider.style.opacity = "1";
            }, 700);

            setTimeout(() => {
                cta.style.opacity = "1";
            }, 900);
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => {
    observer.observe(section);
});
// Tower scroll logic above

// ===== EXPERIENCE SECTION ANIMATION =====
const sections = document.querySelectorAll(".experience-section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const content = entry.target.querySelector(".experience-content");
            const divider = entry.target.querySelector(".gold-divider");
            const cta = entry.target.querySelector(".section-cta");

            setTimeout(() => {
                content.style.opacity = "1";
                content.style.transform = "translateY(0)";
            }, 400);

            setTimeout(() => {
                divider.style.opacity = "1";
            }, 700);

            setTimeout(() => {
                cta.style.opacity = "1";
            }, 900);
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => {
    observer.observe(section);
});