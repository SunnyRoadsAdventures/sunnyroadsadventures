document.addEventListener("DOMContentLoaded", () => {

    const toursBtn = document.getElementById("toursBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");
    const tourCards = document.querySelectorAll(".tourCard");
    const grok = document.getElementById("grok");

    /* CONTACT BUTTONS */
    toursBtn.addEventListener("click", () => {
        window.open("tours.jpg", "_blank");
    });

    whatsappBtn.addEventListener("click", () => {
        window.open("https://wa.me/50558365522", "_blank");
    });

    /* GROK RANDOM BOUNCE ANIMATION */
    setInterval(() => {
        let x = Math.random() * 20 - 10; // -10 to +10 px horizontal
        let y = Math.random() * 10 - 5;  // -5 to +5 px vertical
        grok.style.transform = `translate(${x}px, ${y}px)`;
    }, 2000);

    /* TOUR CARDS CLICK */
    tourCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`More info about: ${card.textContent}`);
        });
    });

});