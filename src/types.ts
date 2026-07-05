/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PortfolioTheme = 'BENTO_SLATE' | 'GLASS_AURORA' | 'DEV_MINIMAL' | 'NEOBRUTALISM';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
  impact?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  impactMetrics: { label: string; value: string; desc: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  status?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: number; icon?: string }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  instagram: string;
  location: string;
}
