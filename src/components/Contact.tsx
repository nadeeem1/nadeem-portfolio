import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this up to a form backend (Formspree, Resend, etc.) or your own API.
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-raised)] p-8 sm:p-14 grid lg:grid-cols-[1fr_1fr] gap-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">
              Contact
            </span>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight mt-4 leading-tight">
              Have a project in mind?
              <br />
              Let's build something great together.
            </h2>

            <div className="mt-10 space-y-4">
              <a href="mailto:hello@nadeem.dev" className="flex items-center gap-3 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                hello@nadeem.dev
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
                github.com/nadeem
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5 8.5h3.88V21H5V8.5Zm6.5 0h3.72v1.7h.05c.52-.98 1.78-2 3.66-2 3.92 0 4.64 2.58 4.64 5.93V21h-3.88v-6.03c0-1.44-.03-3.28-2-3.28-2.01 0-2.32 1.57-2.32 3.18V21H11.5V8.5Z"/></svg>
                linkedin.com/in/nadeem
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:border-[var(--color-signal)] outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:border-[var(--color-signal)] outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-2">
                Project details
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:border-[var(--color-signal)] outline-none transition-colors resize-none"
                placeholder="What are you looking to build?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[var(--color-signal)] text-white text-sm font-medium hover:bg-[var(--color-signal-dim)] transition-colors"
            >
              {status === 'sent' ? 'Message sent' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p className="text-xs text-[var(--fg-muted)]" role="status">
                Thanks — I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
