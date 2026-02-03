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
          {/* Right Part */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0 flex flex-col items-center">
  {/* Gold Line */}
  <div className="h-[2.5px] w-[94%] bg-[#FFA500] mx-auto" />

  {/* Card */}
  <div id="single-card" className="w-full max-w-lg">
    <div
      className="
        border border-gray-300 bg-white
        rounded-xl p-6 shadow-sm
        hover:shadow-lg transition duration-300
      "
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Our Practice Philosophy
      </h3>

      {/* Intro Text */}
      <p className="text-gray-600 mb-5 leading-relaxed">
        Every matter entrusted to us is handled with professional
        rigor, ethical responsibility, and strategic foresight.
      </p>

      {/* Bullet List */}
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-[#FFA500]"></span>
          <span>Ethical, transparent, and compliant legal practice</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-[#FFA500]"></span>
          <span>Structured case assessment and legal strategy</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-[#FFA500]"></span>
          <span>Clear communication and procedural accountability</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-[#FFA500]"></span>
          <span>Long-term legal protection and client confidence</span>
        </li>
      </ul>
    </div>
  </div>
</div>

          
        </div>
      </section>
    </div>
  );
};

export default About;
