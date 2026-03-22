export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFullDescription {
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  fullDescription?: ProjectFullDescription;
  highlights?: string[];
  tech: string[];
  category?: string;
  status: 'completed' | 'in-progress' | 'planned';
  github?: string;
  live?: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
  images?: string[];
  role?: string;
  date?: string;
  privateReason?: string;
}

export interface EducationTopic {
  category: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  highlights?: string[];
  topics?: EducationTopic[];
  stack?: string[];
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
  tags: string[];
  proof: string;
}

export interface Stat {
  value: string;
  label: string;
}
