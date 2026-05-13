import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import TransformationFramework from './components/TransformationFramework'
import AuthoritySection from './components/AuthoritySection'
import Testimonials from './components/Testimonials'
import ServicesSection from './components/ServicesSection'
import CTASection from './components/CTASection'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import BackgroundBubbles from './components/BackgroundBubbles'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-main relative">
      <BackgroundBubbles />
      <CursorGlow />
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Emotional Pain Points */}
        <ProblemSection />
        
        {/* 3. Transformation Journey Timeline */}
        <TransformationFramework />
        
        {/* 4. Expertise / Authority Section */}
        <AuthoritySection />
        
        {/* 5. Testimonials Section */}
        <Testimonials />
        
        {/* 6. Coaching Services Section */}
        <ServicesSection />
        
        {/* 7. Free Resource / Lead Magnet Section */}
        <CTASection />
        
        {/* 8. Blog Preview Section */}
        <BlogSection />
      </main>

      {/* 9. Premium Footer */}
      <Footer />

      {/* Mobile floating CTA - Desktop hidden */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] lg:hidden w-[90%] max-w-sm">
        <button className="btn-primary w-full py-4 shadow-2xl">
          Book a Free Call
        </button>
      </div>
    </div>
  )
}
