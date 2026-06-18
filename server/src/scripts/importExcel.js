const XLSX = require("xlsx");

const workbook = XLSX.readFile(
  "./dataset/excel/phase3.xlsx"
);

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const data = XLSX.utils.sheet_to_json(sheet, {
  range: 1
});

console.log("Headers:");
console.log(Object.keys(data[0]));

console.log("First Actual Row:");
console.log(data[0]);