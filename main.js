document.addEventListener("DOMContentLoaded", () => {

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

/* INTAKE SYSTEM */
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