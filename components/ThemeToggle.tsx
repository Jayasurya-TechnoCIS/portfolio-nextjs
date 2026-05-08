import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <label className="relative inline-flex min-h-11 min-w-11 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-transparent transition-colors hover:bg-neutral-200 active:scale-95">
      <input
        type="checkbox"
        className="theme-toggle-checkbox sr-only"
        aria-label="Toggle theme"
      />
      <Moon
        size={20}
        className="theme-toggle-moon text-[var(--color-brand-text)]"
      />
      <Sun
        size={20}
        className="theme-toggle-sun text-[var(--color-brand-text)]"
      />
    </label>
  );
}
