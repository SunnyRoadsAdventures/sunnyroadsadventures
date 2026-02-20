console.log("JS LOADED");

window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM READY");

    setTimeout(function () {
        console.log("FADE TRIGGER");

        document.querySelector(".hero-title")?.classList.add("hero-visible");
        document.querySelector(".hero-brand")?.classList.add("hero-visible");
        document.querySelector(".hero-subtitle")?.classList.add("hero-visible");

        document.querySelectorAll(".gold-divider").forEach(divider => {
            divider.classList.add("hero-visible");
        });

    }, 15800);
});