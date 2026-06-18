require("dotenv").config();

const XLSX = require("xlsx");
const connectDB = require("../config/db");
const Cutoff = require("../models/Cutoff");

async function importFile(filePath, phase) {
  const workbook = XLSX.readFile(filePath);

  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const data = XLSX.utils.sheet_to_json(sheet, {
    range: 1,
  });

  const records = data.map((row) => ({
    ...row,
    Year: 2025,
    Phase: phase,
  }));

  await Cutoff.insertMany(records);

  console.log(
    `Phase ${phase}: ${records.length} records imported`
  );
}

async function importAll() {
  try {
    await connectDB();

    // Optional: clear old data
    await Cutoff.deleteMany({});
    console.log("Old data removed");

    await importFile(
      "./dataset/excel/phase1.xlsx",
      1
    );

    await importFile(
      "./dataset/excel/phase2.xlsx",
      2
    );

    await importFile(
      "./dataset/excel/phase3.xlsx",
      3
    );

    console.log("All phases imported successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importAll();