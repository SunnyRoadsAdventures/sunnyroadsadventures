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

}