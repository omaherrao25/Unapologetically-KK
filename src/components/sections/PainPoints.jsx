import React from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { painPoints } from '../../data/painPoints'

const ease = [0.22, 1, 0.36, 1]

export default function PainPoints() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-ivory py-16 md:py-24 px-6 md:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <SectionTag>The Problem</SectionTag>
        <h2 className="font-serif text-2xl md:text-3xl text-slate max-w-xl leading-snug mb-4">
          Does your life look successful on the outside — but feel empty on the inside?
        </h2>
        <p className="font-sans text-sm text-mid leading-relaxed max-w-lg mb-12">
          High-achieving women often carry the weight of everyone else's expectations while quietly
          losing themselves. If any of this resonates, you're in the right place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.num}
              className="bg-white border border-bronze/20 rounded p-6 flex flex-col gap-3 hover:border-bronze/50 transition-colors"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
            >
              <span className="font-serif text-4xl text-bronze/15 leading-none">{point.num}</span>
              <p
                className="font-sans text-xs leading-relaxed text-charcoal [&_strong]:text-slate [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: point.text }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
