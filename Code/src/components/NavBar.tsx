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
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl gap-2">
          <Image 
            src="/MeepleDragon_Leafy.png" 
            alt="Meeplewood Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10" 
          />
          <span className="font-bold">Meeplewood</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
