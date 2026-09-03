# seed-kit

`Next.js`(App Router) + `React` + `TypeScript` + `Tailwind CSS v4`로 바로 화면을 붙이기 위한 가벼운 프론트엔드 스타터입니다.

**`/guide`는 개발 전용입니다.** `npm run dev`로만 쓰는 것을 전제로 하고, 프로덕션(`next start` 등)에서는 `src/proxy.ts`가 `/guide` 요청을 404로 돌립니다. 가이드 레이아웃에서도 `NODE_ENV === "production"`이면 `notFound()`를 호출합니다. 진행 상황·스택·폴더·컴포넌트·개발 노트는 `src/app/guide/_data`에서 다룹니다.

**일반 화면**은 `src/app/(site)/page.tsx`, `src/app/(site)/about/page.tsx`에 두었습니다. URL은 그대로 `/`, `/about`이며, 헤더·푸터는 공개 사이트용(`PublicSiteShell`)만 씁니다. 제품명은 `.env`의 `NEXT_PUBLIC_APP_NAME`으로 바꿀 수 있습니다.

## 사전 요구 사항

- Node.js 20+
- npm

## 설치

```bash
npm install
```

환경변수:

```bash
cp .env.example .env.local
```

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## 실행

개발 서버:

```bash
npm run dev
```

프로덕션 빌드·실행:

```bash
npm run build
npm run start
```

품질 검사:

```bash
npm run lint
npm run format:check
```

## CI (GitHub Actions)

- 워크플로: `.github/workflows/ci.yml`
- 트리거: `pull_request`, `push` to `main` / `master`
- 단계: `npm ci` → `lint` → `format:check` → `build` (Ubuntu, Node 20)

## 환경변수

파일: `.env.example`

- `NEXT_PUBLIC_SITE_URL`: canonical, OG, sitemap 기준 URL
- `NEXT_PUBLIC_APP_NAME`: 헤더·푸터 등에 쓰는 표시 이름(선택)
- `NEXT_PUBLIC_TWITTER_HANDLE`: Twitter metadata creator

- `NEXT_PUBLIC_` 값은 브라우저에 노출됩니다.
- 비밀값은 `NEXT_PUBLIC_` 없이 서버 전용으로 관리하세요.

## 복사한 뒤 실제 프로젝트로 바꿀 때 채울 곳

레이아웃은 두고 **이름·설명·화면 문구**만 바꾸면 됩니다. `/guide`는 스타터 작업 메모라 서비스 카피에 넣지 않아도 됩니다.

| 무엇을 | 어디 |
| --- | --- |
| 표시 이름(헤더·푸터·탭 제목) | `.env.local`의 `NEXT_PUBLIC_APP_NAME`, 또는 `src/lib/seo/site.ts`의 `name` 기본값 |
| 검색·OG용 한 줄 설명, 키워드 | `src/lib/seo/site.ts`의 `description`, `keywords` |
| 사이트 URL, Twitter 핸들 | `.env.local`의 `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TWITTER_HANDLE` |
| 홈 히어로(헤드라인·한 줄 설명·버튼) | `src/app/(site)/page.tsx` |
| 소개 본문 | `src/app/(site)/about/page.tsx` |
| 소개 페이지 메타(제목·description) | 같은 파일의 `generateMetadata` |
| favicon / 공유 이미지 | `src/app/favicon.ico`, `public/og/og-default.svg`(실서비스는 1200×630 PNG/JPG 권장) |
| npm 패키지 이름 | `package.json`의 `name` |

같은 목록은 개발 서버의 `/guide` → 개발 노트에도 있습니다.

## 문서를 어디에 둘지

| 구분 | 위치 |
| --- | --- |
| 스타터·진행·스택·개발 메모 | 개발 시에만 `/guide` + `src/app/guide/_data` |
| 설치·실행·CI·환경변수 | 이 README |
| 의존성·버전 이력 | [CHANGELOG.md](./CHANGELOG.md) |
| 라우트별 예시 | `/examples/query` 등 |

## 참고 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
