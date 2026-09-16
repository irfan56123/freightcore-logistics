"use client";

import * as THREE from "three";
import { Line } from "@react-three/drei";

type RouteLinesProps = {
  points?: [number, number, number][];
};

export default function RouteLines({
  points = [
    [-2.8, 0.2, 0],
    [-1.4, 0.8, 0],
    [0, 0.3, 0],
    [1.5, 1, 0],
    [2.8, 0.5, 0],
  ],
}: RouteLinesProps) {
  const vectorPoints = points.map(
    ([x, y, z]) => new THREE.Vector3(x, y, z)
  );

  return (
    <Line
      points={vectorPoints}
      color="#FF6B2C"
      lineWidth={1}
      transparent
      opacity={0.6}
    />
  );
}