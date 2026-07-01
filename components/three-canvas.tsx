"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);

  // Create particle coordinates
  const particleCount = 2000;
  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const orig = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Generate random spherical coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5 + Math.random() * 0.8;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return [pos, orig];
  }, []);

  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Smoothly track mouse coordinates
    const targetX = (state.pointer.x * state.viewport.width) / 2;
    const targetY = (state.pointer.y * state.viewport.height) / 2;
    mouse.current.x += (targetX - mouse.current.x) * 0.05;
    mouse.current.y += (targetY - mouse.current.y) * 0.05;

    const time = state.clock.getElapsedTime();
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const ox = originalPositions[idx];
      const oy = originalPositions[idx + 1];
      const oz = originalPositions[idx + 2];

      // Organic waves morphing coordinates
      const wave = Math.sin(ox * 1.5 + time) * 0.12 + Math.cos(oy * 1.5 + time * 1.2) * 0.12;
      
      // Calculate distance to pointer
      const dx = ox - mouse.current.x * 0.25;
      const dy = oy - mouse.current.y * 0.25;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const push = dist < 1.8 ? (1.8 - dist) * 0.2 : 0;

      positionsArray[idx] = ox + (ox / 3) * wave + dx * push;
      positionsArray[idx + 1] = oy + (oy / 3) * wave + dy * push;
      positionsArray[idx + 2] = oz + (oz / 3) * wave;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Smooth rotation
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = time * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8B5CF6"
        size={0.03}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-500 bg-background">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
