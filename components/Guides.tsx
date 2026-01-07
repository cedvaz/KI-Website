
import React from 'react';
import { motion } from 'framer-motion';
import { GUIDES } from '../constants';

const MotionDiv = motion.div as any;

const Guides: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white/90">Beliebte Guides</h2>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDES.map((guide, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl flex flex-col justify-between group cursor-pointer border-b-4 border-transparent hover:shadow-2xl transition-all"
              style={{ borderBottomColor: `var(--${guide.color})` }}
            >
              <div>
                <h3 className="text-3xl font-display font-extrabold text-dark mb-3 leading-none tracking-tight uppercase">
                  {guide.title}
                </h3>
                <p className="text-dark/70 text-2xl leading-relaxed mb-8 font-medium">
                  {guide.description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-bold text-dark group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                Guide lesen <span className="text-xl">→</span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
      <style>{`
        :root {
          --tiger: #FE6237;
          --sunflower: #FFBA25;
          --maya: #7CC3FF;
          --sapphire: #4164FF;
        }
      `}</style>
    </section>
  );
};

export default Guides;
