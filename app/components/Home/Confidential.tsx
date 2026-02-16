import Image from "next/image";
import rect from "@/public/img/Rectangle 31.jpg";
import { Nunito } from "../../fonts";

export default function Footer() {
  return (
    <main
      className={`${Nunito.className} bg-[#5F021F] text-[#F7e7ce] p-4 text-sm  flex flex-col items-center`}
    >
      <section className="my-8 w-full flex justify-center">
        <Image
          width={800}
          height={400}
          src={rect}
          alt="International Legal Assistance"
          className="w-[35rem] "
        />
      </section>

      <section className="max-w-2xl">
        <h2 className="text-[#FFA500] text-lg mt-[3rem] text-center">
          Confidential Legal Support
        </h2>

        <p className="text-xl">
          Our client engagement process is designed to understand your legal
          needs and determine the appropriate course of action. All discussions
          are treated with strict confidentiality and do not constitute legal
          solicitation or advice.
        </p>
        <div className=" mt-8 h-[2.5px] w-1/6 bg-[#F4C430] mx-auto"></div>
      </section>

      {/* buttons area */}
      <section className="flex flex-col mt-[2rem] sm:flex-row md:gap-8 font-semibold">
        <div className="inline-block bg-[#FFA500] hover:bg-[#FFA500]/80 border border-white/70  text-gray-900 text-[1.1rem] px-8 py-4 rounded-full mb-6">
          Schedule a Legal Consultation{" "}
        </div>
        <div className="inline-block border border-white/70 bg-white/10 hover:bg-white hover:text-gray-900 text-gray-100 text-[1.1rem] px-8 py-4 rounded-full mb-6">
          Submit Your Legal Query
        </div>
      </section>
    </main>
  );
}
