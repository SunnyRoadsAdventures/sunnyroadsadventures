document.addEventListener("DOMContentLoaded", () => {

const video = document.getElementById("heroVideo");
const whiteFade = document.querySelector(".white-fade");
const blackFade = document.querySelector(".black-fade");
const kayla = document.querySelector(".kayla-reveal");
const heroText = document.querySelector(".hero-text");

const wait = ms => new Promise(r => setTimeout(r, ms));

async function playCinematic(){

if(!video || !heroText) return;

heroText.style.opacity = "0";

await Promise.race([
new Promise(r => video.addEventListener("ended", r)),
wait(8000)
]);

video.style.opacity="0";

await wait(1000);

video.style.display="none";

if(whiteFade) whiteFade.style.opacity="1";

await wait(2000);

if(blackFade) blackFade.style.opacity="1";

await wait(1200);

if(kayla){
kayla.style.visibility="visible";
kayla.style.opacity="1";
}

await wait(1500);

heroText.style.opacity="1";

if(blackFade){
blackFade.style.opacity="0";
}

}

playCinematic();

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
const trigger = window.innerHeight * 0.85;

reveals.forEach(el=>{
if(el.getBoundingClientRect().top < trigger){
el.classList.add("visible");
}
});
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

});