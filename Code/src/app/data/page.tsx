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

  const renderContent = () => {
    if (loading) {
      return <div className="flex justify-center py-8"><span className="loading loading-spinner loading-lg text-primary"></span></div>;
    }
    if (records.length === 0) {
      return (
        <div className="alert alert-info">
          <span>No records. Import data via the <a href="/import" className="link link-primary">Import</a> page, or add a row below.</span>
        </div>
      );
    }
    return (
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="hover">
                {headers.map((h) => (
                  <td key={h}>{String(r[h] ?? "")}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Data</h1>
        {records.length > 0 && (
          <button className="btn btn-error btn-sm" onClick={handleClear}>Clear all</button>
        )}
      </div>

      {renderContent()}

      {/* Add row */}
      <div className="card bg-base-200 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">Add a row</h2>
          {columns.length === 0 ? (
            <p className="opacity-70">
              Import data first to define columns, then add rows here.
            </p>
          ) : (
            <div className="flex flex-wrap gap-4">
              {columns.map((col) => (
                <div key={col} className="form-control w-full max-w-xs">
                  <label className="label"><span className="label-text">{col}</span></label>
                  <input
                    className="input input-bordered w-full"
                    value={newRow[col] ?? ""}
                    onChange={(e) =>
                      setNewRow((prev) => ({ ...prev, [col]: e.target.value }))
                    }
                  />
                </div>
              ))}
              <div className="w-full">
                <button className="btn btn-primary mt-4" onClick={handleAdd}>Add</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
