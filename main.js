// LOADER
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
}, 1500);

// GATE SYSTEM
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


// =======================
// THREE.JS SPATIAL SYSTEM
// =======================

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

// MULTIPLE OBJECTS = DEPTH
const objects = [];

for (let i = 0; i < 5; i++) {
  const geometry = new THREE.TorusKnotGeometry(8, 2, 100, 16);
  const material = new THREE.MeshBasicMaterial({
    wireframe: true,
    opacity: 0.3 + i * 0.1,
    transparent: true
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.z = -i * 20; // spread in depth
  mesh.rotation.x = Math.random() * Math.PI;
  mesh.rotation.y = Math.random() * Math.PI;

  scene.add(mesh);
  objects.push(mesh);
}

camera.position.z = 10;


// =======================
// MOUSE / TOUCH TRACKING
// =======================

let mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
});

window.addEventListener('touchmove', (e) => {
  mouse.x = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
});


// =======================
// SCROLL → CAMERA DEPTH
// =======================

let scrollTarget = 0;

window.addEventListener('scroll', () => {
  scrollTarget = window.scrollY * 0.02;
});


// =======================
// ANIMATION LOOP
// =======================

function animate() {
  requestAnimationFrame(animate);

  // CAMERA DEPTH MOVEMENT
  camera.position.z = 10 + scrollTarget;

  // CAMERA PARALLAX
  camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
  camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;

  camera.lookAt(0, 0, 0);

  // OBJECT MOTION
  objects.forEach((obj, i) => {
    obj.rotation.x += 0.002 + i * 0.001;
    obj.rotation.y += 0.003 + i * 0.001;
  });

  renderer.render(scene, camera);
}

animate();


// =======================
// RESPONSIVE
// =======================

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


// =======================
// ROOM SYSTEM
// =======================

const rooms = document.querySelectorAll('.room');
let currentRoom = 0;

function activateRoom(index) {
  rooms.forEach(r => r.classList.remove('active'));
  if (rooms[index - 1]) {
    rooms[index - 1].classList.add('active');
  }
}


// =======================
// SCROLL PROGRESSION
// =======================

window.addEventListener('scroll', () => {
  let index = Math.round(window.scrollY / window.innerHeight) + 1;

  if (index !== currentRoom) {
    currentRoom = index;
    activateRoom(index);
    updateClearance(index);
  }
});


// =======================
// CLEARANCE SYSTEM
// =======================

function updateClearance(level) {
  document.getElementById('clearance').innerText =
    "CLEARANCE: LEVEL " + level;
}


// =======================
// INTEL DECRYPTION
// =======================

const file = document.getElementById('file');

file.addEventListener('click', () => {
  let text = "ACCESSING FILE...\nDECRYPTING...\nMISSION DATA UNLOCKED";
  let i = 0;

  file.innerText = "";

  let interval = setInterval(() => {
    file.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
});


// =======================
// REAL PORTAL FEEL
// =======================

const portal = document.getElementById('portal');

portal.addEventListener('click', () => {

  // PULL CAMERA FORWARD FAST
  let start = camera.position.z;
  let target = start + 50;

  let duration = 800;
  let startTime = Date.now();

  function zoom() {
    let elapsed = Date.now() - startTime;
    let progress = elapsed / duration;

    if (progress < 1) {
      camera.position.z = start + (target - start) * progress;
      requestAnimationFrame(zoom);
    } else {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      });
    }
  }

  zoom();
});