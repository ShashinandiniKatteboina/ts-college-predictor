const Cutoff = require("../models/cutoff");

const predictCollege = async (req, res) => {
  try {
    const { rank, category, gender, branch, phase } = req.body;

    const rankNum = parseInt(rank, 10);
    const phaseNum = parseInt(phase, 10) || 3;

    if (isNaN(rankNum)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid numeric rank"
      });
    }

    const columnName = `${category} ${gender}`;

    const query = {
      Phase: phaseNum
    };

    if (branch && branch !== "ALL") {
      query["Branch Code"] = branch;
    }

    const colleges = await Cutoff.find(query).lean();


    const results = [];

    colleges.forEach((college) => {
      const cutoff = college[columnName];

      if (!cutoff || isNaN(cutoff)) return;

      let chance = "";

      if (rankNum <= cutoff * 0.8) {
        chance = "Very High";
      } else if (rankNum <= cutoff) {
        chance = "High";
      } else if (rankNum <= cutoff + 2000) {
        chance = "Possible";
      } else {
        return;
      }

      results.push({
        collegeCode: college["Inst Code"],
        collegeName: college["Institute Name"],
        branchCode: college["Branch Code"],
        branchName: college["Branch Name"],
        place: college["Place"],
        district: college["Dist Code"],
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