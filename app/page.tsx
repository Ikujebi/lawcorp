import Image from "next/image";
import bgPic from "../public/img/pexels-mikhail-nilov-8731037.jpg";
import { SourceCodePro } from "./fonts";
import {Roboto } from "./fonts";
import { Scale, ShieldCheck, Users } from "lucide-react"
import International from "./components/International Legal Assistance";
import Team from "./components/Team";
import Confidential from "./components/Confidential";
import Practice from "./components/Practice Areas";
import Presence from "./components/Presence";
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
              <span className="text-[#FFA500]">Lagos, Ogun & Abuja </span>
              <br />
              Nigeria
            </h1>
            {/* Subheading */}
            <p className="my-[1rem] md:my-[4rem] max-w-3xl sm:text-lg md:text-[1.58rem] text-gray-200">
  At Lummina, we empower new, emerging, and growing businesses with strategic legal solutions that protect value and manage risk.  
  <span className="text-white font-bold">Your Trusted Partner for Sustainable Success</span>,  
  guiding clients with expertise in corporate law, regulatory compliance, and contracts to navigate complex legal landscapes with confidence.
</p>
            {/* buttons area */}
            <div className="flex flex-col sm:flex-row md:gap-8 font-semibold">
              <div className="inline-block bg-[#FFA500] hover:bg-[#FFA500]/80 border border-white/70  text-gray-900 text-[1.1rem] px-8 py-4 rounded-full mb-6">
                Book Consultation
              </div>
              <div className="inline-block border border-white/70 bg-white/10 hover:bg-white hover:text-gray-900 text-gray-100 text-[1.1rem] px-8 py-4 rounded-full mb-6">
                View Our Practice Areas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION  */}
      <section
  className={`${Roboto.className} px-6 flex flex-col items-center justify-center h-full md:h-[80svh] 
  bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}
>
  <h2 className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}>Who We Are</h2>
  <h2 className="2xl:text-[4rem] text-[2.5rem]  font-semibold mb-4">A Law Firm Built on Trust & Expertise</h2>
  <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
We are a full-service Nigerian law firm providing strategic,
 ethical, and results-driven legal solutions. We specialize
  in real estate, corporate, and commercial law, with a focus on supporting
 new and growing businesses across Nigeria and abroad.
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
<section className={`${Roboto.className} px-6 py-16 max-w-6xl flex justify-center items-center  bg-gray-100/5 text-gray-900`}>
 <div className="flex flex-col md:flex-row md:space-x-8 ">

    {/* Left Part */}
    <div className="md:w-1/2 md:pr-8">
    <h2 className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}>Why Choose Us</h2>
      <h2 className={`${SourceCodePro.className} text-5xl font-semibold mb-4 text-gray-800 mb-[3rem]`}>
        Guiding Businesses with Integrity, Excellence & Innovation
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
      <h3>Client-Centered Legal Solutions</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-[1.15rem]">
     We provide personalized, responsive, and practical
      legal support, tailored to meet the unique needs 
      of each client, ensuring clarity,
      efficiency, and results at every step.
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

<section className="">
  <Practice />
</section>

{/* International Legal Assistance SECTION  */}
<section className="">
  <International />
</section>
{/*Our Legal Team SECTION  */}
<section className="">
  <Team />
</section>
{/*Confidential Legal Support SECTION  */}
<section className="">
  <Confidential />
</section>
{/*Our Presence SECTION  */}
<section className="">
  <Presence />
</section>
    </>
  );
}
