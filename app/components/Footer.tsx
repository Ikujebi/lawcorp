"use client";

import Image from "next/image";
import Link from "next/link";
import call from "@/public/call.svg";
import messages from "@/public/messages.svg";
import location from "@/public/location.svg";
import { SourceCodePro } from "../fonts";

export default function Footer() {
  return (
    <footer className="bg-[#5F021F]/80 text-[#F7E7CE] pt-12 pb-6">
      
      {/* MAIN FOOTER CONTENT */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 
        xl:px-[12%] max-w-7xl mx-auto">

        {/* Brand Section */}
        <article className="space-y-4">
          <h2
            className={`${SourceCodePro.className} text-2xl font-extrabold text-white`}
          >
            Lummina
          </h2>

          <p className="text-sm leading-relaxed text-[#F7E7CE]/90">
           Strategic Legal Counsel. Structured for Growth.
          </p>
        </article>

        {/* Contact Section */}
        <article className="space-y-4">
          <h3 className="text-[#F4C430] font-semibold text-sm tracking-wide uppercase">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm">

            <p className="flex items-start gap-3">
              <Image src={call} alt="Call icon" width={18} height={18} />
              <span>+234 706 046 9068</span>
            </p>

            <p className="flex items-start gap-3">
              <Image src={messages} alt="Email icon" width={18} height={18} />
              <span>
                info@lumminalaw.com
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Image src={location} alt="Location icon" width={18} height={18} />
              <span>
                12 Oluseyi Aweda Street, <br />
                Magodo Phase 1, Lagos, Nigeria
              </span>
            </p>

          </div>
        </article>

        {/* Quick Links */}
        <article className="space-y-4">
          <h3 className="text-[#F4C430] font-semibold text-sm tracking-wide uppercase">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-[#F4C430] transition">
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#F4C430] transition">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-[#F4C430] transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#F4C430] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/client" className="hover:text-[#F4C430] transition">
                Client Portal
              </Link>
            </li>
            <li>
  <Link href="/feedback" className="hover:text-[#F4C430] transition">
     💬Feedback
  </Link>
</li>
          </ul>
        </article>

      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#F4C430]/50 my-4"></div>
<p className="text-xs  text-center mb-2">
  The information on this website is provided for general informational
  purposes only and does not constitute legal advice.
</p>
      {/* Bottom Bar */}
      <section
  className="flex flex-col md:flex-row justify-between items-center
  px-6 xl:px-[12%] max-w-7xl mx-auto text-xs text-[#F7E7CE]/80 space-y-2 md:space-y-0"
>

  <div>
    © {new Date().getFullYear()} Lummina. All rights reserved.
  </div>

  {/* Legal Links */}
  <div className="flex items-center gap-3">
    <Link href="/privacy-policy" className="hover:text-[#F4C430] transition">
      Privacy Policy
    </Link>

    <span className="opacity-50">|</span>

    <Link href="/terms-of-use" className="hover:text-[#F4C430] transition">
      Terms of Use
    </Link>
  </div>

  <div className="tracking-wide">
    Integrity • Excellence • Innovation
  </div>

</section>
    </footer>
  );
}