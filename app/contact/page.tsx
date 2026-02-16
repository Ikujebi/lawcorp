"use client";

import Image from "next/image";
import { Roboto, Nunito } from "@/app/fonts";
import contactHero from "@/public/img/contactHero.jpg"; // your abstract hero bg
import cartoonImage from "@/public/img/cartoon2.png"; // your cartoon illustration

const ContactPage = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] md:h-[88vh] lg:h-[80vh]">
        <Image
          src={contactHero}
          alt="Contact Us"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5F021F]/50"></div>

        {/* Hero Text */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="max-w-4xl text-white">
            <h1 className={`${Roboto.className} text-3xl md:text-4xl lg:text-[3.5rem] font-bold`}>
              Get in Touch with Lummina
            </h1>
            <p className={`${Nunito.className} mt-4 text-[1.2rem] md:text-[1.5rem]`}>
              We’re here to provide professional legal guidance. Reach out with your inquiries, and our team will assist you promptly.
            </p>
            <div className="h-[2px] w-[10rem] bg-[#FFA500] mx-auto mt-6"></div>
          </div>
        </div>
      </section>

     

      {/* CONTACT FORM SECTION */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#FFF7E7] text-gray-900">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Info Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#5F021F]">
              Contact Lummina Law Firm
            </h2>
            <p className="text-[1.1rem] text-gray-700">
              Whether you have a question about our services, need legal guidance, or want to schedule a consultation, we’re ready to help.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#5F021F] text-[#F7E7CE] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFA500] hover:text-[#5F021F] transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-12">
  {/* Contact Info */}
  <div className="text-gray-700 space-y-4">
    <p><strong>Address:</strong> 123 Legal Avenue, Lagos, Nigeria</p>
    <p><strong>Phone:</strong> +234 800 123 4567</p>
    <p><strong>Email:</strong> contact@lummina.com</p>
  </div>

  {/* Cartoon Illustration */}
  <div className="relative w-48 h-48 flex-shrink-0">
    <Image
      src={cartoonImage}
      alt="Contact Illustration"
      className="object-contain"
      fill
    />
  </div>
</div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
