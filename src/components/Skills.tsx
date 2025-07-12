
import { skills } from '@/lib/skills';
import { useState } from 'react';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'Soft', value: 'soft' },
];

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const [modalSkill, setModalSkill] = useState<string | null>(null);
  const filtered = filter === 'all' ? skills : skills.filter(s => s.type === filter);
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`px-3 py-1 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-mainblue ${filter === cat.value ? 'bg-mainblue text-white' : 'bg-white dark:bg-stone-800'}`}
            onClick={() => setFilter(cat.value)}
            aria-pressed={filter === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {filtered.map(skill => (
          <button
            key={skill.name}
            className="px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-700 text-sm font-medium shadow hover:bg-mainblue hover:text-white transition border border-mainblue/20 focus:outline-none focus:ring-2 focus:ring-mainblue"
            onClick={() => setModalSkill(skill.name)}
            aria-label={`Show projects using ${skill.name}`}
            type="button"
          >
            {skill.name}
          </button>
        ))}
      </div>
      {modalSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-stone-900 rounded-lg shadow-lg max-w-sm w-full p-6 relative flex flex-col items-center">
            <button onClick={() => setModalSkill(null)} className="absolute top-2 right-2 text-stone-500 hover:text-mainblue text-2xl" aria-label="Close modal">&times;</button>
            <div className="text-5xl mb-2">🚧</div>
            <h3 className="text-xl font-bold mb-2 text-mainblue">{modalSkill} Projects</h3>
            <p className="text-stone-600 dark:text-stone-300 text-center mb-2">Projects using <b>{modalSkill}</b> will appear here soon! You’ll be able to explore all related work and case studies.</p>
            <div className="text-xs text-stone-400">(You can link this to filtered projects or a detail page later.)</div>
          </div>
        </div>
      )}
    </section>
  );
}
