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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Visualise</h1>

      {records.length === 0 ? (
        <div className="alert alert-info shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>
            No data loaded. Import data first via the{" "}
            <a href="/import" className="link link-primary font-semibold">
              Import
            </a>{" "}
            page.
          </span>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Label column</span>
              </label>
              <select
                className="select select-bordered w-full"
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
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Value column (numeric)</span>
              </label>
              <select
                className="select select-bordered w-full"
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
       
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <BarChart data={chartData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
