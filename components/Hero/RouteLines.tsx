"use client";

import React from "react";
import * as THREE from "three";

export default function RouteLines() {
  const points = [
    new THREE.Vector3(-2, -1, 0),
    new THREE.Vector3(-1, 2, 1),
    new THREE.Vector3(2, 1, -1),
    new THREE.Vector3(1, -2, 0),
    new THREE.Vector3(-2, -1, 0),
  ];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#FF6B2C" linewidth={1} opacity={0.6} transparent />
    </line>
  );
}
