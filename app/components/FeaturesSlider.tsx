"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SwiperClass from "swiper";
import { Scale, ShieldCheck, Users, Zap } from "lucide-react";

interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function FeaturesSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const values: Value[] = [
    {
      title: "Integrity",
      description:
        "We hold ourselves to the highest ethical standards in everything we do.",
      icon: Scale,
    },
    {
      title: "Client-Centered Service",
      description:
        "Your objectives guide our strategy. We design solutions around your goals, not a generic playbook.",
      icon: Users,
    },
    {
      title: "Excellence",
      description:
        "We approach every mandate with precision, professionalism, and meticulous attention to detail.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      description:
        "We apply forward-thinking legal strategies and modern approaches to solve complex challenges efficiently.",
      icon: Zap,
    },
  ];

  return (
    <div className="w-full mt-6 relative pagination">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={15}
        grabCursor
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 35 },
        }}
        navigation={false}
        className="relative"
      >
        {values.map(({ title, description, icon: Icon }, index) => (
          <SwiperSlide key={index}>
            <div className="group flex flex-col items-center text-center px-5 py-8 bg-[#FFA500]/65 rounded-md hover:bg-white/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-[11.5rem]">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#F4C430]/20">
                <Icon className="h-[18px] w-[18px] text-[#5F021F] group-hover:text-[#F4C430] transition-colors duration-300" />
              </div>

              <h3 className="text-[0.85rem] sm:text-[0.95rem] font-semibold text-[#5F021F] group-hover:text-[#F4C430] transition-colors duration-300">
                {title}
              </h3>

              <div className="mt-2 mb-2 h-[1px] w-6 bg-[#F4C430]"></div>

              <p className="text-[0.75rem] sm:text-[0.8rem] text-gray-600 leading-tight">
                {description}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* arrows (unchanged) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-[#5F021F] hover:bg-[#5F021F] hover:text-white transition-colors"
        >
          &#10094;
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-[#5F021F] hover:bg-[#5F021F] hover:text-white transition-colors"
        >
          &#10095;
        </button>
      </Swiper>

      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
}