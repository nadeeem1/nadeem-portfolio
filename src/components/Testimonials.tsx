import SectionHeading from './SectionHeading';

const PLACEHOLDERS = [1, 2, 3];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="07"
          eyebrow="Testimonials"
          title="What clients say."
          description="This section is reserved for real client feedback — replace the placeholders below once the first reviews come in."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {PLACEHOLDERS.map((n) => (
            <div
              key={n}
              className="rounded-2xl border border-dashed border-[var(--border)] p-6 text-[var(--fg-muted)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 opacity-50">
                <path d="M7 8h4v4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V8H7Zm10 0h4v4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V8h-6Z" />
              </svg>
              <p className="text-sm italic leading-relaxed">
                "Client testimonial placeholder — add a real quote here once available."
              </p>
              <div className="mt-5 pt-4 border-t border-[var(--border)]">
                <p className="font-[var(--font-display)] text-sm text-[var(--fg)]">Client name</p>
                <p className="font-mono text-[11px]">Role, Company</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
