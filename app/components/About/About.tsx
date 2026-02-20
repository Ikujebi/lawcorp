"use client";

import { SourceCodePro } from "../../fonts";
import { Roboto } from "../../fonts";
import CoreV from "./CoreV";
import MissionVision from "./MissionVision";
import abt from "@/public/img/abt.png";
import Image from "next/image";

const About = () => {
  const philosophyList = [
    "Ethical, transparent, and compliant legal practice",
    "Structured case assessment and legal strategy",
    "Clear communication and procedural accountability",
    "Long-term legal protection and client confidence",
  ];

  return (
    <div className="w-full">

      {/* CORE VALUES SECTION */}
      <section className="w-full bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <MissionVision />
        </div>
      </section>

      <section className="w-full bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <CoreV />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full bg-[#FAFAFA]">
        <main
          className={`${Roboto.className} max-w-6xl mx-auto px-6 py-16 text-gray-900`}
        >
          <div className="flex flex-col md:flex-row md:gap-16 items-center">

            {/* LEFT SIDE IMAGE (TABLET & ABOVE) */}
            <div className="hidden md:block md:w-1/2">
              <div className="relative w-full h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={abt}
                  alt="About Lummina"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 mt-14 md:mt-0 flex flex-col items-center">

              {/* Gold Line */}
              <div className="h-[2.5px] w-full max-w-lg bg-[#F4C430]" />

              {/* Card */}
              <div className="w-full max-w-lg">
                <div className="border border-gray-300 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300">

                  <h3
                    className={`${SourceCodePro.className} text-lg font-semibold text-gray-900 mb-8 mt-4`}
                  >
                    Our Practice Philosophy
                  </h3>

                  <p className="text-gray-600 mb-10 text-sm leading-relaxed">
                    Every matter entrusted to us is handled with professional
                    rigor, ethical responsibility, and strategic foresight.
                  </p>

                  <ul>
                    {philosophyList.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 mb-6"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#F4C430]" />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </main>
      </section>

    </div>
  );
};

export default About;