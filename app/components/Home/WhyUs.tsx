"use client";

interface Item {
  title: string;
}

export default function WhyChooseUs() {
  const items: Item[] = [
    {
      title: "Deep understanding of the Legal and Business Landscape",
    },
    {
      title: "Commitment to timely, cost effective and Pragmatic Solutions",
    },
    {
      title: "Proven Track Record of success across a wide array of matters",
    },
    {
      title: "Dedication to building a positive legacy within our community and beyond.",
    },
  ];

  const heading = "WHY LUMMINA";

  return (
    <section
      className={`w-full min-h-[70vh] md:min-h-[80vh] xl:h-[90vh] px-5 sm:px-6 py-10 sm:py-16
      flex justify-center items-center
      bg-[#FFF7E7] md:bg-[#FFF7E7]/60 backdrop-blur-[2px] text-gray-900`}
    >
      <div className="flex flex-col md:flex-row md:space-x-6 w-full max-w-6xl">

        {/* Left Part */}
        <div className="md:w-1/2 md:pr-6 flex flex-col justify-center">
          <h2 className="text-sm sm:text-base font-medium tracking-wide mb-3 text-gray-800">
            {heading}
          </h2>

          <h2
            className="text-[2rem] sm:text-[2.3rem] md:text-[2.9rem] font-semibold text-[#5F021F] mb-6 sm:mb-8 leading-tight"
          >
            Deep Legal & Business Insight
          </h2>

          <div className="mt-3 h-[2px] w-20 bg-[#F4C430]"></div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

        {/* Right Part */}
        <div className="md:w-1/2 md:pl-6 mt-6 sm:mt-8 md:mt-0 flex flex-col justify-center">
          {items.map((item, index) => (
            <div key={index} className="mb-6 sm:mb-8 last:mb-0">
              <div className="flex items-center gap-3 mb-1 text-gray-900">
  {/* Centered Dot */}
  <span className="flex-shrink-0 text-[#F4C430] text-xl sm:text-2xl font-bold">
    .
  </span>

  {/* Title */}
  <h3 className="text-[#5F021F] text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
    {item.title}
  </h3>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}