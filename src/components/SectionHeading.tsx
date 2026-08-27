interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[var(--color-signal)] tracking-wider">{index}</span>
        <span className="h-px w-8 bg-[var(--border)]" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
