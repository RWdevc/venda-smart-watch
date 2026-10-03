import React from 'react'
import Header from './components/Header'
import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import Features from './components/Features'
import Health from './components/Health'
import Customization from './components/Customization'
import Dials from './components/Dials'
import Specs from './components/Specs'
import Guarantee from './components/Guarantee'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full text-on-surface">
          <TopBanner />
          <Hero />
          <Features />
          <Health />
          <Customization />
          <Dials />
          <Specs />
          <Guarantee />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
