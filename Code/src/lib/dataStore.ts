import path from "path";
import fs from "fs";

export type DataRecord = {
  id: string;
  [key: string]: unknown;
};

const dataFile = path.join(process.cwd(), "data", "records.json");

export function readRecords(): DataRecord[] {
  if (!fs.existsSync(dataFile)) return [];
  const raw = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(raw) as DataRecord[];
}

export function writeRecords(records: DataRecord[]): void {
  fs.writeFileSync(dataFile, JSON.stringify(records, null, 2), "utf-8");
}
