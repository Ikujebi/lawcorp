import { Montserrat } from "../fonts";
import FeaturesSlider from "./FeaturesSlider";

export default function FeaturesSection() {
  return (
    <section
      className={`${Montserrat.className} px-5 sm:px-6 py-10 sm:py-16 flex flex-col items-center justify-center h-full md:h-[90svh] xl:h-full bg-[#FFF7E7]/90 text-black`}
    >
      <h2 className="text-[1.6rem] 2xl:text-[3rem] font-semibold leading-tight mb-6 mx-auto text-center text-[#5F021F]">
        WHO WE ARE
      </h2>

      <p className="max-w-3xl text-[.72rem] md:text-[1rem] text-center text-black mb-6 leading-relaxed">
        Lummina Law Firm is built on a simple belief: intentional legal work produces great outcomes.
        We advise on the legal structures that protect assets, support businesses, and enable sustainable growth.
      </p>

      <p className="max-w-3xl text-[.72rem] md:text-[1rem] text-center text-black leading-relaxed">
        We work with founders scaling their first ventures, established corporates navigating complex transactions,
        families building multigenerational wealth, and private clients who require precise and intentional support.
        Whatever the mandate, we bring the same rigour, clarity, and commitment to excellence.
      </p>

      <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430]"></div>

      {/* Slider stays identical visually */}
      <FeaturesSlider />
    </section>
  );
}