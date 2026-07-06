function ResultCard({
  answer,
  matchedSkills = [],
  missingSkills = [],
  recommendedProjects = [],
  confidence,
}) {
  const renderList = (items, emptyText) => {
    if (!items || items.length === 0) {
      return <p className="text-sm text-slate-500">{emptyText}</p>;
    }

    return (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-blue-600">AI 분석 결과</p>
          <h2 className="text-xl font-semibold text-slate-800">발표용 분석 요약</h2>
        </div>
        {confidence && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            신뢰도 {confidence}
          </span>
        )}
      </div>

      <div className="space-y-4">
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-slate-700">핵심 요약</h3>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
            {answer || "아직 분석 결과가 없습니다."}
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-blue-700">매칭된 역량</h3>
            {renderList(matchedSkills, "아직 매칭된 역량이 없습니다.")}
          </section>

          <section className="rounded-xl border border-red-200 bg-red-50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-red-700">보완이 필요한 역량</h3>
            {renderList(missingSkills, "추가로 보완할 역량이 없습니다.")}
          </section>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-slate-700">추천 프로젝트/포트폴리오 방향</h3>
          {renderList(recommendedProjects, "아직 추천 프로젝트 정보가 없습니다.")}
        </section>
      </div>
    </div>
  );
}

export default ResultCard;

