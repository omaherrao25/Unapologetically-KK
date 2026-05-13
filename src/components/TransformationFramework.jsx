import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Awareness',
    desc: 'Understand what\'s keeping you stuck and the root of your patterns.',
  },
  {
    num: '02',
    icon: '🌿',
    title: 'Healing',
    desc: 'Release emotional wounds & patterns that no longer serve you.',
  },
  {
    num: '03',
    icon: '🛡',
    title: 'Boundaries',
    desc: 'Protect your energy and honour your needs without guilt.',
  },
  {
    num: '04',
    icon: '👑',
    title: 'Confidence',
    desc: 'Rebuild self-worth & inner strength from the inside out.',
  },
  {
    num: '05',
    icon: '☮️',
    title: 'Peace',
    desc: 'Create fulfilling relationships and a life that feels like yours.',
  },
]

export default function TransformationFramework() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EFE7DD 0%, #F7F2EB 100%)' }}
    >
      <div className="orb orb-gold w-[600px] h-[600px] top-[-150px] left-[-150px] opacity-30" />
      <div className="orb orb-rose w-[400px] h-[400px] bottom-[-100px] right-[-80px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            The Transformation Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="section-heading text-4xl sm:text-5xl lg:text-6xl"
          >
            The Emotional Reclamation Method™
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 font-sans text-base text-charcoal-muted max-w-xl mx-auto"
          >
            A proven 5-step process to help you break free and create lasting change.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="divider-luxury mt-8"
          />
        </div>

        {/* Steps — Desktop horizontal, Mobile vertical */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #C8A96B40, #C8A96B, #C8A96B40, transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i + 0.5 }}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Step circle */}
                <div className="relative w-[104px] h-[104px] mb-6">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full border border-gold/20 group-hover:border-gold/50 transition-colors duration-400 scale-110" />
                  <div className="absolute inset-0 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors duration-500 scale-125" />

                  {/* Main circle */}
                  <div className="w-[104px] h-[104px] rounded-full flex items-center justify-center transition-all duration-400 group-hover:shadow-luxury-hover"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #F7F2EB 100%)',
                      boxShadow: '0 4px 30px rgba(200,169,107,0.15)',
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                        {step.icon}
                      </span>
                      <span className="font-sans text-[10px] font-semibold text-gold/70 tracking-widest">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #C8A96B, #B89050)', boxShadow: '0 2px 8px rgba(200,169,107,0.4)' }}
                  >
                    <span className="text-white text-[9px] font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-muted leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>

                {/* Underline accent */}
                <div className="mt-4 h-px w-8 bg-gold/30 group-hover:w-14 group-hover:bg-gold transition-all duration-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            Start Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
