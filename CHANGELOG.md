# Changelog

이 프로젝트의 의존성·동작에 영향을 주는 변경을 기록합니다.

## 2026-10-13 — transitive 취약점 패치 (`npm audit fix`)

직접 의존성은 그대로 두고, lockfile만 갱신했습니다. `--force`는 사용하지 않았습니다.

### 올린 것 (간접 의존성)

| 패키지 | 이전 | 새 버전 | 경로 |
| --- | --- | --- | --- |
| `sharp` | 0.35.4 | 0.35.5 | `next` |
| `source-map-js` | 1.2.1 | 1.2.2 | `@tailwindcss/postcss` / `postcss` |
| `brace-expansion` | 1.1.12 / 5.0.5 | 1.1.21 / 5.0.12 | `eslint` 등 |
| `@humanfs/node` | 0.16.7 | 0.16.8 | `eslint` |

### 아직 안 한 것

| 이슈 | 이유 |
| --- | --- |
| `braces` (eslint-config-next → micromatch 경유) | `npm audit fix --force`가 `eslint-config-next@14.2.35`로 **다운그레이드**하므로 보류. Next 16 라인·업스트림 수정 대기 |

### Breaking change / 검증

- **발견된 breaking change:** 없음.
- **검증:** `npm run lint`, `npm run build` 통과 (Next.js 16.4.0).
- **audit:** `sharp` / `source-map-js` / `brace-expansion` / `@humanfs/node` 해소. `braces`(eslint 경유)는 위 표「아직 안 한 것」참고.

## 2026-10-13 — React 19.3 맞춤

### 패키지 변경

| 패키지 | 이전 | 새 버전 | 이유 |
| --- | --- | --- | --- |
| `react` | 19.2.8 | 19.3.0 | Next.js 16.4가 권장하는 React 마이너에 맞춤 |
| `react-dom` | 19.2.8 | 19.3.0 | react와 동일 버전 유지 |
| `@types/react` | 19.2.18 | 19.3.0 | React 19.3 타입 정의 |
| `@types/react-dom` | 19.2.5 | 19.3.0 | react-dom 19.3 타입 정의 |

### Breaking change / 검증

- **발견된 breaking change:** 없음.
- **검증:** `npm run lint`, `npm run build` 통과 (Next.js 16.4.0 + React 19.3.0).

## 2026-10-13 — Next.js 보안·마이너 업데이트

### 패키지 변경

| 패키지 | 이전 | 새 버전 | 이유 |
| --- | --- | --- | --- |
| `next` | 16.3.4 | 16.4.0 | Sep 2026 Security Release 이후 영향 범위(`16.0`–`16.3.7`)에 해당하던 `16.3.4`를 Active LTS 최신으로 올림. critical(RCE 등) 해소 |
| `eslint-config-next` | 16.3.4 | 16.4.0 | Next.js와 동일 메이저·마이너에 맞춤 |

### 같은 날 이어서 / 아직 안 한 것

| 패키지 | Next 올린 직후 | 그다음 |
| --- | --- | --- |
| `react` / `react-dom` (+ `@types/*`) | `19.2.8`로 잠시 유지 | 같은 날 위 섹션에서 `19.3.0`으로 반영 |
| `sharp` / `source-map-js` 등 (transitive) | audit high 잔존 | 같은 날 `npm audit fix` 섹션에서 반영 |
| `@tanstack/react-query`, `prettier` | 기존 유지 | 차후 마이너·패치 검토 |
| `braces` (eslint-config-next 경유) | — | `--force` 다운그레이드 위험이 있어 보류 |

### Breaking change / 검증

- **발견된 breaking change:** 없음 (`proxy.ts`·App Router 동작 유지).
- **검증:** `npm run lint`, `npm run build` 통과 (Next.js 16.4.0, Turbopack).
- **audit:** `next` 패키지 critical 항목은 해소. transitive는 위 표·최신 audit 섹션 참고.

## 2026-09-03 — 의존성 보안·최신화

### 패키지 변경

| 패키지 | 이전 | 새 버전 | 이유 |
| --- | --- | --- | --- |
| `next` | 16.2.1 | 16.3.4 | Critical 보안 패치(RCE 등, Aug 2026 Security Release 포함). 영향 범위 `16.0`–`16.3.2`에 해당하던 `16.2.1`을 Active LTS 최신으로 올림 |
| `eslint-config-next` | 16.2.1 | 16.3.4 | Next.js와 동일 메이저·마이너에 맞춤 |
| `react` | 19.2.4 | 19.2.8 | 패치 최신화 |
| `react-dom` | 19.2.4 | 19.2.8 | 패치 최신화 |
| `@tanstack/react-query` | 5.95.2 | 5.102.8 | 마이너 최신화 |
| `zustand` | 5.0.12 | 5.0.15 | 패치 최신화 |
| `tailwindcss` | 4.2.2 | 4.3.3 | 마이너 최신화 |
| `@tailwindcss/postcss` | 4.2.2 | 4.3.3 | Tailwind와 맞춤 |
| `prettier` | 3.8.1 | 3.9.6 | 마이너 최신화 |
| `eslint` | 9.39.4 | 9.39.5 | 9.x 패치만 적용 (10.x 메이저는 보류) |
| `@types/react` | 19.2.14 | 19.2.18 | 타입 정의 패치 |
| `@types/react-dom` | 19.2.3 | 19.2.5 | 타입 정의 패치 |
| `@types/node` | 20.19.37 | 20.19.43 | Node 20 계열 패치만 적용 (26.x 메이저는 보류) |

### 의도적으로 올리지 않은 메이저

| 패키지 | 현재 | Latest(보류) | 이유 |
| --- | --- | --- | --- |
| `eslint` | 9.39.5 | 10.9.1 | ESLint 10 flat config·플러그인 호환 검토 필요 |
| `typescript` | 5.9.3 | 7.0.2 | 대형 메이저; 빌드·타입 깨짐 위험 |
| `@types/node` | 20.x | 26.x | CI/런타임 Node 20과 타입 타깃 불일치 가능 |

### Breaking change / 검증

- **발견된 breaking change:** 없음 (메이저 업그레이드 미실시).
- **`npx next upgrade`:** Windows에서 `spawn npx ENOENT`로 실패 → `npm install next@16.3.4` 등으로 동일 목표 버전을 직접 설치.
- **검증:** `npm run lint`, `npm run build` 통과 (Next.js 16.3.4).

## 2026-09-03 — `middleware` → `proxy`

- `src/middleware.ts` → `src/proxy.ts`, export 함수명 `middleware` → `proxy` (Next.js 16.3 파일 관례).
- `/guide` 프로덕션 차단 동작은 동일.
- README·가이드 `_data`(진행·개발 노트·폴더 트리)를 `src/proxy.ts` 표현으로 맞춤. Zustand persist import(`zustand/middleware`)는 라이브러리 경로라 유지.
