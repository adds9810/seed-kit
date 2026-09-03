/** README에 있던 개발·구조 가이드(앱 가이드에서만 유지). */
export type GuideDeveloperTopic = {
  id: string;
  title: string;
  bullets: string[];
};

export const guideDeveloperTopics: GuideDeveloperTopic[] = [
  {
    id: "fork-fill-in",
    title: "복사한 뒤 채울 곳 (프로젝트명·문구)",
    bullets: [
      "표시 이름: `.env.local`의 `NEXT_PUBLIC_APP_NAME`, 또는 `src/lib/seo/site.ts`의 `name` 기본값 (헤더·푸터·탭 제목에 쓰임)",
      "검색·OG 설명·키워드: `src/lib/seo/site.ts`의 `description`, `keywords`",
      "사이트 URL·Twitter: `.env.local`의 `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TWITTER_HANDLE`",
      "홈 히어로: `src/app/(site)/page.tsx` (헤드라인, 한 줄 설명, 버튼 문구)",
      "소개: `src/app/(site)/about/page.tsx` 본문 + `generateMetadata`",
      "favicon: `src/app/favicon.ico` · OG: `public/og/og-default.svg` (실서비스는 1200×630 PNG/JPG 권장)",
      "npm 이름: `package.json`의 `name`",
      "`/guide`는 스타터 작업 메모이므로 서비스 카피로 채우지 않아도 됩니다.",
    ],
  },
  {
    id: "zustand",
    title: "상태 관리 (Zustand)",
    bullets: [
      "위치: `src/store/ui-store.ts`",
      "상태: `mobileMenuOpen`, `theme` (`light` / `dark` / `system`)",
      "persist: `theme`만 localStorage (`seed-kit-ui`). `zustand/middleware`의 persist이며 Next `src/proxy.ts`와는 별개입니다.",
      "확장: 커지면 슬라이스 분리 (`ui`, `auth`, `toast` 등)",
    ],
  },
  {
    id: "query",
    title: "TanStack Query",
    bullets: [
      "Provider: `src/components/providers/QueryProvider.tsx`",
      "기본 옵션: `src/lib/query/query-client.ts` (`staleTime`, `gcTime`, `retry`, `refetchOnWindowFocus`)",
      "API: `src/lib/api/*` — 현재 `json-placeholder.ts`를 실제 클라이언트로 교체",
    ],
  },
  {
    id: "seo",
    title: "SEO·메타데이터",
    bullets: [
      "공통: `src/lib/seo/site.ts`, 루트: `src/app/layout.tsx`",
      "페이지별: `generateMetadata` (about, guide, examples/query 등)",
      "크롤링: `src/app/robots.ts`, `src/app/sitemap.ts`",
      "favicon: `src/app/favicon.ico` · OG: `public/og/og-default.svg` (실서비스는 1200×630 PNG/JPG 권장)",
    ],
  },
  {
    id: "ux-boundaries",
    title: "에러·로딩·404",
    bullets: [
      "`src/app/loading.tsx` — 라우트 전환·초기 로딩 스켈레톤",
      "`src/app/error.tsx` — 런타임 에러, `reset`",
      "`src/app/not-found.tsx` — 404 안내·홈 이동",
    ],
  },
  {
    id: "where-to-put-code",
    title: "코드 넣는 위치",
    bullets: [
      "URL·페이지: `src/app`",
      "요청 경계(프로덕션 `/guide` 차단 등): `src/proxy.ts`",
      "도메인 기능: `src/features/<name>`",
      "전역 UI: `src/components/ui` · 기능 전용 UI: `src/features/<name>/components`",
      "공통 훅: `src/hooks` · 유틸: `src/utils`",
      "도메인 종속 컴포넌트는 `features` 안에, 2곳 이상 재사용 시 `components/ui`로 승격",
      "접근성·토큰: `src/styles/tokens.css`, `globals.css` 우선",
    ],
  },
  {
    id: "features-examples",
    title: "features 폴더 예시",
    bullets: [
      "`src/features/auth`",
      "`src/features/post`",
      "기능 단위로 경계를 나눕니다.",
    ],
  },
  {
    id: "deploy-checklist",
    title: "배포 전 확인",
    bullets: [
      "`NEXT_PUBLIC_SITE_URL` 실제 도메인",
      "홈·소개·`site.ts` 문구를 실제 프로젝트명·내용으로 채웠는지 (README 「복사한 뒤 채울 곳」)",
      "`public/og/og-default.svg` 교체 검토",
      "`npm run lint`, `npm run format:check`, `npm run build` 통과",
    ],
  },
  {
    id: "future",
    title: "추후 확장 아이디어",
    bullets: [
      "Supabase (`src/lib/supabase`, `src/features/auth`)",
      "shadcn/ui (`src/components/ui` 점진 교체)",
      "인증·권한 (route group + `src/proxy.ts`)",
      "블로그·콘텐츠 (`src/features/blog` 등)",
    ],
  },
];
