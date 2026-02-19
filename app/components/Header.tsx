"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Gyahegi } from "../fonts";
import Image from "next/image";
import Lummina2 from "@/public/img/Lummina2.png";

const navItems = [
  { name: "About", href: "/about" },
  // { name: "International Services", href: "/international" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team" },
  { name: "Newsletter", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        ${Gyahegi.className}
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-[#F7e7ce]/90"}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="leading-tight">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src={Lummina2}
              alt="Lummina Logo"
              width={100}
              height={50}
              className="h-13 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`
            hidden items-center gap-8 md:flex text-sm font-semibold transition-colors duration-300
            ${scrolled ? "text-[#5F021F]" : "text-[#5F021F]"}
          `}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#5F021F] after:transition-all after:duration-500 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden rounded-full bg-[#5F021F] px-9 py-3 text-[.799rem] font-semibold text-white transition hover:bg-[#7A1A36] md:block">
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#5F021F]"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
{/* Mobile Menu */}
{open && (
  <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-md md:hidden">
    <div className="flex flex-col ml-[1rem] justify-between gap-6 px-6 py-4 overflow-x-auto text-[#FFA500]">
      

      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="whitespace-nowrap font-semibold text-[#0b2545]"
          onClick={() => setOpen(false)} // ✅ close menu on click
        >
          {item.name}
        </Link>
      ))}

      <button
        className="whitespace-nowrap rounded-full bg-[#5F021F] px-5 py-2 text-sm font-semibold text-white"
        onClick={() => setOpen(false)} // optional if this navigates somewhere
      >
        Consult
      </button>
    </div>
  </div>
)}

    </header>
  );
}
