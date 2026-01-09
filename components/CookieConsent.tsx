
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface CookieSettings {
  necessary: boolean;
  performance: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    performance: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-v2');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (finalSettings: CookieSettings) => {
    localStorage.setItem('cookie-consent-v2', JSON.stringify(finalSettings));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      performance: true,
      functional: true,
      marketing: true,
    });
  };

  const handleAcceptNecessary = () => {
    saveConsent({
      necessary: true,
      performance: false,
      functional: false,
      marketing: false,
    });
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
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
                Unsere Website verwendet Cookies und ähnliche Technologien, um die Grundfunktionen zu gewährleisten und dein Nutzererlebnis zu verbessern. 
                Du kannst wählen, welche Kategorien du zulassen möchtest. Weitere Details findest du in unserer{' '}
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

            {/* Settings View (Accordion style) */}
            <AnimatePresence>
              {showSettings && (
                <MotionDiv
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white/[0.02]"
                >
                  <div className="p-8 md:p-10 space-y-4">
                    <div className="flex flex-col gap-2">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Einwilligungspräferenzen verwalten</h4>
                       
                       {[
                         { id: 'necessary', label: 'Unbedingt erforderliche Cookies', desc: 'Diese Cookies sind für das Funktionieren der Website notwendig und können nicht deaktiviert werden.', mandatory: true },
                         { id: 'performance', label: 'Leistungs-Cookies', desc: 'Ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, um die Leistung unserer Website zu messen.' },
                         { id: 'functional', label: 'Funktionelle Cookies', desc: 'Ermöglichen verbesserte Funktionalität und Personalisierung (z. B. Videos).' },
                         { id: 'marketing', label: 'Marketing-Cookies', desc: 'Werden verwendet, um Besuchern auf Websites relevante Anzeigen zu zeigen.' },
                       ].map((item) => (
                         <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] transition-colors">
                           <div className="flex-1 pr-8">
                             <p className="text-white font-bold text-sm">{item.label}</p>
                             <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                           </div>
                           {item.mandatory ? (
                             <span className="text-[10px] font-black text-tiger uppercase tracking-widest">Immer Aktiv</span>
                           ) : (
                             <button 
                               onClick={() => toggleSetting(item.id as keyof CookieSettings)}
                               className={`w-12 h-6 rounded-full relative transition-colors ${settings[item.id as keyof CookieSettings] ? 'bg-tiger' : 'bg-white/10'}`}
                             >
                               <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${settings[item.id as keyof CookieSettings] ? 'left-7' : 'left-1'}`} />
                             </button>
                           )}
                         </div>
                       ))}
                    </div>
                  </div>
                </MotionDiv>
              )}
            </AnimatePresence>

            {/* Footer Actions */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <button 
                onClick={handleAcceptNecessary}
                className="text-white/40 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                Nur notwendige Cookies
              </button>

              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <button
                  onClick={showSettings ? () => saveConsent(settings) : () => setShowSettings(true)}
                  className="px-8 py-3 rounded-xl border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all"
                >
                  {showSettings ? 'Auswahl bestätigen' : 'Cookie-Einstellungen'}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-8 py-3 rounded-xl bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-tiger hover:text-white transition-all shadow-xl"
                >
                  Alle Cookies zulassen
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
