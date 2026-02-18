import Hero from "./components/Hero";
import { Gyahegi } from "./fonts";
import { Roboto } from "./fonts";
import { Scale, ShieldCheck, Users } from "lucide-react";
// import International from "./components/Home/International Legal Assistance";
import Team from "./components/Home/Team";
import Confidential from "./components/Home/Confidential";
import Practice from "./components/Home/Practice Areas";
import Presence from "./components/Home/Presence";
import WhyUs from "./components/Home/WhyUs";

export default function Home() {
  const values = [
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our dealings.",
      icon: Scale,
    },
    {
      title: "Client-Centered Service",
      description:
        "Our clients' needs and interests guide every decision we make.",
      icon: Users,
    },
    {
      title: "Excellence",
      description:
        "We are dedicated to delivering superior results with precision,professionalism, and attention to detail.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      description:
        "We leverage modern technologies and creative approaches to solve complex legal challenges.",
      icon: Scale,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* WHO WE ARE SECTION  */}
      <section
        className={`${Roboto.className} px-5 sm:px-6 py-8 sm:py-6 flex flex-col items-center justify-center h-full md:h-[90svh] xl:h-full
bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-gray-900`}
      >
        <h2
          className={`text-sm sm:text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border rounded-3xl border-gray-900 px-6 sm:px-10 py-1`}
        >
          ABout Us
        </h2>

        <h2 className="text-[2rem] sm:text-[2.5rem] 2xl:text-[4rem] font-semibold leading-tight mb-4 mx-auto text-center text-gray-900">
          Modern Legal Solutions Rooted in Trust and Excellence
        </h2>

        <p className="max-w-3xl text-base sm:text-[1.2rem] md:text-[1.363rem] text-center text-gray-700 mb-4">
          <strong>Lummina Law Firm</strong> is a modern, innovative and
          client-centered full-service law firm based in{" "}
          <strong>Lagos, Nigeria</strong>. We are committed to redefining legal
          practice through innovation, excellence, and a deep understanding of
          our clients&apos; needs. Our approach combines cutting-edge legal
          expertise with a personalized service ethos, ensuring that we deliver
          solutions that empower our clients and exceed their expectations.
        </p>

        <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430]"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl w-full mt-6 sm:mt-[2rem]">
          {values.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center
        px-2 sm:px-3 py-3 border border-gray-300 bg-white
        rounded-md
        hover:bg-white/80 hover:shadow-md hover:-translate-y-1
        transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#F4C430]/20">
                <Icon className="h-[14px] w-[14px] text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300" />
              </div>

              {/* Header */}
              <h3 className="text-[0.8rem] sm:text-[0.85rem] font-semibold text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
                {title}
              </h3>

              {/* Divider */}
              <div className="mt-1 mb-1 h-[1px] w-6 bg-[#F4C430]"></div>

              {/* Description */}
              <p className="text-[0.7rem] sm:text-[0.75rem] text-gray-600 leading-tight">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us SECTION  */}
      <section>
        <WhyUs />
      </section>

      {/* Practice Areas SECTION  */}

      <section className="">
        <Practice />
      </section>

      {/* International Legal Assistance SECTION  */}
      {/* <section className="">
        <International />
      </section> */}
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
