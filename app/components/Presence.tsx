import Image from "next/image";
import { Roboto } from "../fonts";

import lagosImg from "@/public/img/Ellipse 8.png";
import abujaImg from "@/public/img/Ellipse 9.png";
import ogunImg from "@/public/img/Ellipse 10.png";
import riversImg from "@/public/img/Ellipse 11.png";
import oyoImg from "@/public/img/Ellipse 12.png";
import kanoImg from "@/public/img/Ellipse 13.png";

const Presence = () => {
  const coverage = [
    { name: "South West", image: lagosImg },
    { name: "South South", image: riversImg },
    { name: "South East", image: abujaImg },
    { name: "North Central", image: ogunImg },
    { name: "North West", image: kanoImg },
    { name: "North East", image: oyoImg },
  ];

  return (
    <div>
      <section
        className={`${Roboto.className} px-6 flex flex-col items-center justify-center min-h-screen md:min-h-[80svh] py-16
        bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}
      >
        {/* Section Tag */}
        <h2 className="text-lg font-thin tracking-wide mb-4 text-gray-800">
          National Presence
        </h2>

        {/* Main Heading */}
        <h2 className="2xl:text-[4rem] text-[2.5rem] font-semibold mb-4 text-center">
          Serving Clients Across Nigeria
        </h2>

        {/* Description */}
        <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
          We represent clients across Nigeria, with active matters before courts,
          tribunals, and regulatory authorities nationwide, supported by strong
          local partnerships and procedural familiarity across jurisdictions.
        </p>

        {/* Gold Divider */}
        <div className="mx-auto mt-3 h-[2.5px] w-24 bg-[#F4C430]"></div>

        {/* COVERAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full mt-[4rem]">
          {coverage.map((zone) => (
            <div
              key={zone.name}
              className="group flex flex-col items-center text-center
               border border-gray-200 bg-white z-30
              rounded-lg py-8
              hover:bg-[#F7E7CE] hover:shadow-lg hover:-translate-y-2
              transition-transform transition-shadow transition-colors duration-300"
            >
              {/* Zone Image */}
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden 
                
                group-hover:scale-110 transition duration-300"
              >
                <Image
                  src={zone.image}
                  alt={zone.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Zone Name */}
              <p className="mt-4 text-lg font-medium text-gray-800 group-hover:text-[#5F021F] transition">
                {zone.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Presence;
