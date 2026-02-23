"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import servicesHero2 from "@/public/img/service2.jpg";

const ServicesPage = () => {
  const services = [
    { title: "Business Law", description: "Comprehensive legal support for businesses, including contracts, governance, and compliance." },
    { title: "Debt Recovery", description: "Legal remedies to recover debts efficiently, including negotiation, litigation, and enforcement." },
    { title: "Company Secretarial & Compliance", description: "Assistance with corporate governance, filings, and compliance requirements for companies." },
    { title: "Technology Law", description: "Guidance on IT contracts, data privacy, digital transactions, and emerging tech regulations." },
    { title: "Startup Law", description: "Legal advisory for startups, including formation, fundraising, contracts, and IP protection." },
    { title: "Entertainment & Media Law", description: "Support for contracts, licensing, copyright, and intellectual property in media and entertainment." },
    { title: "Litigation", description: "Representation in civil, commercial, and regulatory disputes with strategic advocacy." },
    { title: "Alternative Dispute Resolution (ADR)", description: "Mediation, arbitration, and negotiation services to resolve disputes efficiently." },
    { title: "Real Estate & Property Law", description: "Property acquisition, leasing, title verification, and dispute resolution." },
    { title: "Intellectual Property", description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets." },
    { title: "Banking & Finance", description: "Legal support for financial transactions, regulatory compliance, and banking operations." },
    { title: "Employment & Labour Law", description: "Advice on employment contracts, workplace policies, and labour dispute resolution." },
    { title: "Energy & Natural Resources", description: "Regulatory and contractual guidance for energy, mining, and natural resource projects." },
    { title: "Family Law & Private Client Services", description: "Assistance with family matters, estate planning, and personal legal advisory." },
  ];

  const [showAll, setShowAll] = useState(false);

  // Determine which services to show
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={servicesHero2}
            alt="Our Legal Services"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[#5F021F]"
        />

        <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-20 2xl:px-30">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="max-w-4xl text-white mx-auto text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-white/10 text-gray-200 text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] px-4 sm:px-6 py-2 rounded-full mb-6 mt-[6rem] sm:mt-[8rem]"
            >
              <span className="h-[2px] w-[4rem] sm:w-[5rem] bg-[#F4C430]"></span>
              <span className="text-[#FFA500]"> Legal Services</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="tracking-wide text-gray-300 text-[0.9rem] sm:text-[1rem] md:text-[1.2rem]"
            >
              Legal Services with Trusted Expertise
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="mt-4 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-relaxed"
            >
              Comprehensive legal solutions designed to meet the unique needs of individuals, businesses, and institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5 }}
              className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#F4C430] mt-6 origin-left mx-auto md:mx-0"
            />
          </motion.div>
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
              {displayedServices.map((service) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1 }}
                  className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-300 bg-white
                    hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#5F021F]/90">{service.title}</h3>
                  <p className="text-gray-700 text-[1rem] sm:text-[1.05rem] leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 text-[#5F021F] rounded-full font-semibold hover:bg-[#5F021F]/10 transition"
              >
                {showAll ? "Show Less.." : "Show More.."}
              </button>
            </div>

          </div>

          {/* Why Choose Us */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#5F021F] mb-4">
              Why Clients Choose Lummina
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[1rem] sm:text-[1.05rem]">
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