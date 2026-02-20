"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import herobg1 from "@/public/img/herobg1.jpg";
import herobg2 from "@/public/img/herobg2.jpg";
import herobg3 from "@/public/img/herobg3.jpg";
import bgPic1 from "@/public/img/VECTOR.png";
import { Montserrat } from "../fonts";


const slides = [
  {
    heading: "Legal Experts for Business & Individuals in Nigeria.",
    image: herobg1,
  },
  {
    heading: "Strategic Legal Solutions That Protect Your Business.",
    image: herobg2,
  },
  {
    heading: "Responsive. Trusted. Expert Counsel Across All Needs.",
    image: herobg3,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${Montserrat.className} relative h-screen overflow-hidden`}>
      {/* Background Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image.src}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 2xl:px-30">
        <div className="max-w-4xl">
          {/* Rotating Heading */}
          <AnimatePresence mode="wait">
           <motion.h1
  key={slides[index].heading}
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -40 }}
  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
  className="text-[1.4rem] sm:text-3xl md:text-[3rem] lg:text-[3.3rem] 
             font-semibold leading-tight tracking-wide"
>
  {slides[index].heading.split(" ").map((word, i) => {
    // Just an example to color certain words differently
    const coloredWord = i < 2 ? (
      <span key={i} className="text-white">{word} </span>
    ) : (
      <span key={i} className="text-[#F7E7CE]">{word} </span>
    );
    return coloredWord;
  })}
</motion.h1>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="mt-[10rem] md:mt-[12rem] lg:mt-[14rem]"
          >
            <Link
              href="/contact"
              className="inline-block text-[#FFA500] 
                   hover:text-[#F7E7CE] 
                   border-b border-transparent 
                   hover:border-[#F7E7CE] 
                   transition-all duration-500 
                   text-xl md:text-2xl 
                   font-medium tracking-wide"
            >
              Schedule Consultation with{" "}
              <span className="text-[#F7E7CE] font-semibold">Lumina</span>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Stats Bar  */}
      {/* Stats Bar */}{" "}
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full h-[20svh] md:h-[10svh] bg-[#5F021F] text-[#F7E7CE] flex items-center justify-center z-20"
      >
        {" "}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 md:px-0 py-6 md:py-0">
          {" "}
          {/* Customer Trust */}{" "}
          <div className="flex flex-col text-white w-full mb-4 md:mb-0 md:mr-6 lg:mr-8 z-10 md:pl-[3rem]">
            {" "}
            <h3 className="text-[0.6rem] md:text-[.8rem] mb-1 md:mb-2 md:text-left">
              {" "}
              Trusted by our customers{" "}
            </h3>{" "}
            <div className="flex md:justify-start">
              {" "}
              <div className="flex items-center -space-x-2 md:-space-x-3">
                {" "}
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    src={bgPic1}
                    alt="Customer"
                    width={28}
                    height={28}
                    className="rounded-full border md:w-12 md:h-12"
                  />
                ))}{" "}
              </div>{" "}
              <div className="flex flex-col items-center justify-center ml-2 md:ml-4">
                {" "}
                <span className="text-lg font-semibold md:font-bold">
                  1000+
                </span>{" "}
                <span className="text-[0.5rem] md:text-[0.625rem] mt-1 whitespace-nowrap">
                  {" "}
                  Clients Satisfied{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Other Stats */}{" "}
         
        </div>{" "}
      </motion.article>
    </section>
  );
}
