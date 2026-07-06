# careerfit_ai

reerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요

커리어 설계 방향성 설정 및 요개발 역량 제시

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
    - 프로젝트 주제 선정 및 AI 서비스 기획 캔버스를 작성하여 문제 정의와 해결 방안을 구체화
    - GitHub Repository, Cursor 개발 환경 및 Python 개발 환경을 구축하고 프로젝트 초기 구조 생성
    - AI 조교 운영 규칙(AI_TA_RULES.md), 프롬프트(PROMPTS.md), 체크리스트(CHECKLIST.md), 평가 질문(EVAL_QUESTIONS.md) 등 하네스 문서 작성
    - Cursor Rules(.cursor/rules/project.mdc)를 작성하여 AI 기반 개발 환경을 프로젝트에 맞게 설정
    - .gitignore에 .env를 포함하여 보안 설정을 완료하고 GitHub 첫 커밋을 수행하여 프로젝트 버전 관리를 시작
    
- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
    - Python 3.11 개발 환경 및 가상환경(venv) 세팅 완료
    - FastAPI 기반 `/health`, `/jobs`, `/analyze` API 엔드포인트 구현
    - Gemini 2.5 Flash-Lite API 연동 및 응답 테스트 완료
    - `.env` 기반 환경변수 관리 및 `MOCK_MODE` 설정 지원
    - 실제 API 호출과 Mock 응답 전환이 가능한 LLM 서비스 구조 구축

- [x] 3일차: 데이터 파이프라인 구축
    - CSV 취업 공고 데이터를 전처리하여 결측치 제거, 중복 제거, 스킬명 표준화를 완료
    - 전처리 데이터를 SQLite와 ChromaDB에 저장하고 RAG용 문서(`rag_documents.json`) 생성
    - Gemini API 호출 테스트, `MOCK_MODE` 전환 테스트 및 AI 응답 환경 검증 완료
    - Ollama 설치 및 로컬 LLM 연결을 확인하여 클라우드·로컬 LLM 실행 환경 구축

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성
