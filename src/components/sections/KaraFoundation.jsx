import React from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import Button from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ease = [0.22, 1, 0.36, 1]

function FoundationImagePlaceholder({ index }) {
  const hues = ['#E8D5C0', '#DFC9B0', '#EAD8C5', '#D8C5AD']
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 150"
      fill="none"
      aria-label={`Kara Foundation image ${index + 1}`}
      className="w-full h-full"
    >
      <rect width="200" height="150" fill={hues[index % hues.length]} />
      <circle cx="100" cy="75" r="28" fill="#C4A882" opacity="0.5" />
      <path
        d="M70 105 Q100 85 130 105"
        stroke="#C4A882"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

export default function KaraFoundation() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="foundation" className="bg-cream py-16 md:py-24 px-6 md:px-16">
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <div>
          <SectionTag>Kara Foundation</SectionTag>
          <p className="font-serif italic text-mid mb-4 text-base">Paying it forward...</p>
          <h2 className="font-serif text-xl md:text-2xl text-slate mb-4">
            Making healing accessible for every woman
          </h2>
          <p className="font-sans text-xs text-mid font-light leading-relaxed mb-6">
            The Kara Foundation is Kanchan's commitment to ensuring that financial circumstances
            never become a barrier to healing. Through subsidised coaching sessions, group
            workshops, and community support, we're working to bring relationship coaching to women
            who need it most — regardless of where they are in the world or what they can afford.
          </p>
          <Button variant="outline" size="sm" href="/kara-foundation">
            Read More →
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
            >
              <FoundationImagePlaceholder index={i} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
