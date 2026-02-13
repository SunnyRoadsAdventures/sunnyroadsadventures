document.addEventListener("DOMContentLoaded", () => {
    const toursBtn = document.getElementById("toursBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");

    toursBtn.addEventListener("click", () => {
        window.open("tours.jpg", "_blank");
    });

    whatsappBtn.addEventListener("click", () => {
        window.open("https://wa.me/50558365522", "_blank");
    });

    // Optional: Grok random small movement every few seconds
    const grok = document.getElementById("grok");
    setInterval(() => {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 200;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        grok.style.transform = `translate(${x}px, ${y}px)`;
    }, 5000);
});