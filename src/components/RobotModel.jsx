import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function RobotModel({ fileName = "robot.glb" }) {
  const mountRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 460;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 15, 40);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.target.set(0, 8, 0);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.2, 100);
    pointLight.position.set(10, 20, 15);
    scene.add(pointLight);

    const dirLightPurple = new THREE.DirectionalLight(0xa855f7, 2.5);
    dirLightPurple.position.set(-10, 15, 10);
    scene.add(dirLightPurple);

    const bottomGlowLight = new THREE.PointLight(0x7c3aed, 2, 50);
    bottomGlowLight.position.set(0, -5, 5);
    scene.add(bottomGlowLight);

    // 4. Texture Loader & Material Setup
    const textureLoader = new THREE.TextureLoader();
    let upperTexture = null;
    try {
      upperTexture = textureLoader.load("/textures/upper_d.png");
      upperTexture.flipY = false;
      upperTexture.colorSpace = THREE.SRGBColorSpace;
    } catch {
      // Texture optional fallback
    }

    // 5. GLTF Loader
    const loader = new GLTFLoader();
    let modelRoot = null;
    let animationFrameId = null;

    loader.load(
      `/${fileName}`,
      (gltf) => {
        modelRoot = gltf.scene;

        modelRoot.traverse((child) => {
          if (child.isMesh && child.material) {
            if (upperTexture && (!child.material.map || child.material.color.r === 1)) {
              child.material = new THREE.MeshStandardMaterial({
                map: upperTexture,
                roughness: 0.4,
                metalness: 0.8,
              });
              child.material.needsUpdate = true;
            }
          }
        });

        // Center model
        const box = new THREE.Box3().setFromObject(modelRoot);
        const center = box.getCenter(new THREE.Vector3());
        modelRoot.position.sub(center);
        modelRoot.position.y += 8;

        modelRoot.scale.set(1.0, 1.0, 1.0);
        scene.add(modelRoot);
        setIsLoaded(true);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const progress = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(progress);
        }
      },
      (error) => {
        console.warn("Failed to load GLTF model:", error);
        setLoadError(true);
      }
    );

    // 6. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      if (modelRoot) {
        modelRoot.position.y = 8 + Math.sin(elapsedTime * 1.5) * 0.4;
        modelRoot.rotation.y = elapsedTime * 0.25;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [fileName]);

  return (
    <div className="w-full h-[420px] md:h-[480px] relative flex items-center justify-center select-none">
      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Loading Progress Indicator */}
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-[#0b0b0f]/60 backdrop-blur-xs rounded-2xl">
          <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-400 rounded-full animate-spin mb-4" />
          <p className="text-xs text-purple-300 font-medium tracking-wider uppercase">
            Loading 3D Model {loadingProgress > 0 ? `${loadingProgress}%` : "..."}
          </p>
          <div className="w-48 h-1.5 bg-neutral-900 rounded-full mt-3 overflow-hidden border border-gray-800">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
              style={{ width: `${Math.max(loadingProgress, 10)}%` }}
            />
          </div>
        </div>
      )}

      {/* Fallback Display if 3D fails */}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#131318]/80 border border-gray-900 rounded-2xl">
          <span className="text-4xl mb-3">🤖</span>
          <p className="text-sm font-semibold text-white">Robotics Simulation Hub</p>
          <p className="text-xs text-gray-500 mt-1 max-w-xs">
            Interactive 3D model visualization is loading or ready to view.
          </p>
        </div>
      )}
    </div>
  );
}
