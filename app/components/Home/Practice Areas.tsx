"use client";
import { useState } from "react";

const Practice = () => {
  const practiceAreas = [
    { title: "Business Law", description: "Corporate advisory, commercial transactions, regulatory compliance, and business structuring for sustainable growth." },
    { title: "Debt Recovery", description: "Strategic debt recovery, asset tracing, and enforcement actions for individuals and corporate entities." },
    { title: "Company Secretarial & Compliance", description: "Corporate governance, statutory filings, board advisory, and regulatory compliance support." },
    { title: "Technology Law", description: "Legal advisory on data protection, fintech regulation, software agreements, and digital business compliance." },
    { title: "Startup Law", description: "End-to-end legal support for startups including incorporation, investor documentation, and regulatory structuring." },
    { title: "Entertainment & Media Law", description: "Contract negotiation, rights protection, licensing, and advisory for creative and media professionals." },
    { title: "Litigation", description: "Strategic dispute resolution and strong courtroom representation across civil and commercial matters." },
    { title: "Alternative Dispute Resolution (ADR)", description: "Efficient mediation, arbitration, and negotiated settlement solutions outside traditional litigation." },
    { title: "Real Estate & Property Law", description: "Property transactions, title verification, due diligence, and real estate dispute resolution." },
    { title: "Intellectual Property", description: "Protection, registration, enforcement, and commercialization of intellectual property rights." },
    { title: "Banking & Finance", description: "Financial regulatory advisory, loan documentation, and transactional finance support." },
    { title: "Employment & Labour Law", description: "Employment contracts, workplace policies, dispute resolution, and regulatory compliance." },
    { title: "Energy & Natural Resources", description: "Regulatory advisory, project structuring, and compliance support in energy and resource sectors." },
    { title: "Family Law & Private Client Services", description: "Confidential advisory on family matters, estate planning, and private wealth legal support." },
  ];

  const [showAll, setShowAll] = useState(false);

  // Display only first 6 unless "Show More" is clicked
  const visibleAreas = showAll ? practiceAreas : practiceAreas.slice(0, 6);

  return (
    <section className="px-5 sm:px-6 flex flex-col items-center justify-center min-h-screen md:min-h-[80svh] py-10 sm:py-16 bg-[#FFF7E7] text-black">
      <h2 className="text-sm sm:text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border rounded-3xl border-gray-900 px-6 sm:px-10 py-1">
        Practice Areas
      </h2>
      <h2 className="text-[#5F021F] text-[1.9rem]  sm:text-[2.2rem] 2xl:text-[3.4rem] font-semibold mb-3 text-center">
        Areas of Legal Practice
      </h2>
      <p className="max-w-2xl text-base sm:text-[1.1rem] text-center text-gray-700 mb-3">
        At <b className="text-[#5F021F]">Lummina Law Firm</b>, we offer a comprehensive range of legal services to meet the diverse needs of our clients:
      </p>
      <div className="mx-auto mt-3 h-[2px] w-16 bg-[#F4C430]" />

      {/* List */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {visibleAreas.map(({ title, description }) => (
          <div key={title} className="flex gap-4 group">
            {/* Left accent */}
            <div className="flex-shrink-0 w-2 rounded-full bg-[#F4C430] mt-1" />

            {/* Content */}
            <div className="flex flex-col">
              <h3 className="text-[1rem] sm:text-[1.05rem] font-semibold text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-500 leading-snug text-[0.9rem] sm:text-[0.95rem]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 px-6 py-3 bg-[#FFA500] hover:bg-[#F4C430] rounded-full text-white font-semibold transition-colors duration-300"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Practice;
