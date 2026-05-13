import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: '#F3EAE0', overflow: 'hidden' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 480,
          gap: 0,
        }}
          className="cta-grid"
        >

          {/* LEFT — Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div
              className="photo-placeholder"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 400,
                border: 'none',
                borderRight: '1px dashed #C5A26E',
                borderRadius: 0,
                background: '#EDE0D0',
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
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '64px 56px',
            }}
            className="cta-text"
          >
            <h2
              className="section-heading"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              You don't have to stay in{' '}
              <span style={{ fontStyle: 'italic' }}>survival mode.</span>
            </h2>

            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1rem',
              color: '#555555',
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
              You deserve a life filled with love, peace and joy.
            </p>

            <div>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Your Free Strategy Call
              </a>
            </div>

            {/* Cursive sign-off */}
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: '#A08060',
              marginTop: 36,
            }}>
              Let's create your next chapter together. ♡
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .cta-text { padding: 48px 24px !important; }
          .cta-grid > div:first-child { min-height: 280px !important; border-right: none !important; border-bottom: 1px dashed #C5A26E !important; }
        }
      `}</style>
    </section>
  )
}
