import Image from "next/image";
import bgPic from "../public/img/freelancer-using-phone-laptop.jpg";
import {SourceCodePro} from "./fonts";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgPic}
          alt="Background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 2xl:px-30 ">
          <div className="max-w-4xl text-white">
            {/* Box-like text */}
            <div className="inline-block border border-white/70 bg-white/10 text-gray-200 text-[1.3rem] px-6 py-2 rounded-full mb-6 mt-[8rem]">
              Legal Excellence & Integrity
            </div>

            {/* Main Heading */}
            <h1 className={`${SourceCodePro.className}  text-xl font-extrabold tracking-wide text-gray-100 sm:text-3xl md:text-3xl lg:text-[3.26rem]`}>
               Trusted Law Firm in <span className="text-[#F4C430]">Lagos, Ogun & Abuja </span> 
              <br />
              Nigeria 
            </h1>
            {/* Subheading */}
            <p className="my-[4rem] max-w-3xl sm:text-lg md:text-[1.58rem]  text-gray-200">
              At NokaTrust, we are committed to providing reliable and strategic legal services with integrity and professionalism. Our experienced team offers representation in <span className="text-white font-semibold">Real Estate, Criminal Defense, Family Law, and NRI Legal Matters, </span>  guiding clients through every legal challenge with discretion and care.
            </p>
            {/* buttons area */}
            <div className="flex flex-col sm:flex-row gap-8 font-semibold">
              <div className="inline-block bg-[#F4C430] hover:bg-[#F4C430]/80 border border-white/70  text-gray-900 text-[1.1rem] px-8 py-4 rounded-full mb-6">
              Book a Free Consultation
            </div>
              <div className="inline-block border border-white/70 bg-white/10 hover:bg-white hover:text-gray-900 text-gray-100 text-[1.1rem] px-8 py-4 rounded-full mb-6">
              View Our Practice Areas
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* NORMAL PAGE CONTENT */}
      <section className="px-6 py-20 bg-white text-black">
        <h2 className="text-3xl font-semibold mb-4">Other content section</h2>
        <p className="max-w-2xl">
          This content is completely outside the background image. It scrolls
          normally and is not affected by the hero image.
        </p>
      </section>
    </>
  );
}
