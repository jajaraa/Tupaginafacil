import React from 'react';
import Hero from './components/Hero';
import Plans from './components/Plans';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Hero />
      <Plans />
      <HowItWorks />
      <Portfolio />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

