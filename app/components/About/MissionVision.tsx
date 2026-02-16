import { Nunito, Roboto } from "@/app/fonts";

const visionText = `To be the premier legal partner for individuals, businesses, and institutions in Nigeria and beyond, renowned for delivering tailored solutions for sustainable success.`;

const missionArray = [
  "To provide innovative, practical, and bespoke legal solutions tailored to each client's unique circumstances.",
  "To build lasting relationships based on trust, integrity, and excellent service delivery.",
  "To contribute meaningfully to the growth and development of the Nigerian legal system through thought leadership and advocacy.",
  "To create a positive impact in our community through social responsibility initiatives.",
];

const MissionVision = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Vision */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2
            className={`${Roboto.className} text-2xl md:text-3xl font-semibold text-gray-900 mb-4`}
          >
            Our Vision
          </h2>

          <div className="h-[2px] w-[5rem] bg-[#F4C430] mb-6"></div>

          <p
            className={`${Nunito.className} text-gray-700 leading-relaxed text-[1.05rem]`}
          >
            {visionText}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2
            className={`${Roboto.className} text-2xl md:text-3xl font-semibold text-gray-900 mb-4`}
          >
            Our Mission
          </h2>

          <div className="h-[2px] w-[5rem] bg-[#F4C430] mb-6"></div>

          <ul className="space-y-4">
            {missionArray.map((item, index) => (
              <li
                key={index}
                className={`${Nunito.className} text-gray-700 text-[1.05rem] leading-relaxed flex gap-3`}
              >
                <span className="mt-2 w-2 h-2 bg-[#F4C430] rounded-full flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
