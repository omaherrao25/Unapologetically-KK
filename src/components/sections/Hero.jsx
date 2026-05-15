import React from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import Button from '../ui/Button'
import { CALENDLY_URL } from '../../constants'

const ease = [0.22, 1, 0.36, 1]

function ProfilePlaceholder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 176 176"
      fill="none"
      aria-hidden="true"
      className="w-full h-full"
    >
      <rect width="176" height="176" fill="#2C4656" />
      <circle cx="88" cy="68" r="34" fill="#3D5A6E" />
      <ellipse cx="88" cy="158" rx="58" ry="42" fill="#3D5A6E" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen pt-20" id="home">
      <div className="bg-slate flex flex-col justify-center px-6 md:px-16 py-16 md:py-20 gap-7 min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <SectionTag light>Relationship Coaching</SectionTag>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-5xl italic font-light text-ivory/90 leading-snug max-w-md"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
          Helping women stop living in survival mode and{' '}
          <strong className="not-italic text-ivory font-light">take back their peace.</strong>
        </motion.h1>

        <motion.p
          className="font-sans text-sm font-light text-ivory/55 leading-relaxed max-w-sm"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
        >
          You've held everything together. The work, the family, the expectations. It's time to
          stop breaking apart — and start living for yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease }}
        >
          <Button variant="solid" size="md" href={CALENDLY_URL}>
            Book Your Free Strategy Call →
          </Button>
        </motion.div>
      </div>

      <div className="bg-slate-mid flex flex-col items-center justify-center gap-6 px-6 md:px-16 py-16">
        <motion.div
          className="w-44 h-44 rounded-full border border-white/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
        >
          <ProfilePlaceholder />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease }}
        >
          <p className="font-sans text-xs text-ivory/40 font-light">PCC Certified Coach (ICF)</p>
          <p className="font-sans text-xs text-ivory/40 font-light">NLP Practitioner & Therapist</p>
          <p className="font-sans text-xs text-ivory/40 font-light">15+ Years of Experience</p>
        </motion.div>
      </div>
    </section>
  )
}
