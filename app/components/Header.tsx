"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {Nunito} from "../fonts";

import Image from "next/image";
import Lummina2 from "@/public/img/Lummina2.png";

const navItems = [
  { name: "About", href: "/about" },
  { name: "International Services", href: "/international" },
  { name: "NRI Services", href: "/nri" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${Nunito.className} fixed top-0 left-0 w-full bg-[#F7e7ce] shadow-sm z-50`}  >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="leading-tight">
          <Link href="/">
          <Image src={Lummina2} alt="Lummina Logo" width={100} height={50} className="h-13 object-contain"/>
          </Link>
          {/* <p className="text-xs font-semibold tracking-widest text-gray-600">
            ATTORNEYS AT LAW
          </p> */}
        </div>

        {/* Desktop Navigation */}
       <nav className="hidden items-center gap-8 md:flex text-xs text-[#5F021F] font-semibold">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0b2545] after:transition-all after:duration-500 hover:after:w-full"
    >
      {item.name}
    </Link>
  ))}
</nav>

        {/* Desktop CTA */}
        <button className="hidden rounded-full bg-[#5F021F] px-9 py-3 text-[.799rem] font-semibold text-white transition hover:bg-[#081c33] md:block">
          Request Consultation
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Horizontal Menu */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-md md:hidden">
          <div className="flex flex-col ml-[1rem] justify-between gap-6 px-6 py-4 overflow-x-auto">
            {/* Brand */}
            <span className="whitespace-nowrap text-sm font-bold text-[#0b2545]">
              NokaTrust
            </span>

            {/* Links */}
            <Link href="/" className="whitespace-nowrap font-semibold">
              About
            </Link>
            <Link href="/practice" className="whitespace-nowrap font-semibold">
              Practice Areas
            </Link>
            <Link href="/nri" className="whitespace-nowrap font-semibold">
              NRI Services
            </Link>
            <Link href="/team" className="whitespace-nowrap font-semibold">
              Our Team
            </Link>
            <Link href="/contact" className="whitespace-nowrap font-semibold">
              Contact
            </Link>

            {/* CTA */}
            <button className="whitespace-nowrap rounded-full bg-[#5F021F] px-5 py-2 text-sm font-semibold text-white">
              Consult
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
