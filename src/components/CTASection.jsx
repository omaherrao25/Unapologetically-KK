import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EFE7DD 0%, #F7F2EB 50%, #EDE3D4 100%)' }}
    >
      {/* Cinematic background orbs */}
      <div className="orb orb-gold w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="orb orb-rose w-[400px] h-[400px] top-[-80px] left-[-80px] opacity-30" />
      <div className="orb orb-rose w-[350px] h-[350px] bottom-[-60px] right-[-60px] opacity-25" />

      {/* Decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.4), transparent)' }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-8"
        >
          Your Next Chapter Begins Here
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="section-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8"
        >
          You don't have to stay{' '}
          <span className="italic gold-text">in survival mode.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="divider-luxury mb-8"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-12 max-w-lg mx-auto"
        >
          You deserve a life filled with love, peace and joy.
          Let's create your next chapter together.{' '}
          <span className="text-rose">♡</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-10 py-4 animate-pulse-glow"
          >
            Book Your Free Strategy Call
            <ArrowRight size={16} />
          </a>
          <a href="#coaching" className="btn-secondary text-sm px-8 py-4">
            Learn More First
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-charcoal-muted"
        >
          {['100% Free. No Obligation.', 'Trusted by 1,000+ Women', 'Private & Confidential'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <p className="font-sans text-xs tracking-wide">{item}</p>
            </div>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 font-serif italic text-xl text-charcoal-muted"
        >
          Let's create your next chapter together. ♡
        </motion.p>
      </div>
    </section>
  )
}
