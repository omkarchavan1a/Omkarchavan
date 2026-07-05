/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle, Copy, AlertCircle } from 'lucide-react';
import { PortfolioTheme } from '../types';
import { contactInfo } from '../data';

interface ContactSectionProps {
  theme: PortfolioTheme;
}

export default function ContactSection({ theme }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Dispatch message to FormSubmit API endpoint for omkarchavan1500@gmail.com
    fetch('https://formsubmit.co/ajax/omkarchavan1500@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Portfolio Form Inquiry',
        message: formData.message,
        _subject: formData.subject ? `Portfolio: ${formData.subject}` : `New Portfolio Message from ${formData.name}`,
        _captcha: 'false'
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to send message via dispatch pipeline.');
        }
        return res.json();
      })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('Dispatch error:', err);
        setErrors({
          submit: 'Failed to transmit message through the automated gateway. Please email omkarchavan1500@gmail.com directly!'
        });
        setIsSubmitting(false);
      });
  };

  const getThemeInputClass = () => {
    if (theme === 'GLASS_AURORA') {
      return 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-white/30 focus:bg-white/10 outline-none transition-all placeholder-white/30';
    }
    if (theme === 'DEV_MINIMAL') {
      return 'w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-emerald-400 font-mono text-xs focus:border-emerald-500/50 outline-none transition-all placeholder-zinc-600';
    }
    if (theme === 'NEOBRUTALISM') {
      return 'w-full bg-white border-4 border-black px-4 py-3 text-black text-sm font-semibold outline-none focus:bg-yellow-50 placeholder-black/50';
    }
    // Default: BENTO_SLATE
    return 'w-full bg-slate-950/40 border border-slate-800/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-sky-500/40 focus:bg-slate-900/40 outline-none transition-all placeholder-slate-600';
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-10" id="contact-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between px-2 gap-4">
        <div className="space-y-2">
          {theme === 'GLASS_AURORA' && <span className="text-purple-400 font-bold tracking-widest text-xs uppercase font-mono">06 // Communication</span>}
          {theme === 'DEV_MINIMAL' && <span className="text-zinc-500 font-mono text-xs">$ ping -c 1 chavan_omkar</span>}
          {theme === 'NEOBRUTALISM' && (
            <div className="bg-red-500 text-white border-2 border-black font-black uppercase text-xs py-1.5 px-4 inline-block transform rotate-1 mb-1">
              GET IN TOUCH
            </div>
          )}
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${
            theme === 'NEOBRUTALISM' ? 'uppercase font-display text-black' : 'text-white font-sans'
          }`}>
            Contact Channels
          </h2>
          <p className={theme === 'NEOBRUTALISM' ? 'text-black font-semibold' : 'text-slate-400 text-sm max-w-xl'}>
            Let's discuss full-stack freelance contracts, database optimizations, or employment shortlistings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Contact Info (Spans 2 columns) */}
        <div className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between lg:col-span-2 ${
          theme === 'GLASS_AURORA' ? 'backdrop-blur-md bg-white/5 border border-white/10 text-white' :
          theme === 'DEV_MINIMAL' ? 'border border-zinc-800 bg-zinc-950 text-emerald-400 font-mono' :
          theme === 'NEOBRUTALISM' ? 'border-4 border-black bg-white text-black shadow-[6px_6px_0px_#000]' :
          'bg-slate-900/30 border border-slate-800/60 text-slate-300'
        }`}>
          <div className="space-y-8">
            <h3 className={`text-xl font-bold tracking-tight ${theme === 'NEOBRUTALISM' ? 'uppercase' : 'text-white'}`}>
              Omkar's Direct Coordinates
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl border ${
                  theme === 'NEOBRUTALISM' ? 'border-2 border-black bg-yellow-300 text-black' : 'border-slate-800/80 bg-slate-950/40 text-sky-400'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-semibold truncate select-all">{contactInfo.email}</p>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-[10px] text-sky-400 font-semibold hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" /> {copiedText ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl border ${
                  theme === 'NEOBRUTALISM' ? 'border-2 border-black bg-purple-300 text-black' : 'border-slate-800/80 bg-slate-950/40 text-pink-400'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Mobile Hotline</p>
                  <p className="text-sm font-semibold select-all">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl border ${
                  theme === 'NEOBRUTALISM' ? 'border-2 border-black bg-pink-300 text-black' : 'border-slate-800/80 bg-slate-950/40 text-purple-400'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Location</p>
                  <p className="text-sm font-semibold">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/40 mt-8">
            <a
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noreferrer referrer"
              className={`inline-flex items-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl border transition-all duration-300 ${
                theme === 'NEOBRUTALISM'
                  ? 'bg-black text-white border-2 border-black shadow-[2px_2px_0_#000]'
                  : 'bg-slate-950/60 border-slate-800 text-sky-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Github className="w-4 h-4" /> View GitHub Repository
            </a>
          </div>
        </div>

        {/* Contact Form (Spans 3 columns) */}
        <div className={`rounded-3xl p-6 md:p-8 lg:col-span-3 ${
          theme === 'GLASS_AURORA' ? 'backdrop-blur-md bg-white/5 border border-white/10' :
          theme === 'DEV_MINIMAL' ? 'border border-zinc-800 bg-zinc-950 font-mono text-emerald-400' :
          theme === 'NEOBRUTALISM' ? 'border-4 border-black bg-white shadow-[6px_6px_0px_#000]' :
          'bg-slate-900/30 border border-slate-800/60'
        }`}>
          {isSuccess ? (
            <div className="h-full flex flex-col justify-center items-center py-12 text-center space-y-4">
              <CheckCircle className={`w-16 h-16 ${theme === 'DEV_MINIMAL' ? 'text-emerald-400' : 'text-emerald-500'}`} />
              <div className="space-y-2">
                <h3 className={`text-xl font-bold tracking-tight ${theme === 'NEOBRUTALISM' ? 'text-black' : 'text-white'}`}>
                  Transmission Dispatched Successfully!
                </h3>
                <p className={`text-sm max-w-sm mx-auto ${theme === 'NEOBRUTALISM' ? 'text-black font-semibold' : 'text-slate-400'}`}>
                  Thank you for pining. Your message has bypassed validation and triggered mock pipeline success! Omkar will respond within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                  theme === 'NEOBRUTALISM'
                    ? 'bg-black text-white border-2 border-black'
                    : theme === 'DEV_MINIMAL'
                      ? 'border border-emerald-500 hover:bg-emerald-950/50'
                      : 'bg-sky-500 text-slate-900 font-extrabold hover:bg-sky-400'
                }`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'NEOBRUTALISM' ? 'text-black' : 'text-slate-400'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager"
                    className={getThemeInputClass()}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'NEOBRUTALISM' ? 'text-black' : 'text-slate-400'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="manager@techcorp.com"
                    className={getThemeInputClass()}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'NEOBRUTALISM' ? 'text-black' : 'text-slate-400'}`}>
                  Subject Matter
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Freelance Project / Recruitment Opportunity"
                  className={getThemeInputClass()}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'NEOBRUTALISM' ? 'text-black' : 'text-slate-400'}`}>
                  Message Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Describe your contract parameters or technical requirements..."
                  className={getThemeInputClass()}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {errors.submit && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.submit}</span>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 text-xs uppercase tracking-wider font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    theme === 'NEOBRUTALISM'
                      ? 'bg-red-500 border-4 border-black text-white shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none'
                      : theme === 'DEV_MINIMAL'
                        ? 'border border-emerald-500 text-emerald-400 hover:bg-emerald-950/40'
                        : 'bg-sky-500 text-slate-900 rounded-xl hover:bg-sky-400 shadow-lg shadow-sky-500/10'
                  }`}
                >
                  {isSubmitting ? 'Transmitting...' : 'Dispatch Message'} <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
