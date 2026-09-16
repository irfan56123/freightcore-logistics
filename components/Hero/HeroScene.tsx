"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import CargoCluster from "./CargoCluster";
import NetworkNodes from "./NetworkNodes";

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 1.3, 7],
        fov: 42,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* =================================================
          LIGHTING
      ================================================== */}

      <ambientLight intensity={0.45} />

      <directionalLight
        position={[5, 8, 6]}
        intensity={2}
      />

      <directionalLight
        position={[-5, 3, 4]}
        intensity={1.2}
        color="#FF6B2C"
      />

      <pointLight
        position={[3, 2, 2]}
        intensity={3}
        distance={8}
        color="#FF6B2C"
      />

      {/* Environment */}

      <Environment preset="city" />

      {/* =================================================
          TRUCK
      ================================================== */}

      <CargoCluster />

      {/* Small network particles */}

      <NetworkNodes />

      {/* Ground shadow */}

      <ContactShadows
        position={[0, -1.25, 0]}
        opacity={0.45}
        scale={8}
        blur={2.5}
        far={4}
      />
    </Canvas>
  );
}