# Handoff

이전 작업에서 **어디까지 했고, 다음에 뭘 이으면 되는지** 남기는 인수인계다. 새 채팅이나 다른 사람이 이어받을 때 본다.

> 세션을 넘길 때 짧게 갱신. 다음 에이전트·본인이 여기서 이어서 작업한다.

## 최근 맥락 (2026-11-17)

- Nov 보안 업데이트 반영: `next` / `eslint-config-next` `16.4.6` (최소 패치선 `16.4.5`).
- `npm run lint` · `npm run build` 통과. `next` audit 해소. `minimatch`(eslint 경유) moderate 잔존.
- 복사본 세팅 시 `AGENTS.md` 「복사 후 에이전트 할 일」따름. 끝나면 일회성 섹션·README 표·guide `fork-fill-in` 삭제. **`docs/`는 채워서 유지.**

## 결정

| 항목              | 결정                                                                       |
| ----------------- | -------------------------------------------------------------------------- |
| 문서 역할         | 루트 = README / AGENTS / CHANGELOG. `docs/` = BRIEF / TASK_BOARD / HANDOFF |
| format:check CRLF | `.prettierrc` `endOfLine: "auto"`                                          |
| Nov Next 보안     | `16.4.6`으로 패치 완료                                                     |
| 메이저 보류       | ESLint 10 / TypeScript 7 / `@types/node` 26                                |

## 막힌 점 / 주의

- `.git/config` remote URL에 PAT가 포함된 형태였음 → 노출 시 토큰 폐기 권장
- GitHub remote가 `Seed-Kit` → `seed-kit`으로 moved 안내가 난 적 있음

## 다음에 이을 것

1. (선택) react-query·zustand·tailwind·prettier 마이너/패치
2. (선택) `minimatch` audit fix 검토
3. 필요 시 PAT / remote URL 정리
4. (복사본) 새 프로젝트명·목적으로 BRIEF·보드 채우기 + 화면/SEO 문구
