// LOADER
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
}, 1500);

// GATE HOLD SYSTEM (MOBILE + DESKTOP)
let gate = document.getElementById('gate');
let holdTimer;

function unlock() {
  gate.style.display = 'none';
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('hud').classList.remove('hidden');

  document.body.style.overflowY = 'auto';

  activateRoom(1);
}

function startHold() {
  holdTimer = setTimeout(unlock, 1200);
}

function cancelHold() {
  clearTimeout(holdTimer);
}

gate.addEventListener('mousedown', startHold);
gate.addEventListener('mouseup', cancelHold);
gate.addEventListener('touchstart', startHold);
gate.addEventListener('touchend', cancelHold);
gate.addEventListener('contextmenu', e => e.preventDefault());


// THREE.JS BACKGROUND
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg'),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// RESPONSIVE
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ROOM SYSTEM
const rooms = document.querySelectorAll('.room');
let currentRoom = 0;

function activateRoom(index) {
  rooms.forEach(r => r.classList.remove('active'));
  if (rooms[index - 1]) {
    rooms[index - 1].classList.add('active');
  }
}

// SCROLL PROGRESSION
window.addEventListener('scroll', () => {
  let index = Math.round(window.scrollY / window.innerHeight) + 1;

  if (index !== currentRoom) {
    currentRoom = index;
    activateRoom(index);
    updateClearance(index);
  }
});

// CLEARANCE SYSTEM
function updateClearance(level) {
  document.getElementById('clearance').innerText =
    \"CLEARANCE: LEVEL \" + level;
}

// INTEL DECRYPTION
const file = document.getElementById('file');

file.addEventListener('click', () => {
  let text = \"ACCESSING FILE...\\nDECRYPTING...\\nMISSION DATA UNLOCKED\";
  let i = 0;

  file.innerText = \"\";

  let interval = setInterval(() => {
    file.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
});

// PORTAL SYSTEM
const portal = document.getElementById('portal');

portal.addEventListener('click', () => {
  document.body.style.transition = 'transform 1s ease';
  document.body.style.transform = 'scale(0.6) rotateX(30deg)';

  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: 'smooth'
    });

    document.body.style.transform = 'none';
  }, 800);
});