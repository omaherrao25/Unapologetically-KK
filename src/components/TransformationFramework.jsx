import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    num: '1',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Awareness',
    desc: "Understand what's keeping you stuck",
  },
  {
    num: '2',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Healing',
    desc: 'Release emotional wounds & patterns',
  },
  {
    num: '3',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Boundaries',
    desc: 'Protect your energy without guilt',
  },
  {
    num: '4',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Confidence',
    desc: 'Rebuild self-worth & inner strength',
  },
  {
    num: '5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Peace',
    desc: 'Create fulfilling relationships & life',
  },
]

export default function TransformationFramework() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="about"
      style={{ background: '#FFFFFF', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow"
            style={{ marginBottom: 16 }}
          >
            The Transformation Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="section-heading"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: 16 }}
          >
            The Emotional Reclamation Method™
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.95rem',
              color: '#7D7D7D',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            A proven 5-step process to help you break free and create lasting change.
          </motion.p>
        </div>

        {/* Steps row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 0,
          position: 'relative',
        }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 * i + 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '0 12px',
              }}
            >
              {/* Connector line — appears between steps */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 40,
                  left: 'calc(50% + 42px)',
                  right: 'calc(-50% + 42px)',
                  height: 1,
                  background: 'linear-gradient(90deg, #DCC7A1, #EDE4D8)',
                  zIndex: 0,
                }} />
              )}

              {/* Circle icon */}
              <div className="step-circle" style={{ zIndex: 1, position: 'relative' }}>
                {step.icon}
                {/* Number badge */}
                <span style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#C5A26E',
                  color: '#fff',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: 8,
              }}>
                {step.title}
              </p>

              {/* Desc */}
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.78rem',
                color: '#7D7D7D',
                lineHeight: 1.55,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 580px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  )
}
