import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Relationship Coaching', href: '#coaching' },
  { label: 'About KK', href: '#about' },
  { label: 'Kara Foundation', href: '#kara' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'navbar-scrolled py-3' : 'bg-white py-4'
        }`}
        style={{ borderBottom: '1px solid #EDE4D8' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Brand — text only, no icon */}
          <a href="#home" style={{ textDecoration: 'none' }}>
            <div>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1A1A1A',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                lineHeight: 1.2,
              }}>
                Kanchan Kulkarni
              </p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.65rem',
                fontWeight: 400,
                color: '#7D7D7D',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                Relationship Expert
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="btn-primary hidden sm:inline-flex" style={{ padding: '10px 22px', fontSize: '0.75rem' }}>
              Book a Call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
              style={{ color: '#1A1A1A' }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: scrolled ? 60 : 72,
              left: 0, right: 0,
              background: '#FFFFFF',
              borderBottom: '1px solid #EDE4D8',
              zIndex: 40,
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                    padding: '12px 0',
                    borderBottom: '1px solid #F3EAE0',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>
                Book a Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
