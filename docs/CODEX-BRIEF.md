# Build-Brief: Cedric KI Website (Astro)

> Anweisung für den Coding-Agent (Codex o. ä.). Lies zuerst `BRAND-GUIDE.md` (Design-Gesetze) und `MASTERPLAN.md` (Kontext & Seitenarchitektur) im selben Ordner. Bei Konflikt gilt: BRAND-GUIDE.md > dieser Brief > eigene Präferenzen.

## Auftrag

Baue die Website **cedric-ki.de** neu als Astro-Projekt. Erste Ausbaustufe: Startseite + Grundgerüst für alle Seiten aus der Architektur-Tabelle in `MASTERPLAN.md` (Phase 3). Sprache der Website: Deutsch. Code, Variablen, Kommentare: Englisch.

## Stack

- **Astro** (aktuelle Version), statisches Output (`output: 'static'`)
- **Tailwind CSS** als Build-Dependency (KEIN CDN-Script)
- **React-Islands** nur wo Animation echten Mehrwert hat (z. B. Hero) – Standard ist reines HTML/CSS
- Deployment: Vercel

## Design-Tokens (nicht verhandelbar)

Alle Farben laufen über die 5 semantischen Tokens aus `BRAND-GUIDE.md` § 03 (CSS Custom Properties, in Tailwind via `var()` eingebunden). **Komponenten enthalten niemals Hex-Werte.** Ein Palettenwechsel darf nur das Ändern der 5 `--c-*`-Werte an einer Stelle erfordern. Schreibe die Tokens in eine einzige Datei (z. B. `src/styles/tokens.css`).

```css
--c-paper:    #F9F7F0;  /* Almond Canvas */
--c-ink:      #000000;  /* Absolute */
--c-accent:   #CC3525;  /* Red Pigment */
--c-surface1: #DBE1E8;  /* Ash Silk */
--c-surface2: #A9C2D8;  /* Cold Velvet */
```

## Fonts

- **Display: Delight** (Black + Light) – Font-Dateien liegen noch nicht im Repo; baue mit Fallback **Archivo Black** (Display-Poster) und einer leichten Grotesk für ruhige Headlines, so dass Delight später per `@font-face` eingesteckt werden kann (eigene Datei `src/styles/fonts.css`).
- **Body: Satoshi** (Fontshare, self-hosted woff2)
- **Labels/Zahlen: Space Mono** (self-hosted)
- Keine Font-CDNs, `font-display: swap`.

## Harte Design-Verbote (aus BRAND-GUIDE.md § 06)

- Kein `border-radius` > 0, keine Box-Shadows
- Keine Gradients/Glows/Blobs, kein Glassmorphism
- Kein zentrierter SaaS-Hero, keine Badge-Pillen, keine Icon-Feature-Grids
- Keine Roboter/Gehirn/✨-Grafiken, kein Chatbot-Widget
- Layout-DNA stattdessen: Mikro-Label-Grids, Rand-zu-Rand-Displayworte, Poster-Farbflächen, Dot-Leader-Listen, Zahlen als Gestaltungselement, Hairlines (1px Ink)

## Startseite (erste Ausbaustufe, Spezifikation in BRAND-GUIDE.md § 09)

1. Mikro-Label-Grid als Navigation
2. H1 (genau eine!): „KI für Marketing und Vertrieb – aus Kempten, fürs Allgäu" als Rand-zu-Rand-Display, ein Wortteil in `--accent`
3. Subline + Kontra-Satz („Ohne Berater-Theater." in `--accent-text`)
4. CTA „Kurz klären, ob es Sinn macht →" (Ink-Block, Pfeil in `--surface-2`), Ziel: `#contact` bzw. Kontakt-Sektion
5. Poster-Break (Red Pigment): Kernaussage
6. Leistungen editorial (keine Icon-Grids): Keynotes / Workshops / Sparring – Inhalte aus `constants.tsx` des alten Repos übernehmen
7. Referenzen als Dot-Leader-Liste + 3 Testimonials mit Kennzahlen (aus `constants.tsx`: Schorer und Wolf −60 % Production Cost, cvift +35 % Sales Efficiency, digital new x +400 % Content Output)
8. Poster-Break (Cold Velvet): Case-Teaser
9. Kontakt-Sektion + Footer mit Impressum/Datenschutz-Links

## Content-Quellen

- Bestehende Texte: `constants.tsx` im alten Repo (Services, Workshop-Produkte, Testimonials, Prozess) – Tonalität beibehalten
- Rechtstexte: `public/impressum.html` und `public/datenschutz.html` übernehmen als eigene Routen `/impressum`, `/datenschutz`
- Bilder: `public/cedric-profile.png`, `public/cedric-personal-*.avif` (Duotone-Behandlung in `--surface-2` per CSS `filter`/`mix-blend-mode` oder vorprozessiert)

## SEO-Anforderungen (jede Seite)

- Eigener `<title>` + Meta Description, genau eine H1, eigener Canonical (`https://www.cedric-ki.de/<pfad>`), eigenes OG-Image
- JSON-LD: `ProfessionalService` mit `areaServed: Allgäu/Kempten` (nicht „Deutschland"), `Person` (Cedric Vazquez Boo), pro Leistungsseite `Service`, pro Artikel `Article`, überall `BreadcrumbList`
- `sitemap.xml` automatisch generiert (nur echte URLs, keine `#fragment`-Einträge), `robots.txt`
- Lighthouse-Ziel: Performance & SEO ≥ 95 (statisches HTML, self-hosted Fonts, optimierte Bilder via `astro:assets`)

## Definition of Done

- `npm run build` läuft fehlerfrei, Type-Check sauber
- Farbwechsel-Test: Ändern der 5 Token-Werte färbt die komplette Site um, ohne dass eine Komponente angefasst wird
- Jede Route hat eigene Metadaten (Stichprobe: view-source zeigt vollständiges HTML ohne JS)
- Keine Verstöße gegen die Design-Verbote (Radius, Shadows, Gradients)
