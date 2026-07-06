import { useState } from "react";

function InputForm({ onSubmit, isLoading }) {
  const [major, setMajor] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [jobType, setJobType] = useState("");

  function handleSubmit() {
    const skills = skillsInput.split(",").map(s => s.trim()).filter(Boolean);
    onSubmit({ major, skills, jobType });
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <p className="text-sm font-semibold text-blue-600">입력 단계</p>
        <h2 className="text-xl font-semibold text-slate-800">내 정보를 알려주세요</h2>
        <p className="mt-1 text-sm text-slate-500">
          전공, 보유 스킬, 관심 직무를 입력하면 AI가 포트폴리오 방향을 정리해줍니다.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600">전공</label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="예: 통계학과"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600">보유 스킬 (쉼표 구분)</label>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            placeholder="예: Python, SQL, R"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600">관심 직무</label>
          <input
            type="text"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            placeholder="예: 데이터 분석"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading || !major || !skillsInput || !jobType}
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isLoading ? "분석 중..." : "역량 분석 요청"}
        </button>
      </div>
    </div>
  );
}

export default InputForm;

