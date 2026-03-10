"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import herobg1 from "@/public/img/herobg1.jpg";
import herobg2 from "@/public/img/herobg2.jpg";
import herobg3 from "@/public/img/herobg3.jpg";
import { Montserrat } from "../fonts";

const slides = [
  {
    heading: "Trusted Partners for Your Sustainable Success",
    image: herobg1,
  },
  {
    heading: "Strategic Legal Guidance for Your Growth",
    image: herobg2,
  },
  {
    heading: "Protecting Your Interests with Precision and Integrity",
    image: herobg3,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

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
            alt="Lummina Law Firm Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 2xl:px-30">
        <div className="max-w-4xl">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-widest text-[#FFA500] text-[.45rem] md:text-[.56rem] mb-[2rem] md:mb-[5rem] "
          >
            Strategic Legal Counsel. Structured for Growth.
          </motion.p>

          {/* Rotating Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[index].heading}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.6rem]  md:text-[2rem] xl:text-[3.3rem] 
                         font-semibold leading-tight tracking-wide text-[#F7E7CE]"
            >
              {slides[index].heading}
            </motion.h1>
          </AnimatePresence>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="mt-[5rem] text-[#F7E7CE]/85 max-w-2xl text-xs md:text-lg leading-relaxed"
          >
            Lummina Law Firm is a modern legal practice serving individuals,
            businesses, and institutions in a demanding and evolving business
            environment. We provide practical, well-structured legal solutions
            grounded in experience, commercial awareness, and professional
            discipline.
          </motion.p>

          {/* CTA (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="mt-[10rem]  md:mt-[5rem] lg:mt-[5rem]"
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
              Schedule a Consultation 
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}