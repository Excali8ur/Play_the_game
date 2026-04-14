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
    <nav className="navbar bg-base-200 shadow-xl sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl gap-2 hover:bg-base-300">
          <Image 
            src="/MeepleDragon_Leafy.png" 
            alt="Meeplewood Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10" 
          />
          <span className="font-bold hidden sm:inline">Meeplewood</span>
        </Link>
      </div>
      
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 gap-1 flex flex-row items-center">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`
                  transition-all duration-200
                  ${pathname === href 
                    ? "bg-primary text-primary-content font-semibold shadow-lg" 
                    : "hover:bg-base-300 hover:shadow-md"
                  }
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
