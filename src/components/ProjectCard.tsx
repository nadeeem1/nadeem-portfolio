import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block rounded-2xl border border-[var(--border)] bg-[var(--bg-raised)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="h-44 relative overflow-hidden grid-paper flex items-end p-5"
        style={{ background: `linear-gradient(135deg, ${project.accent}22, transparent)` }}
      >
        <span className="font-mono text-5xl font-semibold text-[var(--border)] group-hover:text-[var(--color-signal)] transition-colors">
          {project.id}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-[var(--font-display)] text-xl font-semibold">{project.title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--fg-muted)] border border-[var(--border)] rounded-full px-2 py-1">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[11px] text-[var(--fg-muted)]">
              {t}
              {t !== project.tech[Math.min(2, project.tech.length - 1)] ? ' ·' : ''}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 flex items-center gap-1.5 text-sm font-medium text-[var(--color-signal)] opacity-0 group-hover:opacity-100 transition-opacity">
        View project details
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </Link>
  );
}
