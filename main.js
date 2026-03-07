document.addEventListener("DOMContentLoaded", () => {

const heroSection = document.querySelector(".hero");
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
wait(12000)
]);

video.style.transition="opacity 1s ease";
video.style.opacity="0";

await wait(1000);

video.style.display="none";

if(whiteFade) whiteFade.style.opacity="1";

await wait(2500);

if(blackFade) blackFade.style.opacity="1";

await wait(1500);

if(kayla){
kayla.style.visibility="visible";
kayla.style.opacity="1";
}

await wait(2000);

heroText.style.opacity="1";

if(blackFade){
blackFade.style.transition="opacity 2s ease";
blackFade.style.opacity="0";
}

}

playCinematic();



const welcomeVideo = document.getElementById("welcomeVideo");
const buttons = document.querySelectorAll(".lang-btn");

window.switchLanguage = function(lang){

if(!welcomeVideo) return;

buttons.forEach(b=>b.classList.remove("active"));

if(lang==="eng"){
welcomeVideo.src="eng.mp4";
buttons[0].classList.add("active");
}else{
welcomeVideo.src="esp.mp4";
buttons[1].classList.add("active");
}

welcomeVideo.load();
welcomeVideo.play();

};

});