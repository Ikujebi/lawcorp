"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeroAnimationProps {
  bgImage: StaticImageData;
  overlayColor?: string;
  children?: React.ReactNode;
  scaleDuration?: number;
}

export default function HeroAnimation({
  bgImage,
  overlayColor = "#00000080",
  children,
  scaleDuration = 6,
}: HeroAnimationProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: scaleDuration, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className={`absolute inset-0 bg-[${overlayColor}]`}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full w-full px-6 md:px-20">
        {children}
      </div>
    </section>
  );
}
