
"use client";

import AboutTechBadges from './AboutTechBadges';
import { useState, useEffect } from 'react';
import Image from 'next/image';


function EducationDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-4xl mt-10">
      <button
        className="flex items-center gap-2 text-lg font-semibold text-mainblue mb-2 focus:outline-none focus:ring-2 focus:ring-mainblue"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="education-list"
      >
        <span>Education</span>
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <ul id="education-list" className="text-xs text-stone-500 dark:text-stone-400 list-disc list-inside pl-4 animate-fade-in">
          <li><b>BSc in Information Technology</b> — KCA University (Jan 2024 – Nov 2025)</li>
          <li><b>Diploma in ICT</b> — PC Kinyanjui Technical Training Institute (Jan 2019 – Jul 2023)</li>
          <li><b>Web Development Certification</b> — eMobilis Tech Institute (Oct 2024 – Dec 2024)</li>
        </ul>
      )}
    </div>
  );
}

export default function AboutPage() {
  // Animated words for summary
  const phrases = [
    "I build digital solutions that make an impact.",
    "Passionate about technology and creative problem-solving.",
    "Delivering reliable, user-focused applications.",
    "Always learning. Always collaborating."
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }, 2600);
    return () => clearTimeout(timer);
  }, [phraseIdx, phrases.length]);

  return (
    <section className="py-12 flex flex-col items-center animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl">
        {/* Headshot photo */}
        <Image
          src="/faith.jpg"
          alt="Faith Muthoni headshot"
          width={160}
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 object-cover object-top rounded-full border-4 border-mainblue shadow-lg bg-white dark:bg-stone-800 mt-6 md:mt-10"
          priority={false}
        />
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-mainblue animate-slide-in">About Faith Muthoni</h1>
          <p className="mb-4 text-stone-700 dark:text-stone-200 max-w-xl min-h-[48px] transition-opacity duration-500 animate-fade-in">
            {phrases[phraseIdx]}
          </p>
          <AboutTechBadges />
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <EducationDropdown />
        <h2 className="text-2xl font-bold mb-4 text-mainblue animate-fade-in">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-stone-900 rounded-lg shadow p-6 flex flex-col items-center animate-fade-in">
            <span className="text-3xl mb-2">💻</span>
            <h3 className="font-semibold mb-1">Web Development</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">Building modern, responsive, and accessible web apps with React, Next.js, and more.</p>
          </div>
          <div className="bg-white dark:bg-stone-900 rounded-lg shadow p-6 flex flex-col items-center animate-fade-in">
            <span className="text-3xl mb-2">☁️</span>
            <h3 className="font-semibold mb-1">Cloud & DevOps</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">Deploying and managing scalable apps on AWS, Azure, and Vercel.</p>
          </div>
          <div className="bg-white dark:bg-stone-900 rounded-lg shadow p-6 flex flex-col items-center animate-fade-in">
            <span className="text-3xl mb-2">🤝</span>
            <h3 className="font-semibold mb-1">Teamwork</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">Collaborating on projects, mentoring, and leading teams to success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
