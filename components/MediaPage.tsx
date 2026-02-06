import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { MEDIA_METRICS, MEDIA_PROCESS, MEDIA_TESTIMONIALS, MEDIA_EXAMPLES } from '../constants';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionA = motion.a as any;

// ============================================
// HERO SECTION
// ============================================
const MediaHero: React.FC = () => {
  const words = ['SHOOTINGS', 'KI-BILDER', 'KI-VIDEOS'];
  const colors = ['text-tiger', 'text-sunflower', 'text-maya'];

  return (
    <section id="media-hero" className="relative min-h-screen bg-dark flex items-center overflow-hidden px-6 md:px-12 pt-32 pb-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Tagline */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-black text-white/40 uppercase tracking-[0.4em] text-xs md:text-sm"
        >
          KI-Media für E-Commerce
        </MotionDiv>

        {/* Main Headlines */}
        <div className="flex flex-col gap-0 mb-12">
          {words.map((word, index) => (
            <MotionH1
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`text-[12vw] md:text-[6rem] lg:text-[8rem] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap select-none ${colors[index]} hover:translate-x-4 transition-transform cursor-default`}
            >
              {word}
            </MotionH1>
          ))}
        </div>

        {/* Value Proposition */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mb-12 border-l-2 border-tiger pl-6"
        >
          <p className="text-xl md:text-2xl font-medium text-white/90 leading-tight tracking-tight mb-4">
            Bessere Produktbilder = höhere Conversion.
          </p>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            Ein Shooting-Tag. Hunderte KI-generierte Varianten. <br className="hidden md:block" />
            Optimiert für E-Commerce, Ads & Social Media.
          </p>
        </MotionDiv>

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <MotionA
            href="#media-contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-dark rounded-2xl font-black text-lg md:text-xl uppercase tracking-tighter hover:bg-tiger hover:text-white transition-all shadow-2xl"
          >
            <span>→ Kostenloses Erstgespräch</span>
          </MotionA>
          <MotionA
            href="#media-examples"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-2xl font-black text-lg md:text-xl uppercase tracking-tighter hover:bg-white/10 transition-all"
          >
            <span>Beispiele ansehen</span>
          </MotionA>
        </MotionDiv>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-tiger/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-maya/5 rounded-full blur-3xl"></div>
    </section>
  );
};

// ============================================
// METRICS SECTION
// ============================================
const MediaMetrics: React.FC = () => {
  const colorClasses: Record<string, { bg: string; text: string; shadow: string }> = {
    tiger: { bg: 'bg-tiger', text: 'text-tiger', shadow: 'hover:shadow-[8px_8px_0px_0px_#FE6237]' },
    sunflower: { bg: 'bg-sunflower', text: 'text-sunflower', shadow: 'hover:shadow-[8px_8px_0px_0px_#FFBA25]' },
    maya: { bg: 'bg-maya', text: 'text-maya', shadow: 'hover:shadow-[8px_8px_0px_0px_#7CC3FF]' },
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            Das Ergebnis
          </h2>
          <div className="w-24 h-1 bg-tiger mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto">
            Besseres Produktmaterial wirkt direkt auf den Umsatz.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEDIA_METRICS.map((metric, idx) => {
            const colors = colorClasses[metric.color] || colorClasses.tiger;
            return (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: -4, y: -4 }}
                className={`p-10 md:p-12 rounded-3xl border border-white/10 bg-[#0D0D0D] text-center transition-all duration-300 ${colors.shadow}`}
              >
                <div className={`w-12 h-1.5 ${colors.bg} mx-auto mb-8 rounded-full`}></div>
                <div className={`text-6xl md:text-7xl font-black mb-4 ${colors.text}`}>
                  {metric.value}
                </div>
                <div className="text-lg md:text-xl font-bold text-white/60 uppercase tracking-wider">
                  {metric.label}
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROCESS SECTION
// ============================================
const MediaProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgColors = ['bg-tiger', 'bg-sunflower', 'bg-maya'];
  const textColors = ['text-tiger', 'text-sunflower', 'text-maya'];

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            So funktioniert's
          </h2>
          <div className="w-24 h-1 bg-sunflower mx-auto"></div>
        </MotionDiv>

        <div className="space-y-8 md:space-y-12">
          {MEDIA_PROCESS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const bgColor = bgColors[idx % bgColors.length];
            const textColor = textColors[idx % textColors.length];

            return (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 group`}
              >
                {/* Number Badge */}
                <div className="relative flex-shrink-0">
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${bgColor} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-6xl md:text-7xl font-black text-dark relative z-10">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 text-center md:text-left">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl">
                    <h3 className={`text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter ${textColor}`}>
                      {step.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {step.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white/50"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROOF / TESTIMONIALS SECTION
// ============================================
const MediaProof: React.FC = () => {
  // Nur anzeigen wenn Testimonials vorhanden
  if (MEDIA_TESTIMONIALS.length === 0) {
    return null;
  }

  const colorClasses: Record<string, { border: string; text: string }> = {
    tiger: { border: 'border-tiger/40', text: 'text-tiger' },
    sunflower: { border: 'border-sunflower/40', text: 'text-sunflower' },
    maya: { border: 'border-maya/40', text: 'text-maya' },
  };

  return (
    <section className="py-24 md:py-40 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            Proof
          </h2>
          <div className="w-24 h-1 bg-maya mx-auto"></div>
        </MotionDiv>

        {/* Main Testimonial */}
        {MEDIA_TESTIMONIALS.map((testimonial, idx) => {
          const colors = colorClasses[testimonial.color] || colorClasses.tiger;
          return (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-[#0A0A0A] rounded-3xl border ${colors.border} p-8 md:p-12 shadow-2xl mb-12`}
            >
              <div className="flex gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                <div className="lg:col-span-7">
                  <div className="mb-6">
                    <h3 className={`text-4xl md:text-5xl font-black mb-2 uppercase tracking-tighter ${colors.text}`}>
                      {testimonial.company}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                      {testimonial.author} · {testimonial.role}
                    </p>
                  </div>

                  <p className="text-lg md:text-2xl text-white/70 leading-relaxed mb-10 italic font-medium">
                    „{testimonial.quote}"
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {testimonial.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-white/[0.03] border border-white/5 rounded-xl px-6 py-5">
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

                <div className="hidden lg:flex lg:col-span-5 relative rounded-2xl bg-white/[0.02] border border-white/5 items-center justify-center min-h-[300px]">
                  <span className="text-white/5 font-black text-5xl uppercase tracking-tighter">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
};

// ============================================
// EXAMPLES / PORTFOLIO SECTION
// ============================================
const MediaExamples: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<MediaExample | null>(null);
  const categories = ['Alle', ...new Set(MEDIA_EXAMPLES.map(e => e.category).filter(Boolean))];

  const filteredExamples = selectedCategory && selectedCategory !== 'Alle'
    ? MEDIA_EXAMPLES.filter(e => e.category === selectedCategory)
    : MEDIA_EXAMPLES;

  const handleVideoClick = (example: MediaExample) => {
    setPlayingVideo(example);
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section id="media-examples" className="py-24 md:py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            Beispiele
          </h2>
          <div className="w-24 h-1 bg-tiger mx-auto mb-8"></div>
        </MotionDiv>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat === 'Alle' ? null : cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                (cat === 'Alle' && !selectedCategory) || cat === selectedCategory
                  ? 'bg-tiger text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExamples.map((example, idx) => (
            <MotionDiv
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-[#0D0D0D] cursor-pointer"
              onClick={() => example.type === 'video' && handleVideoClick(example)}
            >
              {example.type === 'video' ? (
                <>
                  {/* Video Player */}
                  <video
                    src={example.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                    <span className="text-tiger text-xs font-bold uppercase tracking-wider">{example.category}</span>
                    <h4 className="text-lg font-black text-white mt-1">{example.title}</h4>
                  </div>

                  {/* Video Indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-sm">▶</span>
                  </div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <img
                    src={example.src}
                    alt={example.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback für fehlende Bilder
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Fallback Placeholder für Bilder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📷</div>
                      <span className="text-white/30 font-bold text-sm uppercase tracking-wider">
                        Bild-Platzhalter
                      </span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-tiger text-xs font-bold uppercase tracking-wider">{example.category}</span>
                    <h4 className="text-lg font-black text-white mt-1">{example.title}</h4>
                  </div>
                </>
              )}
            </MotionDiv>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeVideo}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeVideo}
                  className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-2xl z-10"
                >
                  ✕
                </button>

                {/* Video Player */}
                <video
                  src={playingVideo.src}
                  className="w-full h-auto rounded-2xl"
                  controls
                  autoPlay
                  playsInline
                  loop
                />

                {/* Title */}
                <div className="mt-4 text-center">
                  <span className="text-tiger text-sm font-bold uppercase tracking-wider">{playingVideo.category}</span>
                  <h3 className="text-xl font-black text-white mt-2">{playingVideo.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add More Hint */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm">
            Weitere Beispiele auf Anfrage verfügbar
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

// ============================================
// CTA / CONTACT SECTION
// ============================================
const MediaContact: React.FC = () => {
  return (
    <section id="media-contact" className="py-24 md:py-40 px-6 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tiger/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-maya/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
            Bereit für bessere
            <br />
            <span className="text-tiger">Produktbilder?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto">
            Lass uns in 15 Minuten klären, ob und wie wir zusammenpassen.
          </p>

          <MotionA
            href="mailto:hello@cedric-ki.de?subject=Media%20Anfrage"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-dark rounded-2xl font-black text-xl md:text-2xl uppercase tracking-tighter hover:bg-tiger hover:text-white transition-all shadow-2xl"
          >
            <span>→ Jetzt Termin vereinbaren</span>
          </MotionA>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-maya animate-pulse"></span>
              Kostenlos & unverbindlich
            </span>
            <span className="hidden md:block">·</span>
            <span>15 Minuten Erstgespräch</span>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

// ============================================
// FOOTER LINK BACK
// ============================================
const MediaFooter: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="text-white/50 hover:text-white transition-colors font-bold"
        >
          ← Zurück zur Hauptseite
        </a>

        <div className="flex items-center gap-6 text-white/30 text-sm">
          <a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          <a href="#impressum" className="hover:text-white transition-colors">Impressum</a>
        </div>

        <div className="text-white/30 text-sm">
          © {new Date().getFullYear()} Cedric Vazquez Boo
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN MEDIA PAGE COMPONENT
// ============================================
const MediaPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark selection:bg-sunflower selection:text-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-tiger via-maya to-sapphire z-[100] origin-left"
        style={{ scaleX } as any}
      />

      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            className="text-white font-black text-xl tracking-tighter hover:text-tiger transition-colors"
          >
            CEDRIC
          </a>
          <a
            href="#media-contact"
            className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-dark transition-all"
          >
            Kontakt
          </a>
        </div>
      </nav>

      <main>
        <MediaHero />
        <MediaMetrics />
        <MediaProcess />
        <MediaProof />
        <MediaExamples />
        <MediaContact />
      </main>

      <MediaFooter />

      <style>{`
        ::selection {
          background: #FFBA25;
          color: #0A0A0A;
        }
      `}</style>
    </div>
  );
};

export default MediaPage;
