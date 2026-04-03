# seed-kit

`Next.js`(App Router) + `React` + `TypeScript` + `Tailwind CSS v4`로 바로 화면을 붙이기 위한 가벼운 프론트엔드 스타터입니다.

**로컬에서 `npm run dev` 실행 후 브라우저의 `/guide`로 들어가면** 진행 상황, 기술 스택, 폴더 구조, 컴포넌트·개발 노트(Zustand, Query, SEO 등)를 한곳에서 볼 수 있습니다. 문구·체크리스트는 `src/app/guide/_data`에서 수정합니다.

**홈(`src/app/page.tsx`)과 소개(`src/app/about/page.tsx`)**는 스타터 설명을 넣지 않고, 실제 서비스·제품 카피를 채우는 용도로 비워 두었습니다.

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
- `NEXT_PUBLIC_TWITTER_HANDLE`: Twitter metadata creator

- `NEXT_PUBLIC_` 값은 브라우저에 노출됩니다.
- 비밀값은 `NEXT_PUBLIC_` 없이 서버 전용으로 관리하세요.

## 문서를 어디에 둘지

| 구분 | 위치 |
| --- | --- |
| 스타터·진행·스택·개발 메모 | 앱 `/guide` + `src/app/guide/_data` |
| 설치·실행·CI·환경변수 | 이 README |
| 라우트별 예시 | `/examples/query` 등 |

## 참고 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
