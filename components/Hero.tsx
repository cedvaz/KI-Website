
import React from 'react';
import { motion } from 'framer-motion';
import { HERO_ROLES } from '../constants';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionA = motion.a as any;

const Hero: React.FC = () => {
  const roleColors = [
    'text-tiger',
    'text-sunflower',
    'text-maya',
    'text-sapphire'
  ];

  return (
    <div id="home" className="relative min-h-screen bg-dark flex items-center overflow-hidden px-6 md:px-12 pt-32 pb-20">

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Text Content */}
        <div className="order-1 lg:order-1 flex flex-col justify-center">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 font-black text-white/40 uppercase tracking-[0.4em] text-xs md:text-sm"
          >
            Marketing & Sales Intelligence
          </MotionDiv>

          <div className="flex flex-col gap-0 mb-12">
            {HERO_ROLES.map((role, index) => (
              <MotionH1
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`text-[10vw] md:text-[5rem] lg:text-[6.5rem] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap select-none ${roleColors[index % roleColors.length]} hover:translate-x-4 transition-transform cursor-default`}
              >
                {role}
              </MotionH1>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl mb-12 border-l-2 border-tiger pl-6 mx-auto lg:mx-0"
          >
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-tight tracking-tight">
              Ich helfe Teams, KI so zu nutzen, <br />
              dass sie wirklich Zeit spart – und nicht nur <br />
              neue Arbeit erzeugt.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-start"
          >
            <MotionA
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-dark rounded-2xl font-black text-xl md:text-xl uppercase tracking-tighter hover:bg-tiger hover:text-white transition-all shadow-2xl"
            >
              <span>→ Kurz klären, ob es Sinn macht</span>
            </MotionA>
          </MotionDiv>
        </div>

        {/* Right Column: Hero Image - Magazine Style */}
        <div className="order-2 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center lg:justify-end">
          <MotionDiv
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md lg:max-w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-2xl group"
          >
            {/* Image */}
            <img
              src="/cedric-profile.png"
              alt="Cedric Vazquez Boo"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />

            {/* Overlay Gradient (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60"></div>

            {/* Decorative Elements */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-white/80 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-maya animate-pulse"></span>
                Available for Projects
              </div>
            </div>

          </MotionDiv>


        </div>

      </div>
    </div>
  );
};

export default Hero;
