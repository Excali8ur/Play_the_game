"use client";

import { useEffect, useState } from "react";
import BarChart from "@/components/BarChart";
import type { DataRecord } from "@/lib/dataStore";

export default function VisualisePage() {
  const [records, setRecords] = useState<DataRecord[]>([]);
  const [numericKeys, setNumericKeys] = useState<string[]>([]);
  const [labelKey, setLabelKey] = useState<string>("");
  const [valueKey, setValueKey] = useState<string>("");

  useEffect(() => {
    fetch("/api/data")
      .then((r) => r.json())
      .then((data: DataRecord[]) => {
        setRecords(data);
        if (data.length === 0) return;
        const keys = Object.keys(data[0]).filter((k) => k !== "id");
        const nums = keys.filter((k) => typeof data[0][k] === "number");
        setNumericKeys(nums);
        setLabelKey(keys[0] ?? "");
        setValueKey(nums[0] ?? "");
      });
  }, []);

  const chartData = records
    .map((r) => ({
      label: String(r[labelKey] ?? ""),
      value: Number(r[valueKey] ?? 0),
    }))
    .filter((d) => d.label);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Visualise</h1>

      {records.length === 0 ? (
        <p className="text-gray-500">
          No data loaded. Import data first via the{" "}
          <a href="/import" className="text-indigo-600 underline">
            Import
          </a>{" "}
          page.
        </p>
      ) : (
        <>
          <div className="flex gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Label column
              </label>
              <select
                className="border border-gray-300 rounded px-3 py-1.5 text-sm"
                value={labelKey}
                onChange={(e) => setLabelKey(e.target.value)}
              >
                {Object.keys(records[0])
                  .filter((k) => k !== "id")
                  .map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Value column (numeric)
              </label>
              <select
                className="border border-gray-300 rounded px-3 py-1.5 text-sm"
                value={valueKey}
                onChange={(e) => setValueKey(e.target.value)}
              >
                {numericKeys.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <BarChart data={chartData} />
          </div>
        </>
      )}
    </div>
  );
}
