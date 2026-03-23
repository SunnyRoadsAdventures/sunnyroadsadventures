// =======================
// THREE.JS HOLOGRAPHIC SYSTEM
// =======================

const scene = new THREE.Scene();

// FOG = depth realism
scene.fog = new THREE.Fog(0x000000, 50, 200);

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

// LIGHT (cursor will control this)
const light = new THREE.PointLight(0xffffff, 2, 300);
scene.add(light);

// OBJECTS WITH GLOW FEEL
const objects = [];

for (let i = 0; i < 4; i++) {

  const geometry = new THREE.TorusKnotGeometry(8, 2, 150, 20);

  const material = new THREE.MeshStandardMaterial({
    color: 0xaaaaaa,
    emissive: 0xffffff,
    emissiveIntensity: 0.2,
    wireframe: true
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.z = -i * 80;
  mesh.rotation.x = Math.random();
  mesh.rotation.y = Math.random();

  scene.add(mesh);
  objects.push(mesh);
}

camera.position.z = 60;


// =======================
// CURSOR = SURVEILLANCE LIGHT
// =======================

let mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 20;
  mouse.y = -(e.clientY / window.innerHeight - 0.5) * 20;
});

window.addEventListener('touchmove', (e) => {
  mouse.x = (e.touches[0].clientX / window.innerWidth - 0.5) * 20;
  mouse.y = -(e.touches[0].clientY / window.innerHeight - 0.5) * 20;
});


// =======================
// SCROLL DEPTH
// =======================

let scrollTarget = 0;

window.addEventListener('scroll', () => {
  scrollTarget = window.scrollY * 0.05;
});


// =======================
// ANIMATION LOOP
// =======================

function animate() {
  requestAnimationFrame(animate);

  // CAMERA MOVEMENT
  camera.position.z = 60 + scrollTarget;

  // LIGHT follows cursor (this is the magic)
  light.position.x += (mouse.x - light.position.x) * 0.1;
  light.position.y += (mouse.y - light.position.y) * 0.1;
  light.position.z = camera.position.z - 20;

  // OBJECT MOTION
  objects.forEach((obj, i) => {
    obj.rotation.x += 0.002 + i * 0.001;
    obj.rotation.y += 0.003 + i * 0.001;
  });

  renderer.render(scene, camera);
}

animate();


// =======================
// RESIZE
// =======================

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});