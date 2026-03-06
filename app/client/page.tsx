"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portalIllustration from "@/public/img/soon.png";
import { Montserrat } from "@/app/fonts";

export default function ClientPortalPage() {
  return (
    <section className={`${Montserrat.className} bg-white text-gray-900 min-h-screen flex items-center`}>
      
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-semibold my-6 ">
            Client Portal
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Secure, convenient access to your matters. Log in to view documents,
            track progress, and communicate with your Lummina adviser — all in one place.
          </p>

          {/* ILLUSTRATION */}
          <div className="flex justify-center ">
            <Image
              src={portalIllustration}
              alt="Client portal coming soon"
              width={420}
              height={420}
              priority
            />
          </div>

          {/* BUTTON */}
          <div className="mb-10">
            <button className="bg-[#5F021F] text-[#F7E7CE] px-10 py-4 font-semibold text-lg rounded-sm cursor-not-allowed opacity-80">
              Portal Login — Coming Soon
            </button>
          </div>

          {/* CONTACT */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
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