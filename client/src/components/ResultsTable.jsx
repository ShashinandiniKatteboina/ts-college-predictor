function ResultsTable({ results }) {
  if (!results.length) return null;

  const getChanceBadge = (chance) => {
    switch (chance) {
      case "Very High":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse">
            Very High
          </span>
        );
      case "High":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            High
          </span>
        );
      case "Possible":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Possible
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-500/10 text-slate-400 border border-slate-500/20">
            {chance}
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <span>Prediction Results</span>
          <span className="text-sm font-normal text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md">
            {results.length} Eligible Colleges
          </span>
        </h2>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02] text-sm font-semibold uppercase tracking-wider text-slate-400">
              <th className="py-4 px-6">College Code</th>
              <th className="py-4 px-6">College Name</th>
              <th className="py-4 px-6">Branch</th>
              <th className="py-4 px-6 text-right">Cutoff Rank</th>
              <th className="py-4 px-6 text-center">Admission Chance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-base">
            {results.map((college, index) => (
              <tr key={index} className="hover:bg-white/[0.01] transition-colors group">
                <td className="py-4 px-6 font-mono font-bold text-indigo-400">
                  {college.collegeCode}
                </td>
                <td className="py-4 px-6 font-medium text-slate-200">
                  <div className="flex flex-col">
                    <span>{college.collegeName}</span>
                    {college.place && (
                      <span className="text-sm text-slate-400 mt-1 flex items-center gap-1 font-normal">
                        <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {college.place}{college.district ? `, ${college.district}` : ''}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-slate-300 font-medium">{college.branchCode}</span>
                    <span className="text-sm text-slate-500">{college.branchName}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right font-mono font-semibold text-slate-300">
                  {college.cutoff.toLocaleString()}
                </td>
                <td className="py-4 px-6 text-center">
                  {getChanceBadge(college.chance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Grid View */}
      <div className="md:hidden grid gap-4">
        {results.map((college, index) => (
          <div key={index} className="glass-card p-5 rounded-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono font-bold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10 text-sm">
                  {college.collegeCode}
                </span>
                <h3 className="text-base font-semibold text-slate-100 mt-2">
                  {college.collegeName}
                </h3>
                {college.place && (
                  <span className="text-sm text-slate-400 mt-1 flex items-center gap-1 font-normal">
                    <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {college.place}{college.district ? `, ${college.district}` : ''}
                  </span>
                )}
              </div>
              <div>
                {getChanceBadge(college.chance)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-sm">
              <div>
                <span className="text-slate-500 block">Branch</span>
                <span className="text-slate-300 font-medium">{college.branchCode} - {college.branchName}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block">Cutoff Rank</span>
                <span className="font-mono font-semibold text-slate-200">{college.cutoff.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsTable;