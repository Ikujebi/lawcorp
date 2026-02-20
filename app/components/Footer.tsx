import Image from "next/image";
import call from "@/public/call.svg";
import messages from "@/public/messages.svg";
import location from "@/public/location.svg";
import { SourceCodePro } from "../fonts";

export default function Footer() {
  return (
    <footer className="bg-[#5F021F] text-[#F7e7ce] p-4 text-sm">
      <section
        className="grid grid-cols-1 md:grid-cols-4 gap-8  px-6 py-[2.5rem]
    xl:px-[15%] xl:max-w-[85%]
    2xl:px-[15%] 2xl:max-w-[85%]
    mx-auto"
      >
        <article>
          <h2
            className={`${SourceCodePro.className}  text-xl font-extrabold  text-white`}
          >
            {" "}
            Lummina
          </h2>
          <p>
            A full-service law firm providing strategic, compliant, and
            confidential legal representation across India and international
            jurisdictions.
          </p>
        </article>
        <article className="space-y-2">
          <h2 className="text-[#F4C430] text-sm">Contact Us</h2>

          <p className="flex items-center gap-x-2">
            <Image src={call} alt="Call icon" width={16} height={16} />
            <span className="text-xs">+234 706 046 9068</span>
          </p>

          <p className="flex items-center gap-x-2">
            <Image src={messages} alt="Message icon" width={16} height={16} />
            <span className="text-[0.73rem]">
              lumminallp@gmail.com: info@lummina.com
            </span>
          </p>

          <p className="flex items-center gap-x-2">
            <Image src={location} alt="Location icon" width={16} height={16} />
            <span className="text-[0.74rem]">
              Address: 12 OLUSEYI AWEDA STREET, MAGODO PHASE 1, LAGOS
            </span>
          </p>
        </article>
        <article>
          <h2 className="text-[#F4C430] text-sm">Quick Links</h2>
          <p className="">Practice Areas</p>

          <p className="">Our Team</p>
          <p className="">Careers</p>
          <p className="">Contact</p>
        </article>
        <article>
          <h2 className="text-[#F4C430] text-sm">Legal Disclaimer</h2>
          <p className="">
            As per the Bar Council of Nigeria rules,Lummina does not solicit
            work or advertise. This website is for informational purposes only
            and does not constitute legal advice or create a lawyer-client
            relationship.
          </p>
        </article>
      </section>
      <div className="w-full h-[1px] bg-[#F4C430] mb-2"></div>
      <section className="text-xs  flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className=" ">
          © {new Date().getFullYear()} NokaTrust Law. All rights reserved.
        </div>
        <div className="">Trust • Confidentiality • Compliance</div>
      </section>
    </footer>
  );
}
