import { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { categories, projects } from '../data/projects';

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            index="03"
            eyebrow="Projects"
            title="What I can build for you."
            description="Real builds, not templates — pick a category to filter by stack."
          />

          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                  active === cat
                    ? 'bg-[var(--color-signal)] border-[var(--color-signal)] text-white'
                    : 'border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
