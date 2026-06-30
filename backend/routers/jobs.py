# backend/routers/jobs.py
from fastapi import APIRouter
from typing import List
router = APIRouter()



# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다
MOCK_JOBS = [
    {
        "id": 1,
        "company": "테크스타트업A",
        "title": "데이터 분석가",
        "required_skills": ["Python", "SQL", "통계"],
        "preferred_skills": ["R", "Tableau", "머신러닝"],
        "description": "사용자 행동 데이터를 분석해 비즈니스 인사이트를 도출합니다.",
        "deadline": "2026-07-31"
    },

    {
        "id": 2,
        "company": "금융서비스B",
        "title": "백엔드 개발자",
        "required_skills": ["Python", "FastAPI", "PostgreSQL"],
        "preferred_skills": ["Docker", "AWS", "Redis"],
        "description": "금융 데이터 처리 API 서버를 개발하고 운영합니다.",
        "deadline": "2026-08-15"
    },

    {
        "id": 3,
        "company": "공공기관C",
        "title": "AI 연구원",
        "required_skills": ["Python", "딥러닝", "PyTorch"],
        "preferred_skills": ["논문 작성", "NLP", "컴퓨터 비전"],
        "description": "공공 서비스 개선을 위한 AI 모델을 연구·개발합니다.",
        "deadline": "2026-08-01"
    },

    {
        "id": 4,
        "company": "LG AI연구원",
        "title": "생성형 AI 모델링 엔지니어",
        "required_skills": ["Python", "PyTorch", "Transformers"],
        "preferred_skills": ["Huggingface Hub 활용 경험", "RAG 시스템 구축 경험"],
        "description": "대규모 언어 모델(LLM)을 미세조정(Fine-tuning)하고 최적화하는 업무를 수행합니다. 자연어 처리 모델의 추론 속도 개선 및 최신 AI 논문 구현을 담당합니다.",
        "deadline": "2026-08-31"
    },

    {
        "id": 5,
        "company": "SK텔레콤 퀀텀기술랩",
        "title": "양자 알고리즘 연구원",
        "required_skills": ["Python", "Qiskit", "선형대수학"],
        "preferred_skills": ["양자 컴퓨팅 기초 이해도", "C++"],
        "description": "양자 컴퓨터 환경에서 동작하는 최적화 알고리즘을 설계하고 시뮬레이션합니다. 양자 회로 설계 및 노이즈 완화(Error Mitigation) 기법을 연구합니다.",
        "deadline": "2026-08-31"
    },

    {
        "id": 6,
        "company": "삼성전자 SAIT",
        "title": "AI 기반 물리 시뮬레이션 엔지니어",
        "required_skills": ["Python", "고전역학 지식", "Machine Learning"],
        "preferred_skills": ["Pandas", "물리정보 신경망(PINN) 경험"],
        "description": "복잡한 물리 현상을 AI로 빠르게 시뮬레이션하는 데이터 기반 모델을 개발합니다. 기존 물리 엔진의 계산 병목을 딥러닝을 활용해 해결하는 연구를 진행합니다.",
        "deadline": "2026-08-31"
    },

    {
    "id": 7,
    "company": "LG AI연구원",
    "title": "AI Research Engineer",
    "required_skills": ["Python", "PyTorch", "Machine Learning"],
    "preferred_skills": ["Deep Learning", "Docker"],
    "description": "생성형 AI 및 머신러닝 모델을 연구·개발합니다. 데이터 분석과 모델 성능 개선을 통해 AI 서비스 품질 향상에 기여합니다.",
    "deadline": "2026-08-31"
    },

    {
    "id": 8,
    "company": "SK텔레콤",
    "title": "Quantum Computing Research Engineer",
    "required_skills": ["Python", "Linear Algebra", "Quantum Computing"],
    "preferred_skills": ["Qiskit", "Machine Learning"],
    "description": "양자 알고리즘 연구 및 시뮬레이션 환경을 개발합니다. 양자컴퓨팅 기술을 활용한 문제 해결 방법을 검증하고 분석합니다.",
    "deadline": "2026-08-31"
    },

    {
    "id": 9,
    "company": "네이버클라우드",
    "title": "AI Platform Engineer",
    "required_skills": ["Python", "SQL", "Docker"],
    "preferred_skills": ["Kubernetes", "FastAPI"],
    "description": "AI 서비스 운영을 위한 플랫폼을 구축하고 관리합니다. 데이터 파이프라인과 모델 배포 환경을 최적화하는 업무를 수행합니다.",
    "deadline": "2026-08-31"
    },

]



@router.get("/jobs", tags=["Jobs"])
def get_jobs():
    """
    취업 공고 목록을 반환하는 엔드포인트.
    현재는 목업 데이터를 반환하며, 3일차에 실제 데이터로 교체한다.
    """

    return {
        "count": len(MOCK_JOBS),
        "jobs": MOCK_JOBS
    }



@router.get("/jobs/{job_id}", tags=["Jobs"])
def get_job_by_id(job_id: int):
    """
    특정 공고의 상세 정보를 반환한다.
    """

    for job in MOCK_JOBS:
        if job["id"] == job_id:
            return job

    # 찾지 못한 경우
    from fastapi import HTTPException
    raise HTTPException(status_code=404, detail=f"공고 ID {job_id}를 찾을 수 없습니다.")


