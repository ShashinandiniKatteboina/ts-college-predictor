const Cutoff = require("../models/Cutoff");

const predictCollege = async (req, res) => {
  try {
    const { rank, category, gender, branch } = req.body;

    const columnName = `${category} ${gender}`;

    const colleges = await Cutoff.find({
      "Branch Code": branch,
      Phase: 3
    });

    const results = [];

    colleges.forEach((college) => {
      const cutoff = college[columnName];

      if (!cutoff || isNaN(cutoff)) return;

      let chance = "";

      if (rank <= cutoff * 0.8) {
        chance = "Very High";
      } else if (rank <= cutoff) {
        chance = "High";
      } else if (rank <= cutoff + 2000) {
        chance = "Possible";
      } else {
        return;
      }

      results.push({
        collegeCode: college["Inst Code"],
        collegeName: college["Institute Name"],
        branchCode: college["Branch Code"],
        branchName: college["Branch Name"],
        cutoff,
        chance
      });
    });

    results.sort((a, b) => a.cutoff - b.cutoff);

    res.json({
      success: true,
      total: results.length,
      results
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  predictCollege
};