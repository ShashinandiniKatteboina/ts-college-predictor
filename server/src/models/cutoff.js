const mongoose = require("mongoose");

const cutoffSchema = new mongoose.Schema({
  collegeCode: String,
  collegeName: String,

  place: String,
  district: String,

  coEducation: String,
  collegeType: String,

  branchCode: String,
  branchName: String,

  affiliatedTo: String,

  year: Number,
  phase: Number,

  cutoffs: {
    type: Map,
    of: Number
  }
});

module.exports = mongoose.model(
  "Cutoff",
  cutoffSchema
);