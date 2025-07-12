import { useState } from 'react';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsSection() {
  const [selected, setSelected] = useState<any>(null);
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
