"use client";

import Link from "next/link";
import { useState } from "react";

import { TextLink } from "@/components/ui/TextLink";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
] as const;

/**
 * 모바일 메뉴 열림 상태는 로컬 state로 둡니다.
 * 전역 UI 스토어(Zustand)를 붙일 때 이 state만 스토어 구독으로 바꾸면 됩니다.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-[--color-border] bg-[--color-surface]/95 backdrop-blur-sm">
      <div className="page-container flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-[--color-foreground] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
        >
          seed-kit
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] text-[--color-foreground] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((open) => !open)}
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
            {menuOpen ? (
              <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav
          id="primary-navigation"
          className={
            menuOpen
              ? "absolute left-0 right-0 top-14 flex flex-col gap-1 border-b border-[--color-border] bg-[--color-surface] p-4 shadow-[--shadow-sm] md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:flex-row md:items-center md:gap-6"
          }
          aria-label="주요 내비게이션"
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <TextLink
                  href={item.href}
                  className="block py-2 md:py-0"
                  onNavigate={() => setMenuOpen(false)}
                >
                  {item.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
