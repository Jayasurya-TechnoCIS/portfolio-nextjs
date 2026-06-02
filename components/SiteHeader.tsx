"use client";

import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Automatically close the mobile menu when route/pathname changes
  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname]);

  // Handle closing the menu when clicking outside (around) it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const details = detailsRef.current;
      if (!details) return;

      if (details.open && !details.contains(event.target as Node)) {
        details.removeAttribute("open");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 isolate z-50 mb-12 -mx-6 px-6 md:-mx-12 md:px-12 py-3 backdrop-blur-md bg-[var(--color-brand-card)]/80 border-b border-[var(--color-brand-border)]/50 rounded-t-[2.5rem]">
      <div className="relative z-50 flex items-center justify-between gap-4">
        <a
          href="/#home"
          className="text-2xl font-black font-display tracking-tight"
        >
          JS
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-[var(--color-brand-text-muted)]">
          {navItems.map((item) => {
            const isActive =
              (item.href === "/blog" && pathname?.startsWith("/blog")) ||
              (item.href === "/#home" && (pathname === "/" || !pathname));
            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-[var(--color-brand-text)]"
                    : "hover:text-[var(--color-brand-text)] transition-colors"
                }
              >
                {item.label}
              </a>
            );
          })}
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
          <details ref={detailsRef} className="group">
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
              onClick={() => detailsRef.current?.removeAttribute("open")}
            >
              {navItems.map((item) => {
                const isActive =
                  (item.href === "/blog" && pathname?.startsWith("/blog")) ||
                  (item.href === "/#home" && (pathname === "/" || !pathname));
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`min-h-11 rounded-2xl px-4 py-3 text-sm font-bold tracking-wide transition-colors hover:bg-[var(--color-brand-card)] hover:text-[var(--color-brand-text)] active:bg-[var(--color-brand-card)] ${
                      isActive
                        ? "bg-[var(--color-brand-card)] text-[var(--color-brand-text)]"
                        : "text-[var(--color-brand-text-muted)]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
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
