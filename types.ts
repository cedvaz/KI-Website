
export interface ServiceCard {
  title: string;
  tagline: string;
  descriptionItems: string[];
  footerLabel: string;
  footerContent: string;
  color: string;
}

export interface SkillDetail {
  title: string;
  description: string;
}

export interface WorkshopProduct {
  id: number;
  title: string;
  tagline: string;
  positioning: string;
  focus: string[];
  outcome: string;
  idealFor: string;
  color: string;
  isSignature?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

// Added Guide interface for the Guides component
export interface Guide {
  title: string;
  description: string;
  color: string;
}

// Media Page Types
export interface MediaExample {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  category?: string;
}

export interface MediaTestimonial {
  company: string;
  logo?: string;
  quote: string;
  author: string;
  role: string;
  stats: {
    label: string;
    value: string;
  }[];
  color: string;
}

export interface MediaProcessStep {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface MediaMetric {
  value: string;
  label: string;
  color: string;
}
