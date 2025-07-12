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
          <span key={skill.name} className="px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-700 text-sm">
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
