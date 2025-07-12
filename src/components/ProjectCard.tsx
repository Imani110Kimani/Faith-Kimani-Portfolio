import { projects } from '@/lib/projects';

export default function ProjectCard({ project, onClick }: { project: any, onClick: () => void }) {
  return (
    <div className="rounded-lg border bg-white dark:bg-stone-900 shadow p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg transition" onClick={onClick} tabIndex={0} aria-label={`View details for ${project.title}`}> 
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <span className="text-xs px-2 py-1 rounded bg-mainblue text-white">{project.status}</span>
      </div>
      <p className="text-stone-600 dark:text-stone-300 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-xs bg-stone-200 dark:bg-stone-700 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
  );
}
