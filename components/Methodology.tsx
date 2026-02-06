
import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const Methodology: React.FC = () => {
  const principles = [
    {
      title: "Erst verstehen, dann bauen",
      desc: "Ich starte nicht mit Tools, sondern mit eurer Realität. Was ist das Ziel? Wo hakt es? Was funktioniert schon? Ohne das ist jede KI-Lösung Zufall."
    },
    {
      title: "Qualität schlägt Quantität",
      desc: "Lieber einen Workflow, der sitzt, als fünf, die keiner nutzt. KI kann euer Marketing auf ein neues Level heben – aber nur, wenn die Basis stimmt."
    },
    {
      title: "Euer Team muss es können",
      desc: "Ich baue nichts, was nur ich bedienen kann. Am Ende des Workshops arbeitet euer Team eigenständig – ohne mich, ohne Agentur."
    },
    {
      title: "Ehrlich statt gefällig",
      desc: "Wenn eine Idee Quatsch ist, sag ich das. Wenn KI nicht die Lösung ist, auch. Ihr bezahlt mich nicht fürs Nicken, sondern fürs Mitdenken."
    }
  ];

  const borderColors = [
    'border-tiger/40 hover:border-tiger',
    'border-sunflower/40 hover:border-sunflower',
    'border-maya/40 hover:border-maya',
    'border-sapphire/40 hover:border-sapphire'
  ];

  const numberBgColors = [
    'group-hover:bg-tiger group-hover:border-tiger',
    'group-hover:bg-sunflower group-hover:border-sunflower',
    'group-hover:bg-maya group-hover:border-maya',
    'group-hover:bg-sapphire group-hover:border-sapphire'
  ];

  return (
    <section id="methodology" className="relative py-40 px-6 bg-dark overflow-hidden">
      {/* Background Decor - Subtle gradient glow behind the quote area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-tiger/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-white leading-[0.85]">
                Wie ich <br />
                <span className="text-tiger">arbeite</span>
              </h2>
              <div className="w-20 h-1.5 bg-tiger mb-8"></div>
              <p className="text-xl md:text-2xl text-white/40 leading-tight max-w-md font-medium tracking-tight">
                Kein Framework-Bullshit. Vier Dinge, an die ich glaube – und nach denen ich arbeite.
              </p>
            </MotionDiv>
          </div>

          {/* Right: 4 Principles */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {principles.map((p, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`p-8 md:p-10 rounded-3xl bg-white/[0.03] border ${borderColors[idx]} transition-all flex flex-col gap-6 group`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 font-black text-xs ${numberBgColors[idx]} group-hover:text-white transition-all`}>
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white/50 text-lg leading-snug font-medium">
                    {p.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Bottom: The Quote - Now massive and connected */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center pt-20 pb-10 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
          
          <blockquote className="text-[9vw] md:text-[6.5rem] font-black text-white italic tracking-tighter leading-[0.8] max-w-6xl mx-auto relative inline-block">
            „Lieber einmal den Nagel <br />
            auf den Kopf treffen, <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-tiger">als hundertmal daneben.</span>
              <span className="absolute -inset-4 bg-tiger/20 blur-3xl rounded-full -z-10 animate-pulse-slow"></span>
            </span>"
          </blockquote>
        </MotionDiv>
      </div>

      {/* Final Section Divider - AFTER the quote */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Methodology;
