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
          <p className="mt-3 max-w-2xl text-sm text-[--text-secondary] md:text-base">
            767px 이하를 모바일 기준으로 두고, 768px 이상에서 점진적으로 확장하는
            Tailwind 토큰과 공통 레이아웃(헤더·본문·푸터)이 적용되어 있습니다.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-[--text-secondary] md:text-base">
            진행 단계·스택·컴포넌트 안내는{" "}
            <TextLink href="/guide" className="inline">
              가이드 페이지
            </TextLink>
            에 모아 두었습니다. Query 데모는{" "}
            <TextLink href="/examples/query" className="inline">
              예제 페이지
            </TextLink>
            로 분리했습니다.
          </p>
          <div className="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/about" variant="primary">
              소개 페이지
            </ButtonLink>
            <ButtonLink href="/guide" variant="outline">
              가이드
            </ButtonLink>
            <ButtonLink href="/examples/query" variant="outline">
              Query 예제
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
