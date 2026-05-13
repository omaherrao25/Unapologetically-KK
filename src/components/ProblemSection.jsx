import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Emotionally exhausted',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: 'Always giving, never receiving',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
    label: 'Stuck in the same patterns',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4"/>
        <path d="M12 16h.01"/>
      </svg>
    ),
    label: 'Anxious, overwhelmed & disconnected',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        <line x1="12" y1="12" x2="12" y2="20" strokeDasharray="2 2"/>
      </svg>
    ),
    label: 'Lost touch with yourself',
  },
]

export default function ProblemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section
      id="coaching"
      style={{ background: '#FAF7F3', padding: '96px 0 80px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow"
            style={{ marginBottom: 16 }}
          >
            Does This Feel Like You?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="section-heading"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', maxWidth: 600, margin: '0 auto 16px' }}
          >
            You look successful on the outside,
            <br />
            but inside you feel…
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 20,
        }}
          className="problem-grid"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
              className="card-clean"
              style={{
                padding: '32px 20px',
                textAlign: 'center',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: '#FBF6EF',
                border: '1px solid #EDE4D8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                {p.icon}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 400,
                color: '#3D3D3D',
                lineHeight: 1.5,
              }}>
                {p.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: 48,
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.9rem',
            color: '#7D7D7D',
          }}
        >
          You're not alone. And you don't have to keep living this way.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .problem-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .problem-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
