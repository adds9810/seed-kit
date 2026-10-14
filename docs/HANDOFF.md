# Handoff

이전 작업에서 **어디까지 했고, 다음에 뭘 이으면 되는지** 남기는 인수인계다. 새 채팅이나 다른 사람이 이어받을 때 본다.

> 세션을 넘길 때 짧게 갱신. 다음 에이전트·본인이 여기서 이어서 작업한다.

## 최근 맥락 (2026-10-13)

- 스타터 의존성·audit·format:check까지 정리됨. `main` 기준으로 문서 구조 통일 중.
- 커밋 author는 이 레포 local `user`(김지혜 / ria9810@gmail.com). 전역은 업무 계정일 수 있음 — **이 프로젝트만** local 유지, 전역 conditional include는 하지 않기로 함.
- 사용자가 seed-kit을 **복사해 새 사이드 프로젝트**를 만들 예정. 복사본에서는 `AGENTS.md` 「복사 후 에이전트 할 일」을 따르고, 끝나면 그 섹션·README 표·guide `fork-fill-in` 삭제. **`docs/` 세 파일은 채워서 유지.**

## 결정

| 항목              | 결정                                                                       |
| ----------------- | -------------------------------------------------------------------------- |
| 문서 역할         | 루트 = README / AGENTS / CHANGELOG. `docs/` = BRIEF / TASK_BOARD / HANDOFF |
| format:check CRLF | `.prettierrc` `endOfLine: "auto"` (전 파일 LF 강제·일괄 재포맷 안 함)      |
| audit `braces`    | `--force`로 eslint-config-next 14 다운그레이드 하지 않음                   |
| Oct Next 보안     | 릴리스 나오면 패치. 복사·새 프로젝트 시작을 막지 않음                      |

## 막힌 점 / 주의

- `.git/config` remote URL에 PAT가 포함된 형태였음 → 노출 시 토큰 폐기 권장
- GitHub remote가 `Seed-Kit` → `seed-kit`으로 moved 안내가 난 적 있음

## 다음에 이을 것

1. (복사본) 새 프로젝트명·목적으로 BRIEF·보드 채우기 + 화면/SEO 문구
2. (원본 또는 복사본) Next 보안 패치 발표 시 업데이트
3. 필요 시 PAT / remote URL 정리
