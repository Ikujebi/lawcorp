"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import contactHero from "@/public/img/contact.jpg";
import cartoonImage from "@/public/img/cartoon2.png";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        formRef.current?.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("Failed to send message. Please try again.");
      },
    );
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] md:h-[88vh] lg:h-[80vh] overflow-hidden">
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

        {/* Overlay for contrast */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[#5F021F]"
        />

        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="max-w-4xl text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold tracking-tight leading-tight drop-shadow-lg"
            >
              How Can We Help?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="mt-4 text-[1.2rem] md:text-[1.5rem] max-w-2xl mx-auto drop-shadow-sm"
            >
              If you require legal guidance or wish to explore your options, we
              would be pleased to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5 }}
              className="h-[3px] w-[10rem] bg-[#FFA500] mx-auto mt-6 origin-left rounded"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#F7E7CE]/70 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F021F]">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F021F]">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F021F]">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#5F021F]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 md:p-4 rounded-lg border border-[#5F021F]/40 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5F021F] text-[#F7E7CE] py-3 md:py-4 rounded-lg font-semibold tracking-wide hover:bg-[#FFA500] hover:text-[#5F021F] transition-all duration-300"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-3 text-center text-green-700 font-medium">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
          {/* LEFT SIDE – ADDRESS + ILLUSTRATION */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#5F021F] leading-tight">
              Get in Touch
            </h2>
            <div className="h-[4px] w-24 bg-[#FFA500] rounded"></div>

            

            <div className="space-y-3 text-black pt-6">
              <p>
                <strong>Address:</strong> 12 Oluseyi Aweda Street, Magodo Phase
                1, Lagos, Nigeria
              </p>
              <p>
                <strong>Phone:</strong> +234 706 046 9068
              </p>
              <p>
                <strong>Email:</strong> info@lumminalaw.com
              </p>
             <p className="flex items-center gap-2">
    <strong>LinkedIn:</strong>
    <Link
      href="https://www.linkedin.com/company/lumminalawfirm/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0A66C2] hover:opacity-80 transition"
    >
      <FaLinkedin size={24} />
    </Link>
  </p>
               <p className="flex items-center gap-2">
    <strong>Instagram:</strong>
    <Link
      href="https://www.instagram.com/lumminalaw?igsh=MXNoZzA0Mmxod3V3eQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E4405F] hover:opacity-80 transition"
    >
      <FaInstagram size={24} />
    </Link>
  </p>
  <p className="flex items-center gap-2">
  <strong>Facebook:</strong>
  <Link
    href="https://www.facebook.com/share/18wazK8sx4/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1877F2] hover:opacity-80 transition"
  >
    <FaFacebook size={24} />
  </Link>
</p>
            </div>

            <div className="pt-6 flex justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
              >
                <Image
                  src={cartoonImage}
                  alt="Contact Illustration"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
