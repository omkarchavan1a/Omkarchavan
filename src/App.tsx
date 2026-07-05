/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, Sparkles, Terminal, Palette, FileText, ArrowUp, Zap } from 'lucide-react';
import { PortfolioTheme } from './types';
import { contactInfo } from './data';

// Component imports
import ThemeSelector from './components/ThemeSelector';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<PortfolioTheme>('BENTO_SLATE');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Back-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getThemeFont = () => {
    if (currentTheme === 'BENTO_SLATE') return 'font-sans';
    if (currentTheme === 'GLASS_AURORA') return 'font-sans';
    if (currentTheme === 'DEV_MINIMAL') return 'font-mono text-xs';
    return 'font-display font-bold';
  };

  const getThemeBg = () => {
    if (currentTheme === 'BENTO_SLATE') return 'bg-[#0f172a] text-slate-100 selection:bg-sky-500 selection:text-slate-900';
    if (currentTheme === 'GLASS_AURORA') return 'bg-[#090915] text-white selection:bg-purple-500 selection:text-white';
    if (currentTheme === 'DEV_MINIMAL') return 'bg-black text-emerald-400 selection:bg-emerald-500 selection:text-black';
    return 'bg-yellow-400 text-black selection:bg-black selection:text-yellow-400';
  };

  const getHeaderStyle = () => {
    if (currentTheme === 'BENTO_SLATE') {
      return 'bg-slate-950/80 border-b border-slate-900/80 backdrop-blur-md text-white';
    }
    if (currentTheme === 'GLASS_AURORA') {
      return 'bg-black/35 border-b border-white/10 backdrop-blur-xl text-white';
    }
    if (currentTheme === 'DEV_MINIMAL') {
      return 'bg-zinc-950 border-b border-zinc-900 text-emerald-400 font-mono';
    }
    return 'bg-white border-b-4 border-black text-black font-black uppercase';
  };

  const getLogoStyle = () => {
    if (currentTheme === 'BENTO_SLATE') return 'font-display font-extrabold text-white text-lg tracking-tight';
    if (currentTheme === 'GLASS_AURORA') return 'font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 text-lg';
    if (currentTheme === 'DEV_MINIMAL') return 'font-mono font-bold text-emerald-400 text-sm';
    return 'font-display font-black uppercase text-xl border-4 border-black bg-yellow-400 px-3 py-1 text-black shadow-[2px_2px_0_#000]';
  };

  const getNavLinkStyle = (active: boolean) => {
    if (currentTheme === 'NEOBRUTALISM') {
      return `px-3 py-1.5 border-2 border-black font-black text-xs uppercase tracking-wide cursor-pointer transition-all ${
        active ? 'bg-black text-white' : 'bg-white hover:bg-zinc-100'
      }`;
    }
    if (currentTheme === 'DEV_MINIMAL') {
      return `px-2 py-1 text-xs cursor-pointer ${
        active ? 'text-white border-b border-emerald-500' : 'text-zinc-500 hover:text-emerald-400'
      }`;
    }
    if (currentTheme === 'GLASS_AURORA') {
      return `px-3.5 py-1.5 text-xs font-semibold rounded-full cursor-pointer transition-all ${
        active ? 'bg-white/15 border border-white/30 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
      }`;
    }
    return `px-3.5 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
      active ? 'bg-slate-800 text-sky-400' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
    }`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col justify-between ${getThemeBg()} ${getThemeFont()}`}>
      
      {/* Dynamic Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getHeaderStyle()}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={getLogoStyle()}>
              {currentTheme === 'DEV_MINIMAL' ? 'omkar_chavan:~' : 'OMKAR CHAVAN'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button onClick={() => handleScrollTo('about-section')} className={getNavLinkStyle(false)}>
              {currentTheme === 'DEV_MINIMAL' ? './about' : 'About'}
            </button>
            <button onClick={() => handleScrollTo('experience-section')} className={getNavLinkStyle(false)}>
              {currentTheme === 'DEV_MINIMAL' ? './experience' : 'Experience'}
            </button>
            <button onClick={() => handleScrollTo('skills-section')} className={getNavLinkStyle(false)}>
              {currentTheme === 'DEV_MINIMAL' ? './skills' : 'Skills'}
            </button>
            <button onClick={() => handleScrollTo('projects-section')} className={getNavLinkStyle(false)}>
              {currentTheme === 'DEV_MINIMAL' ? './projects' : 'Projects'}
            </button>
            <button onClick={() => handleScrollTo('education-section')} className={getNavLinkStyle(false)}>
              {currentTheme === 'DEV_MINIMAL' ? './education' : 'Education'}
            </button>
            <button onClick={() => handleScrollTo('contact-section')} className={getNavLinkStyle(false)}>
              {currentTheme === 'DEV_MINIMAL' ? './contact' : 'Contact'}
            </button>
          </nav>

          {/* CV CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsResumeOpen(true)}
              className={`text-xs font-bold px-4 py-2 flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                currentTheme === 'NEOBRUTALISM'
                  ? 'bg-purple-500 hover:bg-purple-400 text-white border-4 border-black shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
                  : currentTheme === 'DEV_MINIMAL'
                    ? 'border border-emerald-500 text-emerald-400 hover:bg-emerald-950/40'
                    : currentTheme === 'GLASS_AURORA'
                      ? 'bg-white/15 border border-white/20 hover:bg-white/25 text-white rounded-full'
                      : 'bg-slate-800 text-sky-400 hover:text-white hover:bg-slate-700 rounded-lg border border-slate-700/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" /> Interactive CV
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-800 hover:bg-slate-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className={`md:hidden px-4 py-6 border-t border-slate-900 flex flex-col gap-3.5 absolute left-0 right-0 ${getHeaderStyle()}`}>
            <button onClick={() => handleScrollTo('about-section')} className="text-left py-2 font-bold hover:text-sky-400">
              {currentTheme === 'DEV_MINIMAL' ? './about' : 'About'}
            </button>
            <button onClick={() => handleScrollTo('experience-section')} className="text-left py-2 font-bold hover:text-sky-400">
              {currentTheme === 'DEV_MINIMAL' ? './experience' : 'Experience'}
            </button>
            <button onClick={() => handleScrollTo('skills-section')} className="text-left py-2 font-bold hover:text-sky-400">
              {currentTheme === 'DEV_MINIMAL' ? './skills' : 'Skills'}
            </button>
            <button onClick={() => handleScrollTo('projects-section')} className="text-left py-2 font-bold hover:text-sky-400">
              {currentTheme === 'DEV_MINIMAL' ? './projects' : 'Projects'}
            </button>
            <button onClick={() => handleScrollTo('education-section')} className="text-left py-2 font-bold hover:text-sky-400">
              {currentTheme === 'DEV_MINIMAL' ? './education' : 'Education'}
            </button>
            <button onClick={() => handleScrollTo('contact-section')} className="text-left py-2 font-bold hover:text-sky-400">
              {currentTheme === 'DEV_MINIMAL' ? './contact' : 'Contact'}
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsResumeOpen(true); }}
              className="mt-2 text-center bg-slate-800 text-sky-400 font-bold text-xs py-3 rounded-xl border border-slate-700/50"
            >
              Interactive Resume (PDF CV)
            </button>
          </div>
        )}
      </header>

      {/* Floating Style Picker / Theme Widget */}
      <ThemeSelector currentTheme={currentTheme} onChangeTheme={setCurrentTheme} />

      {/* Main Content Stage */}
      <main className="pt-24 flex-1 pb-16 space-y-12 md:space-y-20 relative overflow-x-hidden">
        
        {/* Dynamic Canvas Filter for Liquid Glass theme */}
        <svg className="absolute w-0 h-0 pointer-events-none">
          <filter id="liquid-distort-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" result="noise" seed="4"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20"/>
          </filter>
        </svg>

        {/* Section Renderers */}
        <HeroSection
          theme={currentTheme}
          onOpenResume={() => setIsResumeOpen(true)}
          onScrollToProjects={() => handleScrollTo('projects-section')}
          onScrollToContact={() => handleScrollTo('contact-section')}
        />
        <AboutSection theme={currentTheme} />
        <ExperienceSection theme={currentTheme} />
        <SkillsSection theme={currentTheme} />
        <ProjectsSection theme={currentTheme} />
        <EducationSection theme={currentTheme} />
        <ContactSection theme={currentTheme} />

      </main>

      {/* Dynamic Footer */}
      <footer className={`py-12 px-6 md:px-8 text-center text-xs border-t ${
        currentTheme === 'BENTO_SLATE' ? 'bg-slate-950/40 border-slate-900 text-slate-500' :
        currentTheme === 'GLASS_AURORA' ? 'bg-black/30 border-white/5 text-white/40' :
        currentTheme === 'DEV_MINIMAL' ? 'bg-black border-zinc-900 text-zinc-500 font-mono' :
        'bg-white border-t-4 border-black text-black font-extrabold uppercase'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            Designed dynamically with 4 visual systems — {currentTheme} Active
          </p>
          <p>© {new Date().getFullYear()} Omkar Chavan. Full-Stack Developer & Data Analyst. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-40 cursor-pointer ${
            currentTheme === 'NEOBRUTALISM'
              ? 'bg-yellow-400 text-black border-4 border-black shadow-[3px_3px_0_#000]'
              : currentTheme === 'DEV_MINIMAL'
                ? 'bg-zinc-950 text-emerald-400 border border-emerald-500/50'
                : 'bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 shadow-sky-500/10'
          }`}
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive CV Modal Overlay */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

    </div>
  );
}
