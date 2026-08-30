import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <SectionHeading index="01" eyebrow="About" title="Front-end developer, self-taught and building in public." />

        <div className="space-y-6 text-[var(--fg-muted)] leading-relaxed">
          <p>
            I'm Nadeem, a front-end developer focused on turning designs into
            interfaces that actually work — clean HTML and CSS underneath,
            JavaScript and React where the interaction calls for it, and a
            layout that holds up on any screen size.
          </p>
          <p>
            I care about the two things a client notices before anything else:
            how fast a site feels, and how solid it feels to use. That means
            semantic markup, deliberate spacing, and interactions that respond
            the way people expect them to.
          </p>
          <p>
            Every project in this portfolio is a real build — from vanilla
            JavaScript product pages to a component-driven React storefront —
            because that's the fastest way I know to get better: ship
            something real, then ship the next one better.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            {[
              { label: 'Core stack', value: 'HTML · CSS · JS' },
              { label: 'Also building with', value: 'React · Tailwind' },
              { label: 'Currently', value: 'Freelance-ready' },
            ].map((item) => (
              <div key={item.label} className="border-t border-[var(--border)] pt-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--fg-muted)]">
                  {item.label}
                </p>
                <p className="mt-1 font-[var(--font-display)] text-[var(--fg)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
