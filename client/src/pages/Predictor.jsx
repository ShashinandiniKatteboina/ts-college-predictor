import { useState } from "react";
import PredictorForm from "../components/PredictorForm";
import ResultsTable from "../components/ResultsTable";
import api from "../services/api";

function Predictor() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (formData) => {
    try {
      setLoading(true);

      const response = await api.post("/api/predict", formData);

      setResults(response.data.results);
    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        TS EAPCET College Predictor
      </h1>

      <PredictorForm onSubmit={handlePredict} />

      {loading && <p>Loading...</p>}

      <ResultsTable results={results} />
    </div>
  );
}

export default Predictor;