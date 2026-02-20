// ===== HERO 15.8 SECOND FADE =====
window.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        document.querySelector(".hero-title")?.classList.add("hero-visible");
        document.querySelector(".hero-brand")?.classList.add("hero-visible");
        document.querySelector(".hero-subtitle")?.classList.add("hero-visible");

        document.querySelectorAll(".gold-divider").forEach(function (divider) {
            divider.classList.add("hero-visible");
        });

    }, 15800);

});


// ===== TOWER SCROLL LOGIC =====
const tower = document.querySelector(".tower");
const floors = document.querySelectorAll(".tower-floor");

if (tower && floors.length > 0) {

    window.addEventListener("scroll", () => {

        const towerTop = tower.offsetTop;
        const towerHeight = tower.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= towerTop && scrollY <= towerTop + towerHeight) {

            const progress = (scrollY - towerTop) / towerHeight;

            floors.forEach((floor, index) => {

                const offset = (progress * floors.length) - index;
                const translate = Math.max(0, 100 - offset * 100);

                floor.style.transform = `translateY(${translate}%)`;

            });

        }

    });

}