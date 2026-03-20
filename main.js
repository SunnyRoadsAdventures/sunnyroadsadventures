document.addEventListener("DOMContentLoaded", () => {

/* DELAYED HERO EXPERIENCE */
setTimeout(()=> {
  document.getElementById("line1").classList.add("show");
},1000);

setTimeout(()=> {
  document.getElementById("line2").classList.add("show");
},2500);

setTimeout(()=> {
  document.getElementById("cta").classList.add("show");
},4000);


/* GOLD PARTICLES */
const canvas = document.getElementById("goldParticles");
const ctx = canvas.getContext("2d");

let particles=[];

function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

function createParticles(){
  for(let i=0;i<50;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      size:Math.random()*2,
      speed:Math.random()*0.3
    });
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle="rgba(201,162,77,0.5)";
    ctx.fill();

    p.y-=p.speed;
    if(p.y<0){
      p.y=canvas.height;
      p.x=Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

createParticles();
animate();

});


/* INTAKE */
let step=1;

function openIntake(){
  document.getElementById("intakePanel").classList.add("active");
}

function nextStep(){
  document.querySelector(`[data-step="${step}"]`).classList.remove("active");
  step++;
  document.querySelector(`[data-step="${step}"]`).classList.add("active");
}

function submitForm(){
  nextStep();
}