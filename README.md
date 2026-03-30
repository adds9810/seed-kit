# seed-kit

사이드 프로젝트/포트폴리오에서 반복되는 초기 세팅을 줄이기 위한 `Next.js + React + Tailwind` 스타터입니다.  
너무 무겁지 않게 시작하되, 기능 확장과 유지보수가 쉬운 구조를 목표로 합니다.

## 프로젝트 소개

- 모바일 퍼스트 반응형 기준(767px 이하 모바일)
- App Router 기반 SEO/접근성 기본 구조
- Zustand(클라이언트 UI 상태), TanStack Query(서버 상태) 기본 연결
- GitHub Actions CI로 린트/포맷/빌드 자동 검증
- 실전 프로젝트로 바로 시작 가능한 폴더 구조와 가이드 문서

## 기술 스택

| 구분       | 내용                                    |
| ---------- | --------------------------------------- |
| 프레임워크 | Next.js (App Router)                    |
| 언어       | TypeScript                              |
| 스타일     | Tailwind CSS v4                         |
| 상태 관리  | Zustand                                 |
| 서버 상태  | TanStack Query (React Query)            |
| SEO        | Metadata API, `robots.ts`, `sitemap.ts` |
| 린트/포맷  | ESLint, Prettier                        |

## 사전 요구 사항

- Node.js 20+
- npm

## 설치 방법

```bash
npm install
```

환경변수 파일 준비:

```bash
cp .env.example .env.local
```

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## 실행 방법

개발 서버:

```bash
npm run dev
```

프로덕션 빌드:

```bash
npm run build
```

프로덕션 실행:

```bash
npm run start
```

품질 검사:

```bash
npm run lint
npm run format:check
```

## CI (GitHub Actions)

- 워크플로 파일: `.github/workflows/ci.yml`
- 트리거:
  - `pull_request`
  - `push` to `main`, `master`
- 실행 항목:
  - `npm ci`
  - `npm run lint`
  - `npm run format:check`
  - `npm run build`
- 실행 환경:
  - Ubuntu latest
  - Node.js 20 + npm cache

## 환경변수

예시 파일: `.env.example`

- `NEXT_PUBLIC_SITE_URL`: canonical, OG, sitemap 기준 URL
- `NEXT_PUBLIC_TWITTER_HANDLE`: Twitter metadata creator

규칙:

- `NEXT_PUBLIC_` 접두사는 브라우저 코드에 노출됩니다.
- 비밀값(API secret, private key)은 `NEXT_PUBLIC_` 없이 서버 전용으로 관리하세요.

## 현재 구성

- 경로 별칭: `@/*` → `src/*`
- 공통 레이아웃: `header` / `main` / `footer`, skip link
- UI 상태: 모바일 메뉴 열림/닫힘, 테마(light/dark/system)
- Query: `QueryProvider`, 기본 `QueryClient`, 외부 API 예제(JSONPlaceholder)
- 에러/로딩 UX: `error.tsx`, `loading.tsx`, `not-found.tsx`
- SEO:
  - `metadataBase`, `title default/template`
  - `description`, `keywords`
  - `openGraph`, `twitter`, `alternates.canonical`
  - `robots.ts`, `sitemap.ts`
  - 페이지별 확장 예시(`generateMetadata`)

## 폴더 구조

```text
seed-kit/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .env.example
├── public/
│   ├── og/
│   │   └── og-default.svg
│   └── README.md
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── examples/
│   │   │   └── JsonPlaceholderPostSample.tsx
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   ├── providers/
│   │   │   ├── QueryProvider.tsx
│   │   │   └── ThemeAttributeSync.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── TextLink.tsx
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   │   ├── api/
│   │   ├── query/
│   │   └── seo/
│   ├── store/
│   │   ├── index.ts
│   │   └── ui-store.ts
│   ├── styles/
│   │   └── tokens.css
│   └── utils/
└── README.md
```

## 상태관리 가이드 (Zustand)

- 위치: `src/store/ui-store.ts`
- 현재 상태:
  - `mobileMenuOpen`
  - `theme` (`light` / `dark` / `system`)
- persist 정책: `theme`만 localStorage 저장 (`seed-kit-ui`)
- 확장 방법:
  - 규모가 커지면 슬라이스 파일로 분리 (`ui`, `auth`, `toast` 등)

## TanStack Query 가이드

- Provider: `src/components/providers/QueryProvider.tsx`
- 기본 옵션: `src/lib/query/query-client.ts`
  - `staleTime`, `gcTime`, `retry`, `refetchOnWindowFocus`
- API 교체 포인트: `src/lib/api/*`
  - 현재 `json-placeholder.ts`를 실제 API 클라이언트로 교체

## SEO 가이드

- 공통 설정: `src/lib/seo/site.ts`
- 루트 메타: `src/app/layout.tsx`
- 페이지 확장 예시: `src/app/about/page.tsx` (`generateMetadata`)
- 크롤링 관련:
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`

favicon / OG 이미지:

- favicon: `src/app/favicon.ico`
- OG 기본 이미지: `public/og/og-default.svg`
- 실서비스에서는 1200x630 PNG/JPG 교체 권장

## 에러/로딩 UX 가이드

- 전역 로딩: `src/app/loading.tsx`
  - 라우트 전환/초기 로딩 구간에서 스켈레톤 UI를 표시합니다.
- 전역 에러: `src/app/error.tsx`
  - 런타임 에러 발생 시 안내 메시지와 `다시 시도(reset)` 동작을 제공합니다.
- 404 페이지: `src/app/not-found.tsx`
  - 존재하지 않는 경로 접근 시 기본 안내와 홈 이동 액션을 제공합니다.

## 새 기능 추가 가이드

- URL/페이지 중심 변경: `src/app`
- 특정 도메인 기능: `src/features/<feature-name>`
- 전역 재사용 UI: `src/components/ui`
- 기능 전용 컴포넌트: `src/features/<feature-name>/components`
- 공통 훅: `src/hooks`
- 유틸 함수: `src/utils`

## 공통 컴포넌트 추가 규칙

- 도메인에 종속되면 `features` 내부에 둡니다.
- 2개 이상 기능에서 재사용하면 `components/ui`로 올립니다.
- 접근성(포커스/aria/semantic)을 기본으로 적용합니다.
- 토큰/유틸 클래스 우선(`src/styles/tokens.css`, `globals.css`)

## features 폴더 사용 기준

- 기능 단위로 코드 경계를 만듭니다.
- 권장 구조 예:
  - `src/features/auth`
  - `src/features/post`
  - `src/features/portfolio`

## 배포 전 확인 포인트

- `NEXT_PUBLIC_SITE_URL` 실제 도메인 설정
- `public/og/og-default.svg` 실서비스 이미지로 교체
- `npm run lint` / `npm run format:check` 통과
- `npm run build` 성공

## 추후 확장 포인트

- Supabase 연동 (`src/lib/supabase`, `src/features/auth`)
- shadcn/ui 도입 (`src/components/ui` 점진 교체)
- 인증/권한 (route group + middleware)
- 블로그/포트폴리오 섹션 (`src/features/blog`, `src/features/portfolio`)

## 참고

- [Next.js 문서](https://nextjs.org/docs)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
