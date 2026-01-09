import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const MotionDiv = motion.div as any;

const Datenschutz: React.FC = () => {
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
              Datenschutzerklärung
            </h1>
            <div className="w-24 h-1 bg-tiger"></div>
            <p className="text-white/60 mt-6 text-sm">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            {/* 1. Verantwortlicher */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">1. Verantwortlicher</h2>
              <div className="space-y-2 text-white/80 leading-relaxed">
                <p>
                  <strong>Verantwortlich für die Datenverarbeitung:</strong>
                </p>
                <p>
                  Cedric Vazquez Boo<br />
                  E-Mail: <a href="mailto:hi@cedric-ki.de" className="text-tiger hover:text-sunflower transition-colors underline">hi@cedric-ki.de</a>
                </p>
              </div>
            </section>

            {/* 2. Allgemeine Hinweise zur Datenverarbeitung */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website.
                </p>
                <p>
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Maßgeblich für die Datenschutz-Grundverordnung (DSGVO), das Bundesdatenschutzgesetz (BDSG) und das Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG) ist die folgende Definition:
                </p>
                <p className="pl-4 border-l-2 border-tiger/50">
                  Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
                </p>
              </div>
            </section>

            {/* 3. Datenverarbeitung beim Besuch unserer Website */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">3. Datenverarbeitung beim Besuch unserer Website</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">3.1 Hosting</h3>
                <p>
                  Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim Aufruf unserer Website werden automatisch Verbindungsdaten verarbeitet. Hierzu gehören:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                </ul>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der Verbesserung der Stabilität und Funktionalität unserer Website. Die Daten werden für die Dauer von 30 Tagen gespeichert.
                </p>
                <p className="text-sm text-white/60 mt-4">
                  <strong>Hinweis:</strong> Vercel verarbeitet Daten in den USA. Es besteht ein Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework). Weitere Informationen finden Sie unter: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-tiger hover:text-sunflower transition-colors underline">https://vercel.com/legal/privacy-policy</a>
                </p>
              </div>
            </section>

            {/* 4. Kontaktformular und E-Mail-Kommunikation */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">4. Kontaktformular und E-Mail-Kommunikation</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden die von Ihnen mitgeteilten Daten (E-Mail-Adresse, ggf. Name, Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Die von Ihnen übermittelten Daten bleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">5. Cookies</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Wir setzen auf unserer Website Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o. ä.) gespeichert werden, wenn Sie unsere Website besuchen.
                </p>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">5.1 Technisch notwendige Cookies</h3>
                <p>
                  Wir setzen technisch notwendige Cookies ein, um die Grundfunktionen unserer Website sicherzustellen. Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website).
                </p>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">5.2 Cookie-Einstellungen</h3>
                <p>
                  Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner anpassen. Zusätzlich können Sie in Ihren Browser-Einstellungen festlegen, ob Cookies gespeichert werden sollen oder nicht.
                </p>
              </div>
            </section>

            {/* 6. Ihre Rechte */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">6. Ihre Rechte</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten.
                  </li>
                  <li>
                    <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, soweit nicht gesetzliche Aufbewahrungspflichten bestehen.
                  </li>
                  <li>
                    <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                  </li>
                  <li>
                    <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
                  </li>
                  <li>
                    <strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen.
                  </li>
                  <li>
                    <strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.
                  </li>
                </ul>
                <p className="mt-4">
                  Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter: <a href="mailto:hi@cedric-ki.de" className="text-tiger hover:text-sunflower transition-colors underline">hi@cedric-ki.de</a>
                </p>
              </div>
            </section>

            {/* 7. Datensicherheit */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">7. Datensicherheit</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten vor Verlust, Zerstörung, Manipulation und unberechtigtem Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                </p>
                <p>
                  Die Übertragung von Daten im Internet erfolgt grundsätzlich über eine verschlüsselte Verbindung (HTTPS/TLS).
                </p>
              </div>
            </section>

            {/* 8. Änderungen dieser Datenschutzerklärung */}
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">8. Änderungen dieser Datenschutzerklärung</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Kontakt</h2>
              <div className="space-y-2 text-white/80 leading-relaxed">
                <p>
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <p>
                  <strong>Cedric Vazquez Boo</strong><br />
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

export default Datenschutz;

