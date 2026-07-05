/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, FileText, Github, Mail, MapPin, Phone, Terminal as TermIcon, Sparkles } from 'lucide-react';
import { PortfolioTheme } from '../types';
import { contactInfo } from '../data';

interface HeroSectionProps {
  theme: PortfolioTheme;
  onOpenResume: () => void;
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export default function HeroSection({ theme, onOpenResume, onScrollToProjects, onScrollToContact }: HeroSectionProps) {
  const displayTitle = "Omkar Chavan";
  const displaySubtitle = "Full-Stack Developer | Data Analyst";
  const valueProp = "Synthesizing scalable backend architectures, high-fidelity React frontends, and impact-driven database intelligence into unified full-stack software products.";

  if (theme === 'GLASS_AURORA') {
    return (
      <div className="relative min-height-[90vh] flex flex-col justify-center items-center py-20 px-4 md:px-8 text-center overflow-hidden" id="hero-section">
        {/* Animated Aurora blobs in background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-purple-600/30 blur-[80px] animate-liquid-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px] animate-aurora-spin"></div>
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-pink-500/25 blur-[90px] animate-aurora-spin-reverse"></div>
        </div>

        <div className="max-w-4xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-14 rounded-[32px] shadow-2xl relative">
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-pink-500/20 animate-bounce">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-purple-200 tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for Hire & Contract
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold font-sans tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-yellow-200">{displayTitle}</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-sky-200/90 mb-6 font-display">
            {displaySubtitle}
          </p>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            {valueProp}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onScrollToProjects}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-sky-500/25 flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenResume}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold text-sm tracking-wide flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Interactive Resume
            </button>
          </div>

          {/* Core Info Tags */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/60 text-xs">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" /> {contactInfo.location}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-pink-400" /> {contactInfo.email}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-purple-400" /> {contactInfo.phone}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Github className="w-4 h-4 text-yellow-400" /> github.com/omkarchavan1a
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'DEV_MINIMAL') {
    return (
      <div className="min-height-[90vh] py-16 px-4 md:px-8 flex flex-col justify-center" id="hero-section">
        <div className="max-w-4xl w-full mx-auto border border-zinc-800 bg-zinc-950/90 rounded-xl overflow-hidden shadow-2xl font-mono text-emerald-400">
          {/* Terminal Titlebar */}
          <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>
            <span className="text-xs text-zinc-500 font-bold flex items-center gap-1">
              <TermIcon className="w-3.5 h-3.5" /> user@omkar-chavan-portfolio:~
            </span>
            <span className="text-xs text-zinc-500">v1.0.0</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-10 space-y-6">
            <div className="space-y-1">
              <p className="text-zinc-600"># Initializing professional profile parameters...</p>
              <p className="text-zinc-400">
                <span className="text-pink-500">const</span> developer = &#123;
              </p>
              <p className="pl-6">
                name: <span className="text-yellow-300">"{displayTitle}"</span>,
              </p>
              <p className="pl-6">
                roles: [<span className="text-yellow-300">"Full-Stack Developer"</span>, <span className="text-yellow-300">"Data Analyst"</span>],
              </p>
              <p className="pl-6 text-emerald-300">
                currentProjectFocus: <span className="text-yellow-300">"Master's in Computer Application (MCA)"</span>,
              </p>
              <p className="pl-6">
                location: <span className="text-yellow-300">"Pune, India"</span>,
              </p>
              <p className="pl-6">
                contact: &#123; email: <span className="text-yellow-300">"{contactInfo.email}"</span>, github: <span className="text-yellow-300">"omkarchavan1a"</span> &#125;
              </p>
              <p className="text-zinc-400">&#125;;</p>
            </div>

            <div className="space-y-2 border-t border-zinc-900 pt-6">
              <p className="text-zinc-600"># Core value statement execution output:</p>
              <p className="text-white text-sm md:text-base leading-relaxed pl-4 border-l-2 border-emerald-500">
                "{valueProp}"
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-zinc-500">$</span>
                <span className="text-white">run portfolio_explorer --filter=featured</span>
                <span className="w-2.5 h-5 bg-emerald-400 inline-block animate-pulse align-middle"></span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onScrollToProjects}
                  className="px-6 py-2.5 border border-emerald-500 hover:bg-emerald-500 hover:text-black font-bold text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                >
                  ./projects.sh <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenResume}
                  className="px-6 py-2.5 border border-zinc-700 hover:border-emerald-500 hover:bg-zinc-900 font-bold text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" /> ./get_resume.bin
                </button>
                <button
                  onClick={onScrollToContact}
                  className="px-6 py-2.5 border border-zinc-700 hover:border-emerald-500 hover:bg-zinc-900 text-zinc-400 hover:text-emerald-400 font-bold text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" /> ./ping_contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'NEOBRUTALISM') {
    return (
      <div className="min-height-[90vh] py-20 px-4 md:px-8 flex flex-col justify-center bg-yellow-400 text-black border-b-4 border-black relative overflow-hidden" id="hero-section">
        <div className="absolute top-8 right-8 rotate-12 bg-purple-500 text-white font-black text-xs md:text-sm uppercase tracking-widest py-2 px-6 border-4 border-black shadow-[4px_4px_0_#000] z-10 animate-pulse">
          90% Data Speedup!
        </div>

        <div className="max-w-4xl w-full mx-auto space-y-8">
          <div className="inline-block bg-black text-yellow-400 text-xs font-black uppercase tracking-widest py-2 px-4 border-2 border-black transform -rotate-1">
            ⚡ LIVE PORTFOLIO REFERENCE v1.0
          </div>

          <h1 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tight leading-none text-black">
            OMKAR<br />
            <span className="bg-white border-4 border-black px-4 inline-block transform rotate-1 shadow-[8px_8px_0_#000] text-red-500">
              CHAVAN
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-black uppercase text-black max-w-2xl font-mono">
            {displaySubtitle}
          </h2>

          <p className="text-lg md:text-xl font-bold leading-relaxed border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0_#000] max-w-3xl">
            {valueProp}
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <button
              onClick={onScrollToProjects}
              className="px-8 py-4 bg-red-500 hover:bg-red-400 border-4 border-black text-white font-extrabold uppercase text-sm tracking-wider shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
            >
              EXPLORE WORKS <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenResume}
              className="px-8 py-4 bg-white hover:bg-zinc-100 border-4 border-black text-black font-extrabold uppercase text-sm tracking-wider shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-5 h-5" /> GET RESUME PDF
            </button>
          </div>

          {/* Brutalist details */}
          <div className="flex flex-wrap gap-4 text-xs font-bold pt-6">
            <span className="bg-white px-3 py-1.5 border-2 border-black rounded-none shadow-[2px_2px_0_#000]">📍 {contactInfo.location}</span>
            <span className="bg-white px-3 py-1.5 border-2 border-black rounded-none shadow-[2px_2px_0_#000]">✉️ {contactInfo.email}</span>
            <span className="bg-white px-3 py-1.5 border-2 border-black rounded-none shadow-[2px_2px_0_#000]">📞 {contactInfo.phone}</span>
            <span className="bg-white px-3 py-1.5 border-2 border-black rounded-none shadow-[2px_2px_0_#000]">💻 github.com/omkarchavan1a</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: BENTO_SLATE
  return (
    <div className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" id="hero-section">
      {/* Intro Bento Box (Spans 2 columns on desktop) */}
      <div className="md:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-10 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-xl relative group">
        <div className="absolute top-6 right-6 flex items-center gap-2 text-xs text-sky-400 font-semibold bg-sky-950/40 border border-sky-800/30 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          BAAP Services — Jr. Dev
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-sky-400 font-semibold text-xs tracking-wider uppercase">Welcome to my workspace</p>
          <h1 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight text-white leading-none">
            I'm <span className="text-sky-400 font-display">{displayTitle}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-300 font-sans">
            {displaySubtitle}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {valueProp}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={onScrollToProjects}
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-sky-500/10 cursor-pointer"
          >
            Browse Projects <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 border border-slate-700/50 transition-all duration-300 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-sky-400" /> Print / PDF CV
          </button>
        </div>
      </div>

      {/* Decorative Interactive Quick Stats Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-xl text-white">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Live Operations</span>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-0.5 rounded-full font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ACTIVE
          </span>
        </div>

        <div className="space-y-6 py-6">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-medium">Headquarters</span>
            <p className="text-sm font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" /> {contactInfo.location}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-medium">Primary Contact</span>
            <p className="text-sm font-semibold flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 text-pink-400" /> {contactInfo.email}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-medium font-mono">Local System Time</span>
            <p className="text-sm font-bold font-mono text-sky-400 bg-slate-900/60 py-2 px-3 rounded-lg border border-slate-800/80">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} (IST)
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 font-semibold transition-colors">
            <Github className="w-4 h-4" /> GitHub Profiling
          </a>
          <span className="opacity-50">Omkar Chavan</span>
        </div>
      </div>
    </div>
  );
}
