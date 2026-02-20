"use client";

import Image, { StaticImageData } from "next/image";

import lagosImg from "@/public/img/Ellipse 8.png";
import abujaImg from "@/public/img/Ellipse 9.png";
import ogunImg from "@/public/img/Ellipse 10.png";
import riversImg from "@/public/img/Ellipse 11.png";
import oyoImg from "@/public/img/Ellipse 12.png";
import kanoImg from "@/public/img/Ellipse 13.png";

type CoverageZone = {
  name: string;
  image: StaticImageData;
  angle: number;
};

const Presence = () => {
  const coverage: CoverageZone[] = [
    { name: "South West", image: lagosImg, angle: 0 },
    { name: "South South", image: riversImg, angle: 60 },
    { name: "South East", image: abujaImg, angle: 120 },
    { name: "North Central", image: ogunImg, angle: 180 },
    { name: "North West", image: kanoImg, angle: 240 },
    { name: "North East", image: oyoImg, angle: 300 },
  ];

  return (
    <section className="px-6 sm:px-10 py-10 sm:py-16 bg-[#FFF7E7] text-black relative min-h-[80svh]">
      
      {/* Header */}
      <header className="flex">
        <h2 className="inline-block mx-auto text-sm sm:text-lg font-semibold tracking-wide mb-3 text-[#5F021F] border rounded-3xl border-gray-900 px-4 sm:px-10 py-1 text-center">
          National Presence
        </h2>
      </header>

      <h2 className="2xl:text-[4rem] text-[2rem] sm:text-[2.5rem] font-semibold mb-3 sm:mb-4 text-center leading-tight text-[#5F021F]">
        Serving Clients Across Nigeria
      </h2>

      <p className="max-w-3xl mx-auto text-[1rem] sm:text-[1.2rem] text-center text-gray-700 mb-6 sm:mb-8 leading-relaxed">
        We represent clients across Nigeria, with active matters before courts,
        tribunals, and regulatory authorities nationwide.
      </p>

      <div className="mx-auto mt-3 sm:mt-4 h-[2px] w-20 bg-[#F4C430]"></div>

      {/* ================= MOBILE RADIAL ================= */}
      <div className="sm:hidden relative mt-14 flex items-center justify-center h-[420px]">
        
        {/* Center */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#F4C430]/40 to-[#F4C430]/10 backdrop-blur-md flex items-center justify-center font-semibold text-[#5F021F] shadow-lg z-10">
          Nigeria
        </div>

        <div className="relative w-[320px] h-[320px] animate-[spin_40s_linear_infinite]">
          {coverage.map((zone) => (
            <div
              key={zone.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `
                  rotate(${zone.angle}deg)
                  translate(140px)
                  rotate(-${zone.angle}deg)
                `,
              }}
            >
              <div className="w-16 h-16 bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl flex flex-col items-center justify-center p-2 hover:scale-110 transition-all duration-300">
                
                <div className="relative w-8 h-8 rounded-xl overflow-hidden mb-1">
                  <Image
                    src={zone.image}
                    alt={zone.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-[9px] font-semibold text-center leading-tight text-[#5F021F]">
                  {zone.name}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP RADIAL ================= */}
      <div className="hidden sm:block relative mt-16 w-full h-[70vh]">
        
        {/* Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-28 h-28 bg-[#F4C430]/20 flex items-center justify-center font-semibold text-[#5F021F] text-center z-10 shadow-md">
          Nigeria
        </div>

        <div className="relative w-full h-full">
          {coverage.map((zone) => (
            <div
              key={zone.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `
                  rotate(${zone.angle}deg)
                  translate(240px)
                  rotate(-${zone.angle}deg)
                `,
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-white/90 to-[#FFF7E7]/80 border border-gray-300 rounded-2xl flex flex-col items-center justify-center hover:shadow-2xl hover:scale-110 hover:border-[#F4C430] hover:z-20 transition-all duration-300 p-3">
                
                <div className="relative w-12 h-12 rounded-xl overflow-hidden mb-1 shadow-md">
                  <Image
                    src={zone.image}
                    alt={zone.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-sm font-semibold text-gray-800 text-center leading-tight">
                  {zone.name}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Presence;
