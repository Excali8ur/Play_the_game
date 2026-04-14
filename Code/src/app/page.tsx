import Image from "next/image";
import Link from "next/link";

const tiles = [
  {
    href: "/data",
    title: "Data",
    description: "View and manage records in the data table.",
  },
  {
    href: "/import",
    title: "Import",
    description: "Upload an Excel (.xlsx) or JSON file to load data.",
  },
  {
    href: "/export",
    title: "Export",
    description: "Download the current dataset as Excel or JSON.",
  },
  {
    href: "/visualise",
    title: "Visualise",
    description: "Explore interactive D3.js charts of your data.",
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <Image src="/MeepleWood_Banner.png" alt="Meeplewood Banner" width={500} height={150} className="w-3/4 mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Meeplewood</h1>
      <p className="text-gray-500 mb-10">
        Import, manage, explore, and export your data.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tiles.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition"
          >
            <h2 className="text-lg font-semibold text-indigo-600 mb-1">
              {title}
            </h2>
            <p className="text-sm text-gray-500">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
