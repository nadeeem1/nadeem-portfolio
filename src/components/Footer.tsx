export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--fg-muted)]">
          © {new Date().getFullYear()} Nadeem. Built with React & Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-[var(--fg-muted)]">Cairo, Egypt</p>
      </div>
    </footer>
  );
}
