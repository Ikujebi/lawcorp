import Image from "next/image";
import bgPic1 from "../public/img/Ellipse 8.png";
import bgPic from "../public/img/Rectangle 41.png";
import { SourceCodePro } from "./fonts";
import { Roboto } from "./fonts";
import { Scale, ShieldCheck, Users } from "lucide-react";
import International from "./components/International Legal Assistance";
import Team from "./components/Team";
import Confidential from "./components/Confidential";
import Practice from "./components/Practice Areas";
import Presence from "./components/Presence";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
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
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className={`${inter.className} relative h-screen overflow-hidden`}
      >
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
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 2xl:px-30">
          <div className="max-w-4xl text-white">
            {/* Main Heading */}
            <h1
              className={`${inter.className} text-xl font-semibold tracking-wide text-[#f7e7ce] sm:text-3xl md:text-[3rem] lg:text-[3.26rem]`}
            >
              Legal Experts for Business, <br />& Individuals in Nigeria.
            </h1>

            {/* Subheading */}
            <p className="my-[1rem] md:my-[2rem] max-w-3xl sm:text-lg md:text-[1.58rem] text-[#FFF7E7] font-normal leading-relaxed">
              We provide strategic legal solutions that protect your business
              and reduce risk. Responsive. Trusted. Expert counsel across
              corporate, compliance & litigation needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row md:gap-8 font-normal text-[#f7e7ce]">
              <div className="inline-block bg-[#FFA500] hover:bg-[#FFA500]/80 border border-white/70 text-[1rem] px-8 py-4 rounded-full mb-6 xl:py-2">
                Schedule Consultation
              </div>
              <div className="inline-block border border-white/70 bg-[#F7e7ce] text-[#5F021F] hover:bg-[#F7e7ce]/90 text-[1rem] px-8 py-4 rounded-full mb-6 xl:py-2">
                View Practice Areas
              </div>
            </div>
          </div>
        </div>

        {/* Stats Article at bottom of hero */}
        <article className="absolute bottom-0 left-0 w-full h-[20svh] md:h-[10svh] bg-[#5F021F] text-[#F7E7CE] flex items-center justify-center z-20">
          <div className="flex flex-col md:flex-row items-center justify-center w-full   max-w-6xl px-4 md:px-0">
            {/* 1 - Trusted by our customer */}
            <div className="flex flex-col text-white w-full mb-4 md:mb-0 md:mr-6 lg:mr-8 z-10 md:pl-[3rem]">
              <h3 className="text-[0.6rem] md:text-[.8rem] font-xs mb-1 md:mb-2 md:text-left">
                Trusted by our customer
              </h3>

              <div className="flex md:justify-start">
                {/* Pictures */}
                <div className="flex items-center -space-x-2 md:-space-x-3">
                  <Image
                    src={bgPic1}
                    alt="Customer 1"
                    width={28}
                    height={28}
                    className="rounded-full border-[1px] border-white md:w-12 md:h-12"
                  />
                  <Image
                    src={bgPic1}
                    alt="Customer 2"
                    width={28}
                    height={28}
                    className="rounded-full border-[1px] border-white md:w-12 md:h-12"
                  />
                  <Image
                    src={bgPic1}
                    alt="Customer 3"
                    width={28}
                    height={28}
                    className="rounded-full border-[1px] border-white md:w-12 md:h-12"
                  />
                  <Image
                    src={bgPic1}
                    alt="Customer 4"
                    width={28}
                    height={28}
                    className="rounded-full border-[1px] border-white md:w-12 md:h-12"
                  />
                </div>

                {/* Stat */}
                <div className="flex flex-col items-center justify-center ml-2 md:ml-4">
                  <span className="text-lg md:text-lg font-semibold md:font-bold text-white">
                    1000+
                  </span>
                  <span className="text-[0.5rem] md:text-[0.625rem] font-normal text-white mt-1 whitespace-nowrap">
                    Clients Satisfied
                  </span>
                </div>
              </div>
            </div>

            {/* 2–4 in a row */}
            <div className="flex flex-row md:flex-row flex-wrap w-full ">
              {/* 2 */}
              <div className="flex flex-col flex-1 relative md:mx-3 lg:mx-4 mt-4 md:mt-0">
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-8 border-r border-[#F7E7CE]" />
                <div className="text-center">
                  <span className="text-lg md:text-xl font-semibold md:font-bold block">
                    15k+
                  </span>
                  <span className="text-[0.55rem] md:text-xs block mt-1 whitespace-nowrap">
                    Matters Resolved
                  </span>
                </div>
              </div>

              {/* 3 */}
              <div className="flex flex-col flex-1 relative md:mx-3 lg:mx-4 mt-4 md:mt-0">
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-8 border-r border-[#F7E7CE]" />
                <div className="text-center">
                  <span className="text-lg md:text-xl font-semibold md:font-bold block">
                    13+
                  </span>
                  <span className="text-[0.55rem] md:text-xs block mt-1 whitespace-nowrap">
                    Years Exp
                  </span>
                </div>
              </div>

              {/* 4 */}
              <div className="flex flex-col flex-1 md:ml-3 lg:ml-4 mt-4 md:mt-0">
                <div className="text-center">
                  <span className="text-lg md:text-xl font-semibold md:font-bold block">
                    10k+
                  </span>
                  <span className="text-[0.55rem] md:text-xs block mt-1 whitespace-nowrap">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* WHO WE ARE SECTION  */}
      <section
        className={`${Roboto.className} px-6 md:py-6   flex flex-col items-center justify-center h-full md:h-[90svh] xl:h-full
  bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-gray-900 `}
      >
        <h2
          className={` text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border-1 rounded-3xl border-gray-900 px-10 py-1`}
        >
          ABout Us
        </h2>
        <h2 className="2xl:text-[4rem] text-[2.5rem] font-semibold leading-tight mb-4 mx-auto text-center text-gray-900">
          Modern Legal Solutions Rooted in Trust and Excellence
        </h2>
        <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
          <strong>Lummina Law Firm</strong> is a modern, innovative and
          client-centered full-service law firm based in{" "}
          <strong>Lagos, Nigeria</strong>. We are committed to redefining legal
          practice through innovation, excellence, and a deep understanding of
          our clients&apos; needs. Our approach combines cutting-edge legal
          expertise with a personalized service ethos, ensuring that we deliver
          solutions that empower our clients and exceed their expectations.
        </p>

        <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430] "></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-[4rem] xl:mt-[.2rem]">
          {values.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center
      px-4 border border-gray-300 bg-white z-30
      rounded-lg py-6
      hover:bg-white/70 hover:shadow-lg hover:-translate-y-1.5
      transition-transform transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#F4C430]/10">
                <Icon className="h-5 w-5 text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300" />
              </div>

              {/* Header */}
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
                {title}
              </h3>

              {/* Divider */}
              <div className="mt-2 mb-3 h-[1.5px] w-12 bg-[#F4C430]"></div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us SECTION  */}
      <section
        className={`${Roboto.className} xl:h-full px-6 py-16 max-w-6xl flex justify-center items-center
  bg-white md:bg-[#FFF7E7]/60 xl:bg-gray-100/5 backdrop-blur-[2px] text-gray-900`}
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Part */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-lg font-thin tracking-wide mb-4 text-gray-800">
              Why Choose Us
            </h2>

            <h2
              className={`${SourceCodePro.className} text-5xl font-semibold text-gray-900 md:text-gray-800 mb-[3rem]`}
            >
              Guiding Businesses with Integrity, Excellence & Innovation
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our firm combines ethical responsibility regional legal insight
              and disciplined case strategy to deliver dependable legal
              representation in sensitive and complex matters.
            </p>

            <div className="mt-3 h-[2.5px] w-1/4 bg-[#F4C430]"></div>
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
