export default function Home() {
  return (
    <main className="section-gap">
      <div className="page-container">
        <section className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-8">
          <p className="mb-2 text-sm font-medium text-blue-600">Frontend Starter Kit</p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            모바일 퍼스트 기본 템플릿
          </h1>
          <p className="mt-3 text-sm text-zinc-600 md:text-base">
            767px 이하를 모바일 기준으로 두고, 768px 이상에서 점진적으로 확장하는
            Tailwind 토큰과 글로벌 스타일이 적용되어 있습니다.
          </p>
        </section>
      </div>
    </main>
  );
}
