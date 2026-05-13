import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram, Facebook, Youtube, Music } from 'lucide-react'

const quickLinks = ['Home', 'Relationship Coaching', 'About KK', 'Kara Foundation']
const resources  = ['Blog', 'Podcast', 'Testimonials', 'Contact']
const legal      = ['Privacy Policy', 'Terms of Use']

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Youtube,   href: '#', label: 'YouTube' },
  { Icon: Music,     href: '#', label: 'Podcast' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone]   = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) { setDone(true); setEmail('') }
  }

  return (
    <footer
      ref={ref}
      style={{ background: '#FAF7F3', borderTop: '1px solid #EDE4D8' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >

          {/* Brand column */}
          <div>
            {/* Name only, no icon */}
            <div style={{ marginBottom: 16 }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1A1A1A',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                lineHeight: 1.2,
                marginBottom: 4,
              }}>
                Kanchan Kulkarni
              </p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.65rem',
                color: '#7D7D7D',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                Relationship Expert
              </p>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1px solid #DCC7A1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7D7D7D',
                    transition: 'color 0.25s, border-color 0.25s, background 0.25s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#C5A26E'
                    e.currentTarget.style.borderColor = '#C5A26E'
                    e.currentTarget.style.background = '#FBF6EF'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#7D7D7D'
                    e.currentTarget.style.borderColor = '#DCC7A1'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              Quick Links
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(l => (
                <li key={l}>
                  <a href="#" style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.85rem',
                    color: '#555555',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C5A26E'}
                    onMouseLeave={e => e.currentTarget.style.color = '#555555'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              Resources
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {resources.map(l => (
                <li key={l}>
                  <a href="#" style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.85rem',
                    color: '#555555',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C5A26E'}
                    onMouseLeave={e => e.currentTarget.style.color = '#555555'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              Legal
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {legal.map(l => (
                <li key={l}>
                  <a href="#" style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.85rem',
                    color: '#555555',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C5A26E'}
                    onMouseLeave={e => e.currentTarget.style.color = '#555555'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>
              Stay Connected
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.82rem',
              color: '#7D7D7D',
              lineHeight: 1.6,
              marginBottom: 20,
            }}>
              Join my newsletter for insights, tips and updates.
            </p>
            {done ? (
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: '#C5A26E' }}>
                ✓ You're on the list!
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: '10px 16px',
                    borderRadius: 50,
                    border: '1px solid #DCC7A1',
                    background: '#FFFFFF',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.82rem',
                    color: '#1A1A1A',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#C5A26E',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  aria-label="Subscribe"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: 1, background: '#EDE4D8', marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.78rem',
            color: '#7D7D7D',
            textAlign: 'center',
          }}>
            © {new Date().getFullYear()} Unapologetically KK. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  )
}
