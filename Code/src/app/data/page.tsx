"use client";

import { useEffect, useState } from "react";
import type { DataRecord } from "@/lib/dataStore";

export default function DataPage() {
  const [records, setRecords] = useState<DataRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [newRow, setNewRow] = useState<Record<string, string>>({});
  const [columns, setColumns] = useState<string[]>([]);

  const load = () => {
    setLoading(true);
    fetch("/api/data")
      .then((r) => r.json())
      .then((data: DataRecord[]) => {
        setRecords(data);
        if (data.length > 0) {
          setColumns(Object.keys(data[0]).filter((k) => k !== "id"));
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async () => {
    await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRow),
    });
    setNewRow({});
    load();
  };

  const handleClear = async () => {
    if (!confirm("Clear all records?")) return;
    await fetch("/api/data", { method: "DELETE" });
    setRecords([]);
    setColumns([]);
  };

  const headers = records.length > 0 ? Object.keys(records[0]).filter((k) => k !== "id") : [];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Data</h1>
        {records.length > 0 && (
          <button
            onClick={handleClear}
            className="text-sm text-red-600 border border-red-300 px-3 py-1.5 rounded hover:bg-red-50 transition"
          >
            Clear all
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-gray-400">Loading…</p>
      ) : records.length === 0 ? (
        <p className="text-gray-500">
          No records. Import data via the{" "}
          <a href="/import" className="text-indigo-600 underline">Import</a> page,
          or add a row below.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((h) => (
                  <th key={h} className="px-4 py-2 text-left font-medium text-gray-600">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  {headers.map((h) => (
                    <td key={h} className="px-4 py-2 text-gray-800">
                      {String(r[h] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add row */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-semibold mb-3">Add a row</h2>
        {columns.length === 0 ? (
          <p className="text-sm text-gray-400">
            Import data first to define columns, then add rows here.
          </p>
        ) : (
          <div className="flex flex-wrap gap-3 mb-3">
            {columns.map((col) => (
              <div key={col} className="flex flex-col gap-1">
                <label className="text-xs text-gray-500">{col}</label>
                <input
                  className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
                  value={newRow[col] ?? ""}
                  onChange={(e) =>
                    setNewRow((prev) => ({ ...prev, [col]: e.target.value }))
                  }
                />
              </div>
            ))}
            <button
              onClick={handleAdd}
              className="self-end bg-indigo-600 text-white text-sm px-4 py-1.5 rounded hover:bg-indigo-700 transition"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
