import SectionHeading from './SectionHeading';

const STEPS = [
  { title: 'Understanding the requirements', desc: 'We talk through what the site needs to do and who it needs to convince.' },
  { title: 'Planning', desc: 'Sitemap, content structure and the tech choices that fit the scope.' },
  { title: 'UI implementation', desc: 'The interface gets built section by section, matched to the plan.' },
  { title: 'Development', desc: 'Interactions, data and logic get wired in — the site starts to work.' },
  { title: 'Testing', desc: 'Cross-browser and cross-device checks before anything ships.' },
  { title: 'Delivery', desc: 'Handover with the code, or deployed straight to your domain.' },
];

export default function Process() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="06"
          eyebrow="Process"
          title="How a project moves, start to finish."
          description="A real sequence — each step depends on the one before it."
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-[var(--bg)] p-5 relative">
              <span className="font-mono text-xs text-[var(--color-signal)]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-[var(--font-display)] font-semibold mt-3 mb-2 text-sm">{step.title}</h3>
              <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
