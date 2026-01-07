
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
    <section className="py-40 px-6 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-white leading-[0.9]">
            Was nach der <br />
            <span className="text-tiger lowercase tracking-tight font-bold">zusammenarbeit</span> bleibt
          </h2>
          <p className="text-xl md:text-2xl text-white/40 font-medium max-w-2xl mx-auto leading-relaxed">
            Klarere Abläufe. Weniger Reibung. <br className="hidden md:block" />
            Systeme, die genutzt werden.
          </p>
        </div>

        <div className="relative h-[650px] md:h-[550px] flex items-center justify-center">
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
                  className={`absolute w-full max-w-5xl bg-[#0A0A0A] rounded-3xl border ${isFront ? 'border-tiger/40' : 'border-white/10'} p-8 md:p-12 shadow-2xl cursor-pointer group`}
                >
                  <div className="flex gap-2 mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                      <div className="mb-6">
                        <h3 className="text-4xl md:text-5xl font-black mb-1 uppercase tracking-tighter text-white">
                          {t.author}
                        </h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                          {t.role}
                        </p>
                      </div>
                      
                      <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 italic font-medium">
                        „{t.text}“
                      </p>

                      <div className="flex gap-4">
                        {t.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="bg-white/[0.03] border border-white/5 rounded-2xl px-8 py-6 flex-1">
                            <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter">
                              {stat.value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-5 relative aspect-square rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                       <span className="text-white/5 font-black text-6xl uppercase tracking-tighter">RESULT</span>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-16 bg-tiger' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
