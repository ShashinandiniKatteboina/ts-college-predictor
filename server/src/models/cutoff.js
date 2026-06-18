const mongoose = require("mongoose");

const cutoffSchema = new mongoose.Schema(
  {},
  {
    strict: false
  }
);

module.exports = mongoose.model("Cutoff", cutoffSchema);