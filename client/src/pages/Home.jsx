import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
      {/* Hero Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
        <span>Updated for 2025/2026 Cutoffs</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight mb-8">
        Find Your Dream College with{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          TS EAPCET Predictor
        </span>
      </h1>

      {/* Hero Subtitle */}
      <p className="text-lg md:text-xl text-slate-400 text-center max-w-2xl leading-relaxed mb-12">
        Enter your rank, category, gender, and branch to instantly discover colleges you can get admission to, sorted by probability based on actual allotment data.
      </p>

      {/* CTA Button */}
      <Link
        to="/predictor"
        className="glow-btn px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mb-20"
      >
        Start Predicting Now
      </Link>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
        <div className="glass-card p-6 rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-lg mb-4">
            01
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Multi-Phase Data</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Predict using official cutoffs across Phase 1, Phase 2, or Phase 3 allotment rounds.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg mb-4">
            02
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Category & Reservation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Includes precise subcategory calculations for OC, BC-A/B/C/D/E, ST, SC (I, II, III), and EWS.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-lg mb-4">
            03
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Chance Estimation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Uses smart historical boundary math to rate your chances of admission from "Possible" to "Very High".
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;