"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CargoCluster() {
  const truckRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!truckRef.current) return;

    const t = clock.getElapsedTime();

    truckRef.current.position.y =
      -0.25 + Math.sin(t * 1.2) * 0.035;

    truckRef.current.rotation.y =
      -0.35 + Math.sin(t * 0.35) * 0.025;
  });

  const wheelPositions = [
    [-1.65, -0.7, 0.78],
    [-0.1, -0.7, 0.78],
    [1.35, -0.7, 0.78],

    [-1.65, -0.7, -0.78],
    [-0.1, -0.7, -0.78],
    [1.35, -0.7, -0.78],
  ];

  return (
    <group
      ref={truckRef}
      position={[0, -0.25, 0]}
      rotation={[0.06, -0.35, 0]}
      scale={1.25}
    >

      {/* =================================================
          CHASSIS
      ================================================== */}

      <mesh position={[0, -0.38, 0]}>
        <boxGeometry args={[5.2, 0.25, 1.55]} />

        <meshStandardMaterial
          color="#151515"
          roughness={0.65}
          metalness={0.7}
        />
      </mesh>

      {/* =================================================
          MAIN CARGO CONTAINER
      ================================================== */}

      <mesh position={[-0.75, 0.65, 0]}>
        <boxGeometry args={[3.65, 2.25, 1.5]} />

        <meshStandardMaterial
          color="#171717"
          roughness={0.42}
          metalness={0.75}
        />
      </mesh>

      {/* Container orange edge */}

      <mesh position={[-0.75, 0.65, 0.76]}>
        <boxGeometry args={[3.7, 2.3, 0.035]} />

        <meshStandardMaterial
          color="#FF6B2C"
          emissive="#FF6B2C"
          emissiveIntensity={0.25}
          roughness={0.35}
        />
      </mesh>

      {/* =================================================
          CONTAINER VERTICAL RIBS
      ================================================== */}

      {[-2.25, -1.5, -0.75, 0, 0.75].map(
        (x, index) => (
          <mesh
            key={index}
            position={[x, 0.65, 0.79]}
          >
            <boxGeometry args={[0.035, 2.15, 0.04]} />

            <meshStandardMaterial
              color="#4a4a4a"
              metalness={0.8}
              roughness={0.35}
            />
          </mesh>
        )
      )}

      {/* =================================================
          CAB
      ================================================== */}

      <mesh position={[1.85, 0.35, 0]}>
        <boxGeometry args={[1.55, 1.65, 1.5]} />

        <meshStandardMaterial
          color="#FF6B2C"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Cabin roof */}

      <mesh position={[1.85, 1.2, 0]}>
        <boxGeometry args={[1.65, 0.18, 1.58]} />

        <meshStandardMaterial
          color="#111111"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* =================================================
          WINDSHIELD
      ================================================== */}

      <mesh position={[2.64, 0.62, 0]}>
        <boxGeometry args={[0.04, 0.7, 1.15]} />

        <meshStandardMaterial
          color="#050505"
          roughness={0.08}
          metalness={0.95}
        />
      </mesh>

      {/* Windshield orange reflection */}

      <mesh position={[2.665, 0.62, 0]}>
        <boxGeometry args={[0.015, 0.55, 0.75]} />

        <meshStandardMaterial
          color="#FF6B2C"
          transparent
          opacity={0.25}
          emissive="#FF6B2C"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* =================================================
          FRONT BUMPER
      ================================================== */}

      <mesh position={[2.7, -0.18, 0]}>
        <boxGeometry args={[0.2, 0.35, 1.65]} />

        <meshStandardMaterial
          color="#0b0b0b"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* =================================================
          HEADLIGHTS
      ================================================== */}

      {[-0.48, 0.48].map((z, index) => (
        <mesh
          key={index}
          position={[2.81, 0.05, z]}
        >
          <boxGeometry args={[0.04, 0.22, 0.22]} />

          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={4}
          />
        </mesh>
      ))}

      {/* =================================================
          WHEELS
      ================================================== */}

      {wheelPositions.map(
        ([x, y, z], index) => (
          <group
            key={index}
            position={[x, y, z]}
            rotation={[Math.PI / 2, 0, 0]}
          >

            {/* Tire */}

            <mesh>
              <cylinderGeometry
                args={[0.48, 0.48, 0.3, 24]}
              />

              <meshStandardMaterial
                color="#080808"
                roughness={0.8}
                metalness={0.1}
              />
            </mesh>

            {/* Rim */}

            <mesh position={[0, 0.16, 0]}>
              <cylinderGeometry
                args={[0.24, 0.24, 0.32, 20]}
              />

              <meshStandardMaterial
                color="#777777"
                roughness={0.3}
                metalness={0.9}
              />
            </mesh>

            {/* Hub */}

            <mesh position={[0, 0.33, 0]}>
              <cylinderGeometry
                args={[0.08, 0.08, 0.05, 16]}
              />

              <meshStandardMaterial
                color="#FF6B2C"
                emissive="#FF6B2C"
                emissiveIntensity={0.4}
              />
            </mesh>

          </group>
        )
      )}

      {/* =================================================
          UNDERGLOW
      ================================================== */}

      <pointLight
        position={[0, -0.8, 0]}
        color="#FF6B2C"
        intensity={1.4}
        distance={4}
      />

    </group>
  );
}