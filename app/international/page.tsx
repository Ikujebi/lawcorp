"use client";

import Image from "next/image";
import { Roboto, Nunito } from "@/app/fonts";
import internation2 from "@/public/img/international2.jpg";

const InternationalPage = () => {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[88vh] md:h-[88vh]">
        <Image
          src={internation2}
          alt="International Legal Services"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Brand-colored overlay */}
        <div className="absolute inset-0 bg-[#5F021F]/50"></div>
<div className="relative z-10 flex items-center h-full px-10 2xl:px-30 ">
          <div className="max-w-4xl text-white">
            {/* Box-like text */}
            <div className="inline-flex items-center gap-3  bg-white/10 text-gray-200 text-[1.3rem] px-6 py-2 rounded-full mb-6 mt-[9rem] md:mt-[8rem]">
              <span className="h-[2px] w-[5rem] bg-[#F4C430]"></span>
              <span><span className="text-[#FFA500]">International</span> Legal Services</span>
            </div>

           
            <p className={`${Nunito.className}   tracking-wide text-gray-300 sm:text-medium md:text-[1.2rem] lg:text-[1.2rem]`}>Cross-Border Legal Services with Trusted Expertise</p>
            {/* Subheading */}
               <p
              className={`${Nunito.className} mt-4 text-[1.25rem] md:text-[1.5rem]`}
            >
              Comprehensive cross‑border legal solutions tailored to clients with
              interests spanning multiple jurisdictions.
            </p>
            {/* LIne area */}
            <div className="h-[2px] w-[10rem] bg-[#F4C430]"></div>
          </div>
        </div>
       
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5F021F]">
            Global Legal Expertise — Local Insight
          </h2>
          <p className="text-[1.125rem] leading-relaxed text-gray-800">
            International legal services provide clients with cross-border solutions,
            ensuring compliance with local and global regulations while protecting
            their interests wherever they operate.
          </p>

          {/* Service Highlights */}
          <div className="space-y-6">
            <p className="text-lg font-medium text-gray-800">
              Some of our core international legal offerings include:
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-[1rem]">
              <li>Cross‑border commercial and corporate transactions</li>
              <li>Regulatory compliance and international risk advisory</li>
              <li>International trade and investment law</li>
              <li>Cross‑border dispute resolution and arbitration</li>
              <li>Immigration and expatriate legal support</li>
              <li>Intellectual property protection across jurisdictions</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#5F021F] mb-4">
              Why Work With Us
            </h3>
            <p className="text-[1.1rem] text-gray-800 leading-relaxed">
              At Lummina, we combine strategic international insight with local
              legal expertise to deliver trusted solutions that protect your
              global interests. Our approach balances global perspective with
              Nigerian practice knowledge to support compliant and effective outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalPage;
