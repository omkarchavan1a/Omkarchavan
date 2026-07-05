/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { PortfolioTheme } from '../types';
import { educationList } from '../data';

interface EducationSectionProps {
  theme: PortfolioTheme;
}

export default function EducationSection({ theme }: EducationSectionProps) {
  if (theme === 'GLASS_AURORA') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-12" id="education-section">
        <div className="text-center space-y-3">
          <span className="text-purple-400 font-bold tracking-widest text-xs uppercase font-mono">05 // Academic Foundations</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Education Credentials
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-10">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Glow Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-950 group-hover:bg-sky-400 transition-colors duration-300 shadow-md shadow-pink-500/20"></div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg font-sans">{edu.degree}</h3>
                    <p className="text-purple-300 font-medium text-sm">{edu.institution}</p>
                  </div>
                  <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-semibold text-white/90 shrink-0 self-start sm:self-center flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                  </span>
                </div>

                {edu.grade && (
                  <div className="inline-flex items-center gap-1.5 bg-sky-950/40 border border-sky-800/30 text-sky-300 px-3 py-1 rounded-full text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" /> {edu.grade}
                  </div>
                )}
                {edu.status && (
                  <div className="inline-flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-800/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> {edu.status}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (theme === 'DEV_MINIMAL') {
    return (
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto font-mono space-y-8" id="education-section">
        <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-10 rounded-xl text-emerald-400 space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <span className="text-xs text-zinc-500">$ query_education_logs</span>
            <span className="text-xs text-zinc-500">Total: {educationList.length} Rows</span>
          </div>

          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="border-l border-zinc-800 pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <h3 className="text-sm font-bold text-white">&gt; {edu.degree}</h3>
                  <span className="text-xs text-zinc-500">[{edu.duration}]</span>
                </div>
                <p className="text-xs text-zinc-400">Institution: {edu.institution}</p>
                {edu.grade && <p className="text-[11px] text-emerald-500 font-semibold">{edu.grade}</p>}
                {edu.status && <p className="text-[11px] text-amber-500 font-semibold">Status: {edu.status}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'NEOBRUTALISM') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-12" id="education-section">
        <div className="space-y-3">
          <div className="bg-yellow-400 text-black border-2 border-black font-black uppercase text-xs py-1.5 px-4 inline-block transform rotate-1 shadow-[2px_2px_0_#000]">
            QUALIFICATIONS
          </div>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-black">
            EDUCATION LOG
          </h2>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div key={idx} className="border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black pb-3 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-black uppercase text-black">{edu.degree}</h3>
                  <p className="text-black/80 font-bold text-xs uppercase">{edu.institution}</p>
                </div>
                <span className="bg-black text-white font-extrabold uppercase text-xs px-3 py-1 inline-block shrink-0 self-start sm:self-center">
                  {edu.duration}
                </span>
              </div>

              {edu.grade && (
                <span className="bg-purple-100 text-black border-2 border-black font-black uppercase text-xs py-1 px-3 inline-block">
                  {edu.grade}
                </span>
              )}
              {edu.status && (
                <span className="bg-emerald-100 text-black border-2 border-black font-black uppercase text-xs py-1 px-3 inline-block">
                  {edu.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: BENTO_SLATE
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-6" id="education-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between px-2 gap-4">
        <div className="space-y-2">
          <p className="text-sky-400 font-semibold text-xs tracking-wider uppercase">Credentials</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
            Education Timeline
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A history of computational knowledge and academic records compiled from Pune University.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((edu, idx) => (
          <div 
            key={idx} 
            className="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 hover:border-slate-700/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{edu.duration}</span>
                <GraduationCap className="w-4 h-4 text-sky-400" />
              </div>
              
              <div>
                <h3 className="text-base font-bold text-white font-sans">{edu.degree}</h3>
                <p className="text-slate-400 text-xs mt-1">{edu.institution}</p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              {edu.grade && (
                <span className="bg-sky-950/40 border border-sky-900 text-sky-300 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {edu.grade}
                </span>
              )}
              {edu.status && (
                <span className="bg-emerald-950/40 border border-emerald-900 text-emerald-300 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {edu.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
