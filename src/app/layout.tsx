import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeAttributeSync } from "@/components/providers/ThemeAttributeSync";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "seed-kit",
    template: "%s | seed-kit",
  },
  description: "재사용 가능한 Next.js·React·Tailwind 프론트엔드 스타터",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <ThemeAttributeSync />
          <a className="skip-link" href="#main-content">
            본문으로 건너뛰기
          </a>
          <SiteHeader />
          <main
            id="main-content"
            tabIndex={-1}
            className="flex flex-1 flex-col outline-none"
          >
            {children}
          </main>
          <SiteFooter />
        </QueryProvider>
      </body>
    </html>
  );
}
