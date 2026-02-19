"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import  test from "@/public/img/Rectangle 41.png";
import bgPic1 from "@/public/img/VECTOR.png";
import bgPic from "@/public/img/financial-advisor-website-hero-background_31O.jpg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Hero() {
  return (
    <section className={`${inter.className} relative h-screen overflow-hidden`}>

      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={bgPic}
          alt="Background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-black"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-10 2xl:px-30">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="max-w-4xl text-white"
        >

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8 }}
            className="text-xl font-semibold tracking-wide text-[#f7e7ce] sm:text-3xl md:text-[3rem] lg:text-[3.26rem]"
          >
            Legal Experts for Business, <br />& Individuals in Nigeria.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ duration: 1.8, delay: 1.2 }}
            className="my-[1rem] md:my-[2rem] max-w-3xl sm:text-lg md:text-[1.58rem] text-[#FFF7E7] font-normal leading-relaxed"
          >
            We provide strategic legal solutions that protect your business
            and reduce risk. Responsive. Trusted. Expert counsel across
            corporate, compliance & litigation needs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.6 }}
            className="flex flex-col sm:flex-row md:gap-8 font-normal text-[#f7e7ce]"
          >
            <Link
  href="/contact"
  className="inline-block bg-[#FFA500] hover:bg-[#FFA500]/80 text-white text-[1rem] px-8 py-4 rounded-full mb-6 xl:py-2"
>
  Schedule Consultation
</Link>
            <Link
  href="/services" className="inline-block border border-white/70 bg-[#F7e7ce] text-[#5F021F] hover:bg-[#F7e7ce]/90 text-[1rem] px-8 py-4 rounded-full mb-6 xl:py-2">
              View Practice Areas
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full h-[20svh] md:h-[10svh] bg-[#5F021F] text-[#F7E7CE] flex items-center justify-center z-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 md:px-0 py-6 md:py-0">
  {/* Customer Trust */}
  <div className="flex flex-col text-white w-full mb-4 md:mb-0 md:mr-6 lg:mr-8 z-10 md:pl-[3rem]">
    <h3 className="text-[0.6rem] md:text-[.8rem] mb-1 md:mb-2 md:text-left">
      Trusted by our customers
    </h3>

    <div className="flex md:justify-start">
      <div className="flex items-center -space-x-2 md:-space-x-3">
        {[...Array(4)].map((_, i) => (
          <Image
            key={i}
            src={bgPic1}
            alt="Customer"
            width={28}
            height={28}
            className="rounded-full border md:w-12 md:h-12"
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center ml-2 md:ml-4">
        <span className="text-lg font-semibold md:font-bold">1000+</span>
        <span className="text-[0.5rem] md:text-[0.625rem] mt-1 whitespace-nowrap">
          Clients Satisfied
        </span>
      </div>
    </div>
  </div>

  {/* Other Stats */}
  <div className="flex flex-row flex-wrap w-full">
    {[
      { value: "15k+", label: "Matters Resolved" },
      { value: "13+", label: "Years Exp" },
      { value: "10k+", label: "Happy Clients" },
    ].map((stat, i) => (
      <div
        key={i}
        className="flex flex-col flex-1 relative md:mx-3 lg:mx-4 mt-4 md:mt-0"
      >
        {i !== 2 && (
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 border-r border-[#F7E7CE]" />
        )}
        <div className="text-center">
          <span className="text-lg md:text-xl font-semibold md:font-bold block">
            {stat.value}
          </span>
          <span className="text-[0.55rem] md:text-xs block mt-1 whitespace-nowrap">
            {stat.label}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

      </motion.article>

    </section>
  );
}
