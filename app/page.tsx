import Image from "next/image";
import bgPic from "../public/img/freelancer-using-phone-laptop.jpg";

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
        <div className="relative z-10 flex items-center h-full px-10">
          <div className="max-w-4xl text-white">
            {/* Box-like text */}
            <div className="inline-block border border-white/70 bg-white/10 text-gray-200 text-[1.3rem] px-6 py-2 rounded-full mb-6">
              Legal Excellence & Integrity
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Trusted Law Firm in Punjab, Haryana & Chandigarh
              <br />
              Himachal Pradesh
            </h1>
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
