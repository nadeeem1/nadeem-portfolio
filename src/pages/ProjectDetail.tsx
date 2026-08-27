import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="pt-40 pb-24 max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-[var(--font-display)] text-3xl font-semibold mb-4">Project not found</h1>
        <p className="text-[var(--fg-muted)] mb-8">That project doesn't exist, or the link is broken.</p>
        <Link to="/#projects" className="text-[var(--color-signal)] font-medium">
          Back to projects
        </Link>
      </section>
    );
  }

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] mb-10 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
          Back to projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[var(--color-signal)]">{project.id}</span>
          <span className="h-px w-8 bg-[var(--border)]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            {project.category}
          </span>
        </div>

        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          {project.title}
        </h1>
        <p className="text-lg text-[var(--fg-muted)] leading-relaxed max-w-2xl mb-10">{project.tagline}</p>

        <div className="flex flex-wrap gap-3 mb-14">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-[var(--color-signal)] text-white text-sm font-medium hover:bg-[var(--color-signal-dim)] transition-colors">
              Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:border-[var(--color-signal)] transition-colors">
              GitHub Repository
            </a>
          )}
        </div>

        <div
          className="h-64 sm:h-80 rounded-2xl border border-[var(--border)] mb-14 grid-paper grid place-items-center"
          style={{ background: `linear-gradient(135deg, ${project.accent}22, transparent)` }}
        >
          <span className="font-mono text-7xl font-semibold text-[var(--border)]">{project.id}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="font-[var(--font-display)] text-xl font-semibold mb-3">Overview</h2>
            <p className="text-[var(--fg-muted)] leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-[var(--font-display)] text-xl font-semibold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="font-[var(--font-display)] text-xl font-semibold mb-4">Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[var(--fg-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" className="mt-1 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="font-[var(--font-display)] text-xl font-semibold mb-3">Challenge</h2>
            <p className="text-[var(--fg-muted)] leading-relaxed">{project.challenges}</p>
          </div>
          <div>
            <h2 className="font-[var(--font-display)] text-xl font-semibold mb-3">Solution</h2>
            <p className="text-[var(--fg-muted)] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 border-t border-[var(--border)]">
          <Link to={`/projects/${prev.slug}`} className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
            ← {prev.title}
          </Link>
          <Link to={`/projects/${next.slug}`} className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
            {next.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}
