# Cedric KI – Masterplan

**Version 7 · Stand 21. Juli 2026 · Horizont: 90 Tage + laufend**

> **Zielbild:** Cedric KI wird die sichtbarste Adresse für praktische KI in Marketing, Vertrieb und Content im Allgäu – nicht als kleinere Kopie von Ehrenmüller, sondern als klar abgegrenzter Spezialist daneben.
> Zielsatz im Markt: „Wenn wir ein Data-Science-System brauchen, gehen wir zu Ehrenmüller. Wenn unser Marketing- oder Vertriebsteam KI ab morgen produktiv nutzen soll, gehen wir zu Cedric."

## Getroffene Entscheidungen (21.07.2026)

| Thema | Entscheidung |
|---|---|
| Tracks | **Zwei getrennte Tracks:** Website nur Marketing/Vertrieb/Content Allgäu. Real Estate läuft parallel als JV-/Equity-Track über direkte Kontakte – ohne Website-Präsenz. |
| Markenarchitektur | Cedric KI als Speerspitze jetzt → **CVB als Dachmarke** in 12–24 Monaten. Design-System hängt nicht am Namen. |
| CI | **„Klartext / Poster"** mit Palette **„Dusty" v1** (Red Pigment #CC3525 als einziger Akzent). Tauschbare Farb-Tokens. Designer-Website, kein KI-/SaaS-Baukasten. → Details: `BRAND-GUIDE.md` |
| Tech | **Astro** (statisches HTML pro Seite, React-Islands für Animationen, Markdown-Content). Tailwind sauber installiert statt CDN-Script. |

## Phase 0 · Positionierung & Markenkern (Woche 1)

- Messaging-Haus (1 Seite): Kernbotschaft, drei Beweissäulen (Marketing / Vertrieb / Workshops & Enablement), Tonalität, Tabu-Formulierungen
- Wettbewerbs-Abgrenzung als interner Einzeiler pro Wettbewerber (Ehrenmüller, Allgäu AI, Context Studios)

## Phase 1 · CI & Design-System (Woche 1–3) — ✅ weitgehend erledigt

- Brand Guide v2.0 liegt vor (`BRAND-GUIDE.md`)
- Offen: exakte Hex-Werte für Almond/Ash Silk/Cold Velvet bestätigen; Delight-Lizenz prüfen
- Vorlagen aus demselben Token-Set: OG-Image, LinkedIn-Grafik, Workshop-Slide-Master, Angebots-PDF

## Phase 2 · Geschäftsmodell & Angebotsarchitektur (Woche 2–4)

Designprinzip: Implementierung wandert systematisch von Cedric weg – Enablement statt Agentur.

| Stufe | Produkt | Rolle | Preis-Hausnummer* |
|---|---|---|---|
| Einstieg | Keynote / Impuls | Reichweite, Autorität, Leadquelle | 2,5–5 k € |
| Kern | Workshops (Content · Marketing · Sales) | Hauptumsatz, paketiert, 1 Tag + Follow-up | 3,5–6 k € / Tag |
| Wiederkehrend | KI-Sparring / Retainer | MRR-Baustein Richtung 20–50 k-Ziel | 1,5–3 k € / Monat |
| Skalierbar | KI-Content-Produktion | Produktisiert, später delegierbar | projektbasiert |

*Diskussionsgrundlage, nicht final.

**Funnel:** LinkedIn + regionale SEO + Events → 15-Minuten-Call („Kurz klären, ob es Sinn macht") → Workshop → Retainer. Jeder Abschluss produziert systematisch Case + Google-Bewertung.

## Phase 3 · Website-Technik & Seitenarchitektur (Woche 3–6)

Migration auf Astro, dann bekommt jede Suchintention genau eine starke Seite:

| Suchintention | URL | Aufgabe |
|---|---|---|
| Cedric KI / KI-Experte Allgäu | `/` | Marke, Person, regionale Positionierung |
| KI-Beratung Allgäu | `/ki-beratung-allgaeu` | Breite kommerzielle Einstiegsseite |
| KI-Workshop Allgäu | `/ki-workshops-allgaeu` | Formate, Ablauf, Zielgruppen, Ergebnisse |
| KI-Marketing-Workshop | `/ki-marketing-workshop` | Marketingteams und CMOs |
| KI-Vertriebsworkshop | `/ki-vertriebsworkshop` | Sales-Teams und Vertriebsleiter |
| KI-Keynote | `/ki-keynote` | Unternehmen, Verbände, Veranstaltungen |
| KI-Content-Produktion | `/ki-content-produktion` | Bilder, Videos, Kampagnen, Media |
| Referenzen | `/referenzen` | Vertrauens- und Proof-Hub |
| Einzelne Cases | `/referenzen/schorer-wolf` | Ausgangslage, Umsetzung, Resultat, Zitat |
| Wissen | `/wissen` | Themenautorität, 2 Artikel/Monat |
| Person | `/ueber-cedric-vazquez-boo` | Erfahrung, Projekte, Medien, Vorträge |

**Technische SEO-Checkliste (pro Seite):**
- Eigener Title + Meta Description, genau eine H1, eigener Canonical, eigenes OG-Image
- Schema: `ProfessionalService` mit `areaServed` Allgäu/Kempten (statt „Deutschland"), `Person`, `Service`, `Article`, `BreadcrumbList` – immer deckungsgleich mit sichtbarem Inhalt
- Sitemap mit allen echten URLs (keine Fragment-URLs wie `/#media`), interne Verlinkung Leistung ↔ Case ↔ Artikel
- Sichtbarer Autor + Aktualisierungsdatum auf Wissens- und Case-Seiten
- **Keine Städte-Seiten-Farm** – Stadtseiten erst bei echter Substanz vor Ort (Kunde, Event, Vortrag)

## Phase 4 · Content & Beweisführung (Woche 4–12, dann laufend)

Google soll nicht lesen, dass Cedric der KI-Experte im Allgäu ist – Google soll überall Beweise finden.

1. **Startseite neu:** Eine klare H1 („KI für Marketing und Vertrieb – aus Kempten, fürs Allgäu") statt vier einzelner H1s
2. **Case Schorer + Wolf** als Leuchtturm (Testimonial Matthias Hiller, −60 % Production Cost, existiert in `constants.tsx`), danach cvift (Sales) und digital new x (Marketing)
3. **Leistungsseiten** in Reihenfolge: Workshops Allgäu → Beratung Allgäu → Marketing-Workshop → Vertriebsworkshop → Keynote → Content-Produktion
4. **Über-Cedric-Seite** mit nachweisbarer Erfahrung, Vorträgen, Medien, echten Fotos
5. **Wissen:** 2 Praxis-Artikel/Monat. Startthemen: Was kostet ein KI-Workshop? · Workshop oder Beratung – was wann? · 7 KI-Anwendungen für Marketingteams · Markenstimme in KI-Tools abbilden · KI im Vertrieb: Was sich wirklich automatisieren lässt · Vorbereitung auf einen KI-Workshop

## Phase 5 · Regionale Autorität / Off-Site (ab Woche 4, laufend)

- **Google-Unternehmensprofil** vollständig (Kategorie, Leistungen, Fotos; Adresse nur öffentlich, wenn Kunden empfangen werden – sonst Service-Area-Business)
- **Bewertungen sofort:** Matthias Hiller, Knut Jentsch, Dominik Grätz anfragen. Danach nach jedem Projekt. Ziel: 10 Bewertungen in 90 Tagen
- Konsistente Unternehmensdaten auf Website, Google, LinkedIn, Allgäu-Verzeichnissen
- Eigenes Format: „KI-Frühstück Allgäu" o. ä. – wiederkehrend, mit Eventseite, Rückblick, Fotos, Partnerverlinkung
- Vorträge bei IHK / Allgäu Digital / Wirtschaftsverbänden; jeder Auftritt bekommt eine verlinkbare Seite
- Langfrist-Asset: jährliches **„KI-Lagebild Allgäu"** (eigene Umfrage, Download, Pressetermin)

## 90-Tage-Roadmap

| Zeitraum | Fokus | Ergebnis |
|---|---|---|
| Woche 1 | Entscheidungen, Messaging-Haus | Positionierung schriftlich fixiert ✅ |
| Woche 1–3 | Brand-Richtung, CI, Brand Guide | Brand Guide v2.0 ✅ |
| Woche 2–4 | Angebotsarchitektur, Preise, Lead-Magnet | Pakete verkaufsfertig |
| Woche 3–6 | Astro-Migration, Seitengerüst, technisches SEO, GBP anlegen | Indexierbare Mehrseiten-Site live |
| Woche 4–8 | Startseite, Workshops-Allgäu, Beratung-Allgäu, Case Schorer+Wolf, Über-Cedric | Kernseiten + Leuchtturm-Case online |
| Woche 6–12 | 3 Google-Bewertungen, 2 Wissensartikel/Monat, erstes Event | Off-Site-Autorität angelaufen |
| ab Woche 12 | Search-Console-Review | Weitere Seiten nur datenbasiert |

## Messgrößen

- Qualifizierte Anfragen pro Monat über Website + GBP (Zielgröße)
- GSC-Impressionen/Klicks für „ki workshop allgäu", „ki beratung allgäu", „ki experte allgäu"
- Google-Bewertungen (Ziel: 10 in 90 Tagen) und GBP-Aufrufe
- Indexierte Seiten und Top-10-Rankings für Kern-Keywords
