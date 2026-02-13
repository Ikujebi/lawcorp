"use client";

import { SourceCodePro, Roboto } from "../../fonts"; // adjust path if needed


interface Item {
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  // Built-in array of items
  const items: Item[] = [
    {
      title: "Ethical & Transparent Practice",
      description:
        "Strict adherence to the rules and ethical standards of the Nigerian Bar Association, ensuring responsible and transparent legal representation without solicitation or misleading assurances.",
    },
    {
      title: "Strong Regional Presence",
      description:
        "Extensive litigation and advisory experience across Lagos, Abuja, Port Harcourt, and other key regions in Nigeria.",
    },
    {
      title: "Client-Centered Legal Solutions",
      description:
        "We provide personalized, responsive, and practical legal support, tailored to meet the unique needs of each client, ensuring clarity, efficiency, and results at every step.",
    },
    {
      title: "Strategic Case Handling",
      description:
        "Every matter is guided by structured legal analysis, risk evaluation, and outcome-focused strategy.",
    },
  ];

  const heading = "Why Choose Us";
  const subheading = "Guiding Businesses with Integrity, Excellence & Innovation";

  return (
    <section
      className={`${Roboto.className} xl:h-full px-6 py-14 max-w-6xl flex justify-center items-center
      bg-white md:bg-[#FFF7E7]/60 xl:bg-gray-100/5 backdrop-blur-[2px] text-gray-900`}
    >
      <div className="flex flex-col md:flex-row md:space-x-6 w-full">
        {/* Left Part */}
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-base font-medium tracking-wide mb-3 text-gray-800">
            {heading}
          </h2>

          <h2
            className={`${SourceCodePro.className} text-[2.6rem] md:text-[2.9rem] font-semibold text-gray-900 md:text-gray-800 mb-8 leading-tight`}
          >
            {subheading}
          </h2>

          <p className="text-gray-700 leading-snug max-w-xl mb-4">
            Our firm combines ethical responsibility, regional legal insight,
            and disciplined case strategy to deliver dependable legal
            representation in sensitive and complex matters.
          </p>

          <div className="mt-3 h-[2px] w-20 bg-[#F4C430]"></div>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

        {/* Right Part */}
        <div className="md:w-1/2 md:pl-6 mt-8 md:mt-0 flex flex-col">
          {items.map((item, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div
                className={`${SourceCodePro.className} text-base font-semibold mb-1 text-gray-900 flex items-center gap-3`}
              >
                <span className="text-[0.95rem] text-[#F4C430] font-medium">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h3>{item.title}</h3>
              </div>

              <p className="text-[0.95rem] text-gray-600 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
