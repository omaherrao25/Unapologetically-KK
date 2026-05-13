import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import TransformationFramework from './components/TransformationFramework'
import Testimonials from './components/Testimonials'
import AuthoritySection from './components/AuthoritySection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

// Mobile floating CTA
function MobileFloatingCTA() {
  return (
    <div className="mobile-cta lg:hidden">
      <a
        href="#contact"
        className="btn-primary text-xs px-7 py-3.5 shadow-luxury"
        style={{ boxShadow: '0 8px 32px rgba(200,169,107,0.5)' }}
      >
        Book A Free Call ✦
      </a>
    </div>
  )
}

export default function App() {
  // Smooth scroll polyfill / GSAP init could go here
  useEffect(() => {
    // Could initialise GSAP ScrollTrigger here if needed
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <TransformationFramework />
          <Testimonials />
          <AuthoritySection />
          <CTASection />
        </main>
        <Footer />
        <MobileFloatingCTA />
      </motion.div>
    </AnimatePresence>
  )
}
