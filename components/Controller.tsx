'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function Controller() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x -= delta * 0.25
    meshRef.current.rotation.y -= delta * 0.25
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <torusGeometry args={[0.5, 0.2, 16, 100]} />
      <meshStandardMaterial color="#ff00ff" />
    </mesh>
  )
}

