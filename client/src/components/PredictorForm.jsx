import { useState } from "react";

function PredictorForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    rank: "",
    category: "BC_B",
    gender: "BOYS",
    branch: "CSE",
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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="rank"
        placeholder="Enter Rank"
        value={formData.rank}
        onChange={handleChange}
        required
      />

      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="OC">OC</option>
        <option value="BC_A">BC_A</option>
        <option value="BC_B">BC_B</option>
        <option value="BC_C">BC_C</option>
        <option value="BC_D">BC_D</option>
        <option value="BC_E">BC_E</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
      </select>

      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="BOYS">BOYS</option>
        <option value="GIRLS">GIRLS</option>
      </select>

      <select name="branch" value={formData.branch} onChange={handleChange}>
        <option value="CSE">CSE</option>
        <option value="CSM">CSM</option>
        <option value="CSD">CSD</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="MECH">MECH</option>
      </select>

      <button type="submit">Predict Colleges</button>
    </form>
  );
}

export default PredictorForm;