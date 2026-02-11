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

/* SAGA CLICK */
sagaBtn.addEventListener("click", () => {
sagaBtn.style.opacity = 0;
sagaBtn.style.pointerEvents = "none";
setTimeout(() => sagaBtn.style.display = "none", 2000);

heyVideo.style.opacity = 0;
heyVideo.pause();
gateVideo.style.opacity = 0;
gateVideo.pause();

missionVideo.style.display = "block";
missionVideo.style.opacity = 1;
missionVideo.play();

}, { once: true });

/* Close mission.mp4 on outside click */
document.addEventListener("click", (e) => {
if (missionVideo.style.display === "block") {
const rect = missionVideo.getBoundingClientRect();
const insideX = e.clientX >= rect.left && e.clientX <= rect.right;
const insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

if (!insideX || !insideY) {
missionVideo.style.opacity = 0;
setTimeout(() => {
missionVideo.style.display = "none";
missionVideo.pause();

heyVideo.style.display = "block";    
heyVideo.style.opacity = 1;    
heyVideo.play();    

gateVideo.style.display = "block";    
gateVideo.style.opacity = 1;    
gateVideo.currentTime = 0;    
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
setTimeout(() => enterBtn.style.display = "none", 2000);

beginsVideo.style.display = "block";
beginsVideo.style.opacity = 1;
beginsVideo.currentTime = 0;
beginsVideo.play();

beginsVideo.onended = () => {
beginsVideo.style.opacity = 0;
beginsVideo.style.display = "none";

journeyVideo.style.display = "block";
journeyVideo.style.opacity = 1;
journeyVideo.currentTime = 0;
journeyVideo.play();
};

});

/* Journey fade at 26.5 */
journeyVideo.addEventListener("timeupdate", () => {
if (journeyVideo.currentTime >= 26.5) {
journeyVideo.style.transition = "opacity 2s ease";
journeyVideo.style.opacity = 0;

setTimeout(() => {
journeyVideo.pause();

greetingsVideo.style.display = "block";    
greetingsVideo.currentTime = 0;    
greetingsVideo.play();    

greetingsVideo.style.transition = "opacity 2s ease";    
greetingsVideo.style.opacity = 1;

}, 2000);
}
});

/* blackie fade at 65.2 */
gateVideo.addEventListener("timeupdate", () => {
if (gateVideo.currentTime >= 65.2) {
gateVideo.style.opacity = 0;
gateVideo.pause();
}
});

/* ANY CLICK → close greetings and show plaza */
document.addEventListener("click", () => {
if (greetingsVideo.style.display === "block") {
greetingsVideo.style.transition = "opacity 1s ease";
greetingsVideo.style.opacity = 0;

setTimeout(() => {
greetingsVideo.pause();
greetingsVideo.style.display = "none";

if (plazaImg) {    
plazaImg.style.display = "block";    
plazaImg.style.transition = "opacity 2s ease";    
plazaImg.style.opacity = 1;    
}

}, 1000);
}
});

/* TOURS */
if (toursBtn) {
toursBtn.addEventListener("click", () => {
window.open("tours.jpg", "_blank");
});
}

/* WHATSAPP */
if (whatsappBtn) {
whatsappBtn.addEventListener("click", () => {
window.open("https://wa.me/50558365522", "_blank");
});
}

});