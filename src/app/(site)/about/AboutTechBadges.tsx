"use client";
import { useState } from "react";
const techs = ["Python", "React", "Cloud", "Django", "SQL"];

export default function AboutTechBadges() {
  const [modalTech, setModalTech] = useState<string | null>(null);
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        {techs.map((tech) => (
          <button
            key={tech}
            className="bg-mainblue text-white px-3 py-1 rounded-full text-xs font-medium shadow hover:bg-blue-800 transition border border-mainblue/20 focus:outline-none focus:ring-2 focus:ring-mainblue"
            onClick={() => setModalTech(tech)}
            aria-label={`Show projects using ${tech}`}
            type="button"
          >
            {tech}
          </button>
        ))}
      </div>
      {modalTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-stone-900 rounded-lg shadow-lg max-w-sm w-full p-6 relative flex flex-col items-center">
            <button onClick={() => setModalTech(null)} className="absolute top-2 right-2 text-stone-500 hover:text-mainblue text-2xl" aria-label="Close modal">&times;</button>
            <div className="text-5xl mb-2">🚧</div>
            <h3 className="text-xl font-bold mb-2 text-mainblue">{modalTech} Projects</h3>
            <p className="text-stone-600 dark:text-stone-300 text-center mb-2">Projects using <b>{modalTech}</b> will appear here soon! You’ll be able to explore all related work and case studies.</p>
            <div className="text-xs text-stone-400">(You can link this to filtered projects or a detail page later.)</div>
          </div>
        </div>
      )}
    </>
  );
}
