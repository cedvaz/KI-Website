import React from 'react';
import { navigateWithoutReload } from '../lib/navigation';

interface LegalLayoutProps {
  title: string;
  kicker: string;
  updated: string;
  toc: Array<{ id: string; label: string }>;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, kicker, updated, toc, children }) => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans antialiased overflow-x-hidden selection:bg-sunflower selection:text-dark">
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:py-6 pointer-events-none">
        <div className="mx-auto max-w-7xl flex flex-col items-center">
          <div className="pointer-events-auto flex items-center gap-3 md:gap-8 px-3 md:px-6 py-2 rounded-2xl md:rounded-full border bg-dark/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-white/20">
            <a href="/" className="flex items-center gap-3 pr-2 border-r border-white/10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-tiger rounded-lg">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-tiger via-sunflower to-sapphire transition-transform group-hover:scale-110" />
              <span className="font-black text-[10px] tracking-widest uppercase hidden sm:block text-white/80">Cedric</span>
            </a>
            <div className="hidden md:flex items-center gap-8 px-4">
              <a href="/#services" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Dienste</a>
              <a href="/#workshops" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Workshops</a>
              <a href="/#about" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Haltung</a>
            </div>
            <a href="/#contact" className="group relative px-4 md:px-6 py-2 rounded-xl md:rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sapphire bg-sapphire text-white">
              <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Jetzt anfragen</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <header className="max-w-4xl mb-16 md:mb-24">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] text-tiger mb-6">{kicker}</p>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.88]">{title}</h1>
            <div className="w-24 h-1 bg-tiger mt-8 mb-6" />
            <p className="text-sm text-white/40">Stand: {updated}</p>
          </header>

          <div className="grid lg:grid-cols-[220px_minmax(0,760px)] gap-12 lg:gap-24 items-start">
            <aside className="lg:sticky lg:top-32 order-2 lg:order-1">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-5">Auf dieser Seite</p>
              <nav aria-label="Inhaltsverzeichnis" className="border-l border-white/10">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block pl-4 py-2 text-sm text-white/45 hover:text-white hover:border-l-2 hover:border-tiger -ml-px transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="order-1 lg:order-2 space-y-16 text-base md:text-lg text-white/70 leading-relaxed">
              {children}
            </article>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#080808] px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm text-white/40">
          <div>
            <p className="font-black text-white/70 uppercase tracking-[0.2em] text-xs mb-2">Cedric KI</p>
            <p>Marketing &amp; Vertrieb mit KI</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-start">
            <a href="/#services" className="hover:text-white transition-colors">Dienste</a>
            <a href="/#contact" className="hover:text-white transition-colors">Kontakt</a>
            <a href="/impressum" onClick={(event) => { event.preventDefault(); navigateWithoutReload('/impressum'); }} className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" onClick={(event) => { event.preventDefault(); navigateWithoutReload('/datenschutz'); }} className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
