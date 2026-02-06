
import React from 'react';
// Added Guide to the import list
import { ServiceCard, WorkshopProduct, Testimonial, ProcessStep, SkillDetail, Guide, MediaExample, MediaTestimonial, MediaProcessStep, MediaMetric } from './types';

export const HERO_ROLES = [
  "KEYNOTES",
  "WORKSHOPS",
  "MARKETING",
  "VERTRIEB"
];

export const SKILLS: SkillDetail[] = [
  {
    title: "Content, der zur Marke passt",
    description: "Bilder, Videos, Texte – in eurer Tonalität, nicht im KI-Einheitsbrei"
  },
  {
    title: "Marketing, das skaliert",
    description: "Kampagnen-Logik, die auch ohne dein bestes Teammitglied funktioniert"
  },
  {
    title: "Vertrieb ohne Fleißarbeit",
    description: "Recherche, Ansprache und Follow-ups – persönlich, aber automatisiert"
  },
  {
    title: "Klartext statt Berater-Slides",
    description: "Ich sag dir, was funktioniert. Und was du bleiben lassen solltest."
  }
];

export const SERVICES: ServiceCard[] = [
  {
    title: "Keynotes",
    tagline: "Dein Team denkt, KI = ChatGPT. Ich zeig ihnen, was wirklich geht.",
    descriptionItems: [
      "Wo KI heute echten Business-Impact hat – und wo es reine Show ist",
      "Was eure Wettbewerber gerade anders machen",
      "Warum die meisten KI-Projekte scheitern – und wie eures nicht dazu gehört"
    ],
    footerLabel: "Ideal für",
    footerContent: "Geschäftsführung, Marketing-Leiter, Sales-Leads, Offsites",
    color: "bg-tiger"
  },
  {
    title: "Workshops",
    tagline: "Wir bauen an einem Tag, wofür Agenturen Wochen brauchen.",
    descriptionItems: [
      "Eure echten Prozesse, eure Daten, eure Marke – nicht irgendein Demo-Case",
      "Am Ende des Tages habt ihr Workflows, die euer Team ab morgen nutzt",
      "Ich bleibe dran, bis es sitzt – kein 'viel Erfolg damit'"
    ],
    footerLabel: "Formate",
    footerContent: "2h Deep-Dive · ½ Tag · Ganzer Tag",
    color: "bg-sunflower"
  },
  {
    title: "Sparring",
    tagline: "Du brauchst keinen Ja-Sager. Du brauchst jemanden, der mitdenkt.",
    descriptionItems: [
      "Für Entscheider, die schon KI nutzen – aber spüren, dass die Struktur fehlt",
      "Ich challenge eure Annahmen, sortiere Prioritäten und sag, was Quatsch ist",
      "Ehrlich, direkt, lösungsorientiert – kein Consulting-Theater"
    ],
    footerLabel: "Zielgruppe",
    footerContent: "Gründer, CMOs, Head of Sales, Marketing-Leiter",
    color: "bg-maya"
  }
];

export const WORKSHOP_PRODUCTS: WorkshopProduct[] = [
  {
    id: 1,
    title: "KI Content Workshop",
    tagline: "Content, der nach euch aussieht – nicht nach KI",
    positioning: "Euer Marketingteam produziert Bilder, Videos und Texte, die eure Marke stärken. Intern. Ohne Agentur-Abhängigkeit.",
    focus: [
      "Eure Bildsprache, Tonalität und Farbwelt in KI übersetzen",
      "Workflows für Social Posts, Ads & Reels, die das Team sofort nutzt",
      "Qualitätsfilter: Was geht raus, was nicht – klare Kriterien statt Bauchgefühl"
    ],
    outcome: "Euer Team produziert Content, der on-brand ist – ab morgen, ohne externe Hilfe.",
    idealFor: "Marketing-Leiter, Brand Manager, Agenturen",
    color: "tiger",
    isSignature: true
  },
  {
    id: 2,
    title: "KI Sales Workshop",
    tagline: "Persönliche Ansprache in der Hälfte der Zeit",
    positioning: "Euer Vertrieb klingt nicht nach Roboter – sondern nach jemandem, der sich vorbereitet hat. Nur schneller.",
    focus: [
      "Lead-Research automatisieren, ohne den persönlichen Touch zu verlieren",
      "Angebote und Follow-ups, die sich anfühlen wie handgemacht",
      "Klare Grenzen: Wo KI im Vertrieb schadet statt hilft"
    ],
    outcome: "Euer Sales-Team macht mehr Abschlüsse mit weniger Fleißarbeit.",
    idealFor: "Head of Sales, Vertriebsleiter, Gründer mit Sales-Verantwortung",
    color: "sunflower"
  },
  {
    id: 3,
    title: "KI Marketing Workshop",
    tagline: "Vom Tool-Chaos zur Marketing-Maschine",
    positioning: "Euer Marketing läuft nicht mehr über die eine Person, die alles kann – sondern über ein System, das alle können.",
    focus: [
      "Content-Planung, die nicht vom Kalender, sondern von Zielen getrieben wird",
      "Kampagnen-Logik: Von der Idee über den Hook bis zum Lead",
      "Setup bauen, das auch funktioniert, wenn der beste Kopf im Urlaub ist"
    ],
    outcome: "Ein Marketing-System, das skaliert – unabhängig von einzelnen Personen.",
    idealFor: "Marketing-Leiter, CMOs, Geschäftsführer von KMUs",
    color: "maya"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Matthias Hiller",
    role: "Marketing Leiter @ Schorer und Wolf",
    text: "Cedric versteht, dass es nicht um Tools geht, sondern um Haltung. Wir produzieren inzwischen deutlich effizienter Content, der zu unserer Marke passt. Seine Workshops sind intensiv, direkt und liefern Ergebnisse, die man sofort umsetzen kann. Keine Theorie, sondern pure Praxis.",
    stats: [
      { label: "Brand Integrity", value: "100%" },
      { label: "Production Cost", value: "-60%" }
    ]
  },
  {
    author: "Knut Jentsch",
    role: "CEO @ cvift",
    text: "KI im Vertrieb war für uns immer ein Buzzword, bis wir den Sales-Workflow mit Cedric gebaut haben. Die Recherche-Automatisierung und die KI-gestützte Vorbereitung von Terminen haben die Schlagzahl massiv erhöht. Wir verschwenden keine Zeit mehr mit manueller Fleißarbeit.",
    stats: [
      { label: "Sales Efficiency", value: "+35%" },
      { label: "Lead Response", value: "< 2 Min" }
    ]
  },
  {
    author: "Dominik Grätz",
    role: "Inhaber @ digital new x",
    text: "Früher haben wir KI punktuell genutzt, heute ist es das Rückgrat unserer Prozesse. Cedric hat uns gezeigt, wie wir die gesamte Marketing-Pipeline strukturieren, sodass wir 4x schneller Content produzieren, ohne dass die Qualität leidet. Ein echter Gamechanger für unsere interne Effizienz.",
    stats: [
      { label: "Content Output", value: "+400%" },
      { label: "Zeitersparnis", value: "6h/Woche" }
    ]
  }
];

export const PROCESS: ProcessStep[] = [
  {
    title: "15 Min Call",
    description: "Du erzählst, wo ihr steht. Ich sage dir ehrlich, ob ich der Richtige bin – und wenn ja, wie wir starten.",
    icon: "📞"
  },
  {
    title: "Workshop oder Keynote",
    description: "Je nachdem was passt: Entweder Überblick fürs ganze Team oder Deep-Dive, bei dem wir live eure Workflows bauen.",
    icon: "🛠️"
  },
  {
    title: "Ihr macht weiter",
    description: "Ihr bekommt alles, was ihr braucht: Prompts, Templates, Dokumentation. Kein Abo, keine Abhängigkeit.",
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

// ============================================
// MEDIA PAGE CONSTANTS
// ============================================

export const MEDIA_METRICS: MediaMetric[] = [
  {
    value: "+32%",
    label: "Conversion-Lift",
    color: "tiger"
  },
  {
    value: "10x",
    label: "Schnellere Produktion",
    color: "sunflower"
  },
  {
    value: "-60%",
    label: "vs. Agentur-Kosten",
    color: "maya"
  }
];

export const MEDIA_PROCESS: MediaProcessStep[] = [
  {
    title: "Shooting",
    description: "Professionelles Basis-Material vor Ort – optimiert für KI-Weiterverarbeitung.",
    icon: "📸",
    details: [
      "Produkt-Fotografie",
      "360° Aufnahmen",
      "Video-Material"
    ]
  },
  {
    title: "KI-Post",
    description: "Hintergründe, Varianten, Lifestyle-Settings – alles aus einem Shooting.",
    icon: "🤖",
    details: [
      "Hintergrund-Generierung",
      "Lifestyle-Szenen",
      "Farb-Varianten"
    ]
  },
  {
    title: "Delivery",
    description: "Fertige Assets für Shop, Ads & Social – in allen Formaten.",
    icon: "🚀",
    details: [
      "E-Commerce optimiert",
      "Social Media Formate",
      "Ad Creatives"
    ]
  }
];

export const MEDIA_TESTIMONIALS: MediaTestimonial[] = [
  // Testimonials werden hinzugefügt, sobald offizielle Referenzen vorliegen
];

export const MEDIA_EXAMPLES: MediaExample[] = [
  {
    id: 1,
    type: 'image',
    src: '/media/example-1.jpg',
    title: 'Produkt-Shooting',
    category: 'Bilder'
  },
  {
    id: 2,
    type: 'image',
    src: '/media/example-2.jpg',
    title: 'Lifestyle-Setting',
    category: 'Bilder'
  },
  {
    id: 3,
    type: 'image',
    src: '/media/example-3.jpg',
    title: 'KI-Hintergrund',
    category: 'Bilder'
  },
  {
    id: 4,
    type: 'video',
    src: '/media/reel-1.mp4',
    thumbnail: '/media/reel-1-thumb.jpg',
    title: 'Produkt-Reel',
    category: 'Reels'
  },
  {
    id: 5,
    type: 'video',
    src: '/media/reel-2.mp4',
    thumbnail: '/media/reel-2-thumb.jpg',
    title: 'Lifestyle-Reel',
    category: 'Reels'
  },
  {
    id: 6,
    type: 'video',
    src: '/media/reel-3.mp4',
    thumbnail: '/media/reel-3-thumb.jpg',
    title: 'Behind the Scenes',
    category: 'Reels'
  }
];
