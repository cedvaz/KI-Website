import React, { useState, useEffect } from 'react';
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
import PersonalBreak from './components/PersonalBreak';
import PersonalCloser from './components/PersonalCloser';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import MediaPage from './components/MediaPage';

const HomePage: React.FC = () => {
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

        {/* Wave Divider: Dark → Cream */}
        <div className="w-full overflow-hidden leading-[0] bg-dark">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#FAF7F2"></path>
          </svg>
        </div>

        <Services />

        <PersonalBreak />

        {/* Wave Divider: Cream → Dark */}
        <div className="w-full overflow-hidden leading-[0] bg-cream">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#0A0A0A"></path>
          </svg>
        </div>

        <About />

        <Process />

        <Methodology />

        {/* Wave Divider: Dark → Cream */}
        <div className="w-full overflow-hidden leading-[0] bg-dark">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#FAF7F2"></path>
          </svg>
        </div>

        <Modules />

        {/* Wave Divider: Cream → Dark */}
        <div className="w-full overflow-hidden leading-[0] bg-cream">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#0A0A0A"></path>
          </svg>
        </div>

        <Testimonials />

        <PersonalCloser />

        {/* Wave Divider: Cream → Dark */}
        <div className="w-full overflow-hidden leading-[0] bg-cream">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#0A0A0A"></path>
          </svg>
        </div>

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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    // Check hash on mount
    const checkHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'datenschutz') {
        setCurrentPage('datenschutz');
      } else if (hash === 'impressum') {
        setCurrentPage('impressum');
      } else if (hash === 'media') {
        setCurrentPage('media');
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    checkHash();

    // Listen for hash changes
    const handleHashChange = () => {
      checkHash();
    };

    // Also check periodically to catch any missed changes
    const interval = setInterval(() => {
      const currentHash = window.location.hash.slice(1);
      if ((currentHash === 'datenschutz' && currentPage !== 'datenschutz') ||
          (currentHash === 'impressum' && currentPage !== 'impressum') ||
          (currentHash === 'media' && currentPage !== 'media') ||
          (currentHash === '' && currentPage !== 'home')) {
        checkHash();
      }
    }, 100);

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearInterval(interval);
    };
  }, [currentPage]);

  // Render based on current page
  if (currentPage === 'datenschutz') {
    return <Datenschutz />;
  }

  if (currentPage === 'impressum') {
    return <Impressum />;
  }

  if (currentPage === 'media') {
    return <MediaPage />;
  }

  return <HomePage />;
};

export default App;
