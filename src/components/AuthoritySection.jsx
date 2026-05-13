import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const credentials = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    stat: '25+',
    label: 'Years of Experience',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        <path d="M19 8l1.5-1.5M22 11h-2M19 14l1.5 1.5"/>
      </svg>
    ),
    stat: 'NLP, Hypnosis &',
    label: 'Relationship Expert',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/>
        <path d="M4 6h2"/>
        <path d="M4 10h2"/>
        <path d="M4 14h2"/>
        <path d="M4 18h2"/>
        <path d="M8 6h8"/>
        <path d="M8 10h8"/>
        <path d="M8 14h5"/>
      </svg>
    ),
    stat: 'Featured in',
    label: 'Leading Publications',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    stat: 'Top Relationship',
    label: 'Podcast Host',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C5A26E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    stat: 'Kara Foundation',
    label: 'Making an Impact',
  },
]

export default function AuthoritySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="kara"
      style={{ background: '#FFFFFF', padding: '80px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          Expertise You Can Trust
        </motion.p>

        {/* 5 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 0,
          borderTop: '1px solid #EDE4D8',
          borderLeft: '1px solid #EDE4D8',
        }}
          className="authority-grid"
        >
          {credentials.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
              style={{
                padding: '40px 24px',
                textAlign: 'center',
                borderRight: '1px solid #EDE4D8',
                borderBottom: '1px solid #EDE4D8',
                transition: 'background 0.3s ease',
              }}
              className="authority-cell"
            >
              {/* Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}>
                {c.icon}
              </div>

              {/* Stat */}
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#C5A26E',
                marginBottom: 4,
                lineHeight: 1.3,
              }}>
                {c.stat}
              </p>

              {/* Label */}
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.8rem',
                color: '#555555',
                lineHeight: 1.5,
              }}>
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .authority-cell:hover { background: #FAF7F3; }
        @media (max-width: 900px) {
          .authority-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .authority-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
