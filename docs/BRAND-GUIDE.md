# Cedric KI – Brand Guide

**Version 2.0 · 21. Juli 2026 · System: „Klartext / Poster" · Palette: „Dusty" v1 (tauschbar)**
Layout-Referenzwelt: [Delight Typeface – Rajesh Rajput](https://www.behance.net/gallery/219085487/Delight-Typeface-Free-09-Weights-Variable)

---

## 01 · Die Marke

- **Positionierung:** Der KI-Experte für Marketing und Vertrieb im Allgäu. Cedric zeigt Unternehmen nicht nur, was KI kann – er baut mit ihren Teams die Workflows, die ab morgen funktionieren.
- **Haltung:** No Bullshit. Klartext statt Berater-Slides, Ergebnisse statt Projektlaufzeiten, persönliche Zusammenarbeit statt Agentur-Apparat.
- **Markenarchitektur:**
  - Stufe 1 (jetzt): **Cedric KI** als Speerspitze – die Person verkauft, der Auftritt wirkt wie ein Unternehmen.
  - Stufe 2 (12–24 Monate): **CVB** als Dachmarke für Team und Produkte.
  - Konsequenz: Das Design-System hängt an Farben, Typografie und Layout-Sprache – **nicht am Namen „Cedric"**. Es muss einen Namenswechsel überleben.

## 02 · Wortmarke

- Reine Typografie: **CEDRIC KI** im fettesten Display-Schnitt, eng gesetzt, Versalien.
- **„KI" steht immer in der Akzentfarbe** (aktuell Red Pigment) – das einzige feste Farbdetail der Marke.
- Auf Almond: Ink + Akzent (Standard). Auf Akzent-Fläche: komplett Almond. Auf Ash Silk / Cold Velvet: komplett Ink.
- Kurzform für Favicon/Avatare: **CK** im selben Schnitt.
- Die Geist-Pixel-Schrift der alten Website ist **pensioniert** – kein Pixel-Element im neuen System.

## 03 · Farben — Palette „Dusty" v1

Gedeckt statt schreiend. Die Lautstärke kommt aus Typografie und Fläche, nicht aus der Sättigung.

| Name | Hex | Status | Rolle |
|---|---|---|---|
| Almond Canvas | `#F9F7F0` | geschätzt, bestätigen | Ground, Lesefluss-Hintergrund (warmes Papier statt sterilem Weiß) |
| Absolute | `#000000` | fix | Ink: Typografie, CTAs, Linien |
| Red Pigment | `#CC3525` | **fix (Cedrics Vorgabe)** | Der **eine** Akzent: „KI" in der Wortmarke, ein Headline-Wort, Links, Kontra-Momente, Poster-Flächen |
| Ash Silk | `#DBE1E8` | geschätzt, bestätigen | Ruhige Fläche: Section-Grounds, Karten, Zwischenräume |
| Cold Velvet | `#A9C2D8` | geschätzt, bestätigen | Tiefe Fläche: Poster-Momente, Foto-Duotone, Detail-Pop auf Ink (z. B. CTA-Pfeil) |

Kleintext-Variante des Akzents: `#A62A1D` (für sehr kleinen roten Text auf Almond).

### Token-Modell (PFLICHT-Architektur)

Das gesamte System hängt an **fünf semantischen Tokens**. Komponenten kennen nur Rollen, nie Hex-Werte. Palettenwechsel = fünf Zeilen ändern.

```css
:root {
  /* ===== PALETTE "DUSTY" v1 — zum Tauschen NUR diese 5 Werte ändern ===== */
  --c-paper:    #F9F7F0;  /* Almond Canvas */
  --c-ink:      #000000;  /* Absolute */
  --c-accent:   #CC3525;  /* Red Pigment */
  --c-surface1: #DBE1E8;  /* Ash Silk */
  --c-surface2: #A9C2D8;  /* Cold Velvet */

  /* ===== Rollen-Tokens — Komponenten nutzen NUR diese ===== */
  --paper: var(--c-paper);
  --ink: var(--c-ink);
  --accent: var(--c-accent);
  --accent-text: #A62A1D;
  --surface-1: var(--c-surface1);
  --surface-2: var(--c-surface2);
}
```

**Tausch-Regel:** Eine neue Palette muss die Rollen-Kontraste erfüllen (Akzent auf Paper ≥ 4,5:1 · Ink auf beiden Flächen ≥ 7:1 · Paper auf Akzent ≥ 4,5:1). Paletten werden komplett getauscht, nie gemischt.

### Einsatzregeln

- **Verteilung:** Im Lesefluss Knappheit (Almond + Ink dominieren, Akzent nur an Ankerpunkten). Poster-Momente (Hero, Section-Breaks, Case-Openings) dürfen ganze Farbflächen sein. Rhythmus: **ruhig, ruhig, LAUT, ruhig.**
- **Kombinationen:** Almond auf Red Pigment (Marken-Duo) · Ink auf Ash Silk · Ink auf Cold Velvet · Cold Velvet als Pop auf Ink. Nie: Red Pigment auf den Blauflächen, nie beide Blautöne direkt aneinander.
- **Dusty-Gebot:** Keine Neons, keine grellen Primärfarben, keine Verläufe.

## 04 · Typografie

- **Display: Delight** (Rajesh Rajput, 9 Schnitte + Variable). Zwei Register:
  - *Delight Black*: Poster-Worte, Rand zu Rand, Versalien, eng (letter-spacing ≈ −0.035em, line-height ≈ 0.92)
  - *Delight Light/Regular*: große ruhige Headlines in Versalien, gern mit Gedankenstrichen
  - ⚠️ **Lizenz vor Launch prüfen** (auf Behance nur „Free", kommerzielle Nutzung nicht eindeutig). Fallback: **Archivo Black** (SIL OFL).
- **Body: Satoshi** (Fontshare, kostenlos inkl. kommerzieller Nutzung). Inter ist gestrichen – Hausschrift jeder austauschbaren KI-Website.
- **Labels & Daten: Mono** (Space Mono o. IBM Plex Mono) – Versalien, gesperrt (letter-spacing ≈ 0.16em), für Mikro-Labels, Zahlen, Dot-Leader-Listen.
- Alle Fonts **self-hosted** (keine Font-CDNs).

## 05 · Layout-Prinzipien

1. **Mikro-Label-Grid:** Jede Seite beginnt mit einer Zeile kleiner Mono-Labels in 3–4 Spalten (Marke · Kontext · Ort · Nummer) – wie ein Editorial-Impressum. Dient auch als Navigation.
2. **Rand-zu-Rand-Worte:** Ein Display-Wort pro Seite darf die volle Breite sprengen. Eines. Nicht drei.
3. **Poster-Flächen:** Vollfarbige Section-Breaks (Red Pigment oder Cold Velvet) trennen Kapitel, je eine Kernaussage.
4. **Zahlen als Gestaltung:** Kennzahlen, Datum, Nummerierung im Display-Schnitt („No. 01", „02.'26", „−60 %").
5. **Dot-Leader-Listen:** Referenzen, Leistungen, Termine als Listen mit Punktlinien (Name ……… Wert) im Mono-Schnitt.
6. **Vertikale Labels:** Gedrehte Mikro-Labels an Bild- und Kapitelrändern.
7. **Weißraum:** Content lebt auf ruhigem Almond – die Lautstärke kommt aus den Poster-Momenten.
8. **Radius 0 überall.** Harte Kanten, Hairlines. Struktur aus Raster und Linien, kaum Karten.

## 06 · Kein KI-Website-Look (harte Verbote)

Cedric KI ist eine **Designer-Website, die zufällig KI verkauft** – nicht umgekehrt.

- ❌ Keine Verläufe, Glows, Blobs, kein Glassmorphism, keine Lila-Blau-Gradients
- ❌ Kein zentrierter SaaS-Hero mit Badge-Pille („✨ AI-powered") und zwei Buttons
- ❌ Keine Icon-Feature-Grids (3 Spalten, Icon oben, Text drunter) – Leistungen werden editorial erzählt: Typo, Zahl, Foto, Case
- ❌ Keine Rundungen, keine Soft-Shadows
- ❌ Keine Roboter-, Gehirn-, Chip-Grafiken, keine ✨-Emojis, kein dekoratives Chatbot-Widget
- ❌ Kein Inter-Einheitslook

Ziel-Look: Portfolio eines internationalen Design-Studios – Poster-Typografie, strenges Raster, Duotone-Fotografie, mutige Farbflächen.

## 07 · Bildsprache

- **Echte Fotos zuerst:** Cedric in Workshops, bei Kunden, auf Bühnen, im Allgäu (E-E-A-T-Beweismaterial).
- **Duotone statt Graustufen:** Fotos in Cold Velvet ODER Red Pigment getont – nie beide in einem Bild. Farbfoto nur in Case-Galerien.
- **Typo über Bild:** Display-Worte dürfen Fotos überlagern und anschneiden.
- **KI-Visuals** nur als gekennzeichnetes Show-Element für das Content-Produktions-Angebot.

## 08 · Tone of Voice

Kurze Sätze, aktive Verben, konkrete Zahlen, null Berater-Vokabular. Die Kontra-Stimme („was nicht funktioniert") wird in der Akzentfarbe gesetzt – sparsam.

| ❌ Nicht so | ✅ Sondern so |
|---|---|
| Wir begleiten Sie auf Ihrer KI-Transformationsreise. | Wir bauen an einem Tag, wofür Agenturen Wochen brauchen. |
| Ganzheitliche KI-Lösungen für Ihren Unternehmenserfolg. | Euer Vertrieb macht mehr Abschlüsse mit weniger Fleißarbeit. |
| Kontaktieren Sie uns für ein unverbindliches Erstgespräch. | Kurz klären, ob es Sinn macht – 15 Minuten. |

Verbotene Wörter: „ganzheitlich", „Journey", „Lösung", „innovativ", „revolutionär".

## 09 · Hero-Spezifikation (Referenz-Anwendung)

Aufbau der Startseiten-Hero:
1. **Mikro-Label-Grid** als Navigation (Mono, 4 Spalten: Marke — Links — Claim — Kontakt), darunter Hairline in Ink
2. **Rand-zu-Rand-Headline** (Delight Black): „KI für Marketing & Vertrieb" – ein Wortteil in Red Pigment
3. **Subline** (Satoshi) + Kontra-Satz in `#A62A1D`: „…die ab morgen liefern – nicht ab Q3. **Ohne Berater-Theater.**"
4. **CTA:** Ink-Block, weißer Text, Pfeil in Cold Velvet: „Kurz klären, ob es Sinn macht →"
5. **Duotone-Foto** (Cold Velvet) als Abschlussfläche

## 10 · Do / Don't

**Do:** Ein Display-Wort pro Seite in voller Breite · Red Pigment als einziger Akzent · Zahlen groß inszenieren · Duotone-Fotos echter Menschen · Weißraum aushalten.

**Don't:** Nichts Schreiendes · kein Pixel-Font, keine Rundungen, keine Soft-Shadows · nie zwei Palettenwelten mischen · kein KI-Bild als heimlicher Foto-Ersatz · kein Berater-Vokabular.
