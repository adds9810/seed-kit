# Project Brief

이 프로젝트가 **무엇인지** 적는 문서다. 목적, 누구를 위한 건지, 하는 일과 하지 않는 일을 본다.

> 사람·AI 공통. 사이드 프로젝트로 복사한 뒤에는 이 파일을 **이 제품** 기준으로 다시 채운다.

## 한 줄

재사용 가능한 Next.js(App Router) 프론트엔드 스타터(`seed-kit`).

## 목적

- 새 웹 사이드 프로젝트를 빠르게 시작하기 위한 뼈대
- 공개 화면(`/`, `/about`)과 개발 전용 가이드(`/guide`)를 분리
- SEO·CI·Query/Zustand 예시까지 포함해 “바로 화면만 바꾸면” 배포 가능한 상태 유지

## 타깃

- 본인(비상업·포트폴리오/사이드 프로젝트용)
- 배포: Vercel 예정

## 범위

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4
- TanStack Query 예제, Zustand UI 스토어(테마·모바일 메뉴)
- Metadata / robots / sitemap, GitHub Actions(lint·format·build)
- `/guide`는 개발 전용(`src/proxy.ts` + production `notFound`)

## 비범위 (지금은 안 함)

- 실제 백엔드·DB·인증 (계획만 guide `progress`에 있음)
- shadcn/ui·Supabase·블로그 CMS 본구현
- ESLint 10 / TypeScript 7 메이저 업그레이드

## 핵심 경로

| 구분          | 경로                                    |
| ------------- | --------------------------------------- |
| 공개 페이지   | `src/app/(site)/`                       |
| 가이드        | `src/app/guide/` + `_data`              |
| SEO           | `src/lib/seo/site.ts`                   |
| 요청 경계     | `src/proxy.ts`                          |
| 에이전트 규칙 | `AGENTS.md`                             |
| 진행·인수인계 | `docs/TASK_BOARD.md`, `docs/HANDOFF.md` |
