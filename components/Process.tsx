import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS } from '../constants';

const MotionDiv = motion.div as any;

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const colors = ['tiger', 'sunflower', 'maya'];
  const bgColors = ['bg-tiger', 'bg-sunflower', 'bg-maya'];
  const textColorClasses = ['text-tiger', 'text-sunflower', 'text-maya'];

  return (
    <section ref={containerRef} id="process" className="py-32 md:py-48 px-6 bg-dark relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            So legen wir los
          </h2>
          <div className="w-24 h-1 bg-tiger mx-auto"></div>
        </MotionDiv>
        
        <div className="space-y-8 md:space-y-12">
          {PROCESS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const bgColor = bgColors[idx % bgColors.length];
            const textColorClass = textColorClasses[idx % textColorClasses.length];
            
            // Scroll-based animations
            const cardOpacity = useTransform(
              scrollYProgress,
              [idx * 0.25, idx * 0.25 + 0.2],
              [0, 1]
            );
            const cardY = useTransform(
              scrollYProgress,
              [idx * 0.25, idx * 0.25 + 0.2],
              [50, 0]
            );

            return (
              <MotionDiv
                key={idx}
                style={{
                  opacity: cardOpacity,
                  y: cardY
                } as any}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 group`}
              >
                {/* Number Badge */}
                <div className={`relative flex-shrink-0`}>
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${bgColor} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-6xl md:text-7xl font-black text-dark relative z-10">
                      {idx + 1}
                    </span>
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}></div>
                  </div>
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center md:text-left`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl">
                    <h3 className={`text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter ${textColorClass} group-hover:scale-105 transition-transform inline-block`}>
                      {step.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line (Desktop only) */}
                {idx < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent" 
                       style={{ top: `${(idx + 1) * 33.33}%` }}></div>
                )}
              </MotionDiv>
            );
          })}
        </div>

        {/* CTA at the end */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 md:mt-32"
        >
          <a
            href="#contact"
            className="inline-block px-12 py-6 bg-white text-dark rounded-2xl font-black text-xl md:text-2xl uppercase tracking-tighter hover:bg-tiger hover:text-white transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Jetzt starten →
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Process;