# seed-kit

사이드 프로젝트·포트폴리오용으로 재사용할 **Next.js 프론트엔드 스타터 키트**입니다.  
반복되는 초기 세팅을 줄이고, 필요에 따라 폴더 구조·상태관리·SEO 등을 확장하기 쉽게 구성했습니다.

## 프로젝트에 포함된 것

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Tailwind 커스텀 토큰**: 모바일 퍼스트(`767px 이하` 모바일, `md=768px`), container/spacing/minimal color·radius·shadow
- **ESLint 9** + `eslint-config-next` + **Prettier** + **eslint-config-prettier**
- 개발 서버: **Turbopack** (`npm run dev`)
- **`src/` 아래 실무형 디렉터리 골격**과 각 폴더 **역할 안내용 `README.md`**
- **경로 별칭**: `@/*` → `src/*`
- **공통 레이아웃**: 루트 `layout`에서 헤더·본문(`main`)·푸터, 스킵 링크(`#main-content`)
- **Zustand UI 스토어**: 모바일 메뉴 + 테마(시스템/라이트/다크)
- **TanStack Query**: `QueryProvider`, `QueryClient` 기본 옵션, JSONPlaceholder 예제
- **SEO 기본 구조**: `metadataBase`, title 템플릿, description/keywords, Open Graph, Twitter, canonical, `robots.ts`, `sitemap.ts`

## 기술 스택 (현재)

| 구분            | 내용                                   |
| --------------- | -------------------------------------- |
| 프레임워크      | Next.js (App Router)                   |
| 언어            | TypeScript                             |
| 스타일          | Tailwind CSS v4 + 모바일 퍼스트 토큰   |
| 클라이언트 상태 | Zustand (`persist`로 테마만 저장)      |
| 서버 상태       | TanStack Query (React Query)           |
| SEO             | App Router Metadata + robots + sitemap |
| 린트            | ESLint + eslint-config-next            |
| 포맷            | Prettier + eslint-config-prettier      |

## 사전 요구 사항

- **Node.js** 20 이상 권장
- **npm** (잠금 파일: `package-lock.json`)

## 설치 방법

저장소를 클론한 뒤 프로젝트 루트에서:

```bash
npm install
```

## 실행 방법

### 개발 서버

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 됩니다.

- 홈: `/` → `src/app/page.tsx`
- 소개: `/about` → `src/app/about/page.tsx`

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 서버 (빌드 후)

```bash
npm run start
```

## 경로 별칭 `@/`

`import { ... } from "@/lib/..."`처럼 `src/` 기준으로 import 할 수 있습니다.

- 설정: `tsconfig.json`의 `baseUrl`, `paths` (`"@/*": ["./src/*"]`)

## TanStack Query

- **Provider**: `src/components/providers/QueryProvider.tsx` — 클라이언트에서 `QueryClient`를 한 번만 생성(`useState`)
- **기본 옵션**: `src/lib/query/query-client.ts`의 `createQueryClient()`
  - `staleTime`: 60초
  - `gcTime`: 5분
  - `retry`: 1회
  - `refetchOnWindowFocus`: false
- **예시**: `src/components/examples/JsonPlaceholderPostSample.tsx` + `src/lib/api/json-placeholder.ts`

## Zustand (`src/store`)

- **`useUiStore`**: `mobileMenuOpen`, `toggleMobileMenu`, `closeMobileMenu`, `theme`, `setTheme`
- **persist**: 스토리지 키 `seed-kit-ui`, 저장 필드는 `theme`만

## SEO 구성

- **공통 사이트 설정**: `src/lib/seo/site.ts`
  - `NEXT_PUBLIC_SITE_URL` 기반 `metadataBase` (없으면 `https://example.com`)
  - 사이트명·설명·키워드·OG 이미지 경로 상수
- **루트 메타데이터**: `src/app/layout.tsx`
  - `title.default` + `title.template`
  - `description`, `keywords`
  - `alternates.canonical`
  - `openGraph` (siteName, locale, images)
  - `twitter` (card, images)
- **페이지별 확장 예시**: `src/app/about/page.tsx`
  - `generateMetadata()`로 `/about`용 canonical, OG/Twitter 오버라이드
- **크롤러 설정**
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`

### favicon / OG 이미지 경로 가이드

- favicon: `src/app/favicon.ico`
- 기본 OG 이미지: `public/og/og-default.svg`
  - 실서비스에서는 **1200x630 PNG/JPG**로 교체 권장
  - `siteConfig.ogImagePath`와 파일 경로를 함께 변경

## Tailwind 기준 (모바일 퍼스트)

- 브레이크포인트 기준
  - `md`: `48rem` (768px)
  - 따라서 `767px 이하`를 모바일 기준으로 설계
- 토큰 파일: `src/styles/tokens.css`
- 전역 스타일 엔트리: `src/app/globals.css`
  - `@import "../styles/tokens.css";`
  - `@custom-variant dark (&:where(.dark, .dark *));`

## 코드 스타일 · 린트

| 명령                   | 설명                              |
| ---------------------- | --------------------------------- |
| `npm run lint`         | ESLint로 전체 검사                |
| `npm run lint:fix`     | 자동 수정 가능한 ESLint 이슈 수정 |
| `npm run format`       | Prettier로 포맷 적용              |
| `npm run format:check` | CI용, 포맷 위반만 검사            |

## 폴더 구조

`node_modules`, `.next`는 생략합니다.

```text
seed-kit/
├── public/
│   ├── og/
│   │   └── og-default.svg
│   └── README.md
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
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
│   ├── lib/
│   │   ├── api/
│   │   │   └── json-placeholder.ts
│   │   ├── query/
│   │   │   └── query-client.ts
│   │   ├── seo/
│   │   │   └── site.ts
│   │   └── README.md
│   ├── store/
│   │   ├── index.ts
│   │   ├── ui-store.ts
│   │   └── README.md
│   └── styles/
│       └── tokens.css
└── README.md
```

## 배포 전에 (최소 확인)

- `NEXT_PUBLIC_SITE_URL` 환경변수 설정
- `npm run build` 성공 여부
- `npm run lint` / `npm run format:check` 통과 여부
- `public/og/og-default.svg`를 실제 OG 이미지로 교체했는지 확인

## 라이선스 및 참고

- [Next.js 문서](https://nextjs.org/docs)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
