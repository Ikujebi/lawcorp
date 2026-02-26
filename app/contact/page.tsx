"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import contactHero from "@/public/img/contactHero.jpg";
import cartoonImage from "@/public/img/cartoon2.png";

const ContactPage = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] md:h-[88vh] lg:h-[80vh] overflow-hidden">

        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={contactHero}
            alt="Contact Us"
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
          className="absolute inset-0 bg-[#5F021F]"
        />

        {/* Hero Text */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            className="max-w-4xl text-white"
          >

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold"
            >
              Get in Touch with Lummina
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="mt-4 text-[1.2rem] md:text-[1.5rem]"
            >
              We’re here to provide professional legal guidance. Reach out with your inquiries, and our team will assist you promptly.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5 }}
              className="h-[2px] w-[10rem] bg-[#FFA500] mx-auto mt-6 origin-left"
            />

          </motion.div>
        </div>
      </section>

   {/* CONTACT FORM SECTION */}
<section className="px-6 md:px-12 lg:px-20 py-20 bg-[#FFF7E7] text-gray-900">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE – TEXT + CARTOON */}
    <div className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold text-[#5F021F] leading-tight">
        Let&rsquo;s Discuss Your Matter
      </h2>

      <div className="h-[3px] w-20 bg-[#FFA500]"></div>

      <p className="text-[1.05rem] text-black leading-relaxed">
        Whether you require strategic legal guidance, representation, or a consultation,
        our team is prepared to assist with clarity and discretion.
      </p>

      <div className="space-y-4 text-black pt-6">
        <p><strong>Address:</strong> 12 Oluseyi Aweda Street, Magodo Phase 1, Lagos</p>
        <p><strong>Phone:</strong> +234 706 046 9068</p>
        <p><strong>Email:</strong> fzekeri@lumminalaw.com</p>
      </div>

      {/* CARTOON IMAGE */}
      <div className="pt-6 flex justify-start">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
          <Image
            src={cartoonImage}
            alt="Contact Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>

    {/* RIGHT SIDE – FORM CARD */}
    <div className="bg-[#F7e7ce]/70 shadow-sm p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
      <form className="space-y-5">

        <div>
          <label className="block mb-2 text-sm font-medium text-[#5F021F]">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#5F021F]">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#5F021F]">
            Subject
          </label>
          <input
            type="text"
            className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#5F021F]">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5F021F] text-[#F7E7CE] py-3 md:py-4 rounded-lg font-semibold tracking-wide hover:bg-[#FFA500] hover:text-[#5F021F] transition-all duration-300"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>

    </div>
  );
};

export default ContactPage;
