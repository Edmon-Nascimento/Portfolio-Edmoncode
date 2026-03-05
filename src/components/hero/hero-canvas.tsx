'use client'

import { Canvas } from '@react-three/fiber'
import Particles from './particles'

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  )
}