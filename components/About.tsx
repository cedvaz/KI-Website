import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { SKILLS } from '../constants';

// Helper component for the progressive text fill
const ScrollTextLine = ({
  children,
  progress,
  range,
  className = "",
  filledClassName = "text-white",
  outlineColor = "rgba(255,255,255,0.2)"
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  filledClassName?: string;
  outlineColor?: string;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <div className={`relative whitespace-nowrap ${className}`}>
      {/* Outline Layer (Always Visible as base) */}
      <span
        className="text-transparent"
        style={{
          WebkitTextStroke: `1px ${outlineColor}`,
        }}
      >
        {children}
      </span>

      {/* Filled Layer (Reveals on scroll) */}
      <motion.span
        style={{ opacity }}
        className={`absolute inset-0 ${filledClassName}`}
      >
        {children}
      </motion.span>
    </div>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Extended scroll range for creating the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image Animation - Appears at the very end
  const imageOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.85, 0.95], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0.85, 0.95], [-5, 3]);

  return (
    <>
      <section ref={containerRef} id="about" className="relative h-[400vh] bg-dark">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">

          <div className="relative z-10 flex flex-col items-center font-black italic tracking-tighter leading-[0.9] cursor-default text-center w-full max-w-[100vw]">

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.0, 0.15]}
              className="text-[7.5vw] md:text-[7vw]"
            >
              SEIT ÜBER 10 JAHREN
            </ScrollTextLine>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.15, 0.3]}
              className="text-[7.5vw] md:text-[7vw]"
            >
              BEGLEITE ICH KMUS
            </ScrollTextLine>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.3, 0.45]}
              className="text-[7.5vw] md:text-[7vw]"
            >
              IM MARKETING & VERTRIEB
            </ScrollTextLine>

            {/* SPACER for impact */}
            <div className="h-[2vh] md:h-[4vh]"></div>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.45, 0.6]}
              className="text-[12vw] md:text-[16vw] leading-[0.8]"
              filledClassName="text-tiger"
              outlineColor="rgba(254, 98, 55, 0.3)"
            >
              ERGEBNISSE
            </ScrollTextLine>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.6, 0.75]}
              className="text-[12vw] md:text-[16vw] leading-[0.8] mix-blend-difference z-30"
            >
              SCHLAGEN
            </ScrollTextLine>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.75, 0.9]}
              className="text-[12vw] md:text-[16vw] leading-[0.8]"
              filledClassName="text-tiger"
              outlineColor="rgba(254, 98, 55, 0.3)"
            >
              MEINUNGEN
            </ScrollTextLine>


          </div>

        </div>
      </section>

      {/* Skills Grid - Static Section below the scroll container */}
      <section className="bg-dark py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-white/30 font-black uppercase tracking-[0.5em] text-sm mb-16">Expertise & Fokus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-tiger font-black text-2xl">•</span>
                  <h4 className="text-white font-black uppercase text-xl tracking-tight group-hover:text-tiger transition-colors">{skill.title}</h4>
                </div>
                <p className="text-white/60 text-base leading-relaxed pl-6 border-l border-white/10 group-hover:border-tiger/50 transition-colors">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
