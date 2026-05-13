import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'I finally understand myself and my relationship patterns. I feel lighter, happier and my relationship has never been better.',
    name: 'Neha P.',
    location: 'Dubai, UAE',
    initials: 'NP',
    color: '#C8A96B',
  },
  {
    quote: 'Kanchan helped me set boundaries without guilt. I\'ve regained my confidence and peace. I feel like a completely new woman.',
    name: 'Priya S.',
    location: 'Bangalore, India',
    initials: 'PS',
    color: '#B78A8A',
  },
  {
    quote: 'I went from feeling invisible to feeling valued, loved and truly seen. This coaching changed my entire life.',
    name: 'Ayesha K.',
    location: 'London, UK',
    initials: 'AK',
    color: '#A8957A',
  },
  {
    quote: 'After years of anxiety and toxic relationships, I finally have the tools to create the love life I always dreamed of.',
    name: 'Meera T.',
    location: 'Singapore',
    initials: 'MT',
    color: '#9BA5B0',
  },
  {
    quote: 'Kanchan\'s method is unlike anything else. It goes deep, it heals, and it transforms. I\'m eternally grateful.',
    name: 'Sunita R.',
    location: 'Mumbai, India',
    initials: 'SR',
    color: '#C0967A',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)

  return (
    <section
      id="testimonials"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: '#F7F2EB' }}
    >
      <div className="orb orb-rose w-[500px] h-[500px] top-0 right-0 opacity-30" />
      <div className="orb orb-gold w-[400px] h-[400px] bottom-0 left-0 opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            Life-Changing Transformations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="section-heading text-4xl sm:text-5xl lg:text-6xl"
          >
            Real Women. Real Stories.{' '}
            <span className="italic gold-text">Real Results.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="divider-luxury mt-8"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.3 }}
              className="card-luxury p-8 relative overflow-hidden group"
            >
              {/* Subtle gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(200,169,107,0.04) 0%, rgba(183,138,138,0.04) 100%)' }} />

              {/* Quote mark */}
              <div className="quote-mark mb-4">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-base lg:text-lg text-charcoal leading-relaxed italic mb-8 relative z-10">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}BB)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-charcoal">– {t.name}</p>
                  <p className="font-sans text-xs text-charcoal-muted">{t.location}</p>
                </div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.3), transparent)' }} />
            </motion.div>
          ))}
        </div>

        {/* Remaining 2 testimonials in wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.7 }}
              className="card-luxury p-8 relative overflow-hidden group"
            >
              <div className="flex gap-6 items-start">
                <div>
                  <div className="quote-mark mb-3">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-serif text-base text-charcoal leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}BB)` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-charcoal">– {t.name}</p>
                      <p className="font-sans text-xs text-charcoal-muted">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-center"
        >
          <a href="#testimonials" className="btn-secondary">
            Read More Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
