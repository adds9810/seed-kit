import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[--color-border] bg-[--color-muted]/40 py-6">
      <div className="page-container flex flex-col gap-3 text-sm text-[--text-secondary] md:flex-row md:items-center md:justify-between">
        <p>
          © {year}{" "}
          <span className="font-medium text-[--color-foreground]">seed-kit</span>
        </p>
        <nav aria-label="푸터 링크">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href="/about"
                className="underline-offset-4 hover:text-[--color-foreground] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
              >
                소개
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
