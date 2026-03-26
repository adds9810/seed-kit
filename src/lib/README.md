# lib

앱에 한 번만 설정하거나 여러 곳에서 가져다 쓰는 **라이브러리성 코드**를 둡니다.

- **`query/`**: TanStack Query용 `QueryClient` 팩토리(`createQueryClient`)와 기본 `defaultOptions`
- **`api/`**: HTTP 클라이언트·외부 API 래퍼(예: 데모용 `json-placeholder.ts` → 자체 API로 교체)
