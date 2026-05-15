import React from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import Button from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { results } from '../../data/results'
import { CALENDLY_URL } from '../../constants'

const ease = [0.22, 1, 0.36, 1]

function CheckIcon() {
  return (
    <svg
      className="w-3 h-3 text-ivory"
      fill="none"
      viewBox="0 0 12 12"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
    </svg>
  )
}

function CoachPlaceholder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 256"
      fill="none"
      aria-label="Kanchan Kulkarni"
      className="w-full h-full"
    >
      <rect width="224" height="256" fill="#F2E8D9" />
      <circle cx="112" cy="92" r="48" fill="#E8D5C0" />
      <ellipse cx="112" cy="240" rx="84" ry="58" fill="#E8D5C0" />
    </svg>
  )
}

export default function WhyMe() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="why-me" className="bg-cream py-16 md:py-24 px-6 md:px-16">
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <div>
          <SectionTag>Why Work With Me</SectionTag>
          <h2 className="font-serif text-2xl md:text-3xl text-slate leading-snug mb-6">
            Real change. Real results. In less time than you'd expect.
          </h2>
          <p className="font-sans text-sm text-mid font-light leading-relaxed mb-8">
            I'm Kanchan Kulkarni — PCC Certified Coach, NLP Practitioner, and relationship
            therapist with 15+ years of experience working with women across the globe. I don't do
            generic advice. I go deep, fast — so you leave with lasting clarity, not more homework.
          </p>

          <ul className="flex flex-col gap-3 mb-8">
            {results.map((result, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease }}
              >
                <div className="w-5 h-5 rounded-full bg-slate flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <span className="font-sans text-xs text-charcoal leading-relaxed">{result}</span>
              </motion.li>
            ))}
          </ul>

          <Button variant="ghost" href={CALENDLY_URL}>
            Book Your Free Strategy Call →
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-64 rounded overflow-hidden bg-bronze-pale">
            <CoachPlaceholder />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
