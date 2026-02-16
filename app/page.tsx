import Image from "next/image";
import bgPic1 from "../public/img/Ellipse 8.png";
import bgPic from "../public/img/Rectangle 41.png";
import Hero from "./components/Hero";
import { SourceCodePro } from "./fonts";
import { Roboto } from "./fonts";
import { Scale, ShieldCheck, Users } from "lucide-react";
import International from "./components/Home/International Legal Assistance";
import Team from "./components/Home/Team";
import Confidential from "./components/Home/Confidential";
import Practice from "./components/Home/Practice Areas";
import Presence from "./components/Home/Presence";
import WhyUs from "./components/Home/WhyUs";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
const values = [
  {
    title: "Modern & Innovative Legal Practice",
    description:
      "We leverage contemporary legal strategy, technology-driven research, and forward-thinking advisory methods to deliver efficient and effective legal solutions across evolving regulatory and business environments.",
    icon: Scale,
  },
  {
    title: "Client-Centered Representation",
    description:
      "Every engagement is built around a deep understanding of our clients’ objectives, risks, and expectations, allowing us to provide practical, responsive, and personalized legal support at every stage.",
    icon: Users,
  },
  {
    title: "Full-Service Strategic Expertise",
    description:
      "As a full-service law firm, we combine strong technical legal knowledge with commercial awareness to provide integrated solutions that protect, empower, and advance our clients’ interests.",
    icon: ShieldCheck,
  },
];

  return (
    <>
      {/* HERO SECTION */}
      < Hero />

      {/* WHO WE ARE SECTION  */}
      <section
        className={`${Roboto.className} px-6 md:py-6   flex flex-col items-center justify-center h-full md:h-[90svh] xl:h-full
  bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-gray-900 `}
      >
        <h2
          className={` text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border-1 rounded-3xl border-gray-900 px-10 py-1`}
        >
          ABout Us
        </h2>
        <h2 className="2xl:text-[4rem] text-[2.5rem] font-semibold leading-tight mb-4 mx-auto text-center text-gray-900">
          Modern Legal Solutions Rooted in Trust and Excellence
        </h2>
        <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
          <strong>Lummina Law Firm</strong> is a modern, innovative and
          client-centered full-service law firm based in{" "}
          <strong>Lagos, Nigeria</strong>. We are committed to redefining legal
          practice through innovation, excellence, and a deep understanding of
          our clients&apos; needs. Our approach combines cutting-edge legal
          expertise with a personalized service ethos, ensuring that we deliver
          solutions that empower our clients and exceed their expectations.
        </p>

        <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430] "></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full mt-[3rem] xl:mt-2">
  {values.map(({ title, description, icon: Icon }) => (
    <div
      key={title}
      className="group flex flex-col items-center text-center
      px-4 py-5 border border-gray-300 bg-white z-30
      rounded-lg
      hover:bg-white/70 hover:shadow-lg hover:-translate-y-1.5
      transition-transform transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#F4C430]/10">
        <Icon className="h-[18px] w-[18px] text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300" />
      </div>

      {/* Header */}
      <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
        {title}
      </h3>

      {/* Divider */}
      <div className="mt-2 mb-2 h-[1.2px] w-10 bg-[#F4C430]"></div>

      {/* Description */}
      <p className="text-[0.9rem] text-gray-600 leading-snug">
        {description}
      </p>
    </div>
  ))}
</div>

      </section>

      {/* Why Choose Us SECTION  */}
      <section>
        <WhyUs/>
      </section>

      {/* Practice Areas SECTION  */}

      <section className="">
        <Practice />
      </section>

      {/* International Legal Assistance SECTION  */}
      <section className="">
        <International />
      </section>
      {/*Our Legal Team SECTION  */}
      <section className="">
        <Team />
      </section>
      {/*Confidential Legal Support SECTION  */}
      <section className="">
        <Confidential />
      </section>
      {/*Our Presence SECTION  */}
      <section className="">
        <Presence />
      </section>
    </>
  );
}
