import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundBubbles() {
  const backBubbles = [
    { size: 400, top: '5%', left: '10%', delay: 0, animation: 'animate-float-slow' },
    { size: 300, top: '20%', left: '70%', delay: 2, animation: 'animate-float-medium' },
    { size: 500, top: '50%', left: '-10%', delay: 4, animation: 'animate-float-slow' },
    { size: 450, top: '150%', left: '60%', delay: 1, animation: 'animate-float-medium' },
    { size: 600, top: '250%', left: '20%', delay: 3, animation: 'animate-float-slow' },
  ]

  const frontBubbles = [
    { size: 150, top: '10%', left: '80%', delay: 5, animation: 'animate-float-medium' },
    { size: 100, top: '30%', left: '40%', delay: 1, animation: 'animate-float-slow' },
    { size: 180, top: '70%', left: '90%', delay: 2, animation: 'animate-float-medium' },
    { size: 120, top: '120%', left: '5%', delay: 4, animation: 'animate-float-slow' },
  ]

  const orbs = [
    { size: 800, top: '-10%', left: '30%', color: '#F6E7E7' },
    { size: 1000, top: '40%', left: '-20%', color: '#F3E7E1' },
    { size: 900, top: '120%', left: '50%', color: '#F6E7E7' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      
      {/* 1. Back Layer: Orbs (Deepest) */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="glow-orb"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            zIndex: 0,
          }}
        />
      ))}

      {/* 2. Middle Layer: Back Bubbles */}
      {backBubbles.map((bubble, i) => (
        <motion.div
          key={`back-bubble-${i}`}
          className={`glass-bubble ${bubble.animation}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            zIndex: 1,
            filter: 'blur(12px)',
          }}
        />
      ))}

      {/* 3. Top Layer: Front Bubbles (Sharpest) */}
      {frontBubbles.map((bubble, i) => (
        <motion.div
          key={`front-bubble-${i}`}
          className={`glass-bubble ${bubble.animation}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.5, delay: bubble.delay * 0.2 }}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            zIndex: 100, // Float in front of content
            filter: 'blur(2px)',
            border: '1.5px solid rgba(255, 255, 255, 0.7)',
          }}
        />
      ))}
    </div>
  )
}
