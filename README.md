# KDT 프론트엔드 실습 기록

K-디지털 트레이닝 「생성형 AI 기반 FE/BE 협업 과정」(2026.02 ~ 2026.08)에서 배운 내용을 직접 따라 치고 실습한 자료입니다. 폴더 번호가 배운 순서입니다.

| 폴더 | 기간 | 실습한 것 |
|---|---|---|
| 01_html · 02_css | 02.25 ~ 03.03 | 시맨틱 태그·폼, 선택자, 박스 모델, Flex 레이아웃 |
| 03_JavaScript | 03.05 ~ 03.26 | 문법 기본, DOM 조작, React를 위한 ES6 |
| 04_React | 03.26 ~ 04.28 | JSX·props·state, Hooks(useState·useEffect·useReducer·useContext·useMemo·useRef), Router, json-server로 REST API 호출(fetch·axios) |
| 05_firebase | 04.07 ~ 04.13 | Firestore CRUD, Authentication |
| 06_graphql | 04.28 ~ 04.29 | Query·Mutation 서버와 프론트 |
| 07_typescript | 04.30 ~ 05.07 | 기본·복합 타입, 함수, 제네릭, 유틸리티 타입, JS → TS 마이그레이션 |
| 08_NEXT | 05.11 ~ 05.20 | Pages Router, App Router(정적·동적 라우트), CSR vs SSR, Server Action |
| 09_optimization | ~ 06.08 | 이미지·폰트 최적화, 번들 최적화 |
| 10_TESTING | 06.11 ~ 06.16 | Jest, React Testing Library |
| 11_DEPLOY | ~ 06.23 | Dockerfile, Next.js 앱 컨테이너 배포 |
| 12_special-track | 07.07 ~ 07.09 | 소켓 기본·채팅, 데이터 전처리 |
| 13_ai_service | 07.13 ~ 07.15 | SSE 스트리밍, 음성 UX, NLP(Transformers) |

실습 뒤에 같은 기술을 쓴 프로젝트는 포트폴리오와 블로그(velog.io/@hyun030514)에 정리했습니다.

- 환경 변수(`.env`)와 Firebase 키는 올리지 않았습니다. `05_firebase/02_authentication/src/firebase/config.example.js`를 참고해 `config.js`를 만들면 됩니다.
- 각 폴더에서 `npm install` 후 실행합니다.
