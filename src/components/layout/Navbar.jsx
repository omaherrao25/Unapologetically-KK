import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../ui/Button'
import { CALENDLY_URL, SITE_NAME, SITE_TAGLINE } from '../../constants'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Coaching', href: '#process' },
  { label: 'About', href: '#why-me' },
  { label: 'Foundation', href: '#foundation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-bronze/15 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif tracking-widest text-slate text-sm font-light">
            {SITE_NAME.toUpperCase()}
          </span>
          <span className="font-sans text-tag uppercase tracking-widest text-bronze">
            {SITE_TAGLINE}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase text-slate hover:text-bronze transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button variant="solid" size="sm" href={CALENDLY_URL}>
            Book a Free Call
          </Button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-px bg-slate transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-slate transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-slate transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-ivory border-t border-bronze/15 px-6 py-5 flex flex-col gap-5 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-slate hover:text-bronze transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="solid" size="sm" href={CALENDLY_URL}>
              Book a Free Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
