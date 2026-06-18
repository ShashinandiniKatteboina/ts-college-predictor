require("dotenv").config();

const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Cutoff = require("../models/Cutoff");

async function importData() {
  try {
    await connectDB();

    const results = [];

    fs.createReadStream("./dataset/csv/phase3_2025.csv")
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", async () => {

        await Cutoff.insertMany(results);

        console.log(
          `${results.length} records inserted`
        );

        process.exit();
      });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importData();