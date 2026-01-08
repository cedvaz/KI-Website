
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Modules from './components/Modules';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollWord from './components/ScrollWord';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-sunflower selection:text-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-tiger via-maya to-sapphire z-[100] origin-left"
        style={{ scaleX } as any}
      />

      <Navbar />
      <main>
        <Hero />

        {/* Subtle Wave Divider */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#ffffff" fillOpacity="0.03"></path>
          </svg>
        </div>

        <Services />

        <About />

        <Process />

        <Methodology />

        <Modules />

        <Testimonials />

        <ScrollWord />
      </main>
      <Footer />

      {/* Persistent Components */}
      <CookieConsent />

      <style>{`
        ::selection {
          background: #FFBA25;
          color: #0A0A0A;
        }
      `}</style>
    </div>
  );
};

export default App;
