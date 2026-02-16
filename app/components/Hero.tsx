"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgPic from "@/public/img/Rectangle 41.png"; // fallback/background image
import heroVideo from "@/public/video/hero.mp4"; // from public folder
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Hero() {
  return (
    <section className={`${inter.className} relative h-screen w-full overflow-hidden`}>
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={(e) => {
          // When video ends, we could do something if needed
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Background Image (shows after video) */}
      <Image
        src={bgPic}
        alt="Background"
        fill
        className="object-cover object-center z-[-1]"
      />

      {/* Hero Text */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }} // slow text animation
          className="max-w-4xl"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Legal Experts for Business & Individuals
          </h1>
          <p className="text-white text-lg md:text-2xl">
            We provide strategic legal solutions that protect your business and reduce risk. Responsive. Trusted. Expert counsel across corporate, compliance & litigation needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
