import React from 'react';

const Impressum: React.FC = () => {
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
                <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Impressum</h1>
                <div className="w-24 h-1 bg-tiger mb-8"></div>

                <div className="space-y-12 text-white/80 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-3xl font-black uppercase mb-4 text-white">Angaben gemäß § 5 TMG</h2>
                        <p><strong>Cedric Vazquez Boo</strong><br />Marketing & Vertrieb mit KI<br />Am Frickenland 4<br />87437 Kempten<br />Deutschland</p>
                        <p className="mt-4">E-Mail: hi@cedric-ki.de</p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase mb-4 text-white">Umsatzsteuer-ID</h2>
                        <p>UG in Gründung</p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase mb-4 text-white">Haftungsausschluss</h2>
                        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Impressum;
