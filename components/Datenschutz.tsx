import React from 'react';

const Datenschutz: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans antialiased overflow-x-hidden">
            <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:py-6 pointer-events-none">
                <div className="mx-auto max-w-7xl flex flex-col items-center">
                    <div className="pointer-events-auto flex items-center gap-3 md:gap-8 px-3 md:px-6 py-2 rounded-2xl md:rounded-full border transition-all duration-500 bg-dark/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-white/20 scale-95 md:scale-100">
                        <a href="/" className="flex items-center gap-3 pr-2 border-r border-white/10 group focus:outline-none">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-tiger via-sunflower to-sapphire transition-transform group-hover:scale-110"></div>
                            <span className="font-black text-[10px] tracking-widest uppercase hidden sm:block text-white/80">Cedric</span>
                        </a>
                        <div className="hidden md:flex items-center gap-8 px-4">
                            <a href="/#services" className="text-[10px] font-black uppercase tracking-[0.2em] transition-all text-white/40 hover:text-white/70">Dienste</a>
                            <a href="/#workshops" className="text-[10px] font-black uppercase tracking-[0.2em] transition-all text-white/40 hover:text-white/70">Workshops</a>
                        </div>
                        <a href="/#contact" className="group relative px-4 md:px-6 py-2 rounded-xl md:rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 focus:outline-none bg-sapphire text-white">
                            <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Jetzt anfragen</span>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Datenschutzerklärung</h1>
                <div className="w-24 h-1 bg-tiger mb-8"></div>

                <div className="space-y-12 text-white/80 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-3xl font-black uppercase mb-4 text-white">1. Verantwortlicher</h2>
                        <p><strong>Verantwortlich für die Datenverarbeitung:</strong></p>
                        <p>Cedric Vazquez Boo<br />Am Frickenland 4<br />87437 Kempten<br />Deutschland<br />hi@cedric-ki.de</p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase mb-4 text-white">2. Hosting</h2>
                        <p>Unsere Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite werden Verbindungsdaten wie IP-Adresse und Zugriffszeit verarbeitet.</p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase mb-4 text-white">3. Ihre Rechte</h2>
                        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch bezüglich Ihrer Daten.</p>
                    </section>

                    <p className="pt-8 border-t border-white/10 italic">Vollständiger Text in der public/datenschutz.html Datei verfügbar.</p>
                </div>
            </main>
        </div>
    );
};

export default Datenschutz;
