
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-2xl">
            {/* CEDRIC KI Headline entfernt */}

            <div className="space-y-6 mb-12">
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                KI ist kein Tool Thema.<br />
                Es ist ein Struktur Thema.
              </p>
              <p className="text-xl text-white/50 leading-relaxed max-w-xl">
                Ich unterstütze Unternehmen dabei, Marketing und Vertrieb so zu bauen,
                dass KI Arbeit abnimmt – statt neue zu erzeugen.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 block mb-4">Direktkontakt</span>
              <a href="mailto:hi@cedric-ki.de" className="text-2xl md:text-3xl font-black hover:text-tiger transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-tiger">
                hi@cedric-ki.de
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 md:gap-x-24 gap-y-12">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Navigation</h5>
              <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
                <li><a href="#services" className="text-white/40 hover:text-tiger transition-colors">Dienste</a></li>
                <li><a href="#workshops" className="text-white/40 hover:text-sunflower transition-colors">Workshops</a></li>
                <li><a href="#about" className="text-white/40 hover:text-maya transition-colors">Haltung</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Social</h5>
              <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
                <li><a href="https://www.linkedin.com/in/cedric-vazquez-boo/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-sapphire transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/vazced/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-maya transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/40 hover:text-tiger transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
          <div>© 2026 Cedric KI – Marketing & Sales Intelligence</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
