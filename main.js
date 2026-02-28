// 3d/test.js (or inside a <script> in 3d/index.html)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const obsidianTexture = textureLoader.load('blackglass.png');

const geometry = new THREE.PlaneGeometry(5, 5, 64, 64);
const material = new THREE.MeshStandardMaterial({
  map: obsidianTexture,
  roughness: 0.1,
  metalness: 0.5,
  transparent: true
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  plane.rotation.y += 0.002;
  plane.rotation.x += 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});