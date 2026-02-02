import Image from "next/image";
import rect from "@/public/img/Rectangle 32.jpg";
import { Nunito } from "../fonts";

export default function Footer() {
  return (
    <main className={`${Nunito.className} bg-[#5F021F] text-[#F7e7ce] p-4 text-sm  flex flex-col items-center`}>
      <section className="max-w-2xl">
        
        <h2 className="text-[#FFA500] text-lg mt-[3rem]">International Legal Assistance</h2>
        
        <h2 className="text-3xl font-semibold text-white my-[1rem]">International Legal Solutions for Individuals and Businesses</h2>
     
     <p className="text-xl">We offer structured, end-to-end cross-border legal support, enabling efficient representation across jurisdictions while minimizing the need for travel.</p>
      <div className=" mt-3 h-[2.5px] w-1/8 bg-[#F4C430] "></div>
      </section>
     <section className="max-w-2xl w-full">
  <div className="grid grid-cols-2 gap-4 mt-6 w-full">

    <button className="w-full border border-[#FFA500] shadow-[0_0_10px_2px_rgba(244,196,48,0.3)] text-[#F7E7CE] px-6 py-3 rounded-md hover:bg-[#5F021F] transition">
      Property & Asset Protection
    </button>

    <button className="w-full border border-[#FFA500] shadow-[0_0_10px_2px_rgba(244,196,48,0.3)] text-[#F7E7CE] px-6 py-3 rounded-md hover:bg-[#5F021F] transition">
      Power of Attorney & Documentation
    </button>

    <button className="w-full border border-[#FFA500] shadow-[0_0_10px_2px_rgba(244,196,48,0.3)] text-[#F7E7CE] px-6 py-3 rounded-md hover:bg-[#5F021F] transition">
      Family & Inheritance Disputes
    </button>

    <button className="w-full border border-[#FFA500] shadow-[0_0_10px_2px_rgba(244,196,48,0.3)] text-[#F7E7CE] px-6 py-3 rounded-md hover:bg-[#5F021F] transition">
      Court Representation in Absence
    </button>

  </div>
</section>

<section className="my-8 w-full flex justify-center">
    <Image width={800} height={400} src={rect} alt="International Legal Assistance" className="w-[27rem] rounded-[50%]"/>
</section>
      
     
    </main>
  );
}
