
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const MotionDiv = motion.div as any;

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 md:py-40 px-6 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-white leading-[1] md:leading-[0.9]">
            Was nach der <br />
            <span className="text-tiger lowercase tracking-tight font-bold inline-block max-w-full break-all md:break-normal">zusammenarbeit</span> bleibt
          </h2>
          <p className="text-lg md:text-2xl text-white/40 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Nicht meine Worte – sondern die von Leuten, <br className="hidden md:block" />
            die jetzt anders arbeiten.
          </p>
        </div>

        <div className="relative min-h-[600px] md:h-[550px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {TESTIMONIALS.map((t, i) => {
              const isFront = i === index;
              const isBehind = i === (index + 1) % TESTIMONIALS.length;

              if (!isFront && !isBehind) return null;

              return (
                <MotionDiv
                  key={t.author}
                  style={{ zIndex: isFront ? 30 : 20 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isFront ? 1 : 0.4,
                    y: isFront ? 0 : -30, 
                    scale: isFront ? 1 : 0.95,
                    filter: isFront ? "blur(0px)" : "blur(2px)",
                    pointerEvents: isFront ? 'auto' : 'none'
                  }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  onClick={handleNext}
                  className={`absolute w-full max-w-5xl bg-[#0A0A0A] rounded-3xl border ${isFront ? 'border-tiger/40' : 'border-white/10'} p-6 md:p-12 shadow-2xl cursor-pointer group`}
                >
                  <div className="flex gap-2 mb-8 md:mb-10">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    <div className="lg:col-span-8">
                      <div className="mb-6">
                        <h3 className="text-3xl md:text-5xl font-black mb-1 uppercase tracking-tighter text-white">
                          {t.author}
                        </h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                          {t.role}
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-4 -top-4 text-6xl text-white/5 font-serif">"</div>
                        <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-medium pl-8">
                          {t.text}
                        </p>
                        <div className="absolute -right-4 -bottom-8 text-6xl text-white/5 font-serif">"</div>
                      </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-4 relative flex items-center justify-center">
                      <div className="relative">
                        {/* Decorative quote mark */}
                        <div className="text-8xl md:text-9xl text-tiger/10 font-serif leading-none">"</div>
                        {/* Subtle gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-tiger/5 to-transparent rounded-full blur-2xl"></div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-12 md:w-16 bg-tiger' : 'w-3 md:w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
