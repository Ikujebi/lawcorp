"use client";

import Image from "next/image";
import { Roboto, Nunito } from "@/app/fonts";
import servicesHero from "@/public/img/service.jpg";
import servicesHero2 from "@/public/img/service2.jpg";
import servicesHero3 from "@/public/img/service3.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "Real Estate Due Diligence",
      description:
        "Title verification, ownership validation, and risk analysis for secure property transactions.",
    },
    {
      title: "Corporate & Commercial Law",
      description:
        "Business formation, contracts, governance, mergers, and strategic advisory tailored to commercial success.",
    },
    {
      title: "Dispute Resolution & Litigation",
      description:
        "Civil litigation, negotiation, and advocacy in courts and regulatory forums.",
    },
    {
      title: "Family & Matrimonial Law",
      description:
        "Divorce, custody, maintenance, and settlement proceedings handled with care and discretion.",
    },
    {
      title: "Cheque Bounce & Debt Recovery",
      description:
        "Swift remedies and legal representation under applicable negotiable instruments laws.",
    },
    {
      title: "Regulatory & Compliance Advisory",
      description:
        "Assistance with compliance to local laws and regulations across sectors.",
    },
    {
      title: "Cyber Crime & Fraud",
      description:
        "Legal support for digital fraud, impersonation, and cyber offences.",
    },
    {
      title: "Property Disputes & Recovery",
      description:
        "Civil litigation, injunctions, and recovery suits to protect your property interests.",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={servicesHero2}
          alt="Our Legal Services"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-[#5F021F]/50"></div>
<div className="relative z-10 flex items-center h-full px-10 2xl:px-30 ">
          <div className="max-w-4xl text-white">
            {/* Box-like text */}
            <div className="inline-flex items-center gap-3  bg-white/10 text-gray-200 text-[1.3rem] px-6 py-2 rounded-full mb-6 mt-[9rem] md:mt-[8rem]">
              <span className="h-[2px] w-[5rem] bg-[#F4C430]"></span>
              <span className="text-[#FFA500]"> Legal Services</span>
            </div>

           
            <p className={`${Nunito.className}   tracking-wide text-gray-300 sm:text-medium md:text-[1.2rem] lg:text-[1.2rem]`}> Legal Services with Trusted Expertise</p>
            {/* Subheading */}
               <p
              className={`${Nunito.className} mt-4 text-[1.25rem] md:text-[1.5rem]`}
            >
              Comprehensive legal solutions designed to meet the unique needs of individuals, businesses, and institutions.
            </p>
            {/* LIne area */}
            <div className="h-[2px] w-[10rem] bg-[#F4C430] mt-6"></div>
          </div>
        </div>
        
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Core Services */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#5F021F]">
              What We Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-300 bg-white
                    hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 text-[1.05rem] leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#5F021F] mb-4">
              Why Clients Choose Lummina
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[1.05rem]">
              <li>Deep understanding of the Nigerian legal and business landscape.</li>
              <li>Commitment to timely, cost-effective, and pragmatic solutions.</li>
              <li>Strong network of relationships within legal, regulatory, and business circles.</li>
              <li>Proven track record of success across a wide array of legal matters.</li>
              <li>Dedication to building a positive legacy within the legal community and beyond.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
