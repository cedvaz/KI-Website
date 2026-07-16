
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-v2');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = () => {
    localStorage.setItem('cookie-consent-v2', JSON.stringify({ necessary: true }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionDiv
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[500] p-0 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-[#0A0A0A] border-t md:border border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] md:rounded-3xl overflow-hidden">
            
            {/* Header & Description */}
            <div className="p-8 md:p-10 border-b border-white/5">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4">
                Deine Privatsphäre ist uns wichtig
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-5xl">
                Diese Website verwendet derzeit keine Analyse-, Werbe- oder Marketing-Cookies. Wir speichern lediglich deine Auswahl zu diesem Hinweis lokal in deinem Browser, damit er nicht bei jedem Besuch erneut erscheint. Weitere Details findest du in unserer{' '}
                <a 
                  href="#datenschutz" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = 'datenschutz';
                  }}
                  className="text-white underline hover:text-tiger transition-colors"
                >
                  Datenschutzerklärung
                </a>.
              </p>
            </div>

            {/* Footer Actions */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-white/30 text-xs font-black uppercase tracking-widest">Keine optionalen Cookies aktiv</span>

              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <button
                  onClick={saveConsent}
                  className="px-8 py-3 rounded-xl border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all"
                >
                  Verstanden
                </button>
              </div>
            </div>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
