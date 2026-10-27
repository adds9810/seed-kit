# Handoff

이전 작업에서 **어디까지 했고, 다음에 뭘 이으면 되는지** 남기는 인수인계다. 새 채팅이나 다른 사람이 이어받을 때 본다.

> 세션을 넘길 때 짧게 갱신. 다음 에이전트·본인이 여기서 이어서 작업한다.

## 최근 맥락 (2026-10-27)

- Oct 14 Next 보안 업데이트 반영: `next` / `eslint-config-next` `16.4.3`, React `19.3.1`, Query `5.105.0`, Zustand `5.0.16`.
- `npm run lint` · `npm run build` 통과, `npm audit` 0.
- 복사본 세팅 시 `AGENTS.md` 「복사 후 에이전트 할 일」따름. 끝나면 일회성 섹션·README 표·guide `fork-fill-in` 삭제. **`docs/`는 채워서 유지.**

## 결정

| 항목              | 결정                                                                       |
| ----------------- | -------------------------------------------------------------------------- |
| 문서 역할         | 루트 = README / AGENTS / CHANGELOG. `docs/` = BRIEF / TASK_BOARD / HANDOFF |
| format:check CRLF | `.prettierrc` `endOfLine: "auto"`                                          |
| Oct Next 보안     | `16.4.3`으로 패치 완료 (`16.4.1` 최소 패치 포함)                           |
| 메이저 보류       | ESLint 10 / TypeScript 7 / `@types/node` 26                                |

## 막힌 점 / 주의

- `.git/config` remote URL에 PAT가 포함된 형태였음 → 노출 시 토큰 폐기 권장
- GitHub remote가 `Seed-Kit` → `seed-kit`으로 moved 안내가 난 적 있음

## 다음에 이을 것

1. (복사본) 새 프로젝트명·목적으로 BRIEF·보드 채우기 + 화면/SEO 문구
2. 필요 시 PAT / remote URL 정리
