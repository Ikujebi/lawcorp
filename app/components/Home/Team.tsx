import { Roboto } from "../../fonts";
import image1 from "@/public/img/faithPhoto.jpg";
import image2 from "@/public/img/staff1Photo.jpg";
import image3 from "@/public/img/staff2Photo.jpg";
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
        className={`${Roboto.className} px-5 sm:px-6 flex flex-col items-center justify-center min-h-screen md:min-h-[80svh] py-10 sm:py-16
        bg-[#FFF7E7] bg-[linear-gradient(335deg,rgba(244,196,48,0.15),white,white,rgba(244,196,48,0.15))] text-black`}
      >
        <h2
          className={`text-sm sm:text-lg font-semibold tracking-wide mb-4 text-[#5F021F] border rounded-3xl border-gray-900 px-6 sm:px-10 py-1`}
        >
          Our Team
        </h2>

        <p className="max-w-3xl text-[0.95rem] sm:text-[1.363rem] text-center text-gray-700 mb-4">
          Our team consists of experienced and passionate legal
          professionals with diverse expertise across multiple practice
          areas. At Lummina Law Firm, we pride ourselves on
          fostering a culture of continuous learning, mentorship, and
          professional development, ensuring that our lawyers
          remain at the forefront of legal innovation.
        </p>

        <div className="mx-auto mt-3 h-[2.5px] w-1/8 sm:w-1/8 bg-[#F4C430]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl w-full mt-8 sm:mt-[4rem]">
          {values.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center
                px-4 sm:px-6 border border-gray-300 bg-white z-30
                rounded-lg py-6 sm:py-8
                hover:bg-white/70 hover:shadow-lg hover:-translate-y-2
                transition-transform transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex items-center justify-center rounded-full border border-[#F4C430]/5">
                <Image
                  src={Icon}
                  alt={title}
                  className="w-[8rem] sm:w-[10rem] h-[6rem] sm:h-[8rem] object-cover text-gray-900 rounded-full group-hover:text-[#F4C430] transition-colors duration-300"
                />
              </div>

              {/* Header */}
              <h3 className="text-[#FFA500] text-lg sm:text-xl font-medium  group-hover:text-[#F4C430] transition-colors duration-300">
                {title}
              </h3>

              {/* Divider */}
              <div className="mt-2 sm:mt-3 mb-3 sm:mb-4 h-[1.5px] sm:h-[1.8px] w-12 sm:w-16 bg-[#F4C430]"></div>

              {/* Description */}
              <p className=" text-[#5F021F] leading-relaxed text-sm sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
