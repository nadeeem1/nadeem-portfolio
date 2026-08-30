import SectionHeading from './SectionHeading';

const REASONS = [
  'Responsive & mobile-first on every build',
  'Clean, maintainable code — not just working code',
  'Modern UI without unnecessary complexity',
  'Performance considered from the first commit',
  'Cross-browser tested before delivery',
  'Clear, direct communication throughout the project',
  'Attention to the details a template skips',
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <SectionHeading index="05" eyebrow="Why work with me" title="What you can expect from the process." />

        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2"
                className="mt-0.5 flex-shrink-0"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--fg-muted)] leading-relaxed">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
