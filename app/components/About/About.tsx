import { SourceCodePro } from "../../fonts";
import { Roboto } from "../../fonts";
import CoreV from "./CoreV";

const About = () => {
  const philosophyList = [
    "Ethical, transparent, and compliant legal practice",
    "Structured case assessment and legal strategy",
    "Clear communication and procedural accountability",
    "Long-term legal protection and client confidence",
  ];

  return (
    <div className="w-full">
      {/* ABOUT SECTION — NORMAL BACKGROUND */}
      <section className="w-full bg-white/10">
        <main
          className={`${Roboto.className} max-w-6xl mx-auto px-6 py-16 text-gray-900`}
        >
          <div className="flex flex-col md:flex-row md:gap-12">
            
            {/* LEFT SIDE */}
            <div className="md:w-1/2">
              <h2 className="text-lg font-thin tracking-wide mb-4 text-gray-800">
                About the Firm
              </h2>

              <h2
                className={`${SourceCodePro.className} text-4xl md:text-5xl font-semibold text-gray-800 mb-10`}
              >
                Trusted Legal Solicitors Across Nigeria
              </h2>

              <div className="h-[2.5px] w-1/4 bg-[#F4C430] mb-8" />

              <div className="text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Lummina Law Firm is a{" "}
                  <span className="font-bold">
                    modern, innovative, and client-centered full-service law firm
                  </span>{" "}
                  based in Lagos, Nigeria. We are committed to redefining legal
                  practice through innovation, excellence, and a deep
                  understanding of our clients&#39; needs.
                </p>

                <p className="mb-6">
                  With a growing presence across{" "}
                  <span className="font-bold">Lagos</span>,{" "}
                  <span className="font-bold">Abuja (FCT)</span>,{" "}
                  <span className="font-bold">Ogun</span>, and{" "}
                  <span className="font-bold">Rivers</span>, our firm is
                  recognized for its strategic approach to corporate advisory,
                  regulatory compliance, and client-centered legal services.
                </p>

                <p>
                  Our practice emphasizes precision, personalized guidance, and
                  long-term client trust over short-term outcomes, ensuring that
                  every solution empowers our clients and exceeds their
                  expectations.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:w-1/2 mt-14 md:mt-0 flex flex-col items-center">
              
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

      {/* CORE VALUES SECTION — KEEP SEPARATE (NON IMAGE BG) */}
      <section className="w-full bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <CoreV />
        </div>
      </section>
    </div>
  );
};

export default About;
