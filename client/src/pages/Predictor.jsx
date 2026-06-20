import { useState } from "react";
import PredictorForm from "../components/PredictorForm";
import ResultsTable from "../components/ResultsTable";
import api from "../services/api";

function Predictor() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handlePredict = async (formData) => {
    try {
      setLoading(true);
      setHasSearched(true);
      const response = await api.post("/api/predict", formData);
      setResults(response.data.results);
    } catch (error) {
      console.error("ERROR:", error);
      alert("Prediction failed. Please ensure the server is running and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          TS EAPCET College Predictor
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Fill in your details below to predict cutoff ranks and estimate admission probabilities for various colleges.
        </p>
      </div>

      <PredictorForm onSubmit={handlePredict} />

      {loading && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
          <p className="text-slate-400 text-sm font-medium animate-pulse">
            Analyzing cutoff ranks...
          </p>
        </div>
      )}

      {!loading && hasSearched && results.length === 0 && (
        <div className="glass-panel max-w-lg mx-auto p-8 rounded-2xl text-center space-y-4">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/25 rounded-full flex items-center justify-center mx-auto text-amber-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-white">No Colleges Found</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We couldn't find any colleges matching your rank, category, and target branch for this phase. 
            Try selecting a different phase or entering a higher rank to see matching cutoffs.
          </p>
        </div>
      )}

      {!loading && <ResultsTable results={results} />}
    </div>
  );
}

export default Predictor;