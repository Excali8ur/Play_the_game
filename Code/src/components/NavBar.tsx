"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/data", label: "Data" },
  { href: "/import", label: "Import" },
  { href: "/export", label: "Export" },
  { href: "/visualise", label: "Visualise" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 flex items-center gap-6 h-20">
        <Image src="/MeepleDragon_Leafy.png" alt="Meeplewood Logo" width={50} height={50} className="w-20 h-20" />
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
              pathname === href ? "text-indigo-600" : "text-gray-600"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
