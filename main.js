document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".hero-title")?.classList.add("hero-visible");
        document.querySelector(".hero-brand")?.classList.add("hero-visible");
        document.querySelector(".hero-subtitle")?.classList.add("hero-visible");

        document.querySelectorAll(".gold-divider").forEach(d =>
            d.classList.add("hero-visible")
        );
    }, 15800);
});