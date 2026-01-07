
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const MotionDiv = motion.div as any;

const About: React.FC = () => {
  return (
    <section id="methodology" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter leading-[0.9] text-white">
              Cedric KI: <br />
              <span className="text-tiger lowercase font-bold tracking-tight">haltung vor tools.</span>
            </h2>
            <div className="space-y-8 text-xl md:text-2xl font-medium text-white/70 max-w-lg leading-snug tracking-tight">
              <p>
                Ich arbeite nicht mit isolierten KI-Tools.<br />
                Ich schaue, wie Arbeit durch ein Unternehmen fließt – <br />
                und wo sie hängen bleibt.
              </p>
              <p>
                KI ist kein Selbstzweck.<br />
                Sie ist ein Hebel, wenn die Struktur stimmt.
              </p>
            </div>
          </MotionDiv>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">FÄHIGKEITEN & FOKUS</h3>
            {SKILLS.map((skill, idx) => (
              <MotionDiv 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-tiger/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-1">
                  <span className="text-tiger font-black text-xl">•</span>
                  <span className="text-xl font-black text-white group-hover:text-tiger transition-colors uppercase tracking-tighter">
                    {skill.title}
                  </span>
                </div>
                <p className="text-white/40 text-lg ml-8 font-medium italic leading-none">
                  ({skill.description})
                </p>
              </MotionDiv>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
