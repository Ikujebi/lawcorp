import { Roboto } from "../fonts";
import image1 from "@/public/img/black-adult-beautiful-american-business.jpg";
import image2 from "@/public/img/freelancer-using-phone-laptop.jpg";
import image3 from "@/public/img/medium-shot-female-economist-working-laptop.jpg";
import Image from "next/image";
const Team = () => {
  const values = [
    {
      title: "Faith Zekeri",
      description: "Managing Partner",
      icon: image1,
    },
    {
      title: "Adv. Okoro Joy",
      description: "Corporate & Commercial Advisory",
      icon: image2,
    },
    {
      title: "Adv. Ajani Yetunde",
      description: "Real Estate & Transaction Support",
      icon: image3,
    },
  ];

  return (
    <div>
      <section
        className={`${Roboto.className} px-6 flex flex-col items-center justify-center h-full md:h-[80svh] 
  bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}
      >
        <h2 className={` text-lg font-thin tracking-wide mb-4 text-gray-800`}>
          Our Legal Team
        </h2>
        <h2 className="2xl:text-[4rem] text-[2.5rem]  font-semibold mb-4">
          Experienced Advocates You Can Trust
        </h2>
        <p className="max-w-3xl text-[1.363rem] text-center text-gray-700 mb-4">
          Our team consists of experienced advocates with deep courtroom
          exposure and subject-matter expertise across civil, criminal, family,
          and NRI legal matters.
        </p>
        <div className="mx-auto mt-3 h-[2.5px] w-1/8 bg-[#F4C430] "></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full mt-[4rem]">
          {values.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center
                px-6 border border-gray-300 bg-white z-30
                rounded-lg py-8 
                hover:bg-white/70 hover:shadow-lg hover:-translate-y-2 
                transition-transform transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex   items-center justify-center rounded-full border border-[#F4C430]/5">
                <Image
                  src={Icon}
                  alt={title}
                  className=" w-[10rem] h-[8rem] object-cover text-gray-900 rounded-[50%] group-hover:text-[#F4C430] transition-colors duration-300"
                />
              </div>

              {/* Header */}
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
                {title}
              </h3>

              {/* Divider */}
              <div className="mt-3 mb-4 h-[1.8px] w-16 bg-[#F4C430]"></div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
