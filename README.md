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
  - `src/app`, `src/components`, `src/features`, `src/hooks`, `src/store`, `src/lib`, `src/utils`, `src/styles`, `public`
- **경로 별칭**: `@/*` → `src/*` (`tsconfig.json`의 `baseUrl`, `paths`; `next.config.ts`에 정책 설명 주석)
- **공통 레이아웃**: 루트 `layout`에서 헤더·본문(`main`)·푸터, 스킵 링크(`#main-content`)
- **헤더**: 로고·주요 내비게이션, 모바일 메뉴(로컬 state — 이후 Zustand로 교체 가능), `id="primary-navigation"`·`aria-expanded` 등 접근성 속성
- **공용 UI**: `Button`, `ButtonLink`, `TextLink` (`src/components/ui`)
- **페이지**: 홈(`/`), 소개(`/about`) — 제목 계층(`h1`~`h2`)·섹션 `aria-labelledby` 정리
- **메타데이터 기본값**: 사이트명·`title` 템플릿(`%s | seed-kit`)·기본 `description` (검색·SNS용 세부 설정은 이후 보강)

**Zustand**, **TanStack Query**, 검색엔진용 메타데이터 전체 패키지(OG 이미지·sitemap 등)는 포함하지 않았습니다. 프로젝트에 맞게 추가하면 됩니다.

## 기술 스택 (현재)

| 구분       | 내용                                 |
| ---------- | ------------------------------------ |
| 프레임워크 | Next.js (App Router)                 |
| 언어       | TypeScript                           |
| 스타일     | Tailwind CSS v4 + 모바일 퍼스트 토큰 |
| 린트       | ESLint + eslint-config-next          |
| 포맷       | Prettier + eslint-config-prettier    |

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

`import { … } from "@/lib/…"` 처럼 **`src/` 기준**으로 import 할 수 있습니다.

- 설정: `tsconfig.json` 의 `baseUrl`, `paths` (`"@/*": ["./src/*"]`)
- 앱 코드는 `@/components/...`, `@/features/...` 형태로 맞추면 됩니다.

## Tailwind 기준 (모바일 퍼스트)

- 브레이크포인트 기준
  - `md`: `48rem` (768px)
  - 따라서 `767px 이하`를 모바일 기준으로 설계
- 토큰 파일: `src/styles/tokens.css`
  - container 최대폭: `--container-max`
  - 섹션 간격: `--space-section`, `--space-section-md`
  - 최소 디자인 토큰: `--color-brand-600`, `--radius-md`, `--shadow-sm`
- 전역 스타일 엔트리: `src/app/globals.css`
  - `@import "../styles/tokens.css";`
  - `page-container`, `section-gap` 유틸 클래스 포함

## 코드 스타일 · 린트

| 명령                   | 설명                              |
| ---------------------- | --------------------------------- |
| `npm run lint`         | ESLint로 전체 검사                |
| `npm run lint:fix`     | 자동 수정 가능한 ESLint 이슈 수정 |
| `npm run format`       | Prettier로 포맷 적용              |
| `npm run format:check` | CI용, 포맷 위반만 검사            |

## 폴더 구조

`node_modules`, `.next` 는 생략합니다.

```text
seed-kit/
├── public/
│   ├── README.md           # 정적 자산 역할 안내
│   └── …                   # SVG 등
├── src/
│   ├── app/                # App Router (라우트·layout·page)
│   │   ├── README.md
│   │   ├── about/
│   │   │   └── page.tsx    # 소개 페이지
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx      # 헤더·main·푸터·스킵 링크
│   │   └── page.tsx        # 홈
│   ├── components/         # 재사용 UI
│   │   ├── README.md
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   └── ui/
│   │       ├── Button.tsx  # Button + ButtonLink
│   │       └── TextLink.tsx
│   ├── features/           # 기능·도메인 단위 모듈
│   │   └── README.md
│   ├── hooks/              # 공통 커스텀 훅
│   │   └── README.md
│   ├── lib/                # 라이브러리성 설정·클라이언트
│   │   └── README.md
│   ├── store/              # 클라이언트 전역 상태
│   │   └── README.md
│   ├── styles/             # 전역 CSS 확장용 (엔트리는 현재 app/globals.css)
│   │   ├── README.md
│   │   └── tokens.css
│   └── utils/              # 순수 유틸
│       └── README.md
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

각 `README.md` 는 해당 폴더에 무엇을 두면 좋은지 **한눈에 보이도록** 최소 설명만 적어 두었습니다.

## 배포 전에 (최소 확인)

- `npm run build` 성공 여부
- `npm run lint` / `npm run format:check` 통과 여부

## 라이선스 및 참고

- [Next.js 문서](https://nextjs.org/docs)
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
