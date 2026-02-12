document.addEventListener("DOMContentLoaded", () => {
    const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

    whatsappButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const phone = btn.dataset.phone;
            window.open(`https://wa.me/${phone}`, "_blank");
        });
    });
});