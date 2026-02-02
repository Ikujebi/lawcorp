import {Roboto } from "../fonts";

const Practice = () => {

    const practiceAreas = [
  {
    number: "01",
    title: "Real Estate Due Diligence",
    description:
      "Title verification ownership validation and risk analysis for secure property transactions.",
  },
  {
    number: "02",
    title: "Nigerians Abroad Legal Services",
    description:
      "Comprehensive legal representation and property management for clients living abroad.",
  },
  {
    number: "03",
    title: "Criminal Law and Bail",
    description:
      "Defense strategy anticipatory bail and trial advocacy across courts.",
  },
  {
    number: "04",
    title: "Cheque Bounce Matters",
    description:
      "Swift remedies and representation under applicable negotiable instruments laws.",
  },
  {
    number: "05",
    title: "RERA and Builder Disputes",
    description:
      "Regulatory compliance delayed possession and consumer protection matters.",
  },
  {
    number: "06",
    title: "Family and Matrimonial Law",
    description:
      "Divorce custody maintenance and settlement proceedings.",
  },
  {
    number: "07",
    title: "Cyber Crime and Fraud",
    description:
      "Legal action for digital fraud impersonation and cyber offences.",
  },
  {
    number: "08",
    title: "Property Disputes and Recovery",
    description:
      "Civil litigation injunctions and recovery suits.",
  },
]


  return (
    <section className={`${Roboto.className} px-6 py-[6rem] flex flex-col items-center justify-center  bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-gray-900`}>
     <h2 className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}>Practice Areas</h2>
      <h2 className="2xl:text-[4rem] text-[2.5rem]  font-semibold mb-4">Areas of Legal Practice</h2>
      <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
      Our firm represents individuals,
       families, and institutions across a
        broad spectrum of civil and criminal matters
         with clarity,
       strategy, and discretion.
      </p>
      <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430] "></div>
    
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
      {practiceAreas.map(({ number, title, description }) => (
        <div
          key={number}
          className="group flex gap-4 relative border border-gray-300 bg-white rounded-2xl p-8
            hover:bg-[linear-gradient(135deg,rgba(244,196,48,0.2),rgba(255,255,255,0.95))] hover:shadow-lg hover:-translate-y-2
            transition-all duration-300"
        >
          <div className="flex flex-col items-center">
          {/* Number Circle */}
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F9DE8A]/70 text-[1.14rem] font-bold text-[#F4C430]">
            {number}
          </div>
           <div className="mt-2 h-full w-px bg-gray-300 "></div>
          </div>
        <div>
          {/* Title */}
          <h3 className="text-xl font-medium mb-3 transition-colors duration-300">
            {title}
          </h3>
    
          {/* Description */}
          <p className="text-gray-400  leading-relaxed mb-3 text-[1.1rem]">
            {description}
          </p>
    
          {/* Link */}
          <span className="inline-flex items-center text-[1.2rem] text-gray-400 font-medium   transition-colors duration-300">
            View Details →
          </span>
        </div>
        </div>
      ))}
    </div>
    
    </section>
  )
}

export default Practice 