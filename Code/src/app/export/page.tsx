export default function ExportPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Export</h1>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <p className="mb-6">
            Download the current dataset in your preferred format.
          </p>
          <div className="flex flex-col gap-3">
            <a href="/api/export?format=json" download="records.json" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download JSON
            </a>
            <a href="/api/export?format=xlsx" download="records.xlsx" className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Excel (.xlsx)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
