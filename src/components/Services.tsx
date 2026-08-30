import SectionHeading from './SectionHeading';

const SERVICES = [
  {
    title: 'Landing Pages',
    desc: 'A single page built to convert — fast to load, clear to read, and built around one call to action.',
  },
  {
    title: 'Business Websites',
    desc: 'A multi-page site that presents your business clearly, from the home page down to the contact form.',
  },
  {
    title: 'Responsive Rebuilds',
    desc: 'Take an existing site that breaks on mobile and rebuild it so it works cleanly on every screen.',
  },
  {
    title: 'Interactive Web Apps',
    desc: 'JavaScript-driven features — filters, forms, dashboards — that respond the way your users expect.',
  },
  {
    title: 'React Front Ends',
    desc: 'Component-based interfaces for products that will keep growing, built to stay maintainable as they scale.',
  },
  {
    title: 'Performance Passes',
    desc: 'Audit and optimize an existing site — image loading, unused JavaScript, render-blocking assets.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="04"
          eyebrow="Services"
          title="How I can help."
          description="Scoped around what you actually need shipped, not a fixed technology list."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-[var(--bg)] p-6 hover:bg-[var(--bg-raised)] transition-colors">
              <h3 className="font-[var(--font-display)] text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
