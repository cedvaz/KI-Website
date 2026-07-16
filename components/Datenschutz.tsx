import React from 'react';
import LegalLayout from './LegalLayout';

const Link: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-tiger underline underline-offset-4 decoration-tiger/40 hover:text-sunflower hover:decoration-sunflower transition-colors">
    {children}
  </a>
);

const Section: React.FC<React.PropsWithChildren<{ id: string; title: string }>> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-32">
    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">{title}</h2>
    <div className="space-y-5">{children}</div>
  </section>
);

const Datenschutz: React.FC = () => {
  const toc = [
    { id: 'verantwortlicher', label: 'Verantwortlicher' },
    { id: 'grundlagen', label: 'Grundlagen' },
    { id: 'hosting', label: 'Hosting & Serverlogs' },
    { id: 'ressourcen', label: 'Externe Ressourcen' },
    { id: 'speicher', label: 'Speicher & Cookies' },
    { id: 'kontakt', label: 'Kontakt & Termine' },
    { id: 'empfaenger', label: 'Empfänger' },
    { id: 'speicherdauer', label: 'Speicherdauer' },
    { id: 'rechte', label: 'Ihre Rechte' },
    { id: 'sicherheit', label: 'Sicherheit & Änderungen' },
  ];

  return (
    <LegalLayout title="Datenschutzerklärung" kicker="Privatsphäre ohne Nebelkerzen" updated="16. Juli 2026" toc={toc}>
      <div className="rounded-3xl border border-tiger/30 bg-tiger/[0.08] p-6 md:p-8 text-white/80">
        <p className="font-bold text-white mb-2">Kurz gesagt</p>
        <p>Diese Website ist eine schlanke Informationsseite. Es werden hier derzeit keine Analyse-, Werbe- oder Social-Media-Trackingdienste eingesetzt. Die nachfolgenden Angaben beschreiben die aktuell tatsächlich eingebundenen Dienste und Kontaktwege.</p>
      </div>

      <Section id="verantwortlicher" title="1. Verantwortlicher">
        <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
        <p className="text-white font-bold">Cedric Vazquez Boo<br />Am Frickenland 4<br />87437 Kempten<br />Deutschland</p>
        <p>E-Mail: <a href="mailto:hi@cedric-ki.de" className="text-tiger underline underline-offset-4 hover:text-sunflower transition-colors">hi@cedric-ki.de</a></p>
        <p>Ein Datenschutzbeauftragter ist für dieses Einzelunternehmen nach derzeitigem Kenntnisstand nicht bestellt. Für alle Datenschutzfragen genügt eine Nachricht an die oben genannte E-Mail-Adresse.</p>
      </Section>

      <Section id="grundlagen" title="2. Gegenstand und Rechtsgrundlagen">
        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Kommunikation mit Ihnen, zur Terminvereinbarung oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.</p>
        <p>Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag und vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen). Unsere berechtigten Interessen liegen in der sicheren, stabilen und nutzerfreundlichen Bereitstellung der Website sowie in der Bearbeitung von Anfragen.</p>
        <p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen. Pflichtangaben werden im jeweiligen Kontaktweg kenntlich gemacht. Eine Nutzung der Website ist grundsätzlich ohne aktive Angabe personenbezogener Daten möglich.</p>
      </Section>

      <Section id="hosting" title="3. Hosting und technische Zugriffsdaten">
        <p>Die Website wird über Vercel bereitgestellt. Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Beim Aufruf der Website werden technisch erforderliche Verbindungsdaten verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte URL, Referrer-URL, Browsertyp und -version, Betriebssystem, HTTP-Statuscode sowie übertragene Datenmenge.</p>
        <p>Die Verarbeitung dient der Auslieferung der Website, der Stabilität, der Fehleranalyse und dem Schutz vor Missbrauch. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht oder anonymisiert, sobald sie für diese Zwecke nicht mehr erforderlich sind; bei Sicherheitsvorfällen kann eine längere Aufbewahrung zur Aufklärung und Rechtsverfolgung erforderlich sein.</p>
        <p>Vercel kann Daten in den USA und in weiteren Staaten verarbeiten. Für Übermittlungen in Drittländer gelten die von Vercel beschriebenen Datenschutzgarantien und, soweit anwendbar, Standardvertragsklauseln oder andere geeignete Garantien. Weitere Informationen finden Sie in der <Link href="https://vercel.com/legal/privacy-notice">Datenschutzerklärung von Vercel</Link> und im <Link href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</Link>.</p>
        <p>Vercel verarbeitet Daten, die für den Betrieb unserer Website anfallen, je nach Datenkategorie als Auftragsverarbeiter für uns oder als eigener Verantwortlicher für eigene Service-, Sicherheits- und Abrechnungszwecke. Wir haben keinen Einfluss auf die jeweiligen Löschfristen von Vercel; maßgeblich sind die dort veröffentlichten Informationen und die vertraglichen Vereinbarungen.</p>
      </Section>

      <Section id="ressourcen" title="4. Externe Ressourcen und Inhalte">
        <h3 className="text-xl font-bold text-white">4.1 Tailwind CSS CDN</h3>
        <p>Für die Darstellung wird derzeit das Skript <code className="text-tiger">cdn.tailwindcss.com</code> geladen. Beim Laden wird eine Verbindung zum CDN hergestellt; dabei werden insbesondere IP-Adresse, Browserinformationen und die angeforderte URL übertragen. Die Einbindung dient ausschließlich der Darstellung und Funktion der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>

        <h3 className="text-xl font-bold text-white">4.2 Externe Links</h3>
        <p>Auf der Website befinden sich Links zu LinkedIn, Instagram und der Terminbuchungsseite von Cal.com unter <code className="text-tiger">app.cal.eu</code>. Diese Dienste sind nicht in die Website eingebettet. Bis zum Aufruf des jeweiligen Links werden durch uns keine Daten an diese Plattformen übermittelt. Nach dem Klick gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Für Cal.com gilt die <Link href="https://cal.com/privacy">Datenschutzerklärung von Cal.com</Link>.</p>
      </Section>

      <Section id="speicher" title="5. Cookies und lokaler Speicher">
        <p>Wir setzen derzeit keine nicht erforderlichen Cookies, keine Analytics-Cookies und keine Marketing-Cookies ein. Die Website verwendet kein Google Analytics, kein Meta Pixel, kein LinkedIn Insight Tag und keine vergleichbaren Tracking-Technologien.</p>
        <p>Der Cookie-Hinweis speichert Ihre Auswahl ausschließlich im lokalen Speicher Ihres Browsers unter dem Schlüssel <code className="text-tiger">cookie-consent-v2</code>. Diese Speicherung bleibt auf Ihrem Endgerät und wird nicht an uns übertragen. Sie können sie jederzeit über die Einstellungen Ihres Browsers löschen. Wird der lokale Speicher gelöscht, kann der Hinweis erneut erscheinen.</p>
        <p>Die Speicherung ist für die Anzeige des Hinweises und die Vermeidung wiederholter Abfragen erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO in Verbindung mit § 25 Abs. 2 Nr. 2 TDDDG, soweit die Speicherung für die vom Nutzer gewünschte Funktion unbedingt erforderlich ist.</p>
        <p>Falls künftig optionale Dienste ergänzt werden, werden diese erst nach einer wirksamen Einwilligung geladen und in dieser Datenschutzerklärung sowie im Einwilligungsdialog ergänzt.</p>
      </Section>

      <Section id="kontakt" title="6. Kontakt, E-Mail und Terminbuchung">
        <h3 className="text-xl font-bold text-white">6.1 Kontakt per E-Mail</h3>
        <p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten, insbesondere Name, E-Mail-Adresse, Inhalt der Nachricht und gegebenenfalls weitere freiwillige Angaben. Die Daten werden zur Bearbeitung der Anfrage, zur Kommunikation und – sofern daraus ein Auftrag entsteht – zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen verarbeitet.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen abzielt, andernfalls Art. 6 Abs. 1 lit. f DSGVO. E-Mails werden gelöscht, sobald die Anfrage abschließend bearbeitet ist, sofern keine gesetzlichen Aufbewahrungsfristen oder berechtigten Gründe für eine weitere Speicherung bestehen.</p>
        <p>Bitte senden Sie keine besonderen Kategorien personenbezogener Daten nach Art. 9 DSGVO, insbesondere keine Gesundheitsdaten, über die allgemeine Kontaktadresse, sofern dies nicht ausdrücklich erforderlich und zuvor abgestimmt ist.</p>

        <h3 className="text-xl font-bold text-white">6.2 Terminbuchung über Cal.eu</h3>
        <p>Die Website verlinkt auf eine externe Terminbuchungsseite. Es findet keine Einbettung des Kalenders statt. Wenn Sie den Link öffnen und dort einen Termin buchen, verarbeitet Cal.com die von Ihnen eingegebenen Buchungsdaten sowie technische Nutzungsdaten nach eigener Verantwortung. Einzelheiten, Empfänger, Speicherdauer und mögliche Drittlandübermittlungen ergeben sich aus der <Link href="https://cal.com/privacy">Datenschutzerklärung von Cal.com</Link>. Für die Terminbuchung kann eine Verarbeitung zur Durchführung vorvertraglicher Maßnahmen oder eines gewünschten Termins nach Art. 6 Abs. 1 lit. b DSGVO vorliegen.</p>
      </Section>

      <Section id="empfaenger" title="7. Empfänger und Drittlandübermittlungen">
        <p>Empfänger personenbezogener Daten können die von uns eingesetzten technischen Dienstleister sein, insbesondere der Hosting- und Infrastrukturpartner Vercel. Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Bereitstellung der Website, zur Bearbeitung Ihrer Anfrage, zur Erfüllung eines Vertrags, aufgrund einer gesetzlichen Verpflichtung oder auf Grundlage Ihrer Einwilligung erforderlich ist.</p>
        <p>Bei E-Mail-Kommunikation erhalten neben uns auch die an der Übermittlung beteiligten E-Mail- und Telekommunikationsanbieter technisch bedingt Zugriff auf Verbindungs- und Nachrichtendaten. Wir haben keinen Einfluss auf deren konkrete Speicherdauer. Bitte nutzen Sie für vertrauliche Inhalte einen geeigneten sicheren Übertragungsweg.</p>
        <p>Soweit Dienstleister außerhalb des Europäischen Wirtschaftsraums eingesetzt werden, erfolgt die Übermittlung nur unter den Voraussetzungen der Art. 44 ff. DSGVO, insbesondere auf Grundlage eines Angemessenheitsbeschlusses, geeigneter Garantien oder einer gesetzlichen Ausnahme.</p>
      </Section>

      <Section id="speicherdauer" title="8. Speicherdauer und Löschung">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[620px] text-left text-sm md:text-base">
            <thead className="bg-white/5 text-white">
              <tr><th className="p-4 font-bold">Datenkategorie</th><th className="p-4 font-bold">Kriterium der Speicherdauer</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-4">Technische Zugriffsdaten</td><td className="p-4">Bis zur Erreichung des technischen und sicherheitsbezogenen Zwecks; längere Speicherung nur bei Sicherheits- oder Rechtsfällen.</td></tr>
              <tr><td className="p-4">E-Mail-Anfragen</td><td className="p-4">Bis zur abschließenden Bearbeitung, danach Löschung, soweit keine Aufbewahrungspflicht oder Rechtsverteidigung entgegensteht.</td></tr>
              <tr><td className="p-4">Vertrags- und Rechnungsdaten</td><td className="p-4">Nach den gesetzlichen handels- und steuerrechtlichen Aufbewahrungsfristen.</td></tr>
              <tr><td className="p-4">Lokale Einwilligungspräferenz</td><td className="p-4">Bis zur Löschung durch Sie im Browser.</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="rechte" title="9. Ihre Rechte">
        <p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen folgende Rechte:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO),</li>
          <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO),</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO),</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
          <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO),</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an <a href="mailto:hi@cedric-ki.de" className="text-tiger underline underline-offset-4 hover:text-sunflower transition-colors">hi@cedric-ki.de</a>. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig für nichtöffentliche Stellen in Bayern ist insbesondere das <Link href="https://www.lda.bayern.de/de/kontakt.html">Bayerische Landesamt für Datenschutzaufsicht (BayLDA)</Link>, Promenade 18, 91522 Ansbach, E-Mail: poststelle@lda.bayern.de.</p>
      </Section>

      <Section id="sicherheit" title="10. Datensicherheit und Änderungen">
        <p>Wir verwenden für die Übertragung dieser Website grundsätzlich TLS/HTTPS. Der Zugriff auf die Website und ihre Inhalte wird technisch gegen typische Missbrauchs- und Angriffsversuche abgesichert. Absolute Sicherheit bei der Übertragung über das Internet kann dennoch nicht garantiert werden.</p>
        <p>Wir treffen keine Entscheidungen, die ausschließlich auf einer automatisierten Verarbeitung einschließlich Profiling beruhen und Ihnen gegenüber rechtliche Wirkung entfalten oder Sie in vergleichbarer Weise erheblich beeinträchtigen.</p>
        <p>Diese Datenschutzerklärung wird angepasst, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern. Maßgeblich ist die jeweils auf dieser Seite veröffentlichte Fassung mit dem angegebenen Stand.</p>
        <p className="pt-6 border-t border-white/10 text-sm text-white/45">Hinweis: Diese Datenschutzerklärung beschreibt den aktuellen technischen Stand der Website. Werden später Analyse-, Marketing-, Newsletter-, Formular- oder eingebettete Videodienste ergänzt, müssen die Verarbeitungsvorgänge vor dem Go-live separat geprüft und hier ergänzt werden.</p>
      </Section>
    </LegalLayout>
  );
};

export default Datenschutz;
