function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          About the Project
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Learn how the TS EAPCET College Predictor works and understand the methodology behind predictions.
        </p>
      </div>

      <div className="glass-panel p-8 rounded-3xl space-y-6">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">How It Works</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            The TS EAPCET Predictor analyzes official historical seat allotment data from previous years. When you enter your rank, category, and gender, the algorithm searches for corresponding cutoffs matching your exact reservation parameters (e.g., OC, BC_A, SC_I, EWS, etc.).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Estimation Categories</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Based on the difference between your rank and the college's cutoff rank, we assign a probability score:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
            <li>
              <strong className="text-emerald-400">Very High Chance</strong>: Your rank is at least 20% lower than the cutoff rank.
            </li>
            <li>
              <strong className="text-indigo-400">High Chance</strong>: Your rank is lower than or equal to the cutoff rank.
            </li>
            <li>
              <strong className="text-amber-400">Possible Chance</strong>: Your rank is up to 2,000 ranks above the cutoff rank (useful for round shifts and vacant seats).
            </li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-white/5">
          <h2 className="text-base font-bold text-slate-200">Official Disclaimer</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            This tool is designed purely for reference and educational purposes. Allotments vary annually based on student preferences, seat availability, paper difficulty, and relative score ranges. Please cross-reference with official TSCHE notification manuals before finalizing your choice entry sheet.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;