# Omkar Chavan — Portfolio

Personal portfolio of **Omkar Chavan**, Full-Stack Developer & Data Analyst. A single-page React site with four switchable visual themes, an interactive CV modal, and a working contact form.

## Features

- **4 live themes** — switch instantly between Bento Slate, Aurora Glass, Dev Minimal, and Neobrutalism via the floating theme widget (top-right).
- **Full portfolio sections** — Hero, About, Experience, Skills, Projects, Education, and Contact.
- **Interactive CV** — opens an in-page resume modal with print/download options.
- **Working contact form** — messages are delivered to the inbox via the FormSubmit AJAX API.
- **Fully responsive** — mobile navigation menu, back-to-top button, smooth scrolling.
- **All content in one place** — profile, experience, skills, projects, and contact details are edited in a single data file.

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev) — dev server & build tooling
- [Tailwind CSS 4](https://tailwindcss.com) — styling (via `@tailwindcss/vite`)
- [Motion](https://motion.dev) — animations
- [lucide-react](https://lucide.dev) — icons
- [FormSubmit](https://formsubmit.co) — form-to-email delivery

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ and npm

### Install & Run

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:3000**.

### Build for Production

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Available Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the Vite dev server on port 3000        |
| `npm run build` | Type-check + create a production build        |
| `npm run preview` | Preview the production build locally        |
| `npm run lint`  | Run the TypeScript compiler check (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` and `server.js` build artifacts |

## Project Structure

```
src/
├── App.tsx                 # Layout, header, footer, theme state
├── data.ts                 # All portfolio content (edit this!)
├── types.ts                # Shared TypeScript types
├── main.tsx                # React entry point
├── index.css               # Global styles / Tailwind entry
└── components/
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── ExperienceSection.tsx
    ├── SkillsSection.tsx
    ├── ProjectsSection.tsx
    ├── EducationSection.tsx
    ├── ContactSection.tsx
    ├── ThemeSelector.tsx   # Floating theme switcher
    └── ResumeModal.tsx     # Interactive CV modal
```

## Customization

All personal content lives in **`src/data.ts`** — name, contact info, experience, skills, projects, education, and impact metrics. Edit that file to update the site; no component changes needed.

- **Contact form** — messages are POSTed to `https://formsubmit.co/ajax/omkarchavan1500@gmail.com` in `src/components/ContactSection.tsx`. Update the address there (and activate the email in your FormSubmit dashboard) to change where messages are delivered.
- **Themes** — each section component receives the active `PortfolioTheme` and renders theme-specific styling; add a new theme by extending the `PortfolioTheme` type in `src/types.ts` and `ThemeSelector.tsx`.

## Environment Variables

An `.env.example` template is included for reference (`GEMINI_API_KEY`, `APP_URL`). The static site itself does not require any environment variables to run — they are only needed if you add server-side AI features later.

## License

Apache-2.0. See the SPDX headers in the source files.
