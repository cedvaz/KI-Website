
import React from 'react';
// Added Guide to the import list
import { ServiceCard, WorkshopProduct, Testimonial, ProcessStep, SkillDetail, Guide } from './types';

export const HERO_ROLES = [
  "KEYNOTES",
  "WORKSHOPS",
  "MARKETING",
  "VERTRIEB"
];

export const SKILLS: SkillDetail[] = [
  {
    title: "KI-Content on Brand",
    description: "Bilder & Videos, die nicht nach KI aussehen"
  },
  {
    title: "Marketing-Abläufe",
    description: "Content, Kampagnen, Lead-Logik"
  },
  {
    title: "Vertrieb mit KI",
    description: "Recherche, Ansprache, Nachfassen"
  },
  {
    title: "Sparring für Entscheider",
    description: "Struktur, Prioritäten, Klarheit"
  }
];

export const SERVICES: ServiceCard[] = [
  {
    title: "Keynotes",
    tagline: "Keynotes für Menschen, die keine Lust mehr auf KI-Hype haben.",
    descriptionItems: [
      "was KI heute realistisch kann",
      "was Unsinn ist",
      "und wo Unternehmen gerade Zeit & Geld burnen"
    ],
    footerLabel: "Ideal für",
    footerContent: "Führungskräfte, Offsites, Kickoffs, Strategietage",
    color: "bg-tiger"
  },
  {
    title: "Workshops",
    tagline: "Workshops, in denen echte Workflows entstehen.",
    descriptionItems: [
      "Keine Theorie.",
      "Kein „probiert das mal aus“.",
      "Wir bauen live – mit euren Prozessen, euren Daten, euren Zielen."
    ],
    footerLabel: "Formate",
    footerContent: "2h Deep-Dive · ½ Tag · 1 Tag",
    color: "bg-sunflower"
  },
  {
    title: "Sparring",
    tagline: "Sparring für Entscheider.",
    descriptionItems: [
      "Wenn ihr schon Tools nutzt,",
      "aber keine saubere Struktur habt,",
      "und jemand braucht, der mitdenkt, widerspricht und sortiert"
    ],
    footerLabel: "Zielgruppe",
    footerContent: "Gründer, CMOs, Head of Sales",
    color: "bg-maya"
  }
];

export const WORKSHOP_PRODUCTS: WorkshopProduct[] = [
  {
    id: 1,
    title: "KI Content Workshop",
    tagline: "On-Brand Bilder & Videos selbst produzieren",
    positioning: "Wir produzieren KI-Content, der aussieht wie von einer Agentur – aber intern gebaut wird.",
    focus: [
      "Marken-Look in KI übersetzen (Farben, Bildsprache)",
      "KI-Workflows für Social Posts, Ads & Reels",
      "Qualitätskontrolle: Was bleibt, was fliegt?"
    ],
    outcome: "Prompts, visueller Stil & Workflows, die sofort genutzt werden.",
    idealFor: "Marketing-Teams, Agenturen, High-Visibility Brands",
    color: "tiger",
    isSignature: true
  },
  {
    id: 2,
    title: "KI Sales Workshop",
    tagline: "Bessere Ansprachen, weniger manuelle Arbeit",
    positioning: "KI im Vertrieb – ohne Roboter-Sales und ohne CRM-Overkill.",
    focus: [
      "Lead-Research & individuelle Ansprache",
      "Angebots-Vorbereitung & Follow-ups",
      "Wo KI im Vertrieb NICHT eingesetzt werden sollte"
    ],
    outcome: "Ein Setup, das Zeit spart, Qualität erhöht und akzeptiert wird.",
    idealFor: "Vertriebsteams, Gründer, Head of Sales",
    color: "sunflower"
  },
  {
    id: 3,
    title: "KI Marketing Workshop",
    tagline: "Struktur, Klarheit und skalierbare Kampagnen",
    positioning: "Marketing mit KI – aber mit Plan statt Tool-Chaos.",
    focus: [
      "KI-gestützte Themen- & Content-Planung",
      "Kampagnen-Ideen, Messaging & Hooks",
      "Verbindung von Content → Lead → Sales"
    ],
    outcome: "Ein skalierbares Setup, das nicht von Einzelpersonen abhängt.",
    idealFor: "Marketing-Teams, Geschäftsführer, KMUs",
    color: "maya"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Matthias Hiller",
    role: "Geschäftsführer @ Schorer und Wolf",
    text: "Früher haben wir KI punktuell genutzt, heute ist es das Rückgrat unserer Prozesse. Cedric hat uns gezeigt, wie wir die gesamte Marketing-Pipeline strukturieren, sodass wir 4x schneller Content produzieren, ohne dass die Qualität leidet. Ein echter Gamechanger für unsere interne Effizienz.",
    stats: [
      { label: "Content Output", value: "+400%" },
      { label: "Zeitersparnis", value: "15h/Woche" }
    ]
  },
  {
    author: "Knut Jentsch",
    role: "CEO @ cvift",
    text: "KI im Vertrieb war für uns immer ein Buzzword, bis wir den Sales-Workflow mit Cedric gebaut haben. Die Recherche-Automatisierung und die KI-gestützte Vorbereitung von Terminen haben die Schlagzahl massiv erhöht. Wir verschwenden keine Zeit mehr mit manueller Fleißarbeit.",
    stats: [
      { label: "Sales Efficiency", value: "+85%" },
      { label: "Lead Response", value: "< 2 Min" }
    ]
  },
  {
    author: "Dominik Grätz",
    role: "Inhaber @ digital new x",
    text: "Cedric versteht, dass es nicht um Tools geht, sondern um Haltung. Wir produzieren jetzt High-End Content on Brand, der nicht nach billiger KI aussehen. Seine Workshops sind intensiv, direkt und liefern Ergebnisse, die man sofort umsetzen kann. Keine Theorie, sondern pure Praxis.",
    stats: [
      { label: "Brand Integrity", value: "100%" },
      { label: "Production Cost", value: "-60%" }
    ]
  }
];

export const PROCESS: ProcessStep[] = [
  {
    title: "Kurzcall",
    description: "Wir klären Ziel und Kontext in 15 Minuten.",
    icon: "📞"
  },
  {
    title: "Umsetzung",
    description: "Keynote oder Deep-Dive Workshop.",
    icon: "🛠️"
  },
  {
    title: "Package",
    description: "Templates, Recap und Next Steps geliefert.",
    icon: "📦"
  }
];

// Added GUIDES constant to fix the error in components/Guides.tsx
export const GUIDES: Guide[] = [
  {
    title: "KI-Content Guide",
    description: "Wie ihr Bilder und Videos produziert, die eure Marke stärken statt sie zu verwässern.",
    color: "tiger"
  },
  {
    title: "KI im Vertrieb",
    description: "Vom Lead-Research bis zur personalisierten Ansprache. Ohne Spam-Feeling.",
    color: "maya"
  }
];
