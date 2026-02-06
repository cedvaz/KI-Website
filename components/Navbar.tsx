
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionNav = motion.nav as any;
const MotionDiv = motion.div as any;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'about', 'workshops', 'methodology', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dienste', id: 'services' },
    { name: 'Team', id: 'about' },
    { name: 'Workshops', id: 'workshops' },
    { name: 'Haltung', id: 'methodology' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:py-6 pointer-events-none">
      <div className="mx-auto max-w-7xl flex flex-col items-center">

        {/* Floating Main Island */}
        <MotionNav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`pointer-events-auto flex items-center gap-3 md:gap-8 px-3 md:px-6 py-2 rounded-2xl md:rounded-full border transition-all duration-500 ${isScrolled
            ? 'bg-dark/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-white/20 scale-95 md:scale-100'
            : 'bg-white/5 backdrop-blur-md border-white/10'
            }`}
        >
          {/* Logo/Home Link */}
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 pr-2 border-r border-white/10 group focus:outline-none"
          >
            <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-tiger via-sunflower to-sapphire transition-transform group-hover:scale-110 ${activeSection === 'home' ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-dark' : ''}`}></div>
            <span className="font-black text-[10px] tracking-widest uppercase hidden sm:block text-white/80">Cedric</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group focus:outline-none ${activeSection === link.id ? 'text-white' : 'text-white/40 hover:text-white/70'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <MotionDiv
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-tiger"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1 focus:outline-none"
          >
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* CTA Button */}
          <a
            href="https://app.cal.eu/cedvaz/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group pointer-events-auto relative px-4 md:px-6 py-2 rounded-xl md:rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 focus:outline-none bg-tiger text-white shadow-[0_10px_20px_-5px_rgba(254,98,55,0.4)]"
          >
            <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
              Call buchen
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </a>
        </MotionNav>

        {/* Mobile Dropdown Island */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden pointer-events-auto w-full max-w-[280px] bg-dark/98 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`text-xs font-black uppercase tracking-[0.3em] flex items-center justify-between focus:outline-none ${activeSection === link.id ? 'text-tiger' : 'text-white/60'
                      }`}
                  >
                    {link.name}
                    {activeSection === link.id && <div className="w-1.5 h-1.5 rounded-full bg-tiger"></div>}
                  </button>
                ))}
                <a
                  href="https://app.cal.eu/cedvaz/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-tiger text-left"
                >
                  Call buchen →
                </a>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
