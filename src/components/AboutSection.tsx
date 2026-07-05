/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Award, Target, HelpCircle, Activity } from 'lucide-react';
import { PortfolioTheme } from '../types';

interface AboutSectionProps {
  theme: PortfolioTheme;
}

export default function AboutSection({ theme }: AboutSectionProps) {
  const bio = "As a results-oriented Full-Stack Developer and Data Analyst, I bridge the gap between rigorous technical engineering and strategic business intelligence. With professional experience designing high-throughput data processing workflows and modern web applications at BAAP Services, I understand how to turn raw relational records into direct visual insights and flawless user experiences.";

  if (theme === 'GLASS_AURORA') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto" id="about-section">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] space-y-8 relative overflow-hidden">
          {/* Subtle colored shadow */}
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px]"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-pink-400 font-bold tracking-widest text-xs uppercase font-mono">01 // Profile Background</span>
                <div className="h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent flex-1"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
                About Omkar Chavan
              </h2>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                {bio}
              </p>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm">Academic Trajectory</h4>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    Currently pursuing a <span className="text-sky-300 font-semibold">Master's in Computer Application (MCA)</span>, consolidating theoretical computing structures with active full-stack freelance products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'DEV_MINIMAL') {
    return (
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto font-mono" id="about-section">
        <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-10 rounded-xl text-emerald-400 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <span className="text-xs text-zinc-500">$ cat about_me.txt</span>
            <span className="text-xs text-zinc-500">Bytes: 462</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-500" /> Omkar_Chavan.md
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              {bio}
            </p>
          </div>

          <div className="border-t border-zinc-900 pt-6 space-y-3">
            <p className="text-zinc-500"># Academic Core Status</p>
            <div className="bg-zinc-900/60 p-4 rounded-lg border border-zinc-800/50 flex items-start gap-3">
              <span className="text-amber-500 font-bold">[MCA]</span>
              <div className="text-xs space-y-1">
                <p className="text-white font-bold">Master's in Computer Application</p>
                <p className="text-zinc-400">Current Status: ACTIVE / PURSUING</p>
                <p className="text-zinc-500">Focus Areas: Advanced Database Indexing, Distributed Systems, Cloud Deployments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'NEOBRUTALISM') {
    return (
      <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto" id="about-section">
        <div className="border-4 border-black bg-white p-6 md:p-10 shadow-[8px_8px_0_#000] space-y-6">
          <div className="bg-red-500 text-white font-black py-2 px-4 inline-block border-2 border-black tracking-widest uppercase text-xs transform -rotate-1">
            ABOUT OMKAR
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-black tracking-tight leading-none">
            ENGINEERING & ANALYTICS
          </h2>

          <p className="text-black font-bold text-base md:text-lg leading-relaxed">
            {bio}
          </p>

          <div className="border-4 border-black bg-purple-100 p-5 flex gap-4 items-start shadow-[4px_4px_0_#000]">
            <Award className="w-8 h-8 text-black shrink-0" />
            <div className="space-y-1 text-black font-semibold">
              <h4 className="font-extrabold uppercase text-sm tracking-wider">MCA Specialization in Progress</h4>
              <p className="text-xs opacity-90 leading-relaxed">
                Aggressively expanding technical capabilities while pursuing Master's in Computer Application (MCA). Combines enterprise-grade architecture with real-world development metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: BENTO_SLATE
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" id="about-section">
      {/* Narrative Card (Spans 2 cols) */}
      <div className="md:col-span-2 bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 md:p-8 space-y-6 hover:border-slate-700/60 transition-all duration-300">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-widest">
          <Activity className="w-4 h-4" /> Professional Profile
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display">
          Bridging Full-Stack Code & High-Impact Analytics
        </h2>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          {bio}
        </p>
      </div>

      {/* Education Preview Bento Box */}
      <div className="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 hover:border-slate-700/60 transition-all duration-300 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Track</span>
            <BookOpen className="w-4 h-4 text-sky-400" />
          </div>
          <h3 className="text-lg font-bold text-white">MCA Pursuit</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Actively pursuing a <strong>Master's in Computer Application (MCA)</strong> to strengthen core technical foundations in algorithms, distributed systems, and modern SaaS scaling.
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400">
          <span>Mysore University</span>
          <span className="bg-emerald-950/50 border border-emerald-900/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
            IN PROGRESS
          </span>
        </div>
      </div>
    </div>
  );
}
