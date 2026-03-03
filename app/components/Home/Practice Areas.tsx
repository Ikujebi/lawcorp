"use client";
import Link from "next/link";

const Practice = () => {
  const practiceAreas = [
    {
      title: "Business Law",
      description: "Governance, contracts, compliance, and corporate structuring",
    },
    {
      title: "Real Estate & Property",
      description: "Acquisition, due diligence, and asset protection",
    },
    {
      title: "Transactions & Capital",
      description: "M&A, investments, and corporate reorganisation",
    },
    {
      title: "Intellectual Property",
      description: "Patents, trademarks, copyrights, and trade secrets",
    },
    {
      title: "Cross-Border Transactions",
      description: "Multi-jurisdiction advisory and execution",
    },
    {
      title: "Private Client Services",
      description: "Succession planning, trust structures, and family office",
    },
  ];

  return (
    <section className="px-5 sm:px-6 flex flex-col items-center justify-center min-h-screen md:min-h-[80svh] py-10 sm:py-16 bg-[#FFF7E7]/90 text-black">
      <h2 className="text-sm sm:text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border rounded-3xl border-gray-900 px-6 sm:px-10 py-1">
        Practice Areas
      </h2>
      <h2 className="text-[#5F021F] text-[1.9rem] sm:text-[2.2rem] 2xl:text-[3.4rem] font-semibold mb-3 text-center">
        Areas of Legal Practice
      </h2>
      <p className="max-w-2xl text-base sm:text-[1.1rem] text-center text-gray-700 mb-3">
        At <b className="text-[#5F021F]">Lummina Law Firm</b>, we provide comprehensive legal services across six core areas:
      </p>
      <div className="mx-auto mt-3 h-[2px] w-16 bg-[#F4C430]" />

      {/* List */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {practiceAreas.map(({ title, description }) => (
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

      {/* Link */}
      <Link
        href="/services"
        className="inline-block  
                   hover:text-[#5F021F] 
                   border-b border-transparent 
                   hover:border-[#F7E7CE] 
                   transition-all duration-500 
                   text-xs md:text-lg 
                   font-medium tracking-wide mt-10"
      >
        Explore Our Services..
      </Link>
    </section>
  );
};

export default Practice;