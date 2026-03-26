# seed-kit

사이드 프로젝트·포트폴리오용으로 재사용할 **Next.js 프론트엔드 스타터 키트**입니다.  
반복되는 초기 세팅을 줄이고, 이후 단계에서 폴더 구조·상태관리·SEO 등을 확장할 예정입니다.

## 현재 진행 단계 (1단계 완료)

**1단계**에서는 다음만 구성했습니다.

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **ESLint 9** (flat config) + `eslint-config-next` (Core Web Vitals + TypeScript 규칙)
- **Prettier** + **eslint-config-prettier** (ESLint와 포맷 규칙 충돌 방지, Prettier가 스타일 전담)
- 경로 별칭 **`@/*` → `src/*`** (`tsconfig.json`)
- 개발 서버: **Turbopack** (`npm run dev`)

아직 **Zustand**, **TanStack Query**, 공통 레이아웃·`features` 폴더 골격, SEO 패키지 등은 **다음 단계**에서 추가합니다.

## 기술 스택 (현재)

| 구분       | 내용                              |
| ---------- | --------------------------------- |
| 프레임워크 | Next.js (App Router)              |
| 언어       | TypeScript                        |
| 스타일     | Tailwind CSS v4                   |
| 린트       | ESLint + eslint-config-next       |
| 포맷       | Prettier + eslint-config-prettier |

## 사전 요구 사항

- **Node.js** 20 이상 권장 (Next.js 공식 권장과 맞춤)
- **npm** (이 저장소는 npm 기준으로 잠금 파일이 있습니다)

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

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 기본 페이지가 표시됩니다.  
소스는 `src/app/page.tsx`를 수정하면 됩니다.

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 서버 (빌드 후)

```bash
npm run start
```

## 코드 스타일 · 린트

| 명령                   | 설명                              |
| ---------------------- | --------------------------------- |
| `npm run lint`         | ESLint로 전체 검사                |
| `npm run lint:fix`     | 자동 수정 가능한 ESLint 이슈 수정 |
| `npm run format`       | Prettier로 포맷 적용              |
| `npm run format:check` | CI용, 포맷 위반만 검사            |

ESLint 설정은 `eslint.config.mjs`이며, **마지막에 `eslint-config-prettier`를 넣어** 포맷 관련 규칙은 Prettier에 맡깁니다.

## 현재 폴더 구조 (1단계 기준)

소스와 설정 위주로 정리했습니다. (`node_modules`, `.next`는 생략)

```text
seed-kit/
├── public/                 # 정적 파일 (SVG 등)
├── src/
│   └── app/                # App Router
│       ├── favicon.ico
│       ├── globals.css     # 전역 CSS + Tailwind
│       ├── layout.tsx      # 루트 레이아웃
│       └── page.tsx        # 홈 페이지
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── next-env.d.ts           # Next.js TypeScript 선언 (자동)
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

2단계부터 `src/components`, `src/features`, `src/lib` 등 실무형 골격을 나눌 예정입니다.

## 배포 전에 (지금 단계에서 할 수 있는 최소 확인)

- `npm run build` 가 로컬에서 성공하는지
- `npm run lint` / `npm run format:check` 통과 여부 (CI에 넣을 때)

## 라이선스 및 참고

- [Next.js 문서](https://nextjs.org/docs)
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
