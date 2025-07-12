import { experience } from '@/lib/experience';
import TimelineItem from '@/components/TimelineItem';

export default function ExperienceSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="border-l-2 border-mainblue pl-4">
        {experience.map(item => (
          <TimelineItem key={item.role + item.company} item={item} />
        ))}
      </div>
    </section>
  );
}
