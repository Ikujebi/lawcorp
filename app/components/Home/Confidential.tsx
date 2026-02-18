import Image from "next/image";
import rect from "@/public/img/Rectangle 31.jpg";


export default function Footer() {
  return (
    <main
      className={` bg-[#5F021F] text-[#F7e7ce] p-4 sm:p-6 text-sm flex flex-col items-center`}
    >
      {/* Image Section */}
      <section className="my-6 sm:my-8 w-full flex justify-center">
        <Image
          width={800}
          height={400}
          src={rect}
          alt="International Legal Assistance"
          className="w-[22rem] sm:w-[35rem] object-cover"
        />
      </section>

      {/* Content Section */}
      <section className="max-w-xl sm:max-w-2xl px-4 sm:px-0 text-center">
        <h2 className="text-[#FFA500] text-base sm:text-lg mt-6 sm:mt-[3rem]">
          Confidential Legal Support
        </h2>

        <p className="text-sm sm:text-xl mt-2 sm:mt-4 leading-snug sm:leading-relaxed">
          Our client engagement process is designed to understand your legal
          needs and determine the appropriate course of action. All discussions
          are treated with strict confidentiality and do not constitute legal
          solicitation or advice.
        </p>

        <div className="mt-6 sm:mt-8 h-[2px] sm:h-[2.5px] w-1/3 sm:w-1/6 bg-[#F4C430] mx-auto"></div>
      </section>

      {/* Buttons Area */}
      <section className="flex flex-col sm:flex-row mt-6 sm:mt-[2rem] gap-4 sm:gap-8 font-semibold items-center">
        <div className="inline-block bg-[#FFA500] hover:bg-[#FFA500]/80 border border-white/70 text-gray-900 text-[0.95rem] sm:text-[1.1rem] px-6 sm:px-8 py-3 sm:py-4 rounded-full">
          Schedule a Legal Consultation
        </div>
        <div className="inline-block border border-white/70 bg-white/10 hover:bg-white hover:text-gray-900 text-gray-100 text-[0.95rem] sm:text-[1.1rem] px-6 sm:px-8 py-3 sm:py-4 rounded-full">
          Submit Your Legal Query
        </div>
      </section>
    </main>
  );
}
