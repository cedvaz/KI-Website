import React from 'react';
import LegalLayout from './LegalLayout';

const Section: React.FC<React.PropsWithChildren<{ id: string; title: string }>> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-32">
    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">{title}</h2>
    <div className="space-y-5">{children}</div>
  </section>
);

const Impressum: React.FC = () => {
  const toc = [
    { id: 'anbieter', label: 'Anbieter' },
    { id: 'kontakt', label: 'Kontakt' },
    { id: 'register', label: 'Register & Steuer' },
    { id: 'redaktion', label: 'Redaktion' },
    { id: 'streitbeilegung', label: 'Streitbeilegung' },
    { id: 'haftung', label: 'Haftung' },
    { id: 'urheberrecht', label: 'Urheberrecht' },
  ];

  return (
    <LegalLayout title="Impressum" kicker="Anbieterkennzeichnung" updated="16. Juli 2026" toc={toc}>
      <Section id="anbieter" title="1. Anbieter gemäß § 5 DDG">
        <p className="text-white font-bold">Cedric Vazquez Boo</p>
        <p>Geschäftsbezeichnung: Cedric KI – Marketing &amp; Vertrieb mit KI<br />Am Frickenland 4<br />87437 Kempten<br />Deutschland</p>
        <p>Die Geschäftsbezeichnung „Cedric KI“ ist keine eigenständige juristische Person. Anbieter ist Cedric Vazquez Boo als Einzelunternehmer.</p>
      </Section>

      <Section id="kontakt" title="2. Kontakt und elektronische Kommunikation">
        <p>Eine schnelle elektronische Kontaktaufnahme und unmittelbare Kommunikation ist möglich über:</p>
        <p>E-Mail: <a href="mailto:hi@cedric-ki.de" className="text-tiger underline underline-offset-4 hover:text-sunflower transition-colors">hi@cedric-ki.de</a></p>
        <p>Bitte beachten Sie, dass E-Mail-Kommunikation über das Internet Sicherheitsrisiken birgt. Für vertrauliche oder besonders sensible Informationen sollte vorab ein geeigneter sicherer Übertragungsweg abgestimmt werden.</p>
      </Section>

      <Section id="register" title="3. Register-, Steuer- und Aufsichtsangaben">
        <p><strong className="text-white">Rechtsform:</strong> Einzelunternehmen</p>
        <p><strong className="text-white">Registereintrag:</strong> Kein Handelsregistereintrag.</p>
        <p><strong className="text-white">Umsatzsteuer-Identifikationsnummer nach § 27a UStG:</strong> nicht vorhanden.</p>
        <p>Eine private Steuernummer wird nicht veröffentlicht. Sie gehört nicht zu den Pflichtangaben des Impressums und sollte aus Datenschutz- und Sicherheitsgründen nicht öffentlich auf der Website stehen.</p>
        <p><strong className="text-white">Aufsichtsbehörde:</strong> Für die auf dieser Website angebotenen Beratungs-, Workshop- und Vermittlungsleistungen besteht keine besondere behördliche Zulassungspflicht. Eine besondere Aufsichtsbehörde ist daher nicht anzugeben.</p>
      </Section>

      <Section id="redaktion" title="4. Verantwortlich für journalistisch-redaktionelle Inhalte">
        <p>Soweit diese Website journalistisch-redaktionell gestaltete Inhalte im Sinne des § 18 Abs. 2 Medienstaatsvertrag (MStV) enthält, ist hierfür verantwortlich:</p>
        <p className="text-white font-bold">Cedric Vazquez Boo<br />Am Frickenland 4<br />87437 Kempten<br />Deutschland</p>
      </Section>

      <Section id="streitbeilegung" title="5. Verbraucherstreitbeilegung">
        <p>Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <p>Die frühere EU-Plattform zur Online-Streitbeilegung wurde zum 20. Juli 2025 eingestellt. Eine entsprechende Verlinkung wird deshalb nicht mehr angeboten.</p>
      </Section>

      <Section id="haftung" title="6. Haftung für Inhalte und Links">
        <h3 className="text-xl font-bold text-white">Haftung für eigene Inhalte</h3>
        <p>Die Inhalte dieser Website werden mit angemessener Sorgfalt erstellt und regelmäßig geprüft. Für die Richtigkeit, Vollständigkeit und Aktualität kann dennoch keine Gewähr übernommen werden. Die gesetzlichen Pflichten zur Entfernung oder Sperrung rechtswidriger Inhalte bleiben unberührt.</p>

        <h3 className="text-xl font-bold text-white">Haftung für externe Links</h3>
        <p>Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte besteht kein dauerhafter Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden konkreter Rechtsverletzungen werden betroffene Links im Rahmen der gesetzlichen Pflichten geprüft und gegebenenfalls entfernt.</p>

        <h3 className="text-xl font-bold text-white">Keine individuelle Rechts- oder Steuerberatung</h3>
        <p>Die auf dieser Website bereitgestellten Informationen dienen der allgemeinen Information über Leistungen und Arbeitsweise. Sie ersetzen keine individuelle Rechts-, Steuer- oder sonstige Fachberatung.</p>
      </Section>

      <Section id="urheberrecht" title="7. Urheberrecht">
        <p>Die durch den Anbieter erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Speicherung, Verarbeitung oder öffentliche Wiedergabe.</p>
        <p>Soweit Inhalte auf dieser Website nicht vom Anbieter erstellt wurden, werden die Rechte Dritter beachtet und Inhalte entsprechend gekennzeichnet, soweit dies erforderlich ist. Sollten Sie dennoch eine mögliche Rechtsverletzung feststellen, bitten wir um einen Hinweis an <a href="mailto:hi@cedric-ki.de" className="text-tiger underline underline-offset-4 hover:text-sunflower transition-colors">hi@cedric-ki.de</a>. Nach Prüfung werden berechtigte Hinweise unverzüglich bearbeitet.</p>
      </Section>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 text-sm text-white/50">
        <p className="font-bold text-white/80 mb-2">Rechtsgrundlagen</p>
        <p>Die Anbieterkennzeichnung berücksichtigt insbesondere § 5 Digitale-Dienste-Gesetz (DDG), § 18 Medienstaatsvertrag (MStV) und – soweit einschlägig – § 36 Verbraucherstreitbeilegungsgesetz (VSBG).</p>
      </div>
    </LegalLayout>
  );
};

export default Impressum;
