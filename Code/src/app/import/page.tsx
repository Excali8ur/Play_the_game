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
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Import</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <p className="text-sm text-gray-500 mb-4">
          Upload an <strong>.xlsx</strong> or <strong>.json</strong> file.
          The first row of Excel files is treated as the header. JSON files must
          be an array of objects.
        </p>
        <label className="cursor-pointer inline-block bg-indigo-600 text-white text-sm px-4 py-2 rounded hover:bg-indigo-700 transition">
          Choose file
          <input
            type="file"
            accept=".xlsx,.json"
            className="hidden"
            onChange={handleFile}
          />
        </label>

        {status && (
          <p className="mt-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
            {status}
          </p>
        )}
        {error && (
          <p className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
