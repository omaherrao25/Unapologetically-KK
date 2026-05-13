import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import TransformationFramework from './components/TransformationFramework'
import Testimonials from './components/Testimonials'
import AuthoritySection from './components/AuthoritySection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
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

      {/* Mobile floating CTA */}
      <div className="mobile-float-cta lg:hidden">
        <a href="#contact" className="btn-primary" style={{ boxShadow: '0 6px 28px rgba(197,162,110,0.5)' }}>
          Book a Free Call
        </a>
      </div>
    </div>
  )
}
