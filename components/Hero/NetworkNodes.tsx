"use client";

import React from "react";

export default function NetworkNodes() {
  const nodes = [
    [-2.8, 1.7, -0.5],
    [-1.8, 2.1, -0.2],
    [0.4, 2.3, -0.8],
    [2.6, 1.6, -0.4],
    [3.2, 0.1, -0.5],
    [2.2, -0.7, -0.3],
  ];

  return (
    <group>
      {nodes.map(([x, y, z], index) => (
        <mesh
          key={index}
          position={[x, y, z]}
        >
          <sphereGeometry args={[0.035, 12, 12]} />

          <meshBasicMaterial
            color="#FF6B2C"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}