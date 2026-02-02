"use client";
import Image from "next/image";
import bgPic from "@/public/img/loyal.jpg";
import { Nunito } from "../fonts";
import { Roboto } from "../fonts";
import About from "../components/About/About";

const page = () => {
  return (
    <div>
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
        <div className="absolute inset-0 bg-red-900/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 2xl:px-30 ">
          <div className="max-w-4xl text-white">
            {/* Box-like text */}
            <div className="inline-flex items-center gap-3  bg-white/10 text-gray-200 text-[1.3rem] px-6 py-2 rounded-full mb-6 mt-[9rem] md:mt-[8rem]">
              <span className="h-[2px] w-[5rem] bg-[#F4C430]"></span>
              <span>About the Firm</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`${Roboto.className}  text-xl font-extrabold tracking-wide text-gray-100 sm:text-3xl md:text-3xl lg:text-[3.26rem]`}
            >
              A Tradition of Integrity{" "}
              <span className="text-[#FFA500]">& Legal Excellence</span>
            </h1>
            <p className={`${Nunito.className}   tracking-wide text-gray-300 sm:text-medium md:text-[1.2rem] lg:text-[1.2rem]`}>Serving Lagos · Abuja (FCT) · Rivers · Ogun</p>
            {/* Subheading */}
            <p className="my-[1rem] md:my-[4rem] max-w-3xl sm:text-lg md:text-[1.58rem] text-gray-200">
              Lummina law firm is a{" "}
              <span className="text-white font-bold">
                mordern, innovative and client-centered full-service law firm
              </span>{" "}
              based in lagos,Nigeria. we are committed to dedefining legal
              practice through innovation, excellence, and a deep understanding
              of our clients&#39; needs. Our approach combines cutting-edge legal
              expertise with a personalized service ethos, ensuring that we
              deliver solutions that empower our clients and exceed their
              expection
            </p>
            {/* LIne area */}
            <div className="h-[2px] w-[10rem] bg-[#F4C430]"></div>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default page;
