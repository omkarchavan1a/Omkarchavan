/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Education, SkillCategory, ContactInfo } from './types';

export const contactInfo: ContactInfo = {
  email: 'omkarchavan1500@gmail.com',
  phone: '+91 9096518451',
  github: 'github.com/omkarchavan1a',
  linkedin: 'linkedin.com/in/omkar-chavan-1402ba2a3',
  instagram: 'instagram.com/omkarchavann_',
  location: 'Pune, India'
};

export const experiences: Experience[] = [
  {
    role: 'Jr. Software Developer — Data Analytics',
    company: 'BAAP Services Pvt. Ltd.',
    location: 'Sangamner, India',
    duration: '2024 — 2025',
    bullets: [
      'Data Pipelines & Reporting: Built and maintained ETL processes to clean, transform, and load data from multiple sources into SQL databases, improving data accuracy and reducing manual reporting effort.',
      'SQL Analysis: Wrote complex SQL queries (joins, CTEs, aggregations) to extract business insights and support data-driven decision-making across teams.',
      'Dashboards & Visualization: Designed interactive dashboards in Tableau and Power BI to track key business metrics, enabling stakeholders to monitor performance trends in real time.',
      'Insights & Impact: Delivered actionable insights from analytics workflows that contributed to a 90% reduction in data processing time and informed decisions that supported a 25% increase in customer engagement.',
      'Cross-functional Collaboration: Partnered with development and business teams to translate analytics requirements into full-stack features, bridging data analysis with application development.'
    ],
    impactMetrics: [
      { label: '90%', value: 'Data Speedup', desc: 'Reduction in processing time for ETL pipelines' },
      { label: '25%', value: 'User Engagement', desc: 'Increase in customer engagement via AI-driven web apps' },
      { label: '3+', value: 'Production Deploys', desc: 'Successfully managed and deployed multiple web applications using Docker' }
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "MCA (second year)",
    institution: 'Mysore University',
    duration: 'Pursuing',
    status: 'In Progress'
  },
  {
    degree: 'BCA (Computer Application)',
    institution: 'Dahiwadi College, Dahiwadi (Shivaji University affiliate)',
    duration: '2023 — 2025',
    grade: 'Grade: B+'
  },
  {
    degree: 'Higher Secondary (12th Grade)',
    institution: 'State Board, Maharashtra',
    duration: '2021 — 2022',
    grade: 'Grade: B+'
  },
  {
    degree: 'Secondary (10th Grade)',
    institution: 'State Board, Maharashtra',
    duration: '2018 — 2019',
    grade: 'Grade: B+'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data Analytics',
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'ETL', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'Power BI', level: 85 },
      { name: 'Data Visualization', level: 80 },
      { name: 'Excel', level: 85 }
    ]
  },
  {
    category: 'Front-end Development',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 95 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    category: 'Back-end Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'FastAPI', level: 80 },
      { name: 'PHP', level: 85 },
      { name: 'Flask', level: 75 }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'NoSQL', level: 80 },
      { name: 'REST/GraphQL APIs', level: 85 }
    ]
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'Vercel', level: 95 },
      { name: 'Hostinger', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 85 }
    ]
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'Generative AI', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'Gemini/OpenAI APIs', level: 90 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'universal-sqlite-bi-studio',
    title: 'universal-sqlite-bi-studio',
    category: 'data analytics tool',
    description: 'A high-performance in-browser data engineering and visual analytics application built with React, TypeScript, Tailwind CSS, Recharts, and WebAssembly SQLite',
    stack: ['React', 'Node.js', 'Socket.io', 'sqlite', 'Tailwind CSS'],
    link: 'https://universal-sqlite-bi-studio.vercel.app/',
    impact: 'Delivers instant AI-driven query resolutions and seamless real-time agent-to-customer collaboration.',
    featured: true
  },{
    id: 'ai-b2b-support-hub',
    title: 'AI-Based B2B Support Hub',
    category: 'AI / Full Stack',
    description: 'Engineered an intelligent B2B customer support hub featuring real-time chat, automated ticket triage, AI-generated response suggestions, and SLA performance dashboards.',
    stack: ['React', 'Node.js', 'Socket.io', 'Gemini API', 'Tailwind CSS'],
    link: 'https://github.com/omkarchavan1a/Ai-based-b2b-support-hub-with-real-time-chat-',
    impact: 'Delivers instant AI-driven query resolutions and seamless real-time agent-to-customer collaboration.',
    featured: true
  },
  {
    id: 'ai-first-crm',
    title: 'AI-First CRM — HCP Module',
    category: 'AI / Full Stack',
    description: 'Developed an AI-driven Customer Relationship Management (CRM) module tailored for Healthcare Professionals (HCPs) to optimize healthcare partner communications, transcribe medical queries with intelligent agents, and deliver next-best-action recommendations.',
    stack: ['Next.js', 'React', 'Gemini API', 'Tailwind CSS', 'Node.js'],
    link: 'https://github.com/omkarchavan1a/AI-First-CRM-HCP-Module',
    impact: 'Automates medical representative meeting summarization and tracks regional hospital engagement analytics.',
    featured: true
  },
  {
    id: 'ai-research-gen',
    title: 'AI Research Paper Generator',
    category: 'AI / LLM Tooling',
    description: 'Accomplished the development of a system using Generative AI and LangChain by leveraging Gemini/OpenAI APIs, resulting in structured research papers with user-defined length and style parameters.',
    stack: ['LangChain', 'Gemini API', 'OpenAI API', 'Streamlit'],
    link: 'https://research-paper-generator.streamlit.app',
    impact: 'Structured research papers with user-defined length and style parameters.',
    featured: true
  },
  {
    id: 'rental-car-analytics',
    title: 'Rental Car Analytics & Management System',
    category: 'Data / Full Stack',
    description: 'Designed and built a comprehensive booking system with full CRUD functionality using PHP and MySQL, achieving efficient data integrity and reporting.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Charts'],
    impact: 'Achieved efficient data integrity and reporting.',
    featured: true
  },
  {
    id: 'the-cafe-elite',
    title: 'The Cafe Elite',
    category: 'Web / Business Site',
    description: 'Deployed a specialized web solution that streamlined data entry and business logic management, resulting in improved inventory management and customer acquisition.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://the-cafe-elite.vercel.app',
    impact: 'Improved inventory management and customer acquisition.',
    featured: true
  },
  {
    id: 'shreetej-properties',
    title: 'Shreetej Properties',
    category: 'Web / Business Site',
    description: 'Managed the end-to-end launch and SEO strategy for a real estate domain, integrating Google Search Console to monitor regional search rankings and user traffic data.',
    stack: ['Next.js', 'Tailwind CSS', 'SEO Meta', 'Analytics'],
    link: 'https://shreetejproperties.com',
    impact: 'Monitored regional search rankings and user traffic data.',
    featured: true
  },
  {
    id: 'pdf-agent-analyzer',
    title: 'PDF Agent — AI Document Analyzer',
    category: 'AI / LLM Tooling',
    description: 'Multi-document interactive chat-based analysis tool powered by local and cloud semantic vector search indexes.',
    stack: ['LangChain', 'OpenAI API', 'FAISS', 'Streamlit'],
    link: 'https://pdf-agent-chat.streamlit.app',
    impact: 'Enables real-time queries and smart summary extractions.',
    featured: false
  },
  {
    id: 'chameleon-resume',
    title: 'Chameleon Resume Bot',
    category: 'AI / LLM Tooling',
    description: 'Adapts and optimizes professional resumes dynamically by scanning job descriptions for key semantic vocabulary.',
    stack: ['LangChain', 'OpenAI API', 'Streamlit'],
    link: 'https://chameleon-resume-bot.streamlit.app',
    impact: 'Helps candidates target ATS (Applicant Tracking Systems) with tailored keywords.',
    featured: false
  }
];

export const quantifiableImpacts: string[] = [
  'Accomplished 90% reduction in data processing time by implementing efficient ETL processes and data visualization techniques.',
  'Achieved 25% increase in customer engagement by developing and deploying AI-driven web applications and datacentric business tools.',
  'Successfully managed and deployed multiple web applications using Docker, CI/CD, and Cloud, resulting in improved scalability and reliability.'
];
