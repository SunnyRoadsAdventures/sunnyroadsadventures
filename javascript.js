document.addEventListener("DOMContentLoaded", () => {

const sagaBtn = document.getElementById("sagaBtn");
const enterBtn = document.getElementById("enterBtn");

const heyVideo = document.getElementById("heyVideo");
const gateVideo = document.getElementById("gateVideo");
const missionVideo = document.getElementById("missionVideo");

const beginsVideo = document.getElementById("beginsVideo");
const journeyVideo = document.getElementById("journeyVideo");
const greetingsVideo = document.getElementById("greetingsVideo");

const plazaImg = document.getElementById("plazaImg");
const toursBtn = document.getElementById("toursBtn");
const whatsappBtn = document.getElementById("whatsappBtn");


/* Initial saga fade-in */
setTimeout(() => { sagaBtn.style.opacity = 1; }, 2000);


/* ENTER → cinematic */
enterBtn.addEventListener("click", () => {

gateVideo.pause();
heyVideo.pause();

enterBtn.style.opacity = 0;
setTimeout(() => enterBtn.style.display = "none", 2000);

beginsVideo.style.display = "block";
beginsVideo.style.opacity = 1;
beginsVideo.play();

beginsVideo.onended = () => {
beginsVideo.style.display = "none";

journeyVideo.style.display = "block";
journeyVideo.style.opacity = 1;
journeyVideo.play();
};

});


/* Fade journey at 26.5s → greetings */
journeyVideo.addEventListener("timeupdate", () => {
if (journeyVideo.currentTime >= 26.5) {

journeyVideo.style.opacity = 0;

setTimeout(() => {
journeyVideo.pause();
journeyVideo.style.display = "none";

greetingsVideo.style.display = "block";
greetingsVideo.style.opacity = 1;
greetingsVideo.play();

}, 2000);
}
});


/* Click anywhere → close greetings → show market */
document.addEventListener("click", () => {

if (greetingsVideo.style.display === "block") {

greetingsVideo.style.opacity = 0;

setTimeout(() => {
greetingsVideo.pause();
greetingsVideo.style.display = "none";

/* SHOW MARKET FULLSCREEN */
plazaImg.style.display = "block";

setTimeout(() => {
plazaImg.style.opacity = 1;
}, 50);

/* Show buttons */
toursBtn.style.display = "block";
whatsappBtn.style.display = "block";

setTimeout(() => {
toursBtn.style.opacity = 1;
whatsappBtn.style.opacity = 1;
}, 500);

}, 1000);
}

});


/* TOURS */
toursBtn.addEventListener("click", () => {
window.open("tours.jpg", "_blank");
});

/* WHATSAPP */
whatsappBtn.addEventListener("click", () => {
window.open("https://wa.me/50558365522", "_blank");
});

});