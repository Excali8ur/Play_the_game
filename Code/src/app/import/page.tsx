"use client";

import { useState } from "react";

export default function ImportPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus(null);
    setError(null);

    if (file.name.endsWith(".json")) {
      const text = await file.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        setError("Invalid JSON file.");
        return;
      }
      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error);
      else setStatus(`Imported ${data.imported} records from JSON.`);
      return;
    }

    if (file.name.endsWith(".xlsx")) {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/import", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) setError(data.error);
      else setStatus(`Imported ${data.imported} records from Excel.`);
      return;
    }

    setError("Unsupported file type. Use .xlsx or .json.");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Import</h1>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <p className="mb-4">
            Upload an <strong>.xlsx</strong> or <strong>.json</strong> file.
            The first row of Excel files is treated as the header. JSON files must
            be an array of objects.
          </p>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Choose file</span>
            </label>
            <input
              type="file"
              accept=".xlsx,.json"
              onChange={handleFile}
              className="file-input file-input-bordered file-input-primary w-full"
            />
          </div>

          {status && (
            <div className="alert alert-success mt-4">
              <span>{status}</span>
            </div>
          )}
          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
