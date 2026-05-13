import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Coaching', href: '#coaching' },
    { name: 'About KK', href: '#about' },
    { name: 'Kara Foundation', href: '#kara' },
    { name: 'Success Stories', href: '#testimonials' },
  ]

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className={`glass-navbar rounded-[32px] px-8 py-4 flex items-center justify-between shadow-lg border border-white/20`}>
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E89AAA" strokeWidth="1.5">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-tight">Unapologetically KK</h1>
            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold opacity-70">Relationship Expert</p>
          </div>
        </div>

        {/* Center: Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-main hover:text-pink-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-4">
          <button className="btn-primary text-sm py-2.5 px-6">
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  )
}
