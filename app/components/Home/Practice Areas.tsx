
const Practice = () => {
  const practiceAreas = [
    {
      number: "01",
      title: "Business Law",
      description:
        "Corporate advisory, commercial transactions, regulatory compliance, and business structuring for sustainable growth.",
    },
    {
      number: "02",
      title: "Debt Recovery",
      description:
        "Strategic debt recovery, asset tracing, and enforcement actions for individuals and corporate entities.",
    },
    {
      number: "03",
      title: "Company Secretarial & Compliance",
      description:
        "Corporate governance, statutory filings, board advisory, and regulatory compliance support.",
    },
    {
      number: "04",
      title: "Technology Law",
      description:
        "Legal advisory on data protection, fintech regulation, software agreements, and digital business compliance.",
    },
    {
      number: "05",
      title: "Startup Law",
      description:
        "End-to-end legal support for startups including incorporation, investor documentation, and regulatory structuring.",
    },
    {
      number: "06",
      title: "Entertainment & Media Law",
      description:
        "Contract negotiation, rights protection, licensing, and advisory for creative and media professionals.",
    },
    {
      number: "07",
      title: "Litigation",
      description:
        "Strategic dispute resolution and strong courtroom representation across civil and commercial matters.",
    },
    {
      number: "08",
      title: "Alternative Dispute Resolution (ADR)",
      description:
        "Efficient mediation, arbitration, and negotiated settlement solutions outside traditional litigation.",
    },
    {
      number: "09",
      title: "Real Estate & Property Law",
      description:
        "Property transactions, title verification, due diligence, and real estate dispute resolution.",
    },
    {
      number: "10",
      title: "Intellectual Property",
      description:
        "Protection, registration, enforcement, and commercialization of intellectual property rights.",
    },
    {
      number: "11",
      title: "Banking & Finance",
      description:
        "Financial regulatory advisory, loan documentation, and transactional finance support.",
    },
    {
      number: "12",
      title: "Employment & Labour Law",
      description:
        "Employment contracts, workplace policies, dispute resolution, and regulatory compliance.",
    },
    {
      number: "13",
      title: "Energy & Natural Resources",
      description:
        "Regulatory advisory, project structuring, and compliance support in energy and resource sectors.",
    },
    {
      number: "14",
      title: "Family Law & Private Client Services",
      description:
        "Confidential advisory on family matters, estate planning, and private wealth legal support.",
    },
  ];

  return (
    <section
      className={` px-5 sm:px-6 flex flex-col items-center justify-center
      min-h-screen md:min-h-[80svh] py-10 sm:py-14
      bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}
    >
      <h2
        className={`text-sm sm:text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border rounded-3xl border-gray-900 px-6 sm:px-10 py-1`}
      >
        Practice Areas
      </h2>

      <h2 className="text-[1.9rem] sm:text-[2.2rem] 2xl:text-[3.4rem] font-semibold mb-3 text-center">
        Areas of Legal Practice
      </h2>

      <p className="max-w-2xl text-base sm:text-[1.1rem] text-center text-gray-700 mb-3">
        At <b>Lummina Law Firm</b>, we offer a comprehensive range of legal services to meet the diverse needs of our clients:
      </p>

      <div className="mx-auto mt-3 h-[2px] w-16 bg-[#F4C430]" />

      {/* Cards */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl w-full">
        {practiceAreas.map(({ number, title, description }) => (
          <div
            key={number}
            className="group flex gap-3 relative border border-gray-300 bg-white rounded-xl p-4 sm:p-5
            hover:bg-[linear-gradient(135deg,rgba(244,196,48,0.2),rgba(255,255,255,0.95))]
            hover:shadow-lg hover:-translate-y-1.5
            transition-all duration-300"
          >
            {/* Left Column */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F9DE8A]/70 text-[0.95rem] font-bold text-[#F4C430]">
                {number}
              </div>

              <div className="mt-1 h-full w-px bg-gray-300"></div>
            </div>

            {/* Right Content */}
            <div>
              <h3 className="text-[1rem] sm:text-[1.05rem] font-semibold mb-2 transition-colors duration-300">
                {title}
              </h3>

              <p className="text-gray-500 leading-snug mb-2 text-[0.9rem] sm:text-[0.95rem]">
                {description}
              </p>

              <span className="inline-flex items-center text-[0.9rem] sm:text-[0.95rem] text-gray-500 font-medium transition-colors duration-300">
                View Details →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Practice;
