/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Education, SkillCategory, ContactInfo } from './types';

export const contactInfo: ContactInfo = {
  email: 'omkarchavan1500@gmail.com',
  phone: '+91 9096518451',
  github: 'github.com/omkarchavan1a',
  location: 'Pune, India'
};

export const experiences: Experience[] = [
  {
    role: 'Jr. Software Developer — Data Analytics',
    company: 'BAAP Services Pvt. Ltd.',
    location: 'Pune, India',
    duration: '2024 — 2025',
    bullets: [
      'Engineered automated ETL pipelines and data extraction processes, reducing processing cycle times by 90%.',
      'Developed and optimized complex SQL queries and relational database schemas (MySQL, PostgreSQL) for high-performance reporting.',
      'Designed interactive Power BI and Tableau business dashboards, boosting customer engagement metrics by 25%.',
      'Collaborated closely with cross-functional engineering and product teams to translate data insights into production code.'
    ],
    impactMetrics: [
      { label: '90%', value: 'Data Speedup', desc: 'Reduction in processing time for ETL pipelines' },
      { label: '25%', value: 'User Engagement', desc: 'Increase in user session length via visual dashboards' },
      { label: '12+', value: 'Active Deployments', desc: 'Web applications and AI analytics systems in active production' }
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "Master's in Computer Application (MCA)",
    institution: 'Pune University affiliate',
    duration: 'Currently Pursuing',
    status: 'In Progress'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Pune University affiliate',
    duration: '2023 — 2025',
    grade: 'Grade: B+'
  },
  {
    degree: 'Higher Secondary Certificate (12th)',
    institution: 'State Board, Maharashtra',
    duration: '2021 — 2022',
    grade: 'Grade: B+'
  },
  {
    degree: 'Secondary School Certificate (10th)',
    institution: 'State Board, Maharashtra',
    duration: '2018 — 2019',
    grade: 'Grade: B+'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data Analytics',
    skills: [
      { name: 'SQL (MySQL/Postgres)', level: 90 },
      { name: 'ETL Pipelines', level: 85 },
      { name: 'Power BI & Tableau', level: 80 },
      { name: 'Data Visualization (D3)', level: 75 },
      { name: 'Excel Advanced', level: 85 }
    ]
  },
  {
    category: 'Front-End Development',
    skills: [
      { name: 'React.js / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 & CSS3', level: 95 }
    ]
  },
  {
    category: 'Back-End & Databases',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'FastAPI & Flask', level: 80 },
      { name: 'PHP Development', level: 75 },
      { name: 'NoSQL (MongoDB)', level: 70 },
      { name: 'REST & GraphQL APIs', level: 85 }
    ]
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'LangChain & CrewAI', level: 85 },
      { name: 'Gemini / OpenAI APIs', level: 90 },
      { name: 'Local LLMs (Ollama)', level: 80 },
      { name: 'Python Automation', level: 85 },
      { name: 'Server-Sent Events (SSE)', level: 75 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Vercel / Netlify', level: 90 },
      { name: 'Docker Containers', level: 70 },
      { name: 'GitHub Actions (CI/CD)', level: 75 },
      { name: 'Hostinger & DNS', level: 80 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'ai-research-gen',
    title: 'AI Research Paper Generator',
    category: 'AI / LLM Tooling',
    description: 'Generates structured, citation-ready research papers and outlines using advanced LLM chains and deep agent research.',
    stack: ['LangChain', 'Gemini API', 'OpenAI API', 'Streamlit'],
    link: 'https://research-paper-generator.streamlit.app',
    impact: 'Automated 100% of formatting, literature search, and academic drafting pipelines.',
    featured: true
  },
  {
    id: 'pdf-agent-analyzer',
    title: 'PDF Agent — AI Document Analyzer',
    category: 'AI / LLM Tooling',
    description: 'Multi-document interactive chat-based analysis tool powered by local and cloud semantic vector search indexes.',
    stack: ['LangChain', 'OpenAI API', 'FAISS (Vector Store)', 'Streamlit'],
    link: 'https://pdf-agent-chat.streamlit.app',
    impact: 'Enables real-time queries and smart summary extractions from files up to 200MB.',
    featured: true
  },
  {
    id: 'chameleon-resume',
    title: 'Chameleon Resume Bot',
    category: 'AI / LLM Tooling',
    description: 'Adapts and optimizes professional resumes dynamically by scanning job descriptions for key semantic vocabulary.',
    stack: ['LangChain', 'OpenAI API', 'Streamlit'],
    link: 'https://chameleon-resume-bot.streamlit.app',
    impact: 'Helps candidates target ATS (Applicant Tracking Systems) with tailored keywords in under 5 seconds.',
    featured: true
  },
  {
    id: 'shreetej-properties',
    title: 'Shreetej Properties',
    category: 'Web / Business Site',
    description: 'High-performance real estate marketing and property discovery platform with comprehensive SEO optimization and web analytics.',
    stack: ['Next.js', 'Tailwind CSS', 'SEO Meta', 'Analytics'],
    link: 'https://shreetejproperties.com',
    impact: 'Significantly enhanced organic real-estate lead capture rates in Pune with fast page load times.',
    featured: true
  },
  {
    id: 'the-cafe-elite',
    title: 'The Cafe Elite',
    category: 'Web / Business Site',
    description: 'Bespoke cafe business landing page and inventory tracking portal with responsive layouts and modern interactive animations.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://the-cafe-elite.vercel.app',
    impact: 'Fluid 60FPS user interface with seamless mobile browsing performance.',
    featured: true
  },
  {
    id: 'ai-company-research',
    title: 'AI Company Research Assistant',
    category: 'AI / LLM Tooling',
    description: 'A deep company intelligence web app that searches, aggregates, and structures complete corporate reports.',
    stack: ['Next.js', 'Tailwind CSS', 'Gemini API', 'Vercel'],
    link: 'https://ai-powered-company-research-assistant.vercel.app',
    impact: 'Delivers comprehensive competitor analyses and corporate summaries instantly.',
    featured: true
  },
  {
    id: 'promptflux',
    title: 'PromptFlux',
    category: 'AI / LLM Tooling',
    description: 'Prompt playground and orchestrator allowing developers to test, version-control, and share fine-tuned LLM system prompts.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://promptflux.vercel.app',
    impact: 'Saves hours of testing by keeping a localized history of prompt versions side-by-side.',
    featured: true
  },
  {
    id: 'rental-car-analytics',
    title: 'Rental Car Analytics & Management System',
    category: 'Data / Full Stack',
    description: 'Enterprise dashboard tracking rental fleet distribution, revenue streams, reservation statuses, and maintenance schedules.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Charts'],
    impact: 'Synthesized transactional history into direct business intelligence with responsive SQL indices.',
    featured: false
  },
  {
    id: 'paper-trading-bot',
    title: 'Backtesting & Paper Trading Bot',
    category: 'Data / Python',
    description: 'High-frequency simulation engine reflecting transaction slippage, funding fees, and order-book spreads on historical BTC/USD data.',
    stack: ['Python', 'Pandas', 'NumPy', 'Technical Indicators'],
    impact: 'Supports SMA Crossover, Wilder RSI, and Donchian Channel breakout evaluation.',
    featured: false
  },
  {
    id: 'retro-ringtone',
    title: 'Retro Ringtone Reminder App',
    category: 'Web / Mobile',
    description: 'Synthesizer ringtone compiler generating classic 8-bit soundwaves directly in the browser, packed as Android APK via Capacitor.',
    stack: ['React', 'Web Audio API', 'Capacitor', 'Android SDK'],
    impact: 'Runs completely local audio synthesis offline with a nostalgic 80s control board.',
    featured: false
  },
  {
    id: 'prompt-enhancer',
    title: 'Prompt Enhancer (Termux)',
    category: 'Developer Tools',
    description: 'Local system prompt optimization tool designed to run lightweight offline LLMs locally on mobile systems.',
    stack: ['Python', 'Flask', 'Server-Sent Events (SSE)', 'Ollama (TinyLlama)'],
    impact: 'Streamlined local terminal text optimization directly inside mobile Termux environments.',
    featured: false
  }
];
