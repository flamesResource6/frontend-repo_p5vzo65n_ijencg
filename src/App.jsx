import React from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import DesignConcepts from './components/DesignConcepts'

function App() {
  const handlePrimary = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const handleSecondary = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.08),transparent_40%)]" />
        <Navbar onCTAClick={handlePrimary} />
        <main className="relative">
          <Hero onPrimary={handlePrimary} onSecondary={handleSecondary} />
          <HowItWorks />
          <Features />
          <Pricing />
          <CTA onClick={handlePrimary} />
          <DesignConcepts />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
