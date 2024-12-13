'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function GPU() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.25
    meshRef.current.rotation.y += delta * 0.25
  })

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  )
}

