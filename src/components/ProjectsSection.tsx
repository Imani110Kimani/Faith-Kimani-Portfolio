
import { useState } from 'react';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsSection() {
  const [selected, setSelected] = useState<any>(null);
  const [modalTech, setModalTech] = useState<string | null>(null);
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} onTechClick={setModalTech} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
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
    </section>
  );
}
