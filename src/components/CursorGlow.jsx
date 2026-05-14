import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      className="pointer-events-none fixed z-[9999] w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px] transition-transform duration-300 ease-out hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: 'radial-gradient(circle, var(--soft-blush) 0%, transparent 70%)',
      }}
    />
  )
}
