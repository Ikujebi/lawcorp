"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portalBg from "@/public/img/nasa-Q1p7bh3SHj8-unsplash.jpg"; // add an image
import { Montserrat } from "@/app/fonts";

export default function ClientPortalPage() {
  return (
    <section className={`${Montserrat.className} bg-white text-gray-900`}>

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={portalBg}
          alt="Client Portal"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Client Portal
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Secure, convenient access to your matters. Log in to view documents,
            track progress, and communicate with your Lummina adviser — all in one place.
          </p>
        </motion.div>
      </div>


      {/* PORTAL CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* LOGIN BUTTON */}
          <div className="mb-10">
            <button
              className="bg-[#5F021F] text-[#F7E7CE] px-10 py-4 font-semibold text-lg rounded-sm cursor-not-allowed opacity-80"
            >
              Portal Login — Coming Soon
            </button>
          </div>

          {/* HELP TEXT */}
          <p className="text-gray-700 text-lg leading-relaxed">
            If you need immediate assistance, please contact your adviser directly
            or reach us at{" "}
            <a
              href="mailto:info@lumminalaw.com"
              className="text-[#5F021F] font-semibold hover:underline"
            >
              info@lumminalaw.com
            </a>.
          </p>

        </motion.div>

      </div>

    </section>
  );
}