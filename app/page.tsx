import Hero from "./components/Hero";
import { Montserrat } from "./fonts";
// import International from "./components/Home/International Legal Assistance";
import Team from "./components/Home/Team";
import Confidential from "./components/Home/Confidential";
import Practice from "./components/Home/Practice Areas";
import Presence from "./components/Home/Presence";
import WhyUs from "./components/Home/WhyUs";
import HomeAbout from "./components/HomeAbout";

export default function Home() {
  

  return (
    <>
      {/* HERO SECTION */}
      <section className={`${Montserrat.className} `}>
      <Hero />
      </section>

      {/* WHO WE ARE SECTION  */}
      <section>
        <HomeAbout />
      </section>

      {/* Why Choose Us SECTION  */}
      <section className={`${Montserrat.className} `}>
        <WhyUs />
      </section>

      {/* Practice Areas SECTION  */}

      <section className={`${Montserrat.className} `}>
        <Practice />
      </section>

      {/* International Legal Assistance SECTION  */}
      {/* <section className="">
        <International />
      </section> */}
      {/*Our Legal Team SECTION  */}
      {/* <section className={`${Montserrat.className} `}>
        <Team />
      </section> */}
      {/*Confidential Legal Support SECTION  */}
      {/* <section className={`${Montserrat.className} `}>
        <Confidential />
      </section> */}
      {/*Our Presence SECTION  */}
      <section className={`${Montserrat.className} `}>
        <Presence />
      </section>
    </>
  );
}
