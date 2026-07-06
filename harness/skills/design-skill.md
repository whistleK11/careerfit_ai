# CareerFit AI Design System

## 프로젝트 개요
- 서비스명: CareerFit AI
- 서비스 설명: 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치
- 대상 사용자: 대학생
- 디자인 철학: 단순히 예쁜 UI가 아니라, AI가 어떤 데이터를 근거로 어떤 분석을 했는지 명확히 설명할 수 있는 UI
- 핵심 요구사항: 사용자의 입력값, AI 분석 결과, 매칭된 근거 데이터, 신뢰도 산출 이유가 화면에 모두 드러나야 한다.

## 디자인 원칙
1. 명확함 우선: 정보가 한눈에 이해되도록 구조를 단순하게 만든다.
2. 신뢰감: AI 분석 결과와 근거 출처가 분명히 보이도록 한다.
3. 전문성 + 친근함: 딱딱한 서비스 느낌이 아니라, 대학생도 편하게 사용할 수 있는 톤을 유지한다.
4. 일관성: 모든 카드와 버튼은 같은 레이아웃 규칙을 따른다.

## 1. Color System (Tailwind CSS)

| 역할 | 용도 | Tailwind 클래스 예시 | 색상 |
| --- | --- | --- | --- |
| primary | 주요 버튼, 핵심 강조 | `bg-blue-600`, `hover:bg-blue-700`, `text-white` | `#2563EB` |
| secondary | 보조 강조, 태그, 포인트 | `bg-sky-100`, `text-sky-700` | `#0284C7` |
| background | 페이지 배경 | `bg-slate-50` | `#F8FAFC` |
| surface | 카드/폼 배경 | `bg-white` | `#FFFFFF` |
| text | 제목, 본문, 설명 | `text-slate-900`, `text-slate-700`, `text-slate-600` | `#0F172A` |
| border | 카드/입력창 테두리 | `border-slate-200` | `#E2E8F0` |
| error | 오류/경고 상태 | `bg-red-50`, `text-red-700`, `border-red-200` | `#EF4444` |

### 색상 사용 규칙
- 배경은 밝고 깔끔하게 유지한다.
- 핵심 액션은 primary 색으로 강조한다.
- secondary는 보조 정보나 태그에만 사용한다.
- error는 명확하게 보여주되, 과도하게 쓰지 않는다.

## 2. Typography System

| 용도 | Tailwind 클래스 | 적용 대상 |
| --- | --- | --- |
| Hero Title | `text-3xl font-bold tracking-tight text-slate-900` | 메인 헤더 타이틀 |
| Section Title | `text-xl font-semibold text-slate-800` | 카드 내부 주요 제목 |
| Body | `text-base text-slate-700 leading-relaxed` | AI 분석 결과 본문 |
| Caption | `text-sm text-slate-500` | 설명, 부가 정보, 출처 설명 |
| Label | `text-sm font-medium text-slate-600` | 입력 필드 라벨 |
| Badge | `text-xs font-semibold px-2.5 py-0.5 rounded-full` | 상태값, 스킬 태그 |

### 타이포그래피 규칙
- 제목은 짧고 명확하게 쓴다.
- 본문은 읽기 쉽게 충분한 줄간격을 확보한다.
- 과도한 굵기나 여러 폰트 크기를 섞지 않는다.

## 3. Layout & Component Architecture

### Layout System
- 컨테이너: `max-w-6xl mx-auto px-4 py-8 md:px-6`
- 데스크톱: `md:grid md:grid-cols-12 gap-6`
- 모바일: `flex flex-col space-y-6`
- 카드 기본 스타일: `bg-white rounded-2xl border border-slate-200 shadow-sm`

### Component Roles
- App: 최상위 레이아웃 컨테이너이며 전체 상태를 관리한다.
- Header: 서비스명과 한 줄 설명을 표시한다.
- InputForm: 전공, 보유 스킬, 관심 직무를 입력받는다.
- ResultCard: AI 분석 결과를 보여준다.
- SourceCard: 분석 근거 출처를 보여준다.

### 컴포넌트별 UI 가이드
- App: 상단 헤더, 입력 폼, 결과 영역, 출처 영역이 순서대로 보이도록 구성한다.
- InputForm: 입력 필드와 분석 버튼이 한눈에 보이도록 카드 형태로 배치한다.
- ResultCard: 답변, 매칭 스킬, 부족 스킬, 추천 프로젝트, confidence를 구분된 섹션으로 보여준다.
- SourceCard: 각 출처는 `title`, `type`, `matched_reason`를 명확하게 표시한다.

## 4. State Rules

UI는 아래 5가지 상태에 따라 다르게 렌더링해야 한다.

- Empty: 폼 초기 상태. 결과 영역에는 입력 안내 메시지를 표시한다.
- Loading: 분석 중. 폼은 비활성화하고 결과 영역에는 스켈레톤 또는 로딩 상태를 보여준다.
- Success: 분석 완료. ResultCard와 SourceCard를 정상 출력한다.
- Error: API 실패. 빨간색 에러 배너를 출력하고 재시도 버튼을 제공한다.
- No Sources: 분석은 성공했지만 근거 데이터가 없으면, 출처 영역을 숨기지 말고 안내 메시지를 카드 형식으로 표시한다.

## 5. Accessibility & Motion

### Accessibility
- 모든 버튼과 입력창은 `hover`, `focus`, `disabled` 상태를 명확하게 보여준다.
- 색상만으로 상태를 구분하지 않고, 텍스트나 라벨을 함께 사용한다.
- 입력창에는 반드시 명시적인 `label` 요소를 포함한다.

### Motion Rules
- 허용: `opacity` 전환, `shadow` 변화, 짧은 `fade-in` 효과
- 금지: `bounce`, `rotate`, 무한 반복 애니메이션, 과도한 시각 효과

## 6. Strict Rules

다음 규칙은 반드시 지킨다.

1. Source 데이터와 Confidence는 UI에서 숨기거나 생략하지 않는다.
2. 존재하지 않는 가짜 공고나 공모전 데이터를 하드코딩하지 않는다.
3. Input, Result, Source를 하나의 거대한 카드에 몰아넣지 않는다.
4. 컴포넌트마다 다른 border radius나 shadow 규칙을 적용하지 않는다.
5. React 코드에 API Key를 포함하지 않는다.
6. 발표 화면에서도 충분한 여백과 명확한 정보 계층을 유지한다.

## 7. 구현 체크리스트
- 사용자가 입력 화면에서 무엇을 넣어야 하는지 바로 알 수 있는가?
- AI 결과가 핵심 문장, 추천 역량, 출처, 신뢰도 순으로 읽히는가?
- 대학생 사용자도 부담 없이 이해할 수 있는 톤인가?
- 전문성과 친근함이 모두 살아 있는가?

