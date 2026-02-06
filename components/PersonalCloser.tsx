import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const PersonalCloser: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-cream"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Side - Left */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-warm-dark/30 block mb-6">
              Lass uns reden
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-warm-dark uppercase tracking-tighter leading-[0.95] mb-8">
              Bereit, wenn<br />
              <span className="text-tiger">du es bist.</span>
            </h2>
            <p className="text-lg md:text-xl text-warm-dark/70 leading-relaxed font-medium mb-10">
              Kein Sales-Funnel, kein Formular mit 15 Feldern.
              Schreib mir oder buch dir 15 Minuten – und wir finden raus,
              ob ich der Richtige bin. Wenn nicht, sag ich's dir ehrlich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.cal.eu/cedvaz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-5 bg-tiger text-white rounded-2xl font-black text-lg uppercase tracking-tight hover:bg-tiger/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-tiger/20"
              >
                15 Min Call buchen →
              </a>
              <a
                href="mailto:hi@cedric-ki.de"
                className="inline-flex items-center justify-center px-8 py-5 bg-warm-dark text-cream rounded-2xl font-black text-lg uppercase tracking-tight hover:bg-warm-dark/90 transition-all duration-300 hover:scale-105"
              >
                hi@cedric-ki.de
              </a>
            </div>

            {/* Trust Signal */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-tiger/20 border-2 border-cream flex items-center justify-center text-xs">🎯</div>
                <div className="w-8 h-8 rounded-full bg-sunflower/20 border-2 border-cream flex items-center justify-center text-xs">⚡</div>
                <div className="w-8 h-8 rounded-full bg-maya/20 border-2 border-cream flex items-center justify-center text-xs">✓</div>
              </div>
              <p className="text-sm text-warm-dark/40 font-bold">
                Keine Verpflichtung. Kein Follow-up-Spam. Versprochen.
              </p>
            </div>
          </MotionDiv>

          {/* Image Side - Right */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-warm-gray">
              <img
                src="/cedric-personal-2.jpg"
                alt="Cedric Vazquez Boo – Bereit für den nächsten Workshop"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                  const placeholder = document.createElement('div');
                  placeholder.className = 'text-center p-8';
                  placeholder.innerHTML = '<div class="text-6xl mb-4">📸</div><p class="text-warm-dark/40 font-bold uppercase text-sm tracking-widest">Bild hier einsetzen</p>';
                  target.parentElement!.appendChild(placeholder);
                }}
              />
            </div>
            {/* Accent elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sunflower rounded-2xl -z-10 opacity-80"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-maya rounded-xl -z-10 opacity-50"></div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default PersonalCloser;
