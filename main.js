// LOADER
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
}, 2000);

// GATE HOLD (DESKTOP + MOBILE)
let gate = document.getElementById('gate');
let holdTimer;

function startHold() {
  holdTimer = setTimeout(() => {
    gate.style.display = 'none';
    document.getElementById('app').classList.remove('hidden');

    // ENABLE SCROLL AFTER AUTH
    document.body.style.overflowY = 'auto';
  }, 1200);
}

function cancelHold() {
  clearTimeout(holdTimer);
}

// Desktop
gate.addEventListener('mousedown', startHold);
gate.addEventListener('mouseup', cancelHold);

// Mobile
gate.addEventListener('touchstart', startHold);
gate.addEventListener('touchend', cancelHold);

// Prevent long-press menu
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

// RESPONSIVE FIX
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// SCROLL TIME DISTORTION
window.addEventListener('scroll', () => {
  let speed = window.scrollY * 0.0005;
  torus.rotation.x += speed;
});

// PORTAL EFFECT
const portal = document.getElementById('portal');

portal.addEventListener('click', () => {
  document.body.style.transition = 'transform 0.8s ease';
  document.body.style.transform = 'scale(0.8) rotateX(20deg)';

  setTimeout(() => {
    document.body.style.transform = 'none';
  }, 800);
});