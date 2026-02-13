document.addEventListener("DOMContentLoaded", () => {
    const toursBtn = document.getElementById("toursBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");

    // Open tours info
    toursBtn.addEventListener("click", () => {
        window.open("tours.jpg", "_blank");
    });

    // Open WhatsApp
    whatsappBtn.addEventListener("click", () => {
        window.open("https://wa.me/50558365522", "_blank");
    });

    // Grok click interaction
    const grok = document.getElementById("grok");
    grok.addEventListener("click", () => {
        alert("Grok is clumsy but cute!");
    });
});