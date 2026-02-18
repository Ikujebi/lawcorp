import Image from "next/image";

import lagosImg from "@/public/img/Ellipse 8.png";
import abujaImg from "@/public/img/Ellipse 9.png";
import ogunImg from "@/public/img/Ellipse 10.png";
import riversImg from "@/public/img/Ellipse 11.png";
import oyoImg from "@/public/img/Ellipse 12.png";
import kanoImg from "@/public/img/Ellipse 13.png";

const Presence = () => {
  const coverage = [
    {
      name: "South West",
      image: lagosImg,
      top: "70%",
      left: "20%",
      topMobile: "65%",
      leftMobile: "20%",
    },
    {
      name: "South South",
      image: riversImg,
      top: "75%",
      left: "45%",
      topMobile: "70%",
      leftMobile: "40%",
    },
    {
      name: "South East",
      image: abujaImg,
      top: "70%",
      left: "65%",
      topMobile: "65%",
      leftMobile: "60%",
    },
    {
      name: "North Central",
      image: ogunImg,
      top: "35%",
      left: "50%",
      topMobile: "30%",
      leftMobile: "50%",
    },
    {
      name: "North West",
      image: kanoImg,
      top: "20%",
      left: "20%",
      topMobile: "15%",
      leftMobile: "15%",
    },
    {
      name: "North East",
      image: oyoImg,
      top: "15%",
      left: "70%",
      topMobile: "10%",
      leftMobile: "65%",
    },
  ];

  return (
    <section className="px-6 sm:px-10 py-16 bg-[#FFF7E7] text-black relative min-h-[80svh]">
      {/* National Presence Heading */}
      <header className="flex">
        <h2 className="inline-block mx-auto text-sm sm:text-lg font-semibold tracking-wide mb-3 text-[#5F021F] border rounded-3xl border-gray-900 px-4 sm:px-10 py-1 text-center">
          National Presence
        </h2>
      </header>

      {/* Main Heading */}
      <h2 className="2xl:text-[4rem] text-[2rem] sm:text-[2.5rem] font-semibold mb-3 sm:mb-4 text-center leading-tight">
        Serving Clients Across Nigeria
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-[1rem] sm:text-[1.363rem] text-center text-gray-700 mb-6 sm:mb-8 leading-snug sm:leading-relaxed">
        We represent clients across Nigeria, with active matters before courts,
        tribunals, and regulatory authorities nationwide, supported by strong
        local partnerships and procedural familiarity across jurisdictions.
      </p>

      {/* Divider */}
      <div className="mx-auto mt-3 sm:mt-4 h-[2px] sm:h-[2.5px] w-20 sm:w-24 bg-[#F4C430]"></div>

      {/* Map Container */}
      <div className="relative mt-12 w-full sm:h-[70vh]">
        {/* Center hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24 bg-[#F4C430]/20 flex items-center justify-center font-semibold text-[#5F021F] text-center">
          Nigeria
        </div>

        {/* Unified layout */}
        <div className="relative w-full h-full ml-[3%]">
          {coverage.map((zone) => (
            <div
              key={zone.name}
              className="
                absolute transform -translate-x-1/2 -translate-y-1/2
                bg-gradient-to-br from-white/90 to-[#FFF7E7]/80
                border border-gray-300 rounded-2xl
                flex flex-col items-center justify-center
                hover:shadow-2xl hover:scale-110 hover:border-[#F4C430] transition-all duration-300
                w-20 sm:w-24 h-20 sm:h-24 p-2 sm:p-4
              "
              style={{
                top: `var(--top-mobile, ${zone.top})`,
                left: `var(--left-mobile, ${zone.left})`,
              }}
            >
              <div className="relative w-12 sm:w-20 h-12 sm:h-20 rounded-2xl overflow-hidden mb-1 sm:mb-2 shadow-md">
                <Image src={zone.image} alt={zone.name} fill className="object-cover" />
              </div>
              <p className="text-[0.625rem] sm:text-base font-semibold text-gray-800 group-hover:text-[#5F021F] text-center">
                {zone.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presence;
