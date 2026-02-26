"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import servicesHero2 from "@/public/img/service2.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "Business Law",
      description:
        "Comprehensive legal support for businesses, including contracts, corporate governance, regulatory compliance, and commercial structuring.",
    },
    {
      title: "Debt Recovery",
      description:
        "Strategic debt recovery solutions through negotiation, structured settlements, litigation, and enforcement proceedings.",
    },
    {
      title: "Company Secretarial & Compliance",
      description:
        "Corporate governance advisory, statutory filings, regulatory compliance management, and board support services.",
    },
    {
      title: "Technology Law",
      description:
        "Advisory on IT contracts, data protection compliance, digital transactions, fintech regulation, and emerging technology frameworks.",
    },
    {
      title: "Startup Law",
      description:
        "End-to-end legal guidance for startups including incorporation, fundraising, shareholders’ agreements, and IP protection.",
    },
    {
      title: "Entertainment & Media Law",
      description:
        "Legal support for licensing, production agreements, copyright protection, talent contracts, and media compliance.",
    },
    {
      title: "Litigation",
      description:
        "Representation in civil, commercial, and regulatory disputes with strategic advocacy and procedural precision.",
    },
    {
      title: "Alternative Dispute Resolution (ADR)",
      description:
        "Efficient dispute resolution through mediation, arbitration, and structured negotiation frameworks.",
    },
    {
      title: "Real Estate & Property Law",
      description:
        "Property acquisition advisory, due diligence, title verification, leasing, and real estate dispute resolution.",
    },
    {
      title: "Intellectual Property",
      description:
        "Registration, protection, and enforcement of patents, trademarks, copyrights, and trade secrets.",
    },
    {
      title: "Banking & Finance",
      description:
        "Legal advisory for financial transactions, regulatory compliance, lending structures, and banking operations.",
    },
    {
      title: "Employment & Labour Law",
      description:
        "Advisory on employment contracts, HR policies, workplace compliance, and labour dispute resolution.",
    },
    {
      title: "Energy & Natural Resources",
      description:
        "Regulatory, contractual, and transactional support for energy, mining, and natural resource projects.",
    },
    {
      title: "Family Law & Private Client Services",
      description:
        "Confidential advisory on family matters, estate planning, succession, and personal legal affairs.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={servicesHero2}
            alt="Lummina Law Firm Legal Services"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-[#5F021F]/70" />

        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <div className="max-w-4xl text-white">
            <p className="uppercase tracking-widest text-[#F4C430] mb-4 text-sm md:text-base">
              Our Services
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Strategic Legal Solutions  
              <br className="hidden md:block" />
              Backed by Trusted Expertise
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              We deliver comprehensive, results-driven legal services tailored
              to the evolving needs of individuals, businesses, and institutions.
            </p>

            <div className="h-[3px] w-24 bg-[#F4C430] mt-8" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#5F021F] mb-4">
              What We Do
            </h2>
            <p className="text-black max-w-3xl leading-relaxed">
              Our multidisciplinary practice enables us to provide innovative,
              commercially sound, and legally robust solutions across diverse
              industries and sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedServices.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="p-8 rounded-2xl border border-gray-100 bg-[#F7e7ce]/70 shadow-sm
                  hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#5F021F] mb-3">
                  {service.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-[#5F021F] text-[#5F021F] 
              rounded-full font-medium hover:bg-[#5F021F] hover:text-white 
              transition-all duration-300"
            >
              {showAll ? "View Fewer Services" : "View All Services"}
            </button>
          </div>

          {/* WHY CHOOSE US */}
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-[#5F021F] mb-6">
              Why Clients Choose Lummina
            </h3>

            <ul className="space-y-4 text-black leading-relaxed">
              <li>• Deep understanding of Nigeria&apos;s legal and commercial landscape.</li>
              <li>• Timely, cost-effective, and strategically sound solutions.</li>
              <li>• Strong regulatory and business network.</li>
              <li>• Proven results across complex legal matters.</li>
              <li>• Long-term partnership approach built on trust and integrity.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;