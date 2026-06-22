import { useState } from "react";

function PredictorForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    rank: "",
    category: "OC",
    gender: "BOYS",
    branch: "ALL",
    phase: "3"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="glass-panel w-full max-w-4xl mx-auto rounded-3xl p-6 md:p-8 space-y-6 mb-12"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Rank Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="rank" className="text-sm font-semibold text-slate-300">
            TS EAPCET Rank
          </label>
          <input
            id="rank"
            type="number"
            name="rank"
            placeholder="e.g. 25000"
            value={formData.rank}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
          />
        </div>

        {/* Category Select */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="category" className="text-sm font-semibold text-slate-300">
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 appearance-none"
            >
              <option value="OC" className="bg-slate-950">OC (Open Category)</option>
              <option value="BC_A" className="bg-slate-950">BC_A (Backward Class A)</option>
              <option value="BC_B" className="bg-slate-950">BC_B (Backward Class B)</option>
              <option value="BC_C" className="bg-slate-950">BC_C (Backward Class C)</option>
              <option value="BC_D" className="bg-slate-950">BC_D (Backward Class D)</option>
              <option value="BC_E" className="bg-slate-950">BC_E (Backward Class E)</option>
              <option value="SC_I" className="bg-slate-950">SC_I (Scheduled Caste Sub-type I)</option>
              <option value="SC_II" className="bg-slate-950">SC_II (Scheduled Caste Sub-type II)</option>
              <option value="SC_III" className="bg-slate-950">SC_III (Scheduled Caste Sub-type III)</option>
              <option value="ST" className="bg-slate-950">ST (Scheduled Tribe)</option>
              <option value="EWS" className="bg-slate-950">EWS (Economically Weaker Section)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Gender Select */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="gender" className="text-sm font-semibold text-slate-300">
            Gender
          </label>
          <div className="relative">
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 appearance-none"
            >
              <option value="BOYS" className="bg-slate-950">Boys / General</option>
              <option value="GIRLS" className="bg-slate-950">Girls</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Branch Select */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="branch" className="text-sm font-semibold text-slate-300">
            Target Branch
          </label>
          <div className="relative">
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 appearance-none"
            >
              <option value="ALL" className="bg-slate-950">All Branches</option>
              <option value="CSE" className="bg-slate-950">CSE (Computer Science & Eng.)</option>
              <option value="CSM" className="bg-slate-950">CSM (CSE - AI & ML)</option>
              <option value="CSD" className="bg-slate-950">CSD (CSE - Data Science)</option>
              <option value="ECE" className="bg-slate-950">ECE (Electronics & Comm. Eng.)</option>
              <option value="EEE" className="bg-slate-950">EEE (Electrical & Electronics Eng.)</option>
              <option value="MEC" className="bg-slate-950">MECH (Mechanical Eng.)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Phase Select */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phase" className="text-sm font-semibold text-slate-300">
            Allotment Phase
          </label>
          <div className="relative">
            <select
              id="phase"
              name="phase"
              value={formData.phase}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 appearance-none"
            >
              <option value="1" className="bg-slate-950">Phase 1</option>
              <option value="2" className="bg-slate-950">Phase 2</option>
              <option value="3" className="bg-slate-950">Phase 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col justify-end">
          <button 
            type="submit"
            className="glow-btn w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold shadow-lg shadow-indigo-500/10 cursor-pointer flex items-center justify-center space-x-2 transition-transform active:scale-[0.98]"
          >
            <span>Predict Colleges</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </form>
  );
}

export default PredictorForm;