"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgPic from "@/public/img/loyal.jpg";
import About from "../components/About/About";

export default function Page() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.1 }}
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
            className="object-cover object-[center_25%]"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-red-900"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-20 2xl:px-30">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            className="max-w-4xl text-white mx-auto text-center md:text-left"
          >

            {/* Box-like text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-white/10 text-gray-200 text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] px-4 sm:px-6 py-2 rounded-full mb-6 mt-[6rem] sm:mt-[8rem]"
            >
              <span className="h-[2px] w-[4rem] sm:w-[5rem] bg-[#F4C430]"></span>
              <span>About the Firm</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.26rem] font-extrabold tracking-wide text-gray-100 leading-snug"
            >
              A Tradition of Integrity{" "}
              <span className="text-[#FFA500]">& Legal Excellence</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="mt-2 text-gray-300 text-sm sm:text-base md:text-[1.2rem]"
            >
              Serving all across Nigeria
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="max-w-3xl mt-4 text-[0.85rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-[#F7E7CE] leading-relaxed"
            >
              <strong>Lummina Law Firm</strong> is a modern, innovative and
              client-centered full-service law firm based in{" "}
              <strong>Lagos, Nigeria</strong>. We are committed to redefining
              legal practice through innovation, excellence, and a deep
              understanding of our clients&apos; needs. Our approach combines
              cutting-edge legal expertise with a personalized service ethos,
              ensuring that we deliver solutions that empower our clients and
              exceed their expectations.
            </motion.p>

            {/* Line Area */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5 }}
              className="h-[2px] w-[6rem] sm:w-[8rem] md:w-[10rem] bg-[#F4C430] mt-6 mx-auto md:mx-0 origin-left"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <About />
      </section>
    </div>
  );
}
