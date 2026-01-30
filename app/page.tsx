import Image from "next/image";
import bgPic from "../public/img/freelancer-using-phone-laptop.jpg";
import { SourceCodePro } from "./fonts";
import {Roboto } from "./fonts";
import { Scale, ShieldCheck, Users } from "lucide-react"

export default function Home() {

  const values = [
  {
    title: "Legal Excellence",
    description:
      "Meticulous legal analysis and strategic advocacy backed by experience integrity and in depth domain knowledge.",
    icon: Scale,
  },
  {
    title: "Trusted Advocacy",
    description:
      "A reputation built on discretion reliability and strong courtroom representation across complex legal matters.",
    icon: ShieldCheck,
  },
  {
    title: "Client First Approach",
    description:
      "Personalized legal solutions focused on clarity transparency and long term trust with every client.",
    icon: Users,
  },
]

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
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgPic}
          alt="Background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 2xl:px-30 ">
          <div className="max-w-4xl text-white">
            {/* Box-like text */}
            <div className="inline-block border border-white/70 bg-white/10 text-gray-200 text-[1.3rem] px-6 py-2 rounded-full mb-6 mt-[9rem] md:mt-[8rem]">
              Legal Excellence & Integrity
            </div>

            {/* Main Heading */}
            <h1
              className={`${SourceCodePro.className}  text-xl font-extrabold tracking-wide text-gray-100 sm:text-3xl md:text-3xl lg:text-[3.26rem]`}
            >
              Trusted Law Firm in{" "}
              <span className="text-[#F4C430]">Lagos, Ogun & Abuja </span>
              <br />
              Nigeria
            </h1>
            {/* Subheading */}
            <p className="my-[1rem] md:my-[4rem] max-w-3xl sm:text-lg md:text-[1.58rem]  text-gray-200">
              At NokaTrust, we are committed to providing reliable and strategic
              legal services with integrity and professionalism. Our experienced
              team offers representation in{" "}
              <span className="text-white font-semibold">
                Real Estate, Criminal Defense, Family Law, and NRI Legal
                Matters,{" "}
              </span>{" "}
              guiding clients through every legal challenge with discretion and
              care.
            </p>
            {/* buttons area */}
            <div className="flex flex-col sm:flex-row md:gap-8 font-semibold">
              <div className="inline-block bg-[#F4C430] hover:bg-[#F4C430]/80 border border-white/70  text-gray-900 text-[1.1rem] px-8 py-4 rounded-full mb-6">
                Book a Free Consultation
              </div>
              <div className="inline-block border border-white/70 bg-white/10 hover:bg-white hover:text-gray-900 text-gray-100 text-[1.1rem] px-8 py-4 rounded-full mb-6">
                View Our Practice Areas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION  */}
      <section className={`${Roboto.className} px-6 flex flex-col items-center justify-center h-full md:h-[80svh] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}>
  <h2 className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}>Who We Are</h2>
  <h2 className="2xl:text-[4rem] text-[2.5rem]  font-semibold mb-4">A Law Firm Built on Trust & Expertise</h2>
  <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
    We are a full service Nigerian law firm providing
     strategic ethical and results driven legal
      representation across key jurisdictions in Nigeria.
       Our practice is known for excellence in real estate
        due diligence criminal defense family law and
         comprehensive
     legal services for Nigerians at home and abroad.
  </p>
  <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430] "></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full mt-[4rem]">
  {values.map(({ title, description, icon: Icon }) => (
    <div
      key={title}
      className="group flex flex-col items-center text-center
        px-6 border border-gray-300 bg-white z-30
        rounded-lg py-8 
        hover:bg-white/70 hover:shadow-lg hover:-translate-y-2 
        transition-transform transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#F4C430]/5">
        <Icon className="h-6 w-6 text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300" />
      </div>

      {/* Header */}
      <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
        {title}
      </h3>

      {/* Divider */}
      <div className="mt-3 mb-4 h-[1.8px] w-16 bg-[#F4C430]"></div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  ))}
</div>

</section>

{/* Why Choose Us SECTION  */}
<section className={`${Roboto.className} px-6 py-16 max-w-6xl flex justify-center items-center  bg-gray-200/10 text-gray-900`}>
 <div className="flex flex-col md:flex-row md:space-x-8 ">

    {/* Left Part */}
    <div className="md:w-1/2 md:pr-8">
    <h2 className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}>Why Choose Us</h2>
      <h2 className={`${SourceCodePro.className} text-5xl font-semibold mb-4 text-gray-800 mb-[3rem]`}>
        A Practice Built on
Integrity, Strategy & Trust
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Our firm combines ethical responsibility regional legal insight and disciplined case strategy
        to deliver dependable legal representation in sensitive and complex matters.
      </p>
      <div className="mt-3 h-[2.5px] w-1/4 bg-[#F4C430] "></div>
    </div>

    {/* Divider for desktop */}
    <div className="hidden md:block w-[2px] bg-gray-300"></div>

    {/* Right Part */}
    <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0 flex flex-col">
  {/* Item 01 */}
  <div className="mb-[3rem]">
    <div className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}>
      <h2 className="text-[1.15rem] text-[#F4C430]">01</h2>
      <h3>Ethical & Transparent Practice</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-[1.15rem]">
      Strict adherence to the rules and ethical
       standards of the Nigerian Bar Association,
        ensuring responsible and transparent legal
         representation without solicitation or misleading
          assurances.
    </p>
  </div>

  {/* Item 02 */}
  <div className="mb-[3rem]">
    <div className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}>
      <h2 className="text-[1.15rem] text-[#F4C430]">02</h2>
      <h3>Strong Regional Presence</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-[1.15rem]">
      Extensive litigation and advisory experience across Lagos, Abuja, Port Harcourt, and other key regions in Nigeria.
    </p>
  </div>

  {/* Item 03 */}
  <div className="mb-[3rem]">
    <div className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}>
      <h2 className="text-[1.15rem] text-[#F4C430]">03</h2>
      <h3>NRI-Focused Legal Expertise</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-[1.15rem]">
     Dedicated handling of legal matters for Nigerians living abroad, including property, family, and litigation cases, with seamless remote coordination.
    </p>
  </div>

  {/* Item 04 */}
  <div>
    <div className={`${SourceCodePro.className} text-[1.34rem] font-medium mb-2 text-gray-900`}>
      <h2 className="text-[1.15rem] text-[#F4C430]">04</h2>
      <h3>Strategic Case Handling</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-[1.15rem]">
      Every matter is guided by structured legal analysis risk evaluation and outcome-focused strategy.
    </p>
  </div>
</div>

  </div>
</section>

{/* Practice Areas SECTION  */}
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
    </>
  );
}
