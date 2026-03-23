// LOADER
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
}, 2000);

// GATE HOLD INTERACTION
let gate = document.getElementById('gate');
let holdTimer;

gate.addEventListener('mousedown', () => {
  holdTimer = setTimeout(() => {
    gate.style.display = 'none';
    document.getElementById('app').classList.remove('hidden');
  }, 1500);
});

gate.addEventListener('mouseup', () => {
  clearTimeout(holdTimer);
});

// THREE.JS BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg')
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

// SCROLL TIME DISTORTION
window.addEventListener('scroll', () => {
  let speed = window.scrollY * 0.0005;
  torus.rotation.x += speed;
});

// PORTAL EFFECT
const portal = document.getElementById('portal');

portal.addEventListener('click', () => {
  document.body.style.transform = 'scale(0.8) rotateX(20deg)';
  document.body.style.transition = 'transform 0.8s ease';

  setTimeout(() => {
    document.body.style.transform = 'none';
  }, 800);
});