import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const credentials = [
  {
    icon: '⏳',
    stat: '25+',
    label: 'Years of Experience',
    desc: 'Decades of deep expertise in relationships and human behaviour.',
  },
  {
    icon: '🧠',
    stat: 'NLP & Hypnosis',
    label: 'Certified Expert',
    desc: 'Advanced tools to rewire patterns at the subconscious level.',
  },
  {
    icon: '📰',
    stat: 'Featured In',
    label: 'Leading Publications',
    desc: 'Recognised by top media outlets for transformational work.',
  },
  {
    icon: '🎙',
    stat: 'Top Rated',
    label: 'Relationship Podcast Host',
    desc: 'Millions of listeners across South Asia and globally.',
  },
  {
    icon: '🌸',
    stat: 'Kara Foundation',
    label: 'Making an Impact',
    desc: 'Empowering underprivileged women through education and support.',
  },
]

export default function AuthoritySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="kara"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EFE7DD 0%, #F7F2EB 100%)' }}
    >
      <div className="orb orb-gold w-[500px] h-[500px] top-0 right-[-100px] opacity-30" />
      <div className="orb orb-rose w-[400px] h-[400px] bottom-0 left-[-80px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            Expertise You Can Trust
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="section-heading text-4xl sm:text-5xl lg:text-6xl"
          >
            Decades of Wisdom.{' '}
            <span className="italic">A Legacy of Healing.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="divider-luxury mt-8"
          />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {credentials.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 * i + 0.3 }}
              className="group relative text-center p-7 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-400 hover:shadow-luxury bg-white/60 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {c.icon}
              </div>

              {/* Stat */}
              <p className="font-serif text-2xl font-bold gold-text mb-1">
                {c.stat}
              </p>

              {/* Label */}
              <p className="font-sans text-sm font-semibold text-charcoal mb-3">
                {c.label}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mx-auto mb-3 group-hover:w-14 group-hover:bg-gold/60 transition-all duration-400" />

              {/* Description */}
              <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(200,169,107,0.12) 0%, rgba(183,138,138,0.08) 100%)',
            border: '1px solid rgba(200,169,107,0.2)',
          }}
        >
          <div className="orb orb-gold w-[300px] h-[300px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-charcoal leading-relaxed relative z-10">
            "My mission is simple: to help every woman remember who she truly is,
            and step into the love and peace she deserves."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-rose flex-shrink-0" />
            <p className="font-sans text-sm text-charcoal-soft font-medium">— Kanchan Kulkarni</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
