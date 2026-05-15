import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ease = [0.22, 1, 0.36, 1]

export default function SuccessStory() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-ivory py-16 md:py-24 px-6 md:px-16 border-t border-bronze/10">
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 gap-16 items-start"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <div>
          <p className="font-sans text-tag uppercase tracking-widest text-bronze mb-2">
            Success Story
          </p>
          <h2 className="font-serif text-xl md:text-2xl italic text-slate mb-5">
            From Struggles to a Stronger Bond: A Lasting Love
          </h2>
          <p className="font-sans text-xs text-mid font-light leading-loose">
            After 18 years of marriage, Priya found herself exhausted — not from the work, but
            from the emotional distance that had quietly grown between her and her husband. She came
            to coaching convinced the problem was her partner. What she discovered was something far
            more profound: the patterns she'd carried since childhood were quietly running her
            relationship.
          </p>
          <p className="font-sans text-xs text-mid font-light leading-loose mt-4">
            In just a few sessions, we uncovered the root of the conflict — not between two people,
            but within herself. The moment she resolved that internal tension, her marriage didn't
            just survive. It transformed. Priya and her husband now navigate disagreements with a
            clarity and compassion that she once thought was impossible.
          </p>
        </div>

        <div className="bg-cream border-l-4 border-bronze rounded p-7">
          <p className="font-serif text-lg italic text-slate leading-relaxed">
            "I thought I was here to fix my marriage. What I didn't expect was to find myself again
            — and realise that's what my marriage had been waiting for all along."
          </p>
          <p className="font-sans text-xs text-soft mt-4 uppercase tracking-wider">
            — Priya, 43 · Mumbai, India
          </p>
        </div>
      </motion.div>
    </section>
  )
}
