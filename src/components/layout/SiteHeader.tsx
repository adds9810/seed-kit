"use client";

import Link from "next/link";

import { TextLink } from "@/components/ui/TextLink";
import { useUiStore, type ThemePreference } from "@/store";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
] as const;

export function SiteHeader() {
  const mobileMenuOpen = useUiStore((s) => s.mobileMenuOpen);
  const toggleMobileMenu = useUiStore((s) => s.toggleMobileMenu);
  const closeMobileMenu = useUiStore((s) => s.closeMobileMenu);
  const theme = useUiStore((s) => s.theme);
  const setTheme = useUiStore((s) => s.setTheme);

  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-surface]/95 backdrop-blur-sm">
      <div className="page-container relative flex h-14 items-center gap-3">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-[--color-foreground] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
        >
          seed-kit
        </Link>

        <nav
          id="primary-navigation"
          className={
            mobileMenuOpen
              ? "absolute left-0 right-0 top-full z-40 flex max-h-[min(70vh,calc(100dvh-3.5rem))] flex-col overflow-y-auto border-b border-[--color-border] bg-[--color-surface] p-4 shadow-[--shadow-sm] md:static md:top-auto md:z-auto md:max-h-none md:flex-1 md:flex-row md:items-center md:justify-end md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:flex-1 md:flex-row md:items-center md:justify-end"
          }
          aria-label="주요 내비게이션"
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <TextLink
                  href={item.href}
                  className="block py-2 md:py-0"
                  onNavigate={closeMobileMenu}
                >
                  {item.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <label htmlFor="theme-select" className="sr-only">
            색 테마
          </label>
          <select
            id="theme-select"
            className="max-w-[7rem] rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] py-1.5 pl-2 pr-7 text-sm text-[--color-foreground] md:max-w-[9rem]"
            value={theme}
            aria-label="색 테마: 라이트, 다크, 시스템"
            onChange={(e) => setTheme(e.target.value as ThemePreference)}
          >
            <option value="system">시스템</option>
            <option value="light">라이트</option>
            <option value="dark">다크</option>
          </select>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] text-[--color-foreground] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">메뉴</span>
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
