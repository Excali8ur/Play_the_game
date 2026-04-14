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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <Image 
          src="/MeepleWood_Banner.png" 
          alt="Meeplewood Banner" 
          width={600} 
          height={180}
          className="mx-auto mb-6" 
        />
        <h1 className="text-4xl font-bold mb-3">Meeplewood</h1>
        <p className="text-primary opacity-80">
          Import, manage, explore, and export your board game data.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiles.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="card bg-base-200 hover:bg-base-300 transition-colors shadow-xl hover:shadow-2xl"
          >
            <div className="card-body">
              <h2 className="card-title text-primary">{title}</h2>
              <p className="opacity-70">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
