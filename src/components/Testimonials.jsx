import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'I finally understand myself and my relationship patterns. I feel lighter, happier and my relationship has never been better.',
    name: 'Neha P.',
    location: 'Dubai, UAE',
    initials: 'NP',
    bg: '#DCC7A1',
  },
  {
    quote: "Kanchan helped me set boundaries without guilt. I've regained my confidence and peace.",
    name: 'Priya S.',
    location: 'Bangalore, India',
    initials: 'PS',
    bg: '#C4A882',
  },
  {
    quote: "I went from feeling invisible to feeling valued, loved and truly seen.",
    name: 'Ayesha K.',
    location: 'London, UK',
    initials: 'AK',
    bg: '#B89870',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="testimonials"
      style={{ background: '#FAF7F3', padding: '96px 0' }}
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
            Life-Changing Transformations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="section-heading"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Real Women. Real Stories. Real Results.
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 48,
        }}
          className="testimonial-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 * i + 0.2 }}
              className="card-clean"
              style={{ padding: '36px 32px' }}
            >
              {/* Quote mark */}
              <span className="quote-open">"</span>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="#C5A26E" color="#C5A26E" />
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.92rem',
                color: '#3D3D3D',
                lineHeight: 1.7,
                marginBottom: 28,
              }}>
                {t.quote}
              </p>

              {/* Author row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: t.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    marginBottom: 2,
                  }}>
                    — {t.name}
                  </p>
                  <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.75rem',
                    color: '#7D7D7D',
                  }}>
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: 'center' }}
        >
          <a href="#testimonials" className="btn-primary">
            Read More Success Stories
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
