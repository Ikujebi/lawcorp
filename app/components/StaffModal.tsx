"use client";

import Image, { StaticImageData } from "next/image";

import { Nunito } from "@/app/fonts";

interface StaffModalProps {
  member: {
    name: string;
    role: string;
    photo: StaticImageData;
    bio: string;
  } | null;
  onClose: () => void;
}

const StaffModal = ({ member, onClose }: StaffModalProps) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-white/90 hover:bg-white text-[#5F021F] rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ✕
        </button>

      <div className="flex flex-col md:flex-row w-full h-full">

  {/* LEFT — Image */}
  <div className="relative w-full md:w-[40%] h-[320px] md:h-auto min-h-[320px] flex-shrink-0">
    <Image
      src={member.photo}
      alt={member.name}
      fill
      sizes="(max-width: 768px) 100vw, 40vw"
      className="object-cover object-top"
    />
  </div>

  {/* RIGHT — Content */}
<div className="flex-1 p-6 md:p-10 lg:p-12 bg-[#F7e7ce]/70 overflow-y-auto scroll-smooth md:overflow-visible">

  <h2 className="text-2xl md:text-3xl font-bold text-[#5F021F]">
    {member.name}
  </h2>

  <p className="text-[#F4C430] font-semibold mt-2 text-lg">
    {member.role}
  </p>

  <div className="h-[2px] w-20 bg-[#F4C430] my-6"></div>

  <p className={`${Nunito.className} text-black leading-relaxed whitespace-pre-line`}>
    {member.bio}
  </p>

</div>

</div>
      </div>
    </div>
  );
};

export default StaffModal;
