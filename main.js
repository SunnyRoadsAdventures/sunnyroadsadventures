const real = document.querySelector(".real");
const lag1 = document.querySelector(".lag1");
const lag2 = document.querySelector(".lag2");

const back = document.querySelector(".layer-back");
const mid = document.querySelector(".layer-mid");
const front = document.querySelector(".layer-front");

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let l1 = { x: mouse.x, y: mouse.y };
let l2 = { x: mouse.x, y: mouse.y };

let phase = 0;
let startTime = Date.now();

// Track real mouse
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Animation loop
function animate() {
  const t = (Date.now() - startTime) / 1000;

  // Cursor lag illusion
  l1.x += (mouse.x - l1.x) * 0.15;
  l1.y += (mouse.y - l1.y) * 0.15;

  l2.x += (l1.x - l2.x) * 0.1;
  l2.y += (l1.y - l2.y) * 0.1;

  // Apply cursor positions
  real.style.left = mouse.x + "px";
  real.style.top = mouse.y + "px";

  lag1.style.left = l1.x + "px";
  lag1.style.top = l1.y + "px";

  lag2.style.left = l2.x + "px";
  lag2.style.top = l2.y + "px";

  // Layer desync movement
  const offsetX = (mouse.x - window.innerWidth / 2) * 0.02;
  const offsetY = (mouse.y - window.innerHeight / 2) * 0.02;

  front.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;

  mid.style.transform = `translate(calc(-50% + ${offsetX * 2}px), calc(-50% + ${offsetY * 2}px))`;

  back.style.transform = `translate(calc(-50% + ${offsetX * 4}px), calc(-50% + ${offsetY * 4}px))`;

  // Phase escalation
  if (t > 4 && phase === 0) {
    phase = 1;
    // increase desync chaos
    document.body.style.filter = "blur(1px)";
  }

  if (t > 7 && phase === 1) {
    phase = 2;

    // SNAP ALIGNMENT (critical moment)
    front.style.transition = "all 0.2s ease";
    mid.style.transition = "all 0.2s ease";
    back.style.transition = "all 0.2s ease";

    front.style.transform = "translate(-50%, -50%)";
    mid.style.transform = "translate(-50%, -50%)";
    back.style.transform = "translate(-50%, -50%)";

    document.body.style.filter = "none";

    // transition to site
    setTimeout(() => {
      document.body.style.background = "white";
      document.body.style.color = "black";
      front.innerText = "WELCOME";
      mid.innerText = "WELCOME";
      back.innerText = "WELCOME";
    }, 300);
  }

  requestAnimationFrame(animate);
}

animate();