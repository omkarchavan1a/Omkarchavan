/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Mail, Phone, MapPin, Printer, Download, Award, Briefcase, GraduationCap, Linkedin, Instagram } from 'lucide-react';
import { experiences, educationList, skillCategories, projects, contactInfo, quantifiableImpacts } from '../data';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:relative" id="resume-modal-overlay">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh] print:max-h-none print:border-none print:shadow-none print:my-0 print:bg-white print:text-black">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-bold text-slate-200">Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-sky-400" /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-8 print:overflow-visible print:p-0 print:text-black print:space-y-6">
          {/* Header Block */}
          <div className="text-center md:text-left md:flex justify-between items-start border-b border-slate-800/60 pb-6 print:border-slate-300">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white print:text-black">Omkar Chavan</h1>
              <p className="text-sky-400 font-bold text-sm uppercase tracking-wider print:text-sky-700">Full-Stack Developer & Data Analyst</p>
            </div>
            
            <div className="mt-4 md:mt-0 space-y-1.5 text-xs text-slate-400 text-center md:text-right print:text-black print:text-left">
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" /> {contactInfo.email}
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-pink-400 print:text-pink-700" /> {contactInfo.phone}
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400 print:text-purple-700" /> {contactInfo.location}
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 print:text-sky-700" />
                <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noreferrer" className="hover:underline">
                  {contactInfo.linkedin}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-400 print:text-pink-700" />
                <a href={`https://${contactInfo.instagram}`} target="_blank" rel="noreferrer" className="hover:underline">
                  {contactInfo.instagram}
                </a>
              </p>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 print:text-sky-700 print:border-slate-300">
              Professional Summary
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed print:text-black">
              Results-driven Full-Stack Developer and Data Analyst with professional experience designing automated ETL workflows, optimizing relational SQL indices, and constructing robust web dashboards. Skilled in using LLM chaining agents to build high-performance search and optimization systems.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 print:text-sky-700 print:border-slate-300">
              Employment History
            </h2>
            
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <h3 className="text-white font-extrabold print:text-black">{exp.role}</h3>
                    <p className="text-slate-400 text-xs print:text-slate-600">{exp.company}</p>
                  </div>
                  <div className="text-right text-xs">
                    <span className="text-slate-300 font-bold print:text-black">{exp.duration}</span>
                    <p className="text-slate-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pl-2 print:text-black">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 print:text-sky-700 print:border-slate-300">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-slate-400 font-bold print:text-slate-700">{cat.category}</h4>
                  <p className="text-slate-300 print:text-black">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Core */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 print:text-sky-700 print:border-slate-300">
              Selected Projects & Outcomes
            </h2>
            <div className="space-y-3 text-xs">
              {projects.filter(p => p.featured).map((p, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold">
                    <span className="text-white print:text-black">{p.title}</span>
                    <span className="text-slate-500 font-medium">{p.stack.join(' | ')}</span>
                  </div>
                  <p className="text-slate-300 print:text-black">{p.description}</p>
                  {p.impact && <p className="text-sky-400 font-semibold print:text-sky-700">Calculated Impact: {p.impact}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Quantifiable Impact */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 print:text-sky-700 print:border-slate-300">
              Quantifiable Impact
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pl-2 print:text-black">
              {quantifiableImpacts.map((impact, idx) => (
                <li key={idx} className="leading-relaxed">{impact}</li>
              ))}
            </ul>
          </div>

          {/* Education list */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 print:text-sky-700 print:border-slate-300">
              Education & Degrees
            </h2>
            <div className="space-y-2 text-xs">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex justify-between">
                  <div>
                    <span className="text-white font-bold print:text-black">{edu.degree}</span>
                    <p className="text-slate-400 print:text-slate-600">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-300 font-bold print:text-black">{edu.duration}</span>
                    {edu.grade && <p className="text-slate-500">{edu.grade}</p>}
                    {edu.status && <p className="text-slate-500">({edu.status})</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
