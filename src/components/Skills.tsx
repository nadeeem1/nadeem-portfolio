import SectionHeading from './SectionHeading';

const GROUPS = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', level: 'Daily use' },
      { name: 'CSS', level: 'Daily use' },
      { name: 'JavaScript', level: 'Daily use' },
      { name: 'React', level: 'Building with' },
      { name: 'Responsive Design', level: 'Daily use' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', level: 'Daily use' },
      { name: 'GitHub', level: 'Daily use' },
      { name: 'VS Code', level: 'Daily use' },
      { name: 'Figma', level: 'Comfortable' },
      { name: 'Tailwind CSS', level: 'Building with' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="What I build with."
          description="No inflated percentages — just the tools I actually reach for, and how often."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)] mb-5">
                {group.label}
              </p>
              <ul className="space-y-0">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between py-4 border-t border-[var(--border)] last:border-b"
                  >
                    <span className="font-[var(--font-display)] text-lg">{item.name}</span>
                    <span className="font-mono text-xs text-[var(--fg-muted)]">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
