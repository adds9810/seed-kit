@AGENTS.md

## 프로젝트 개요

이 프로젝트는 [프로젝트 목적]야.
<!-- 예시 : 이 프로젝트는 [포트폴리오용 개발 블로그]야. -->

비상업적 목적으로 제작하고 Vercel에 배포할 예정이야.

## 작업 규칙

- 작업은 단계별로 하나씩만 진행해
- 각 단계 완료 후 커밋 메시지 2~3개 제안해줘. 제안할 때 간단, 상세 등 명시하지 말고 제안 1, 2... 하고 추천도 해줘
- 다음 단계가 뭔지 설명하고 진행 여부 물어봐줘
- 한국어로 대화해줘
- 코드 수정 전에 항상 관련 파일 먼저 읽어줘
- 기능·문서 작업 전에 `docs/PROJECT_BRIEF.md`와 `docs/TASK_BOARD.md`를 읽고, 세션 끝에 필요하면 `docs/HANDOFF.md`와 TASK_BOARD를 갱신해

## 기술 스택

<!-- 기술스택 명시
- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Notion API (블로그 콘텐츠)
- Vercel 배포
-->

## 환경변수

<!--
- NOTION_API_KEY: Notion Integration 키
- NOTION_DATABASE_ID: 키값넣기
-->

## 코딩 규칙

- 컴포넌트는 src/components 안에 기능별로 폴더 분리
- 타입은 src/types에 정의
- API 함수는 src/lib/api에 작성
- 커밋 메시지는 아래 **커밋 메시지** 섹션을 따를 것.

---

## 커밋 메시지

- 언어: 한국어. 제안·작성 모두 동일.
- 형식:

```txt
type(scope): 제목

본문(왜 했는지, 1~2문장)
```

- **제목**: 무엇을 했는지 (한 줄). 톤 예: 추가, 구성, 적용, 정리, 복구.
- **본문**: **왜** 했는지. 나중에 로그만 봐도 의도가 보이게.
  - 파일 나열·diff 요약은 쓰지 말 것.
  - “무엇을 맞춰서 / 어떤 상태를 유지·확보하려는지”를 적을 것.
- `type` 예: `feat` `fix` `docs` `chore` `refactor` `design`
- `scope`는 선택 (예: `deps`, `ui`, `auth`)
- 제안 전 `git log --oneline`으로 이 저장소 톤을 맞출 것.
- 의존성만 올린 커밋도 본문에 **이유**를 적을 것.

### 좋은 예

```txt
chore: Expo SDK 54 패치 의존성 정리

expo·expo-constants를 SDK 권장 버전으로 맞춰
expo-doctor 검사 통과 상태를 유지.
```

```txt
docs: 진행 문서 보드·핸드오프 내용 복구

플레이스홀더로 비워진 BRIEF/BOARD/HANDOFF에
Button 완료·Input 진행 상태를 다시 반영.
```

### 피하기

```txt
chore: update packages
```

```txt
chore: package.json 수정

expo 버전 올림
```

---

## seed-kit 복사 후 에이전트 할 일 (완료 후 이 섹션 삭제)

> **일회성 체크리스트.** 아래를 모두 반영해 새 사이드 프로젝트로 바꾼 뒤, **이 섹션 전체**와 README의 「복사한 뒤 실제 프로젝트로 바꿀 때 채울 곳」, `src/app/guide/_data/developer-topics.ts`의 `fork-fill-in` 항목을 **삭제**해줘. 스타터 안내가 실서비스 문서에 남지 않게 하는 게 목적이야.
>
> **`docs/PROJECT_BRIEF.md` · `TASK_BOARD.md` · `HANDOFF.md`는 삭제하지 말고**, 새 프로젝트 내용으로 채운 뒤 **유지**해.

사용자가 프로젝트명·목적·도메인 등을 알려주면 그걸 기준으로 채워. 모르면 단계마다 물어보고 진행해.

### 1. 이 파일(`AGENTS.md`) 플레이스홀더

- [ ] 「프로젝트 개요」의 `[프로젝트 목적]`을 실제 한 줄 설명으로 교체
- [ ] 「기술 스택」주석을 풀고, 이 프로젝트에 쓰는 스택만 남김 (안 쓰는 Notion 등은 삭제)
- [ ] 「환경변수」에 실제 쓰는 키만 적음 (없으면 섹션 비우거나 삭제)

### 2. 이름·SEO·환경

| 무엇을                  | 어디                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| npm 패키지 이름         | `package.json`의 `name`                                                                                           |
| 표시 이름(헤더·푸터·탭) | `.env.local`의 `NEXT_PUBLIC_APP_NAME` (없으면 `.env.example` 복사 후 생성). 폴백은 `src/lib/seo/site.ts`의 `name` |
| 한 줄 설명·키워드       | `src/lib/seo/site.ts`의 `description`, `keywords`                                                                 |
| 사이트 URL·Twitter      | `.env.local`의 `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TWITTER_HANDLE`                                               |

### 3. 화면 문구

| 무엇을                        | 어디                            |
| ----------------------------- | ------------------------------- |
| 홈 히어로(헤드라인·설명·버튼) | `src/app/(site)/page.tsx`       |
| 소개 본문                     | `src/app/(site)/about/page.tsx` |
| 소개 메타(제목·description)   | 같은 파일의 `generateMetadata`  |

### 4. 에셋 (있으면)

| 무엇을    | 어디                                            |
| --------- | ----------------------------------------------- |
| favicon   | `src/app/favicon.ico`                           |
| OG 이미지 | `public/og/` (실서비스는 1200×630 PNG/JPG 권장) |

### 5. README

- [ ] 상단 seed-kit 소개를 **이 프로젝트** 소개로 바꿈
- [ ] 설치·실행·CI·환경변수 안내는 유지해도 됨
- [ ] 「복사한 뒤… 채울 곳」표는 **세팅 완료 후 삭제**

### 6. `docs/` (유지 · 내용만 교체)

- [ ] `docs/PROJECT_BRIEF.md` — 목적·타깃·범위·비범위
- [ ] `docs/TASK_BOARD.md` — 할 일 / 하는 중 / 됨 (초기 할 일만 남겨도 됨)
- [ ] `docs/HANDOFF.md` — 복사·세팅 직후 맥락 한 단락

### 7. 건드리지 않아도 되는 것

- `/guide` · `src/app/guide/_data` — 개발 메모. 서비스 카피로 채울 필요 없음 (`fork-fill-in`만 세팅 후 삭제)
- `/examples/query` — 예제. 필요 없으면 나중에 따로 제거
- `CHANGELOG.md` — 스타터 이력. 새 프로젝트면 비우거나 첫 항목부터 다시 써도 됨

### 8. 완료 조건

1. 위 체크·표를 반영했다 (`docs/`는 채워서 유지)
2. `npm run lint`, `npm run format:check`, `npm run build`가 통과한다 (가능하면)
3. **이 섹션(`## seed-kit 복사 후…`부터 여기까지)을 AGENTS.md에서 삭제**했다
4. README 「복사한 뒤…」섹션과 guide `fork-fill-in`을 삭제했다
5. 삭제·문구 반영 커밋 메시지를 제안하고 진행 여부를 물었다
