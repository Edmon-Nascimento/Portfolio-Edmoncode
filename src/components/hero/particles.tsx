'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 1000

function createPositions(count: number) {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 20
    arr[i * 3 + 1] = (Math.random() - 0.5) * 20
    arr[i * 3 + 2] = (Math.random() - 0.5) * 20
  }
  return arr
}

const positions = createPositions(PARTICLE_COUNT)

export default function Particles() {
  const points = useRef<THREE.Points>(null!)

  

  useFrame(() => {
    if (!points.current) return
    points.current.rotation.y += 0.0008
    points.current.rotation.x += 0.0003
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial size={0.03} color="#ffffff" sizeAttenuation={true} depthWrite={false} />
    </points>
  )
}