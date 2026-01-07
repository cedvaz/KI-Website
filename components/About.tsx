
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-dark py-32 px-4 overflow-hidden">
      <div className="max-w-[95vw] mx-auto relative z-10">

        {/* Typographic Wall */}
        <div className="flex flex-col font-black italic tracking-tighter leading-[0.85] opacity-90 select-none cursor-default">

          {/* Row 1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] md:text-[6vw] text-white/30"
          >
            SEIT ÜBER 10 JAHREN
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[10vw] md:text-[8vw] text-white self-center md:self-start md:ml-[10vw]"
          >
            BEGLEITE ICH KMUS
          </motion.div>

          {/* Row 3 - With Image Intersecting */}
          <div className="relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[8vw] md:text-[6vw] text-white/30 text-right pr-4 md:pr-32"
            >
              IM MARKETING & VERTRIEB
            </motion.div>

            {/* Profile Image - Floating Absolute */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-[10vw] md:-top-[15vw] left-[5vw] md:left-[20vw] w-[25vw] h-[30vw] md:w-[20vw] md:h-[25vw] z-20 pointer-events-none"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 bg-dark">
                <img src="/cedric-profile.png" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" alt="Cedric" />
                <div className="absolute inset-0 bg-tiger mix-blend-overlay opacity-20"></div>
              </div>
            </motion.div>
          </div>

          {/* Spacer */}
          <div className="h-[5vh] md:h-[10vh]"></div>

          {/* PUNCHLINES */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[15vw] leading-[0.8] text-tiger text-center"
          >
            ERGEBNISSE
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[15vw] leading-[0.8] text-white text-center mix-blend-difference z-30 relative"
          >
            SCHLAGEN
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[15vw] leading-[0.8] text-tiger text-center"
          >
            MEINUNGEN
          </motion.div>

        </div>

        {/* Subtle Skills Grid at Bottom */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="border-t border-white/20 pt-4">
              <h4 className="text-tiger font-bold uppercase text-xs tracking-widest mb-1">{skill.title}</h4>
              <p className="text-white text-xs leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
