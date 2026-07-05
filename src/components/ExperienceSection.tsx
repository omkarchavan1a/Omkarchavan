/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, Zap, Star, TrendingUp, Cpu } from 'lucide-react';
import { PortfolioTheme } from '../types';
import { experiences } from '../data';

interface ExperienceSectionProps {
  theme: PortfolioTheme;
}

export default function ExperienceSection({ theme }: ExperienceSectionProps) {
  const job = experiences[0];

  if (theme === 'GLASS_AURORA') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-12" id="experience-section">
        <div className="text-center space-y-3">
          <span className="text-purple-400 font-bold tracking-widest text-xs uppercase font-mono">02 // Employment History</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Professional Experience
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Practical development and analytical metrics driving client-facing products.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {job.impactMetrics.map((m, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-pink-500/10 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 font-display">
                {m.label}
              </p>
              <h4 className="text-white font-bold text-sm mt-1">{m.value}</h4>
              <p className="text-white/55 text-xs mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Timeline Card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-950/50 border border-purple-500/20 text-purple-400 rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">{job.role}</h3>
                <p className="text-purple-300 font-medium text-sm">{job.company}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-white/10 border border-white/15 px-3.5 py-1 rounded-full text-xs font-semibold text-white/90">
                {job.duration}
              </span>
              <p className="text-white/40 text-xs mt-1">{job.location}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {job.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3 text-white/80 text-sm md:text-base leading-relaxed">
                <Zap className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (theme === 'DEV_MINIMAL') {
    return (
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto font-mono space-y-8" id="experience-section">
        <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-10 rounded-xl text-emerald-400 space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <span className="text-xs text-zinc-500">$ query_history --role=all</span>
            <span className="text-xs text-emerald-500 font-bold">1 Record Found</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
              <div>
                <h3 className="text-base md:text-lg font-bold text-white">[{job.role}]</h3>
                <p className="text-emerald-300 text-sm">Company: {job.company}</p>
              </div>
              <div className="text-left md:text-right text-xs text-zinc-500 space-y-0.5">
                <p className="text-emerald-400">Duration: {job.duration}</p>
                <p>Location: {job.location}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {job.bullets.map((b, idx) => (
                <div key={idx} className="flex gap-3 text-zinc-300 text-xs md:text-sm leading-relaxed">
                  <span className="text-emerald-500 shrink-0">&gt;&gt;</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-6 space-y-4">
            <p className="text-zinc-500"># Calculated Performance KPIs (Key Performance Indicators):</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {job.impactMetrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-zinc-900/40 border border-zinc-850 rounded-lg text-emerald-400">
                  <p className="text-2xl font-bold text-white">{m.label}</p>
                  <p className="text-xs text-emerald-300 font-bold mt-1">{m.value}</p>
                  <p className="text-[11px] text-zinc-500 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'NEOBRUTALISM') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-12" id="experience-section">
        <div className="space-y-3">
          <div className="bg-purple-500 text-white border-2 border-black font-black uppercase text-xs py-1.5 px-4 inline-block transform rotate-1 shadow-[2px_2px_0_#000]">
            WORK EXPERIENCE
          </div>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-black">
            CAREER TIMELINE
          </h2>
        </div>

        {/* Quantifiable Impact Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {job.impactMetrics.map((m, idx) => (
            <div key={idx} className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
              <div className="bg-yellow-400 text-black border-2 border-black font-black text-xl px-3 py-1 inline-block">
                {m.label}
              </div>
              <h4 className="text-black font-black uppercase text-sm mt-3">{m.value}</h4>
              <p className="text-black font-semibold text-xs mt-1.5 opacity-80 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Card */}
        <div className="border-4 border-black bg-teal-100 p-6 md:p-10 shadow-[8px_8px_0_#000] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-black pb-4 gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-black uppercase text-black">{job.role}</h3>
              <p className="text-black font-extrabold uppercase text-sm">{job.company}</p>
            </div>
            <div className="text-left md:text-right font-black text-xs space-y-0.5">
              <span className="bg-black text-white px-3 py-1 inline-block">{job.duration}</span>
              <p className="pt-1">📍 {job.location}</p>
            </div>
          </div>

          <div className="space-y-4 text-black font-semibold">
            {job.bullets.map((b, idx) => (
              <div key={idx} className="flex gap-3 text-sm md:text-base leading-relaxed">
                <Star className="w-5 h-5 text-black shrink-0 fill-yellow-400 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default: BENTO_SLATE
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-6" id="experience-section">
      {/* Grid Headers */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-2 gap-4">
        <div className="space-y-2">
          <p className="text-sky-400 font-semibold text-xs tracking-wider uppercase">Active Footprint</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
            Professional Experience & KPIs
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          Quantifying software contributions and business intelligence integrations made on active developer teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Experience Details (Spans 2 columns) */}
        <div className="md:col-span-2 bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 md:p-8 space-y-8 hover:border-slate-700/60 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-800/80 border border-slate-700/50 text-sky-400 rounded-xl">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sans">{job.role}</h3>
                <p className="text-sky-400 font-medium text-sm">{job.company}</p>
              </div>
            </div>
            <div className="text-left sm:text-right space-y-0.5">
              <span className="inline-block bg-slate-800 text-slate-300 border border-slate-700 px-3 py-0.5 rounded-full text-xs font-semibold">
                {job.duration}
              </span>
              <p className="text-slate-500 text-xs">{job.location}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {job.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2.5"></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quantifiable Stats (Stack in 1 column) */}
        <div className="flex flex-col gap-6">
          {job.impactMetrics.map((m, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 hover:border-slate-700/60 transition-all duration-300 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Impact Metric</span>
                <Cpu className="w-4 h-4 text-sky-400" />
              </div>
              
              <div className="py-2">
                <p className="text-3xl md:text-4xl font-extrabold text-white font-display">
                  {m.label}
                </p>
                <h4 className="text-sky-400 font-semibold text-xs uppercase mt-1 tracking-wider">{m.value}</h4>
              </div>

              <p className="text-slate-400 text-xs border-t border-slate-800/80 pt-3 mt-1 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
