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
    <div>
      <div>
        <Link href="/">
          <Image 
            src="/MeepleDragon_Leafy.png" 
            alt="Meeplewood Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10" 
          />
          <span>Meeplewood</span>
        </Link>
      </div>
      
      <div>
        <ul>
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`btn btn-primary ${pathname === href ? "active" : ""}`}
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
