import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const problems = [
  {
    icon: '🥀',
    label: 'Emotionally Exhausted',
    desc: 'You give everything to others, leaving nothing for yourself.',
    color: 'from-rose/10 to-transparent',
    border: 'border-rose/20',
  },
  {
    icon: '🫶',
    label: 'Always Giving, Never Receiving',
    desc: 'You love deeply, but rarely feel truly loved in return.',
    color: 'from-gold/10 to-transparent',
    border: 'border-gold/20',
  },
  {
    icon: '🔁',
    label: 'Stuck in the Same Patterns',
    desc: 'The same relationship cycles keep repeating, no matter what you try.',
    color: 'from-rose/10 to-transparent',
    border: 'border-rose/20',
  },
  {
    icon: '🌊',
    label: 'Anxious & Overwhelmed',
    desc: 'Constant worry and emotional turbulence have become your normal.',
    color: 'from-gold/10 to-transparent',
    border: 'border-gold/20',
  },
  {
    icon: '🪞',
    label: 'Lost Touch With Yourself',
    desc: 'You don\'t quite recognise the woman staring back at you anymore.',
    color: 'from-rose/10 to-transparent',
    border: 'border-rose/20',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function ProblemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="coaching"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: '#F7F2EB' }}
    >
      {/* Orbs */}
      <div className="orb orb-rose w-[500px] h-[500px] top-0 left-[-100px] opacity-40" />
      <div className="orb orb-gold w-[350px] h-[350px] bottom-0 right-[-50px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            Does This Feel Like You?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="section-heading text-4xl sm:text-5xl lg:text-6xl max-w-2xl mx-auto"
          >
            You look successful on the outside,{' '}
            <span className="italic">but inside you feel…</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="divider-luxury mt-8"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`card-luxury group relative overflow-hidden p-7 flex flex-col items-center text-center cursor-default`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Border glow */}
              <div className={`absolute inset-0 rounded-2xl border ${p.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: 'linear-gradient(135deg, #F7F2EB, #EFE7DD)' }}
              >
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  {p.icon}
                </span>
              </div>

              <h3 className="relative font-serif text-lg font-semibold text-charcoal mb-3 leading-snug">
                {p.label}
              </h3>
              <p className="relative font-sans text-sm text-charcoal-muted leading-relaxed">
                {p.desc}
              </p>

              {/* Bottom accent line */}
              <div className="relative mt-5 w-8 h-px bg-gold/30 group-hover:w-16 group-hover:bg-gold/60 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-14 font-serif italic text-lg text-charcoal-muted"
        >
          You're not alone. And you don't have to keep living this way.
        </motion.p>
      </div>
    </section>
  )
}
