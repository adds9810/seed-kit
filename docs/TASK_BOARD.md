# Task Board

지금 **뭘 할지·하고 있는지·끝냈는지** 적는 보드다. 다음 작업을 고를 때 본다.

> 작업 전·중에 갱신. 끝나면 「됨」으로 옮긴다.

## 할 일

- [ ] Next.js 10/14(또는 발표일) 보안 릴리스 나오면 `next` / `eslint-config-next` 패치 + CHANGELOG
- [ ] (선택) remote URL에 박힌 PAT 폐기·credential 방식으로 교체
- [ ] (선택) `braces` via eslint-config-next — 업스트림 수정 대기 (`audit fix --force` 금지)

## 하는 중

- (없음)

## 됨

- [x] Next.js 16.4.0 · React 19.3.0
- [x] `npm audit fix`(비강제) — sharp / source-map-js 등
- [x] react-query 5.104.2 · prettier 3.9.10
- [x] Prettier `endOfLine: auto` + format:check 통과
- [x] CHANGELOG에서 P0/P1 라벨 제거(완료·차후 문맥)
- [x] AGENTS 복사 후 체크리스트 + 완료 시 일회성 문서 삭제 안내
- [x] `docs/` BRIEF · TASK_BOARD · HANDOFF 도입

## 보류 (메이저)

- ESLint 10
- TypeScript 7
- `@types/node` 26 (CI Node 20과 맞춤 유지)
