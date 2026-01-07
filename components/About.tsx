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
    <div className={`relative ${className}`}>
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

  // Skills Grid - Also appears at the end
  const skillsOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section ref={containerRef} id="about" className="relative h-[400vh] bg-dark">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4">

        <div className="max-w-[95vw] mx-auto relative z-10 flex flex-col font-black italic tracking-tighter leading-[0.85] cursor-default">

          <ScrollTextLine
            progress={scrollYProgress}
            range={[0.0, 0.15]}
            className="text-[8vw] md:text-[6vw]"
          >
            SEIT ÜBER 10 JAHREN
          </ScrollTextLine>

          <ScrollTextLine
            progress={scrollYProgress}
            range={[0.15, 0.3]}
            className="text-[10vw] md:text-[8vw] self-center md:self-start md:ml-[10vw]"
          >
            BEGLEITE ICH KMUS
          </ScrollTextLine>

          <div className="relative">
            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.3, 0.45]}
              className="text-[8vw] md:text-[6vw] text-right pr-4 md:pr-32"
            >
              IM MARKETING & VERTRIEB
            </ScrollTextLine>

            {/* Profile Image - Revealed at end */}
            <motion.div
              style={{ opacity: imageOpacity, scale: imageScale, rotate: imageRotate }}
              className="absolute -top-[10vw] md:-top-[25vw] right-[5vw] md:right-[15vw] w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] z-20 pointer-events-none"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-dark">
                <img src="/cedric-profile.png" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" alt="Cedric" />
                <div className="absolute inset-0 bg-tiger mix-blend-overlay opacity-20"></div>
              </div>
            </motion.div>
          </div>

          <div className="h-[5vh] md:h-[10vh]"></div>

          {/* PUNCHLINES */}
          <div className="flex flex-col items-center">
            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.45, 0.6]}
              className="text-[15vw] leading-[0.8]"
              filledClassName="text-tiger"
              outlineColor="rgba(254, 98, 55, 0.3)"
            >
              ERGEBNISSE
            </ScrollTextLine>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.6, 0.75]}
              className="text-[15vw] leading-[0.8] z-30 relative mix-blend-difference"
            >
              SCHLAGEN
            </ScrollTextLine>

            <ScrollTextLine
              progress={scrollYProgress}
              range={[0.75, 0.9]}
              className="text-[15vw] leading-[0.8]"
              filledClassName="text-tiger"
              outlineColor="rgba(254, 98, 55, 0.3)"
            >
              MEINUNGEN
            </ScrollTextLine>
          </div>

        </div>

        {/* Skills Grid - Appears at the very bottom of the experience */}
        <motion.div
          style={{ opacity: skillsOpacity }}
          className="absolute bottom-8 left-0 w-full px-8 pb-8"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="border-t border-white/20 pt-4">
                <h4 className="text-tiger font-bold uppercase text-xs tracking-widest mb-1">{skill.title}</h4>
                <p className="text-white text-xs leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
