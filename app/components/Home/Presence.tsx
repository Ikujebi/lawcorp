"use client";
import presence from "@/public/img/presence.jpg";
import Image from "next/image";

const Presence = () => {
  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={presence}
          
          alt="Global Presence"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 py-16 text-center text-white max-w-5xl">

        {/* Header Badge */}
        <header className="flex justify-center mb-6">
          <h2 className="text-sm sm:text-lg font-medium tracking-widest border border-white/40 rounded-full px-6 py-2 backdrop-blur-md bg-white/10">
            Our Reach
          </h2>
        </header>

        {/* Main Heading */}
        <h1 className="text-[2.2rem] sm:text-[3rem] 2xl:text-[4rem] font-semibold leading-tight mb-6">
          Serving Clients Across Borders
        </h1>

        {/* Subtext */}
        <p className="text-[1rem] sm:text-[1.2rem] text-white/80 leading-relaxed max-w-3xl mx-auto">
          We advise and represent clients in complex, cross-jurisdictional matters,
          delivering strategic counsel across diverse legal and regulatory landscapes.
        </p>

        {/* Accent Line */}
        <div className="mx-auto mt-10 h-[2px] w-24 bg-[#F4C430]"></div>

      </div>
    </section>
  );
};

export default Presence;
