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

/* Initial state */
sagaBtn.style.opacity = 1;

/* SAGA CLICK */
sagaBtn.addEventListener("click", () => {

sagaBtn.style.opacity = 0;
setTimeout(() => sagaBtn.style.display = "none", 1000);

missionVideo.style.display = "block";
missionVideo.style.opacity = 1;
missionVideo.play();

});

/* CLOSE mission outside click */
document.addEventListener("click", (e) => {

if (missionVideo.style.display === "block") {

const rect = missionVideo.getBoundingClientRect();
const inside = (
e.clientX >= rect.left &&
e.clientX <= rect.right &&
e.clientY >= rect.top &&
e.clientY <= rect.bottom
);

if (!inside) {

missionVideo.style.opacity = 0;

setTimeout(() => {
missionVideo.pause();
missionVideo.style.display = "none";

heyVideo.style.opacity = 1;
heyVideo.play();

gateVideo.style.display = "block";
gateVideo.style.opacity = 1;
gateVideo.play();

setTimeout(() => {
enterBtn.style.display = "block";
enterBtn.style.opacity = 1;
}, 5000);

}, 1000);

}

}

});

/* ENTER CLICK */
enterBtn.addEventListener("click", () => {

gateVideo.pause();
heyVideo.pause();
gateVideo.style.opacity = 0;
heyVideo.style.opacity = 0;

enterBtn.style.opacity = 0;
setTimeout(() => enterBtn.style.display = "none", 1000);

beginsVideo.style.display = "block";
beginsVideo.style.opacity = 1;
beginsVideo.play();

beginsVideo.onended = () => {
beginsVideo.style.opacity = 0;
beginsVideo.style.display = "none";

journeyVideo.style.display = "block";
journeyVideo.style.opacity = 1;
journeyVideo.play();
};

});

/* Journey fade at 26.5s */
journeyVideo.addEventListener("timeupdate", () => {

if (journeyVideo.currentTime >= 26.5) {

journeyVideo.style.opacity = 0;

setTimeout(() => {
journeyVideo.pause();

greetingsVideo.style.display = "block";
greetingsVideo.style.opacity = 1;
greetingsVideo.play();
}, 1500);

}

});

/* Close greetings on ANY click */
document.addEventListener("click", () => {

if (greetingsVideo.style.display === "block") {

greetingsVideo.style.opacity = 0;

setTimeout(() => {
greetingsVideo.pause();
greetingsVideo.style.display = "none";

/* SHOW MARKET FULL */
plazaImg.style.display = "block";
plazaImg.style.opacity = 1;

/* Show buttons */
toursBtn.style.display = "block";
toursBtn.style.opacity = 1;

whatsappBtn.style.display = "block";
whatsappBtn.style.opacity = 1;

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