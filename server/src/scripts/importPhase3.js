require("dotenv").config();
const XLSX = require("xlsx");
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Cutoff = require("../models/Cutoff");

async function importPhase3() {
  try {
    await connectDB();

    const workbook = XLSX.readFile(
      "./dataset/excel/phase3.xlsx"
    );

    const sheet =
      workbook.Sheets[workbook.SheetNames[0]];

    const data = XLSX.utils.sheet_to_json(sheet, {
      range: 1,
    });

    const records = data.map((row) => ({
      ...row,
      Year: 2025,
      Phase: 3,
    }));

    console.log("Rows:", records.length);

    await Cutoff.insertMany(records);

    console.log("Phase 3 Imported Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importPhase3();