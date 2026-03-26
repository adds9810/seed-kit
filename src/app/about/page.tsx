import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";

export async function generateMetadata(): Promise<Metadata> {
  const title = "소개";
  const description = "seed-kit 스타터 구성과 목적을 설명합니다.";

  return {
    title,
    description,
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title,
      description,
      url: "/about",
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function AboutPage() {
  return (
    <div className="section-gap">
      <div className="page-container space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium text-[--color-brand-600]">About</p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            이 스타터에 대해
          </h1>
          <p className="max-w-2xl text-sm text-[--text-secondary] md:text-base">
            사이드 프로젝트와 포트폴리오를 빠르게 시작하기 위한 최소 구성입니다.
            페이지별 제목은 메타데이터의 title 템플릿과 함께 쓸 수 있습니다.
          </p>
        </header>

        <section aria-labelledby="about-goals-title">
          <h2 id="about-goals-title" className="text-lg font-semibold md:text-xl">
            목표
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[--text-secondary] md:text-base">
            <li>반복되는 초기 세팅 시간 줄이기</li>
            <li>확장 가능한 폴더 구조 유지</li>
            <li>모바일 우선·접근 가능한 마크업 기본값</li>
          </ul>
        </section>

        <section aria-labelledby="about-next-title">
          <h2 id="about-next-title" className="text-lg font-semibold md:text-xl">
            다음에 붙이기 좋은 것
          </h2>
          <p className="mt-3 text-sm text-[--text-secondary] md:text-base">
            UI 외 전역 상태, 서버 상태 라이브러리, SEO 메타 보강 등은 프로젝트 성격에
            맞게 추가하면 됩니다.
          </p>
          <div className="mt-6">
            <ButtonLink href="/" variant="outline">
              홈으로
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
