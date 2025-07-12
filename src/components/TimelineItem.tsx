export default function TimelineItem({ item }: { item: any }) {
  return (
    <div className="relative pl-8 mb-8">
      <div className="absolute left-0 top-1.5 w-3 h-3 bg-mainblue rounded-full" />
      <div className="font-semibold">{item.role} <span className="text-xs text-stone-500">@ {item.company}</span></div>
      <div className="text-xs text-stone-400 mb-1">{item.date}</div>
      <div className="text-sm text-stone-700 dark:text-stone-300">{item.description}</div>
    </div>
  );
}
