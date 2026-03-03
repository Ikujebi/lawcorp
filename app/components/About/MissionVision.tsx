import { Nunito, Roboto } from "@/app/fonts";

const visionText = `To be a trusted partner for individuals, businesses, and institutions in Nigeria and beyond, renowned for delivering bespoke legal solutions that drive sustainable success.`;

const missionArray = [
  "To provide innovative, practical, and bespoke legal solutions tailored to each client's unique circumstances",
  "To build lasting relationships grounded in trust, integrity, and exceptional service delivery",
  "To contribute meaningfully to the evolution of the Nigerian legal system through thought leadership and advocacy",
  "To create positive impact within our communities through ethical, responsible practice",
];

const MissionVision = () => {
  return (
    <section className="w-full bg-white ">
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
  className={`${Nunito.className} text-gray-700 text-[1.05rem] leading-relaxed flex gap-3 items-center`}
>
  <span className="w-2 h-2 bg-[#F4C430] rounded-full flex-shrink-0"></span>
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
