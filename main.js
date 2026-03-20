document.addEventListener("DOMContentLoaded", () => {

/* SECTION REVEAL */
function revealOnScroll(){
const trigger = window.innerHeight * 0.85;

document.querySelectorAll("section").forEach(sec=>{
if(sec.getBoundingClientRect().top < trigger){
sec.classList.add("visible");
}
});
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* PARALLAX */
window.addEventListener("scroll", () => {
const scrollY = window.scrollY;
const bg = document.querySelector(".hero-bg");
if(bg){
bg.style.transform = `translateY(${scrollY * 0.2}px) scale(1.1)`;
}
});

/* GOLD PARTICLES */
const canvas = document.getElementById("goldParticles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createParticles(){
particles = [];
for(let i=0;i<60;i++){
particles.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
size: Math.random()*2 + 0.5,
speedY: Math.random()*0.3 + 0.1,
opacity: Math.random()*0.5
});
}
}

function drawParticles(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle = `rgba(201,162,77,${p.opacity})`;
ctx.fill();

p.y -= p.speedY;

if(p.y < 0){
p.y = canvas.height;
p.x = Math.random()*canvas.width;
}
});

requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();

});

/* INTAKE */
let currentStep = 1;

function openIntake(){
document.getElementById("intakePanel").classList.add("active");
}

function nextStep(){
document.querySelector(`[data-step="${currentStep}"]`).classList.remove("active");
currentStep++;
document.querySelector(`[data-step="${currentStep}"]`).classList.add("active");
}

function submitForm(){
let data = {
name: document.getElementById("name").value,
intent: document.getElementById("intent").value,
time: document.getElementById("time").value,
style: document.getElementById("style").value
};

console.log("Client:", data);
nextStep();
}