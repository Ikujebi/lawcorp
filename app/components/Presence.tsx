import { Roboto } from "../fonts";

const Presence = () => {
  const states = [
    { name: "Lagos", letter: "L" },
    { name: "Abuja (FCT)", letter: "A" },
    { name: "Ogun", letter: "O" },
    { name: "Rivers", letter: "R" },
    { name: "Oyo", letter: "O" },
    { name: "Kano", letter: "K" },
  ];

  return (
    <div>
      <section
        className={`${Roboto.className} px-6 flex flex-col items-center justify-center h-full md:h-[80svh] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}
      >
        <h2 className="text-lg font-thin tracking-wide mb-4 text-gray-800">
          Our Presence
        </h2>

        <h2 className="2xl:text-[4rem] text-[2.5rem] font-semibold mb-4">
          Serving Clients Across Major Nigerian States
        </h2>

        <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
          We actively represent clients before courts and regulatory authorities
          across multiple jurisdictions, delivering strong local insight and
          procedural efficiency.
        </p>

        <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430]"></div>

        {/* STATES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full mt-[4rem]">
          {states.map((state) => (
            <div
              key={state.name}
              className="group flex flex-col items-center text-center
                px-6 border border-gray-300 bg-white z-30
                rounded-lg py-8 
                hover:bg-[#F7E7CE] hover:shadow-lg hover:-translate-y-2 
                transition-transform transition-shadow transition-colors duration-300"
            >
              {/* Circle Initial */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center
                  rounded-full border-2 border-[#F4C430]
                  text-xl font-semibold text-[#5F021F]
                  shadow-[0_0_10px_2px_rgba(244,196,48,0.2)]
                  group-hover:scale-110
                  transition duration-300
                "
              >
                {state.letter}
              </div>

              {/* State Name */}
              <p className="mt-4 text-lg font-medium text-gray-800 group-hover:text-[#5F021F] transition">
                {state.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Presence;
