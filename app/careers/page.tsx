"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import careersBg from "@/public/img/herobg2.jpg"; // replace with your image
import { Montserrat } from "@/app/fonts";

export default function CareersPage() {
  return (
    <section className={`${Montserrat.className} bg-white text-gray-900`}>
      
      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={careersBg}
          alt="Careers at Lumina"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Build Your Legal Career with{" "}
            <span className="text-[#F7E7CE]">Lumina</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Join a team committed to excellence, integrity, and professional growth.
          </p>
        </motion.div>
      </div>

      {/* ABOUT WORKING WITH US */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#5F021F]">
            Why Work With Us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            At Lumina, we combine legal expertise with strategic insight to deliver 
            exceptional service across Nigeria. Our team consists of experienced 
            practitioners and forward-thinking professionals committed to achieving 
            meaningful results.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We foster a culture built on integrity, collaboration, and continuous 
            professional development. We value individuals who are driven, ethical, 
            and dedicated to excellence.
          </p>
        </motion.div>
      </div>

      {/* CURRENT STATUS SECTION */}
      <div className="bg-[#5F021F] text-[#F7E7CE] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            No Open Positions at This Time
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            We currently do not have active openings. However, we welcome 
            applications from qualified candidates who wish to be considered 
            for future opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#F7E7CE] text-[#5F021F] 
              px-8 py-3 font-semibold tracking-wide 
              hover:bg-white transition duration-500"
            >
              Submit Your CV
            </Link>
          </motion.div>
        </div>
      </div>

      {/* RECRUITMENT PROCESS */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#5F021F]">
            Our Recruitment Process
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>Application Review</li>
            <li>Initial Interview</li>
            <li>Competency Assessment</li>
            <li>Final Interview</li>
            <li>Offer & Onboarding</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}