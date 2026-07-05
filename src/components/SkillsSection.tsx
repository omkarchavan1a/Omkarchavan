/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Database, Layout, Shield, Cpu, Cloud, Check } from 'lucide-react';
import { PortfolioTheme } from '../types';
import { skillCategories } from '../data';

interface SkillsSectionProps {
  theme: PortfolioTheme;
}

export default function SkillsSection({ theme }: SkillsSectionProps) {
  // Map categories to modern Lucide icons
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'data analytics':
        return <Database className="w-5 h-5" />;
      case 'front-end development':
        return <Layout className="w-5 h-5" />;
      case 'back-end & databases':
        return <Shield className="w-5 h-5" />;
      case 'ai & automation':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Cloud className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'data analytics':
        return 'text-sky-400 border-sky-500/20 bg-sky-950/20';
      case 'front-end development':
        return 'text-pink-400 border-pink-500/20 bg-pink-950/20';
      case 'back-end & databases':
        return 'text-purple-400 border-purple-500/20 bg-purple-950/20';
      case 'ai & automation':
        return 'text-yellow-400 border-yellow-500/20 bg-yellow-950/20';
      default:
        return 'text-indigo-400 border-indigo-500/20 bg-indigo-950/20';
    }
  };

  if (theme === 'GLASS_AURORA') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-12" id="skills-section">
        <div className="text-center space-y-3">
          <span className="text-purple-400 font-bold tracking-widest text-xs uppercase font-mono">03 // Technical Stack</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Skills Inventory
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            A comprehensive overview of my tech stacks across full-stack development, LLM engineering, and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent blur-lg rounded-full"></div>
              
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 bg-white/10 border border-white/15 text-white rounded-lg">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-white font-bold text-base tracking-tight font-display">{cat.category}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((s, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-white/95">{s.name}</span>
                      <span className="text-white/50">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-400 to-pink-500 rounded-full transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (theme === 'DEV_MINIMAL') {
    return (
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto font-mono space-y-8" id="skills-section">
        <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-10 rounded-xl text-emerald-400 space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <span className="text-xs text-zinc-500">$ fetch_system_specs --skills</span>
            <span className="text-xs text-zinc-500">Modules: {skillCategories.length}</span>
          </div>

          <div className="space-y-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-500">[System.{cat.category.replace(/[^a-zA-Z]/g, '')}]</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l border-zinc-900">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="text-xs flex items-center justify-between bg-zinc-900/40 p-2.5 rounded border border-zinc-900/60 hover:border-emerald-500/30">
                      <span className="text-zinc-300"># {s.name}</span>
                      <span className="text-emerald-400 font-bold">[{'#'.repeat(Math.round((s.level ?? 80) / 10))}{'.'.repeat(10 - Math.round((s.level ?? 80) / 10))}]</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'NEOBRUTALISM') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-12" id="skills-section">
        <div className="space-y-3">
          <div className="bg-red-500 text-white border-2 border-black font-black uppercase text-xs py-1.5 px-4 inline-block transform -rotate-1 shadow-[2px_2px_0_#000]">
            EXPERTISE
          </div>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-black">
            TECH SPECS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] space-y-6">
              <h3 className="text-lg font-black uppercase border-b-4 border-black pb-2 flex items-center gap-2">
                {getCategoryIcon(cat.category)} {cat.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-yellow-100 text-black border-2 border-black py-1 px-3 text-xs font-black uppercase shadow-[2px_2px_0_#000]"
                  >
                    {s.name} ({s.level}%)
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: BENTO_SLATE
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-6" id="skills-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between px-2 gap-4">
        <div className="space-y-2">
          <p className="text-sky-400 font-semibold text-xs tracking-wider uppercase">Technical Index</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
            Technical Stack & Skill Grid
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A granular breakdown of full-stack development capability, database warehousing, and artificial intelligence models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx} 
            className="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 hover:border-slate-700/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-800/60">
                <div className={`p-2 rounded-xl border ${getCategoryColor(cat.category)}`}>
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide font-sans">{cat.category}</h3>
              </div>

              <div className="space-y-3">
                {cat.skills.map((s, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-xs bg-slate-950/40 border border-slate-900 px-3.5 py-2.5 rounded-xl text-slate-300">
                    <span className="font-medium text-slate-200">{s.name}</span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded-full">
                      {s.level}% Expert
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
