/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ExternalLink, Code, FolderGit, Sliders, ArrowRight, Layers } from 'lucide-react';
import { PortfolioTheme, Project } from '../types';
import { projects } from '../data';

interface ProjectsSectionProps {
  theme: PortfolioTheme;
}

export default function ProjectsSection({ theme }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  // Extract all categories
  const categories = ['ALL', 'AI / LLM Tooling', 'Web / Business Site', 'Data / Full Stack', 'Other'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'Other') {
      return !['AI / LLM Tooling', 'Web / Business Site', 'Data / Full Stack'].includes(p.category);
    }
    return p.category === activeFilter;
  });

  const getThemeClass = (isFeatured: boolean) => {
    if (theme === 'GLASS_AURORA') {
      return `backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 ${
        isFeatured ? 'md:col-span-2' : ''
      }`;
    }
    if (theme === 'DEV_MINIMAL') {
      return `border border-zinc-800 bg-zinc-950/80 text-emerald-400 hover:border-emerald-500/30 ${
        isFeatured ? 'md:col-span-2' : ''
      }`;
    }
    if (theme === 'NEOBRUTALISM') {
      return `border-4 border-black bg-white shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000] transition-all ${
        isFeatured ? 'md:col-span-2 bg-pink-100' : 'bg-white'
      }`;
    }
    // Default: BENTO_SLATE
    return `bg-slate-900/30 border border-slate-800/60 hover:border-slate-700/60 hover:bg-slate-900/40 ${
      isFeatured ? 'md:col-span-2' : ''
    }`;
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-10" id="projects-section">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div className="space-y-2">
          {theme === 'GLASS_AURORA' && <span className="text-purple-400 font-bold tracking-widest text-xs uppercase font-mono">04 // Live Deployments</span>}
          {theme === 'DEV_MINIMAL' && <span className="text-zinc-500 font-mono text-xs">$ ls ~/projects</span>}
          {theme === 'NEOBRUTALISM' && (
            <div className="bg-red-500 text-white border-2 border-black font-black uppercase text-xs py-1 px-3 inline-block transform -rotate-1 mb-1">
              WORKS GRID
            </div>
          )}
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${
            theme === 'NEOBRUTALISM' ? 'uppercase font-display text-black' : 'text-white font-sans'
          }`}>
            Live Project Showcase
          </h2>
          <p className={theme === 'NEOBRUTALISM' ? 'text-black font-semibold' : 'text-slate-400 text-sm max-w-xl'}>
            Explore some of my active web applications, analytics models, and artificial intelligence prototypes. Hover to view the outcomes.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap gap-1.5 p-1.5 rounded-xl border ${
          theme === 'GLASS_AURORA' ? 'bg-white/5 border-white/10 backdrop-blur-md' :
          theme === 'DEV_MINIMAL' ? 'bg-zinc-950 border-zinc-800 font-mono text-xs' :
          theme === 'NEOBRUTALISM' ? 'bg-white border-4 border-black shadow-[4px_4px_0_#000]' :
          'bg-slate-900/50 border-slate-800/80'
        }`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? theme === 'NEOBRUTALISM'
                    ? 'bg-red-500 text-white border-2 border-black'
                    : theme === 'DEV_MINIMAL'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/50'
                      : theme === 'GLASS_AURORA'
                        ? 'bg-white/20 text-white border border-white/25'
                        : 'bg-sky-500 text-slate-900 shadow-lg shadow-sky-500/15'
                  : theme === 'NEOBRUTALISM'
                    ? 'text-black/70 hover:bg-zinc-100'
                    : theme === 'DEV_MINIMAL'
                      ? 'text-zinc-500 hover:text-emerald-400'
                      : 'text-slate-400 hover:text-white'
              }`}
            >
              {theme === 'DEV_MINIMAL' ? `*.${cat.split(' ')[0].toLowerCase()}` : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => {
          const isFeatured = p.featured ?? false;
          return (
            <div
              key={p.id}
              className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${getThemeClass(isFeatured)}`}
            >
              {/* Subtle background glow for featured glass projects */}
              {isFeatured && theme === 'GLASS_AURORA' && (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              )}

              {/* Top Row: Category and External Link */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  theme === 'NEOBRUTALISM'
                    ? 'bg-black text-yellow-400 border border-black'
                    : theme === 'DEV_MINIMAL'
                      ? 'bg-zinc-900 border border-zinc-800 text-emerald-400 font-mono'
                      : 'bg-slate-800/60 border border-slate-700/50 text-sky-400'
                }`}>
                  {p.category}
                </span>

                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer referrer"
                    title="Visit live application"
                    className={`p-2 rounded-xl border flex items-center gap-1 text-xs font-bold transition-all duration-300 ${
                      theme === 'NEOBRUTALISM'
                        ? 'bg-white border-2 border-black hover:bg-yellow-300 text-black shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
                        : theme === 'DEV_MINIMAL'
                          ? 'border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-500/30'
                          : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white bg-slate-950/20'
                    }`}
                  >
                    <span className="hidden sm:inline">Launch App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className={`text-[10px] font-bold border px-2.5 py-1 rounded-full ${
                    theme === 'NEOBRUTALISM' ? 'border-black text-black bg-zinc-200' : 'border-slate-800 text-slate-500'
                  }`}>
                    Offline Pipeline
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-3.5">
                <h3 className={`text-xl md:text-2xl font-extrabold tracking-tight ${
                  theme === 'NEOBRUTALISM' ? 'text-black uppercase font-display border-b-2 border-black pb-1' :
                  theme === 'DEV_MINIMAL' ? 'text-white font-mono' : 'text-white font-sans'
                }`}>
                  {p.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${
                  theme === 'NEOBRUTALISM' ? 'text-black font-semibold' : 'text-slate-400'
                }`}>
                  {p.description}
                </p>
              </div>

              {/* Quantifiable Outcome / Impact Section */}
              <div className={`my-5 p-3.5 rounded-2xl border ${
                theme === 'NEOBRUTALISM'
                  ? 'border-2 border-black bg-yellow-100 font-semibold text-black'
                  : theme === 'DEV_MINIMAL'
                    ? 'border-zinc-900 bg-zinc-900/20 text-zinc-500 font-mono text-[11px]'
                    : 'border-slate-800/80 bg-slate-950/30 text-slate-400 text-xs'
              }`}>
                <span className={`block text-[10px] font-black uppercase tracking-widest mb-1 ${
                  theme === 'NEOBRUTALISM' ? 'text-black' :
                  theme === 'DEV_MINIMAL' ? 'text-emerald-500' : 'text-sky-400'
                }`}>
                  Calculated Outcome:
                </span>
                <p className="leading-relaxed">
                  {p.impact || 'Delivers optimized backend operations with robust analytical reporting indexes.'}
                </p>
              </div>

              {/* Tech Stack List */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      theme === 'NEOBRUTALISM'
                        ? 'bg-white border border-black text-black font-black'
                        : theme === 'DEV_MINIMAL'
                          ? 'bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono'
                          : 'bg-slate-800/40 text-slate-400 border border-slate-800/30'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
