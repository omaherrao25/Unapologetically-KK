import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { CALENDLY_URL } from '../../constants'

const ease = [0.22, 1, 0.36, 1]

export default function CtaBanner() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-slate py-20 md:py-28 px-6 md:px-16">
      <motion.div
        ref={ref}
        className="flex flex-col items-center gap-5 text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <p className="font-sans text-tag uppercase tracking-widest text-bronze-light/80">
          Ready to begin?
        </p>
        <h2 className="font-serif text-3xl md:text-4xl italic font-light text-ivory max-w-lg leading-snug">
          You don't have to keep holding everything together alone.
        </h2>
        <p className="font-sans text-sm text-ivory/50 font-light max-w-sm leading-relaxed">
          One conversation can change the trajectory of everything. Book your free strategy call
          today and take the first real step.
        </p>
        <Button variant="solid" size="lg" href={CALENDLY_URL}>
          Book Your Free Strategy Call →
        </Button>
        <p className="font-sans text-xs text-ivory/25 tracking-widest uppercase">
          Free · 45 minutes · No obligation
        </p>
      </motion.div>
    </section>
  )
}
