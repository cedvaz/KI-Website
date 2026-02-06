import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const PersonalBreak: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-cream relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-warm-white to-transparent opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-warm-gray">
              <img
                src="/cedric-personal-1.avif"
                alt="Cedric Vazquez Boo bei einem Workshop – AI Marketing & Sales"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-tiger rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-sunflower rounded-xl -z-10 opacity-60"></div>
          </MotionDiv>

          {/* Text Side */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-warm-dark/30 block mb-6">
              Der Mensch dahinter
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-warm-dark uppercase tracking-tighter leading-[0.95] mb-8">
              Kein Berater.<br />
              <span className="text-tiger">Macher.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-warm-dark/70 leading-relaxed font-medium">
              <p>
                10+ Jahre in Marketing und Vertrieb. Nicht als Beobachter, sondern als jemand, der selbst Kampagnen gefahren, Leads qualifiziert und Content produziert hat.
              </p>
              <p>
                KI ist für mich kein Selbstzweck – sondern das Werkzeug, das ich jeden Tag nutze, um bessere Ergebnisse zu liefern. Ohne Team von 20 Leuten. Ohne Agentur-Budget.
              </p>
              <p className="font-bold text-warm-dark">
                Ich zeige euch nicht, was theoretisch möglich ist. Ich zeige euch, was bei mir funktioniert – und baue es mit euch nach.
              </p>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-warm-dark/10">
              <div>
                <div className="text-3xl md:text-4xl font-black text-tiger">10+</div>
                <div className="text-xs font-black uppercase tracking-widest text-warm-dark/30 mt-1">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-sunflower">50+</div>
                <div className="text-xs font-black uppercase tracking-widest text-warm-dark/30 mt-1">Workshops</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-maya">100%</div>
                <div className="text-xs font-black uppercase tracking-widest text-warm-dark/30 mt-1">Praxis</div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default PersonalBreak;
