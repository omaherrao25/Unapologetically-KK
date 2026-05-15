import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import PainPoints from './components/sections/PainPoints'
import Process from './components/sections/Process'
import WhyMe from './components/sections/WhyMe'
import Testimonials from './components/sections/Testimonials'
import SuccessStory from './components/sections/SuccessStory'
import CtaBanner from './components/sections/CtaBanner'
import KaraFoundation from './components/sections/KaraFoundation'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Process />
        <WhyMe />
        <Testimonials />
        <SuccessStory />
        <CtaBanner />
        <KaraFoundation />
      </main>
      <Footer />
    </>
  )
}
