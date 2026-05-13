export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFullDescription {
  problem: string;
  solution: string;
  impact: string;
}

export type PrivateReason = 'nda' | 'no-nda';

export interface Project {
  id: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
  github?: string;
  live?: string;
  date?: string;
  images?: string[];
  privateReason?: PrivateReason;
  // Textual fields are resolved via i18n in components; left optional for legacy.
  title?: string;
  description?: string;
  longDescription?: string;
  fullDescription?: ProjectFullDescription;
  highlights?: string[];
  category?: string;
  metrics?: ProjectMetric[];
  role?: string;
}

export interface EducationItem {
  id: string;
  stack?: string[];
  // i18n fields
  degree?: string;
  institution?: string;
  location?: string;
  period?: string;
  description?: string;
  highlights?: string[];
  topics?: { category: string; items: string[] }[];
}

export interface ExperienceItem {
  id: string;
  current: boolean;
  tech: string[];
  // i18n fields
  role?: string;
  company?: string;
  period?: string;
  description?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  displayName: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  available: boolean;
}
