"use client";

import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
];

export function SiteHeader() {
  return (
    <header className="relative isolate z-50 mb-12">
      <div className="relative z-50 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="text-2xl font-black font-display tracking-tight"
        >
          JS
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-[var(--color-brand-text-muted)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.href === "#home"
                  ? "text-[var(--color-brand-text)]"
                  : "hover:text-[var(--color-brand-text)] transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="mailto:sjayasurya2504@gmail.com"
            className="bg-[var(--color-brand-btn)] text-[var(--color-brand-btn-text)] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="relative z-50 flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <details className="group">
            <summary
              className="inline-flex min-h-11 min-w-11 touch-manipulation list-none items-center justify-center rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] shadow-sm transition-colors active:scale-95 [&::-webkit-details-marker]:hidden"
              aria-label="Toggle menu"
            >
              <Menu size={22} className="group-open:hidden" />
              <X size={22} className="hidden group-open:block" />
            </summary>

            <nav
              id="mobile-menu"
              className="fixed left-4 right-4 top-24 z-50 flex flex-col gap-2 rounded-3xl border border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] p-3 text-left shadow-2xl md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-11 rounded-2xl px-4 py-3 text-sm font-bold tracking-wide text-[var(--color-brand-text-muted)] transition-colors hover:bg-[var(--color-brand-card)] hover:text-[var(--color-brand-text)] active:bg-[var(--color-brand-card)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:sjayasurya2504@gmail.com"
                className="mt-1 min-h-11 rounded-2xl bg-[var(--color-brand-btn)] px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-[var(--color-brand-btn-text)] transition-opacity active:opacity-80"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
