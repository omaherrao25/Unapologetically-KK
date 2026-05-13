import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section
      id="home"
      style={{ background: '#FFFFFF', paddingTop: 80 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 80px)', gap: 0 }}
          className="hero-grid"
        >
          {/* ── LEFT: Content ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: 48,
            paddingBottom: 48,
            paddingRight: 48,
          }}
            className="hero-left"
          >
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.1)}
              className="eyebrow"
              style={{ marginBottom: 20 }}
            >
              You've held everything together.
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.25)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.18,
                color: '#1A1A1A',
                marginBottom: 24,
              }}
            >
              Now it's time to{' '}
              <span style={{ fontStyle: 'italic' }}>reclaim yourself.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              {...fadeUp(0.4)}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: 400,
                color: '#555555',
                lineHeight: 1.7,
                maxWidth: 420,
                marginBottom: 36,
              }}
            >
              Helping women break free from relationship burnout, rebuild
              self-worth, and create peaceful, fulfilling relationships.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="#contact" className="btn-primary">
                Book Your Free Strategy Call
              </a>
              <a href="#coaching" className="btn-outline">
                Learn How I Can Help
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.65)} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Avatars */}
              <div style={{ display: 'flex' }}>
                {['N', 'P', 'A', 'S'].map((init, i) => (
                  <div
                    key={i}
                    className="avatar-ph"
                    style={{
                      marginLeft: i === 0 ? 0 : -10,
                      zIndex: 4 - i,
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#C5A26E" color="#C5A26E" />
                  ))}
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    marginLeft: 4,
                  }}>4.9</span>
                </div>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.75rem',
                  color: '#7D7D7D',
                }}>
                  Trusted by 1,000+ Women Worldwide
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo area ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: 'relative', overflow: 'hidden' }}
            className="hero-right"
          >
            {/* Photo placeholder — full height */}
            <div
              className="photo-placeholder"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 480,
                borderRadius: 0,
                border: 'none',
                borderLeft: '1px dashed #C5A26E',
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#DCC7A1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A5E3A" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', color: '#A08060', letterSpacing: '0.1em' }}>
                Photo of Kanchan Kulkarni
              </p>
            </div>

            {/* Floating quote card */}
            <div
              className="quote-card"
              style={{
                bottom: 40,
                right: 32,
                position: 'absolute',
              }}
            >
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#C5A26E',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                ❝
              </p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: '#1A1A1A',
                lineHeight: 1.55,
              }}>
                You deserve love, peace and a life that feels like you again.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { padding-right: 0 !important; padding-top: 40px !important; }
          .hero-right { min-height: 360px !important; border-left: none !important; }
          .quote-card { right: 16px !important; bottom: 16px !important; }
        }
      `}</style>
    </section>
  )
}
