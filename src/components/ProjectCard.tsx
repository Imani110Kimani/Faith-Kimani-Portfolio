import { projects } from '@/lib/projects';

export default function ProjectCard({ project, onClick, onTechClick }: { project: any, onClick: () => void, onTechClick: (tech: string) => void }) {
  return (
    <div className="rounded-lg border bg-white dark:bg-stone-900 shadow p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg transition" onClick={onClick} tabIndex={0} aria-label={`View details for ${project.title}`}> 
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{project.title}</h3>
      </div>
      <p className="text-stone-600 dark:text-stone-300 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech && project.tech.map((tech: string) => (
          <button
            key={tech}
            className="text-xs bg-stone-200 dark:bg-stone-700 px-2 py-1 rounded hover:bg-mainblue hover:text-white transition border border-mainblue/20 focus:outline-none focus:ring-2 focus:ring-mainblue"
            onClick={e => { e.stopPropagation(); onTechClick(tech); }}
            aria-label={`Show projects using ${tech}`}
            type="button"
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
}
