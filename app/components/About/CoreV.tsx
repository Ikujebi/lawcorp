import { Roboto } from "../../fonts";

const coreValues = [
  {
    title: "Excellence",
    description:
      "We deliver superior legal results through precision, professionalism, and meticulous attention to detail.",
  },
  {
    title: "Client-Centered Service",
    description:
      "Every strategy and decision is guided by our clients’ objectives, interests, and long-term success.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in every engagement.",
  },
  {
    title: "Innovation",
    description:
      "We apply modern legal technologies and forward-thinking strategies to solve complex legal challenges efficiently.",
  },
];

const CoreV = () => {
  return (
    <section
      className={`${Roboto.className} px-6 py-16 flex flex-col items-center`}
    >
      <h2 className="text-lg font-thin tracking-wide mb-4 text-gray-800">
        Our Core Values
      </h2>

      <h2 className="2xl:text-[4rem] text-[2.5rem] font-semibold mb-4 text-center">
        Principles That Define Our Legal Practice
      </h2>

      <p className="max-w-3xl text-[1.2rem] text-gray-700 mb-6 text-center">
        Our practice is guided by excellence, integrity, innovation, and a deep
        commitment to delivering client-focused legal solutions that create
        lasting value.
      </p>

      <div className="mt-3 h-[2.5px] w-24 bg-[#F4C430]"></div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {coreValues.map(({ title, description }, index) => (
          <div
            key={index}
            className="group flex gap-4 relative border border-gray-300 bg-white rounded-2xl p-6
            hover:bg-[linear-gradient(135deg,rgba(244,196,48,0.2),rgba(255,255,255,0.95))]
            hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            {/* Left Line Accent */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F9DE8A]/70 text-[0.9rem] font-bold text-[#F4C430]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 h-full w-px bg-gray-300"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 transition-colors duration-300">
                {title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-[1rem]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreV;
