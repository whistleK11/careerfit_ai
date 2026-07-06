function SourceCard({ sources }) {
  if (!sources || sources.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
        참고한 공고 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-sm font-semibold text-blue-600">근거 데이터</p>
        <h2 className="text-xl font-semibold text-slate-800">참고한 공고 출처</h2>
        <p className="mt-1 text-sm text-slate-500">
          AI 분석이 어떤 공고나 공모전 정보를 기준으로 만들어졌는지 확인할 수 있습니다.
        </p>
      </div>

      <div className="space-y-3">
        {sources.map((source, index) => (
          <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {source.title || source.company || "출처 정보"}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {source.company ? `${source.company}` : "출처"}
                  {source.type ? ` · ${source.type}` : ""}
                </p>
              </div>
              {source.type && (
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  {source.type}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-slate-600">
              {source.matched_reason || "AI 분석에 활용된 근거 설명입니다."}
            </p>

            {source.required_skills && (
              <p className="mt-2 text-xs text-slate-500">
                필수 스킬: {source.required_skills}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceCard;

