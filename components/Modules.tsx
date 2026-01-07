
import React from 'react';
import { WORKSHOP_PRODUCTS } from '../constants';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const Modules: React.FC = () => {
  return (
    <section id="workshops" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Drei Workshops. Drei klare Anwendungsfälle.
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">Keine Theorie-Shows.</h2>
            <p className="text-2xl text-white/60 max-w-2xl mx-auto font-medium">Wir bauen Workflows, die am nächsten Tag funktionieren. Punkt.</p>
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
              className={`relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col group hover:bg-white/[0.04] transition-all overflow-hidden ${w.isSignature ? 'lg:scale-105 ring-2 ring-tiger/50 z-10' : ''}`}
            >
              <div className="mb-10">
                <h3 className={`text-4xl font-black mb-2 uppercase tracking-tighter text-${w.color}`}>
                  {w.title}
                </h3>
                <p className="text-xl font-bold text-white/90 leading-tight tracking-tight uppercase">
                  → {w.tagline}
                </p>
              </div>

              <p className="text-xl text-white/70 italic mb-10 leading-relaxed border-l-2 border-white/10 pl-6">
                „{w.positioning}“
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">Fokus</span>
                <ul className="space-y-3">
                  {w.focus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className={`text-${w.color} font-bold`}>+</span>
                      <span className="text-base font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-2xl bg-${w.color}/10 border border-${w.color}/20 mb-8`}>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Das Ergebnis</span>
                <p className="text-xl font-black text-white uppercase tracking-tighter">{w.outcome}</p>
              </div>

              <div className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none">
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
