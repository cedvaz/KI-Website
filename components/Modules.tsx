
import React from 'react';
import { WORKSHOP_PRODUCTS } from '../constants';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const Modules: React.FC = () => {
  return (
    <section id="workshops" className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-warm-dark/10 text-warm-dark/40 text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Drei Workshops. Drei klare Anwendungsfälle.
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none text-warm-dark">Ihr geht raus und könnt es.</h2>
            <p className="text-2xl text-warm-dark/60 max-w-2xl mx-auto font-medium">Kein 'probiert das mal aus'. Wir bauen Workflows mit euren Daten, eurer Marke, euren Zielen – und die funktionieren ab Tag 1.</p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WORKSHOP_PRODUCTS.map((w, idx) => (
            <MotionDiv 
              key={w.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 md:p-10 rounded-3xl border border-warm-dark/10 bg-white flex flex-col group hover:bg-white/90 transition-all overflow-hidden shadow-sm ${w.isSignature ? 'lg:scale-105 ring-2 ring-tiger/50 z-10' : ''}`}
            >
              <div className="mb-10">
                <h3 className={`text-4xl font-black mb-2 uppercase tracking-tighter text-${w.color}`}>
                  {w.title}
                </h3>
                <p className="text-xl font-bold text-warm-dark/80 leading-tight tracking-tight uppercase">
                  → {w.tagline}
                </p>
              </div>

              <p className="text-xl text-warm-dark/60 italic mb-10 leading-relaxed border-l-2 border-warm-dark/10 pl-6">
                „{w.positioning}“
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                <span className="text-warm-dark/30 text-[10px] font-black uppercase tracking-[0.2em]">Fokus</span>
                <ul className="space-y-3">
                  {w.focus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-warm-dark/70">
                      <span className={`text-${w.color} font-bold`}>+</span>
                      <span className="text-base font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-2xl bg-${w.color}/10 border border-${w.color}/20 mb-8`}>
                <span className="text-warm-dark/40 text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Das Ergebnis</span>
                <p className="text-xl font-black text-warm-dark uppercase tracking-tighter">{w.outcome}</p>
              </div>

              <div className="absolute -bottom-10 -right-4 text-[12rem] font-black text-warm-dark/[0.03] select-none pointer-events-none">
                0{w.id}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
