import React from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import ProcessStep from '../ui/ProcessStep'
import Button from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { processSteps } from '../../data/processSteps'
import { CALENDLY_URL } from '../../constants'

const ease = [0.22, 1, 0.36, 1]

export default function Process() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="process" className="bg-slate py-16 md:py-24 px-6 md:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <SectionTag light>The Process</SectionTag>
        <h2 className="font-serif text-2xl md:text-3xl italic font-light text-ivory/90 mb-14">
          Focused. Results-driven. No endless sessions.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
            >
              <ProcessStep {...step} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline-light" size="md" href={CALENDLY_URL}>
            Book Your Free Strategy Call →
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
