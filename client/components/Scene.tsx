"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";

export default function Scene({ children }: { children?: React.ReactNode }) {
  return (
    <Canvas
      className="absolute inset-0 pointer-events-none -z-10"
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {children}
      <Environment preset="city" />
      <Preload all />
    </Canvas>
  );
}
