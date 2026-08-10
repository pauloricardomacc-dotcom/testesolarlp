export type PropertyType = 'empresarial' | 'rural' | 'residencial';

export interface SegmentItem {
  id: PropertyType;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  ctaText: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: PropertyType | 'usina';
  categoryLabel: string;
  city: string;
  description: string;
  image: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
  iconName: string;
}
