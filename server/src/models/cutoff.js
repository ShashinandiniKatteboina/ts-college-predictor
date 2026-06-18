const mongoose = require("mongoose");

const cutoffSchema = new mongoose.Schema(
  {
    collegeCode: {
      type: String,
      required: true,
    },

    collegeName: {
      type: String,
      required: true,
    },

    district: String,

    branchCode: {
      type: String,
      required: true,
    },

    branchName: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    phase: {
      type: Number,
      required: true,
    },

    cutoffs: {
      type: Object,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cutoff", cutoffSchema);