import { SourceCodePro } from "../../fonts";
import { Roboto } from "../../fonts";

const About = () => {
  return (
    <div>
      <section
        className={`${Roboto.className} px-6 py-16 max-w-6xl flex justify-center items-center  bg-gray-200/10 text-gray-900`}
      >
        <div className="flex flex-col md:flex-row md:space-x-8 ">
          {/* Left Part */}
          <div className="md:w-1/2 md:pr-8">
            <h2
              className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}
            >
              About the Firm
            </h2>
            <h2
              className={`${SourceCodePro.className} text-5xl font-semibold mb-4 text-gray-800 mb-[3rem]`}
            >
              Trusted Legal Solicitors Across Nigeria
            </h2>
            <div className="mt-3 h-[2.5px] w-1/4 bg-[#FFA500] "></div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Lummina Law Firm is a{" "}
                <span className="font-bold">
                  modern, innovative, and client-centered full-service law firm
                </span>{" "}
                based in Lagos, Nigeria. We are committed to redefining legal
                practice through innovation, excellence, and a deep
                understanding of our clients&#39; needs.
              </p>
              <p>
                With a growing presence across Lagos, Abuja (FCT), Ogun, and
                Rivers, our firm is recognized for its strategic approach to
                corporate advisory, regulatory compliance, and client-centered
                legal services.
              </p>
              <p>
                Our practice emphasizes precision, personalized guidance, and
                long-term client trust over short-term outcomes, ensuring that
                every solution empowers our clients and exceeds their
                expectations.
              </p>
            </div>
            <div className="mt-3 h-[2.5px] w-1/4 bg-[#FFA500] "></div>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block w-[2px] bg-gray-300"></div>

          {/* Right Part */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0 flex flex-col">
            {/* Item 01 */}
            <div className="mb-[3rem]">
              <div
                className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}
              >
                <h2 className="text-[1.15rem] text-[#F4C430]">01</h2>
                <h3>Ethical & Transparent Practice</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[1.15rem]">
                Strict adherence to the rules and ethical standards of the
                Nigerian Bar Association, ensuring responsible and transparent
                legal representation without solicitation or misleading
                assurances.
              </p>
            </div>

            {/* Item 02 */}
            <div className="mb-[3rem]">
              <div
                className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}
              >
                <h2 className="text-[1.15rem] text-[#F4C430]">02</h2>
                <h3>Strong Regional Presence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[1.15rem]">
                Extensive litigation and advisory experience across Lagos,
                Abuja, Port Harcourt, and other key regions in Nigeria.
              </p>
            </div>

            {/* Item 03 */}
            <div className="mb-[3rem]">
              <div
                className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}
              >
                <h2 className="text-[1.15rem] text-[#F4C430]">03</h2>
                <h3>Client-Centered Legal Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[1.15rem]">
                We provide personalized, responsive, and practical legal
                support, tailored to meet the unique needs of each client,
                ensuring clarity, efficiency, and results at every step.
              </p>
            </div>

            {/* Item 04 */}
            <div>
              <div
                className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}
              >
                <h2 className="text-[1.15rem] text-[#F4C430]">04</h2>
                <h3>Strategic Case Handling</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-[1.15rem]">
                Every matter is guided by structured legal analysis risk
                evaluation and outcome-focused strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
