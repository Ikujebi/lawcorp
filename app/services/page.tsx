"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import servicesHero2 from "@/public/img/service2.jpg";

const services = [
  {
    title: "Business Law",
    description: `Durable businesses are built on sound legal foundations. We design and implement the legal infrastructure that makes sustainable growth possible.`,
    bullets: [
      "Clear ownership architecture and documented decision frameworks",
      "Contracts that allocate risk with precision",
      "Governance systems that scale as the business does",
      "Regulatory compliance built into operations",
    ],
    subServices: [
      'Business Formation ',
      "Corporate & Commercial Advisory",
      "Corporate Structuring & Governance",
      "Contract Drafting & Review",
      "Legal & Regulatory Compliance",
      "Commercial Documentation",
      "Company Secretarial Services",
      "Due Diligence",
    ],
    // cta: "Discuss Your Corporate Advisory Needs",
  },
  {
    title: "Real Estate & Property",
    description: `Property is one of the most significant assets an individual or business will ever hold. We advise on acquisition, structuring, and long-term protection.`,
    subServices: [
      "Property Transactions",
      "Title Due Diligence",
      "Asset Structuring & Protection",
    ],
  },
  {
    title: "Transactions & Capital",
    description: `Capital deployment and corporate transactions require structured documentation and clear execution strategy. We support our clients through every stage of a transaction, from initial structuring to final execution.`,
    subServices: [
      "Investment Support & Documentation",
      "Mergers & Acquisitions",
      "Corporate Reorganisations & Restructuring",
    ],
  },
  {
    title: "Intellectual Property",
    description: `We advise on the full spectrum of intellectual property protection and enforcement, from brand identity to proprietary technology.`,
    subServices: [
      "Patent Registration & Protection",
      "Trademark Filings & Enforcement",
      "Copyright Advisory",
      "Trade Secret Protection",
    ],
  },
  {
    title: "Cross-Border Transactions",
    description: `Operating across jurisdictions introduces layers of legal complexity that require both local depth and international perspective. We advise clients on multi-jurisdiction structuring, compliance, and execution.`,
  },
  {
    title: "Private Client Services",
    description: `We work with founders and families to create durable legal structures that protect assets, plan for succession, and ensure continuity across generations.`,
    subServices: [
      "Trust Structures & Family Office Advisory",
      "Succession Planning",
      "Long-Term Asset Protection",
    ],
    // cta: "Structure Your Legacy",
  },
];

const lumminaApproach = [
  {
    title: "Structure Before Speed",
    description:
      "We design the legal architecture before executing documentation. A durable structure always precedes scale.",
  },
  {
    title: "Governance as a System",
    description:
      "We treat governance as operational infrastructure, not a compliance formality. Ownership, control, and documentation must align.",
  },
  {
    title: "Intentional Drafting",
    description:
      "Contracts are not mere administrative paperwork. They are risk allocation instruments built to withstand scrutiny, time, and dispute.",
  },
];

const ServicesPage = () => {
  return (
    <div className="w-full bg-[#FFF7E7] text-gray-900">

      {/* HERO */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <Image
          src={servicesHero2}
          alt="Lummina Law Firm Legal Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#5F021F]/70" />
        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <div className="max-w-4xl text-white">
            <p className="uppercase tracking-widest text-[#F4C430] mb-4 text-sm md:text-base">
              Legal Services
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Built for What Matters
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Comprehensive, structured legal solutions designed to address immediate needs while protecting long-term interests.
            </p>
            <div className="h-[3px] w-24 bg-[#F4C430] mt-8" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-2xl shadow-lg border border-[#F4C430]/30
                bg-gradient-to-br from-white/60 via-[#FFF7E7]/40 to-white/40
                hover:from-[#FFF7E7]/70 hover:to-[#F4C430]/10 hover:shadow-2xl
                transition-all duration-500"
            >
              <h2 className="text-2xl font-bold text-[#5F021F] mb-4">{service.title}</h2>
              <p className="mb-4 text-gray-700">{service.description}</p>

              {service.bullets && (
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  {service.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {service.subServices && (
                <>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Services Include:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {service.subServices.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

            {/*   {service.cta && (
                <button className="mt-6 px-6 py-3 rounded-full bg-[#F4C430] text-[#5F021F] font-medium hover:bg-[#FFA500] transition-all">
                  {service.cta}
                </button>
              )} */}
            </motion.div>
          ))}

          {/* LUMMINA APPROACH */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-[#5F021F] mb-8">The Lummina Approach</h2>
            <div className="flex flex-col gap-6">
              {lumminaApproach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-[#FFF7E7]/60 border-l-4 border-[#F4C430] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="font-semibold text-[#5F021F] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;