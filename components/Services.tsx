
import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const Services: React.FC = () => {
  // Mapping für die spezifischen Schattenfarben basierend auf der bg-Klasse
  const shadowStyles: Record<string, string> = {
    'bg-tiger': 'hover:shadow-[12px_12px_0px_0px_#FE6237]',
    'bg-sunflower': 'hover:shadow-[12px_12px_0px_0px_#FFBA25]',
    'bg-maya': 'hover:shadow-[12px_12px_0px_0px_#7CC3FF]',
  };

  const textStyles: Record<string, string> = {
    'bg-tiger': 'text-tiger',
    'bg-sunflower': 'text-sunflower',
    'bg-maya': 'text-maya',
  };

  return (
    <section id="services" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">Das Angebot</h2>
          <div className="w-32 h-2 bg-tiger"></div>
        </MotionDiv>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {SERVICES.map((s, idx) => (
            <MotionDiv 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: -4, y: -4 }}
              className={`p-10 rounded-2xl border border-white/10 bg-[#0D0D0D] flex flex-col min-h-[550px] transition-all duration-300 group cursor-default ${shadowStyles[s.color] || ''}`}
            >
              {/* Top Accent Bar */}
              <div className={`w-16 h-1.5 mb-12 ${s.color} rounded-full`}></div>
              
              <div className="mb-10">
                <h3 className={`text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none transition-colors ${textStyles[s.color] || 'text-white'}`}>
                  {s.title}
                </h3>
                <p className="text-xl font-bold text-white/90 leading-tight italic tracking-tight">
                  {s.tagline}
                </p>
              </div>

              <div className="flex-grow mb-12">
                <ul className="space-y-5">
                  {s.descriptionItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/60">
                      <span className="text-white/20 mt-2 font-black text-xs">●</span>
                      <span className="text-xl leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10 border-t border-white/5 mt-auto">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 block mb-3">
                  {s.footerLabel}
                </span>
                <p className="text-sm font-black text-white/40 uppercase tracking-[0.15em] leading-tight">
                  {s.footerContent}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
