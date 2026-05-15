import React from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import TestimonialCard from '../ui/TestimonialCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { testimonials } from '../../data/testimonials'

const ease = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-ivory py-16 md:py-24 px-6 md:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <SectionTag>What Clients Say</SectionTag>
        <h2 className="font-serif text-xl md:text-2xl italic text-slate mb-10">
          Women who chose themselves — and everything changed.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
