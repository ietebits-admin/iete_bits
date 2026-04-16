'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      core: THREE.Mesh,
      wire: THREE.Mesh,
      particles: THREE.Points;

    let animationId: number;
    const mouse = { x: 0, y: 0 };

    function init3D() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 7;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      canvasRef.current?.appendChild(renderer.domElement);

      const geo = new THREE.BufferGeometry();
      const count = 4000;
      const pos = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
        pos[i] = (Math.random() - 0.5) * 40;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

      particles = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          size: 0.015,
          color: 0xffffff,
          transparent: true,
          opacity: 0.4,
        })
      );

      scene.add(particles);

      core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.2, 1),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 1,
          roughness: 0.05,
          emissive: 0xffffff,
          emissiveIntensity: 0.3,
        })
      );

      wire = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.6, 1),
        new THREE.MeshBasicMaterial({
          wireframe: true,
          opacity: 0.1,
          transparent: true,
        })
      );

      scene.add(core, wire);

      const light = new THREE.PointLight(0xffffff, 70);
      light.position.set(5, 5, 5);

      scene.add(light, new THREE.AmbientLight(0xffffff, 0.2));

      window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
      });

      function animate() {
        animationId = requestAnimationFrame(animate);

        const t = Date.now() * 0.001;

        core.rotation.x += 0.006;
        core.rotation.y += 0.01;

        wire.rotation.x -= 0.004;
        wire.rotation.y -= 0.006;

        core.position.y = Math.sin(t) * 0.25;
        wire.position.y = core.position.y;

        particles.rotation.y += 0.0004;

        camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05;
        camera.position.y += (-mouse.y * 0.6 - camera.position.y) * 0.05;

        renderer.render(scene, camera);
      }

      animate();
    }

    init3D();

    return () => {
      cancelAnimationFrame(animationId);
      canvasRef.current?.replaceChildren();
    };
  }, []);

  return <div ref={canvasRef} className="fixed inset-0 z-0" />;
}


