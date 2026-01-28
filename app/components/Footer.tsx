import Image from "next/image";
import call from "@/public/call.svg";
import messages from "@/public/messages.svg";
import location from "@/public/location.svg";
import { SourceCodePro } from "../fonts";

export default function Footer() {
  return (
    <footer className="bg-[#0b2545] text-gray-400 p-4 text-sm">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8  px-6
    xl:px-[15%] xl:max-w-[85%]
    2xl:px-[15%] 2xl:max-w-[85%]
    mx-auto">
        <article>
          <h2
            className={`${SourceCodePro.className}  text-xl font-extrabold  text-white`}
          >
            {" "}
            LexTrust Law
          </h2>
          <p>
            A full-service law firm providing strategic, compliant, and
            confidential legal representation across India and international
            jurisdictions.
          </p>
        </article>
        <article>
          <h2 className="text-[#F4C430] text-sm">Contact Us</h2>
          <p className="flex">
            <Image src={call} alt="Call icon" width={16} height={16} />
            <span className="text-xs">+91 XXXXX XXXXX</span>{" "}
          </p>
          <p className="flex">
            <Image src={messages} alt="Call icon" width={16} height={16} />
            <span className="text-[.73rem]">contact@lextrustlaw.com</span>{" "}
          </p>
          <p className="flex">
            <Image src={location} alt="Call icon" width={16} height={16} />
            <span className="text-[.74rem]">
              Chandigarh Punjab • Haryana • Himachal Pradesh
            </span>{" "}
          </p>
        </article>
        <article>
          <h2 className="text-[#F4C430] text-sm">Quick Links</h2>
          <p className="">Practice Areas</p>
          <p className="">NRI Services</p>
          <p className="">Our Team</p>
          <p className="">Careers</p>
          <p className="">Contact</p>
        </article>
        <article>
          <h2 className="text-[#F4C430] text-sm">Legal Disclaimer</h2>
          <p className="">
            As per the Bar Council of India rules, LexTrust Law does not solicit
            work or advertise. This website is for informational purposes only
            and does not constitute legal advice or create a lawyer-client
            relationship.
          </p>
        </article>
      </section>
      <div className="w-full h-[1px] bg-gray-600 mb-2"></div>
      <section className="text-xs  flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className=" ">
          © {new Date().getFullYear()} NokaTrust Law. All rights reserved.
        </div>
        <div className="">Trust • Confidentiality • Compliance</div>
      </section>
    </footer>
  );
}
