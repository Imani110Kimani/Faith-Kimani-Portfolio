export default function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="dialog" aria-modal="true">
      <div className="bg-white dark:bg-stone-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-stone-500 hover:text-mainblue" aria-label="Close modal">&times;</button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-2 text-stone-600 dark:text-stone-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs bg-stone-200 dark:bg-stone-700 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        {/* Gallery and links can be added here */}
        <div className="text-xs text-stone-400">Status: {project.status}</div>
      </div>
    </div>
  );
}
