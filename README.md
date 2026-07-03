# careerfit_ai

reerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요

어떤 방향으로 커리어 설계를 해야 할지 모르겠다.

careerfit_ai가 나의 전공과 관심 직무를 바탕으로 내가 개발해야 하는 스킬들과 핵심 역량을 제시함으로써 커리어 설계 방안을 제시한다.



## 기술 스택

| 영역 | 기술 |
| ----- | ----- |
| 백엔드 | Python, FastAPI |
| AI API | Gemini 2.5 Flash-Lite |
| 데이터 | Pandas, SQLite, ChromaDB |
| 프론트엔드 | React, Vite |
| 실행 환경 | Docker |



## 진행 현황

- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [ ] 2일차: FastAPI 서버 구축 및 Gemini API 연결
  - Python 3.11 개발 환경 및 가상환경(venv) 세팅 완료
  - FastAPI 기반 `/health`, `/jobs`, `/analyze` API 엔드포인트 구현
  - Gemini 2.5 Flash-Lite API 연동 및 응답 테스트 완료
  - `.env` 기반 환경변수 관리 및 `MOCK_MODE` 설정 지원
  - 실제 API 호출과 Mock 응답 전환이 가능한 LLM 서비스 구조 구축

- [ ] 3일차: 데이터 파이프라인 구축

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성
