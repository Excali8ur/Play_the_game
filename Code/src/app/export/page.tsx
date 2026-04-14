export default function ExportPage() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Export</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Download the current dataset in your preferred format.
        </p>
        <div className="flex gap-3">
          <a
            href="/api/export?format=json"
            download="records.json"
            className="bg-indigo-600 text-white text-sm px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Download JSON
          </a>
          <a
            href="/api/export?format=xlsx"
            download="records.xlsx"
            className="bg-white text-indigo-600 border border-indigo-400 text-sm px-4 py-2 rounded hover:bg-indigo-50 transition"
          >
            Download Excel (.xlsx)
          </a>
        </div>
      </div>
    </div>
  );
}
