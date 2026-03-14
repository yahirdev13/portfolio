export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  tech: string[];
  category?: string;
  status: 'completed' | 'in-progress' | 'planned';
  github?: string;
  live?: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string[];
  tech: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  displayName: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  available: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
