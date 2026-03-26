import { ButtonLink } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

export default function Home() {
  return (
    <div className="section-gap">
      <div className="page-container space-y-10">
        <section
          aria-labelledby="home-hero-title"
          className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-8"
        >
          <p className="mb-2 text-sm font-medium text-[--color-brand-600]">
            Frontend Starter Kit
          </p>
          <h1
            id="home-hero-title"
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            모바일 퍼스트 기본 템플릿
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 md:text-base">
            767px 이하를 모바일 기준으로 두고, 768px 이상에서 점진적으로 확장하는
            Tailwind 토큰과 공통 레이아웃(헤더·본문·푸터)이 적용되어 있습니다.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/about" variant="primary">
              소개 페이지
            </ButtonLink>
            <TextLink href="/about">텍스트 링크로 이동 →</TextLink>
          </div>
        </section>

        <section aria-labelledby="home-structure-title">
          <h2 id="home-structure-title" className="text-lg font-semibold md:text-xl">
            구성 요소
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-600 md:text-base">
            <li>시맨틱 레이아웃: 헤더, 메인, 푸터</li>
            <li>스킵 링크로 본문(#main-content)으로 이동</li>
            <li>공용 UI: Button, ButtonLink, TextLink</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
