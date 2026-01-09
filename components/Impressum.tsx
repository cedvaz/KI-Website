import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const MotionDiv = motion.div as any;

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Impressum
            </h1>
            <div className="w-24 h-1 bg-tiger"></div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8 text-white/80 leading-relaxed"
          >
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p>
                  <strong>Cedric Vazquez Boo</strong>
                </p>
                <p>
                  Marketing & Vertrieb mit KI
                </p>
                <p>
                  Am Frickenland 4<br />
                  87437 Kempten<br />
                  Deutschland
                </p>
                <p>
                  E-Mail: <a href="mailto:hi@cedric-ki.de" className="text-tiger hover:text-sunflower transition-colors underline">hi@cedric-ki.de</a>
                </p>
                <p className="mt-4">
                  <strong>Umsatzsteuer-Identifikationsnummer:</strong><br />
                  UG in Gründung
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="space-y-2">
                <p>
                  <strong>Cedric Vazquez Boo</strong>
                </p>
                <p>
                  E-Mail: <a href="mailto:hi@cedric-ki.de" className="text-tiger hover:text-sunflower transition-colors underline">hi@cedric-ki.de</a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Haftungsausschluss</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>
                  Bei Fragen können Sie sich jederzeit an uns wenden:
                </p>
                <p>
                  <strong>Cedric Vazquez Boo</strong><br />
                  Am Frickenland 4<br />
                  87437 Kempten<br />
                  Deutschland<br />
                  E-Mail: <a href="mailto:hi@cedric-ki.de" className="text-tiger hover:text-sunflower transition-colors underline">hi@cedric-ki.de</a>
                </p>
              </div>
            </section>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;

