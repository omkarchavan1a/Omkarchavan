/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutGrid, Sparkles, Terminal, Palette, ShieldCheck } from 'lucide-react';
import { PortfolioTheme } from '../types';

interface ThemeSelectorProps {
  currentTheme: PortfolioTheme;
  onChangeTheme: (theme: PortfolioTheme) => void;
}

export default function ThemeSelector({ currentTheme, onChangeTheme }: ThemeSelectorProps) {
  const themesList: { id: PortfolioTheme; name: string; desc: string; icon: any; color: string }[] = [
    {
      id: 'BENTO_SLATE',
      name: 'Bento Slate',
      desc: 'Clean, professional grid layout',
      icon: LayoutGrid,
      color: 'bg-slate-800 border-slate-700 text-slate-200'
    },
    {
      id: 'GLASS_AURORA',
      name: 'Aurora Glass',
      desc: 'Glowing colors and frosted glass',
      icon: Sparkles,
      color: 'bg-purple-950/40 border-purple-800/40 text-purple-300'
    },
    {
      id: 'DEV_MINIMAL',
      name: 'Dev Minimal',
      desc: 'Monospace terminal command center',
      icon: Terminal,
      color: 'bg-zinc-950 border-emerald-950 text-emerald-400'
    },
    {
      id: 'NEOBRUTALISM',
      name: 'Neobrutalism',
      desc: 'Loud borders, raw shadows, big type',
      icon: Palette,
      color: 'bg-yellow-400 border-black text-black'
    }
  ];

  return (
    <div className="fixed top-18 right-4 md:right-8 z-50 max-w-sm" id="theme-selector-widget">
      <div className={`p-2.5 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 ${
        currentTheme === 'BENTO_SLATE' ? 'bg-slate-900/90 border-slate-700/80 text-white' :
        currentTheme === 'GLASS_AURORA' ? 'bg-black/40 border-white/10 text-white' :
        currentTheme === 'DEV_MINIMAL' ? 'bg-zinc-950/95 border-emerald-500/30 text-emerald-400 font-mono' :
        'bg-white border-4 border-black text-black shadow-[4px_4px_0px_#000]'
      }`}>
        <div className="flex items-center justify-between mb-2 px-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            {currentTheme === 'DEV_MINIMAL' ? '$ switch_style' : 'Active Aesthetic'}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-medium opacity-80 text-sky-400">
            <ShieldCheck className="w-3 h-3" /> Live Refitted
          </span>
        </div>
        <div className="flex gap-1">
          {themesList.map((t) => {
            const Icon = t.icon;
            const isActive = currentTheme === t.id;
            return (
              <button
                key={t.id}
                id={`theme-btn-${t.id.toLowerCase()}`}
                onClick={() => onChangeTheme(t.id)}
                title={t.name + ': ' + t.desc}
                className={`p-2 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 flex-1 relative group cursor-pointer ${
                  isActive
                    ? currentTheme === 'NEOBRUTALISM'
                      ? 'bg-red-500 text-white border-2 border-black scale-105 shadow-[2px_2px_0px_#000]'
                      : currentTheme === 'DEV_MINIMAL'
                        ? 'bg-emerald-950/60 border border-emerald-400 text-emerald-400 font-bold scale-105 shadow-[0_0_10px_rgba(52,211,153,0.2)]'
                        : currentTheme === 'GLASS_AURORA'
                          ? 'bg-white/20 border border-white/40 text-white scale-105 shadow-lg'
                          : 'bg-sky-500 border border-sky-400 text-white scale-105 shadow-md shadow-sky-500/20'
                    : currentTheme === 'NEOBRUTALISM'
                      ? 'bg-zinc-100 hover:bg-zinc-200 border-2 border-black/40 text-black/70'
                      : currentTheme === 'DEV_MINIMAL'
                        ? 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-emerald-500 hover:border-emerald-500/30'
                        : 'bg-white/5 border border-white/5 hover:bg-white/10 text-white/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[9px] font-bold tracking-tight hidden sm:inline whitespace-nowrap">
                  {t.name.split(' ')[0]}
                </span>
                
                {/* Custom Tooltip */}
                <div className={`absolute bottom-full mb-2 hidden group-hover:block z-[60] w-48 p-2 rounded-lg shadow-xl text-left border text-[11px] font-normal leading-tight ${
                  currentTheme === 'BENTO_SLATE' ? 'bg-slate-900 border-slate-700 text-slate-200' :
                  currentTheme === 'GLASS_AURORA' ? 'bg-slate-900/95 border-white/10 text-white backdrop-blur-md' :
                  currentTheme === 'DEV_MINIMAL' ? 'bg-zinc-950 border-emerald-500/30 text-emerald-400 font-mono' :
                  'bg-yellow-100 border-2 border-black text-black font-semibold shadow-[2px_2px_0px_#000]'
                }`}>
                  <p className="font-bold">{t.name}</p>
                  <p className="opacity-80 mt-0.5">{t.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
