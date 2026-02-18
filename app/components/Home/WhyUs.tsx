"use client";

interface Item {
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const items: Item[] = [
    {
      title: "Deep Local Expertise",
      description:
        "Deep understanding of the Nigerian legal and business landscape.",
    },
    {
      title: "Timely & Pragmatic Solutions",
      description:
        "Commitment to timely, cost-effective, and pragmatic solutions.",
    },
    {
      title: "Strong Legal & Business Network",
      description:
        "Strong network of relationships within legal, regulatory, and business circles.",
    },
    {
      title: "Proven Track Record",
      description:
        "Proven track record of success across a wide array of legal matters.",
    },
    {
      title: "Commitment to Positive Legacy",
      description:
        "Dedication to building a positive legacy within the legal community and beyond.",
    },
  ];

  const heading = "Why Choose Us";
  const subheading =
    "Guiding Businesses with Integrity, Excellence & Innovation";

  return (
    <section
      className={`xl:h-full px-5 sm:px-6 py-10 sm:py-14 max-w-6xl flex justify-center items-center
      bg-white md:bg-[#FFF7E7]/60 xl:bg-gray-100/5 backdrop-blur-[2px] text-gray-900`}
    >
      <div className="flex flex-col md:flex-row md:space-x-6 w-full">
        {/* Left Part */}
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-sm sm:text-base font-medium tracking-wide mb-3 text-gray-800">
            {heading}
          </h2>

          <h2
            className={`text-[2rem] sm:text-[2.3rem] md:text-[2.9rem] font-semibold text-gray-900 md:text-gray-800 mb-6 sm:mb-8 leading-tight`}
          >
            {subheading}
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-snug max-w-xl mb-4">
            Our firm combines ethical responsibility, regional legal insight,
            and disciplined case strategy to deliver dependable legal
            representation in sensitive and complex matters.
          </p>

          <div className="mt-3 h-[2px] w-20 bg-[#F4C430]"></div>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

        {/* Right Part */}
        <div className="md:w-1/2 md:pl-6 mt-6 sm:mt-8 md:mt-0 flex flex-col">
          {items.map((item, index) => (
            <div key={index} className="mb-6 sm:mb-8 last:mb-0">
              <div
                className={`text-sm sm:text-base font-semibold mb-1 text-gray-900 flex items-center gap-3`}
              >
                <span className="text-[0.85rem] sm:text-[0.95rem] text-[#F4C430] font-medium">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h3>{item.title}</h3>
              </div>

              <p className="text-[0.85rem] sm:text-[0.95rem] text-gray-600 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
