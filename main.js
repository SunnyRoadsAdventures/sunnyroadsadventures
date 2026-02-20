document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("heroVideo");
    const flash = document.querySelector(".white-flash");
    const title = document.querySelector(".hero-title");
    const brand = document.querySelector(".hero-brand"); // ADD THIS
    const subtitle = document.querySelector(".hero-subtitle");
const dividers = document.querySelectorAll(".gold-divider");

    if (!video) return;

    video.addEventListener("ended", function () {

        video.pause();
        video.currentTime = video.duration;

        if (flash) flash.classList.add("active");

        setTimeout(() => {

    if (title) title.classList.add("visible");
    if (brand) brand.classList.add("visible");
    if (subtitle) subtitle.classList.add("visible");

    if (dividers) {
        dividers.forEach(div => {
            div.classList.add("visible");
        });
    }

}, 800);
    });

});
const towerSection = document.querySelector(".tower-section");
const layers = document.querySelectorAll(".tower-layer");

window.addEventListener("scroll", () => {

    if (!towerSection) return;

    const rect = towerSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= 0 && rect.bottom >= windowHeight) {

        const scrollProgress = Math.abs(rect.top) / windowHeight;

        layers.forEach((layer, index) => {
            const triggerPoint = index;

            if (scrollProgress > triggerPoint) {
                layer.style.transform = "translateY(0)";
            } else {
                layer.style.transform = "translateY(100%)";
            }
        });

    }

});

const floors = document.querySelectorAll('.tower-floor');

window.addEventListener('scroll', () => {
    floors.forEach((floor, index) => {
        const rect = floor.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.8) {
            floor.style.transform = "translateY(0)";
        }
    });
});
const floors = document.querySelectorAll(".tower-floor");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    floors.forEach((floor) => {
        const rect = floor.getBoundingClientRect();

        if (rect.top < trigger) {
            floor.style.transform = "translateY(0)";
        }
    });
});