import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden grid-paper">
      <div className="absolute inset-x-0 top-0 h-px ruler-ticks" />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)] mb-6"
          >
            Front-End Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]"
          >
            Nadeem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[var(--fg-muted)] leading-relaxed max-w-lg"
          >
            I build modern, fast and fully responsive websites — turning designs
            into interfaces that work cleanly on every screen, from a single
            landing page to a full product front end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[var(--color-signal)] text-white text-sm font-medium hover:bg-[var(--color-signal-dim)] transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[var(--border)] text-sm font-medium hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-5 text-[var(--fg-muted)]"
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--fg)] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--fg)] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5 8.5h3.88V21H5V8.5Zm6.5 0h3.72v1.7h.05c.52-.98 1.78-2 3.66-2 3.92 0 4.64 2.58 4.64 5.93V21h-3.88v-6.03c0-1.44-.03-3.28-2-3.28-2.01 0-2.32 1.57-2.32 3.18V21H11.5V8.5Z"/></svg>
            </a>
            <a href="mailto:hello@nadeem.dev" aria-label="Email" className="hover:text-[var(--fg)] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          {/* Signature: code becomes interface */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-raised)] shadow-2xl shadow-black/20 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-[var(--fg-muted)]">card.tsx</span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed p-5 overflow-x-auto text-[var(--fg-muted)]">
<code>{`function Card({ title }) {
  return (
    `}<span className="text-[var(--color-signal)]">{`<div`}</span>{` className="card">
      `}<span className="text-[var(--fg)]">{`<h3>{title}</h3>`}</span>{`
    `}<span className="text-[var(--color-signal)]">{`</div>`}</span>{`
  );
}`}</code>
            </pre>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            className="absolute -bottom-8 -right-6 w-48 rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-4 shadow-2xl shadow-black/30"
          >
            <div className="h-2 w-10 rounded-full bg-[var(--color-signal)] mb-3" />
            <p className="font-[var(--font-display)] text-sm font-semibold">Rendered UI</p>
            <p className="mt-1 text-xs text-[var(--fg-muted)]">Live in the browser.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
