document.addEventListener("DOMContentLoaded", () => {

    const bookBtns = document.querySelectorAll(".bookBtn");
    const bookGeneralBtn = document.getElementById("bookGeneralBtn");

    // All tour buttons open same booking link
    bookBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.open("https://wa.me/50558365522", "_blank");
        });
    });

    // General booking button
    bookGeneralBtn.addEventListener("click", () => {
        window.open("https://wa.me/50558365522", "_blank");
    });

});